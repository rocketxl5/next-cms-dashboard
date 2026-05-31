import { OAuthProvider } from '@/types/enums';
import { OAuthConfig } from './oauth-types';

export const OAUTH_CONFIG: Record<
  OAuthProvider,
  OAuthConfig
> = {
  GOOGLE: {
    authorizeUrl:
      'https://accounts.google.com/o/oauth2/v2/auth',
    scope: 'openid email profile',

    buildUrl: ({
      clientId,
      redirectUri,
      state,
    }) => {
      const url = new URL(
        'https://accounts.google.com/o/oauth2/v2/auth',
      );

      url.searchParams.set('client_id', clientId);
      url.searchParams.set('response_type', 'code');
      url.searchParams.set(
        'scope',
        'openid email profile',
      );
      url.searchParams.set('redirect_uri', redirectUri);
      url.searchParams.set('state', state);
      url.searchParams.set('access_type', 'offline');
      url.searchParams.set('prompt', 'consent');

      return url.toString();
    },
  },

  MICROSOFT: {} as OAuthConfig,
  GITHUB: {} as OAuthConfig,
  APPLE: {} as OAuthConfig,
  FACEBOOK: {} as OAuthConfig,
};