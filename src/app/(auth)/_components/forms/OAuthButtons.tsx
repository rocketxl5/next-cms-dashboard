import { Box, Button} from '@/components/ui';
import {GoogleIcon, AppleIcon } from '../icons';

type OAuthProvider = 'google' | 'apple';

const providers: {
  provider: OAuthProvider;
  label: string;
}[] = [
  {
    provider: 'google',
    label: 'Continue with Google',
  },
  {
    provider: 'apple',
    label: 'Continue with Apple',
  },
];

export function OAuthButtons() {
  const handleOAuthSignin = async (provider: OAuthProvider) => {
    // next-auth / auth.js / custom implementation
  };

  return (
    <Box direction="col" gap="sm">
      {providers.map(({ provider, label }) => (
        <Button
          key={provider}
          //   variant="secondary"
          height="lg"
          onClick={() => handleOAuthSignin(provider)}
        >
          {label}
        </Button>
      ))}
    </Box>
  );
}
