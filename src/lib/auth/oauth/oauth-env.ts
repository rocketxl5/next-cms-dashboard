export const oauthEnv = {
  appUrl:
    process.env.APP_URL ??
    'http://localhost:3000',

  providers: {
    GOOGLE: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    MICROSOFT: {
      clientId: process.env.MICROSOFT_CLIENT_ID,
      clientSecret:
        process.env.MICROSOFT_CLIENT_SECRET,
    },
    GITHUB: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
    APPLE: {
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    },
    FACEBOOK: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret:
        process.env.FACEBOOK_CLIENT_SECRET,
    },
  },
} as const;