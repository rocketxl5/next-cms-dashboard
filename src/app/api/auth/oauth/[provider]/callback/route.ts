import { NextRequest, NextResponse } from 'next/server';
import { OAuthProvider } from '@/types/enums';
import { oauthEnv } from '@/lib/auth/oauth/oauth-env';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ provider: OAuthProvider }>;
  },
) {
  const { provider } = await params;

  if (provider !== 'GOOGLE') {
    return NextResponse.json(
      { error: 'Provider not supported yet' },
      { status: 400 },
    );
  }

  const url = new URL(req.url);

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = req.cookies.get('oauth_state')?.value;

  if (!code || !state || state !== storedState) {
    return NextResponse.json(
      { error: 'Invalid OAuth state' }, 
      { status: 400 }
    );
  }

  const { clientId, clientSecret } =
    oauthEnv.providers.GOOGLE;

  if (!clientId || !clientSecret) {
    return NextResponse.json(
      { error: 'Missing Google OAuth credentials' },
      { status: 500 },
    );
  }

  const redirectUri =
    `${oauthEnv.appUrl}/api/auth/oauth/google/callback`;

  // 1. Exchange code for tokens
  const tokenRes = await fetch(
    'https://oauth2.googleapis.com/token',
    {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
      }),
    },
  );

  if (!tokenRes.ok) {
    return NextResponse.json(
      { error: 'Failed to exchange code' },
      { status: 500 },
    );
  }

  const tokens = await tokenRes.json();

  // 2. Fetch user profile
  const userRes = await fetch(
    'https://www.googleapis.com/oauth2/v2/userinfo',
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    },
  );

  if (!userRes.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch user profile' },
      { status: 500 },
    );
  }

  const profile = await userRes.json();

  // 3. Find or create user
  let user = await prisma.user.findUnique({
    where: { email: profile.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: profile.email,
        name: profile.name,
        password: 'null', // OAuth user
      },
    });
  }

  // 4. Create session (placeholder for now)
  // You can plug in your existing session system here
  const response = NextResponse.redirect(
    `${oauthEnv.appUrl}/dashboard`,
  );

  // cleanup cookies
  response.cookies.set('oauth_state', '', {
    maxAge: 0,
  });

  response.cookies.set('oauth_provider', '', {
    maxAge: 0,
  });

  return response;


  // return NextResponse.redirect('/dashboard');
}
