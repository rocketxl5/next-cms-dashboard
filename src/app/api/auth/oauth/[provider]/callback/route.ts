import { NextRequest, NextResponse } from 'next/server';
import {
  oauthEnv,
  OAuthProviderId,
  OAUTH_PROVIDER_MAP,
} from '@/lib/auth/oauth';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ provider: OAuthProviderId }>;
  },
) {
  const { provider } = await params;

  // convert: google → GOOGLE
  const providerKey = OAUTH_PROVIDER_MAP[provider];

  // -------------------------------------------------------
  // 1. Provider guard (simple + explicit)
  // -------------------------------------------------------
  if (!providerKey) {
    return NextResponse.json(
      { error: 'Unsupported provider' },
      { status: 400 },
    );
  }

  const url = new URL(req.url);

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = req.cookies.get('oauth_state')?.value;

  // -------------------------------------------------------
  // 2. CSRF / state validation
  // -------------------------------------------------------
  if (!code || !state || state !== storedState) {
    return NextResponse.json({ error: 'Invalid OAuth state' }, { status: 400 });
  }

  const { clientId, clientSecret } = oauthEnv.providers[providerKey];

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'Missing Google OAuth credentials' },
      { status: 500 },
    );
  }

  // -------------------------------------------------------
  // 3. Redirect URI MUST match Google Console config
  // -------------------------------------------------------
  const redirectUri = `${oauthEnv.appUrl}/api/auth/oauth/${provider}/callback`;

  // -------------------------------------------------------
  // 4. Exchange code for access token
  // -------------------------------------------------------
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  if (!tokenRes.ok) {
    return NextResponse.json(
      { error: 'Failed to exchange code' },
      { status: 500 },
    );
  }

  const tokens = await tokenRes.json();

  // -------------------------------------------------------
  // 5. Fetch Google user profile
  // -------------------------------------------------------
  const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: {
      Authorization: `Bearer ${tokens.access_token}`,
    },
  });

  if (!userRes.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 },
    );
  }

  const profile = await userRes.json();

  // -------------------------------------------------------
  // 6. Safety check (IMPORTANT FIX)
  // -------------------------------------------------------
  if (!profile.email) {
    return NextResponse.json(
      { error: 'Google account missing email' },
      { status: 400 },
    );
  }

  // -------------------------------------------------------
  // 7. Find or create user
  // -------------------------------------------------------
  let user = await prisma.user.findUnique({
    where: { email: profile.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: profile.email,
        name: profile.name ?? null,

        // FIX: explicitly allow OAuth user
        password: null,
      },
    });
  }

  // -------------------------------------------------------
  // 8. Link OAuth account
  // -------------------------------------------------------
  await prisma.oAuthAccount.upsert({
    where: {
      provider_providerAccountId: {
        provider: providerKey,
        providerAccountId: profile.id,
      },
    },
    create: {
      provider: providerKey,
      providerAccountId: profile.id,
      userId: user.id,
    },
    update: {
      userId: user.id,
    },
  });
  // -------------------------------------------------------
  // 9. Redirect user into app
  // -------------------------------------------------------
  const response = NextResponse.redirect(`${oauthEnv.appUrl}/dashboard`);

  // -------------------------------------------------------
  // 10. Cleanup OAuth cookies
  // -------------------------------------------------------
  response.cookies.set('oauth_state', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  response.cookies.set('oauth_provider', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });

  return response;
}
