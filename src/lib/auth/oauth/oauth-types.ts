export type OAuthConfig = {
  authorizeUrl: string;
  scope: string;
  buildUrl: (params: {
    clientId: string;
    redirectUri: string;
    state: string;
  }) => string;
};