export const OAUTH_PROVIDERS = [
  'GOOGLE',
  'MICROSOFT',
  'GITHUB',
  'APPLE',
  'FACEBOOK',
] as const;

export type OAuthProvider =
  (typeof OAUTH_PROVIDERS)[number];