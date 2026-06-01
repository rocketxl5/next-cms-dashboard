import { OAuthProvider } from '@/types/enums';

export const OAUTH_PROVIDER_MAP = {
  google: 'GOOGLE',
//   apple: 'APPLE',
  //   microsoft: 'MICROSOFT',
  //   github: 'GITHUB',
  //   facebook: 'FACEBOOK',
} as const satisfies Record<string, OAuthProvider>;

// Return 'google' | 'apple'
export type OAuthProviderId = keyof typeof OAUTH_PROVIDER_MAP;
