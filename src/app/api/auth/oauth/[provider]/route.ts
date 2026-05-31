import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';

import { oauthEnv } from '@/lib/auth/oauth/oauth-env';
import { OAUTH_CONFIG } from '@/lib/auth/oauth/oauth-config';
import { OAuthProvider } from '@/types/enums';

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ provider: OAuthProvider }>;
  },
) {
  const { provider } = await params;

  const config = OAUTH_CONFIG[provider];

  if (!config) {
    return NextResponse.json(
      { error: 'Unsupported provider' },
      { status: 400 },
    );
  }

  const state = randomBytes(16).toString('hex');

  const redirectUri = `${oauthEnv.appUrl}/api/auth/oauth/${provider}/callback`;

  const clientId = oauthEnv.providers[provider]?.clientId;

  if (!clientId) {
    return NextResponse.json(
      { error: `Missing OAuth clientId for ${provider}` },
      { status: 500 },
    );
  }

  const url = config.buildUrl({
    clientId,
    redirectUri,
    state,
  });

  const response = NextResponse.redirect(url);

  response.cookies.set('oauth_state', state, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 10,
  });

  response.cookies.set('oauth_provider', provider, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 10,
  });

  return response;
}