import { Box, Button} from '@/components/ui';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

type OAuthProvider = 'google' | 'apple';

export const OAUTH_PROVIDERS = [
  {
    id: 'google',
    label: 'Continue with Google',
    icon: <FcGoogle size={20} />,
  },
  {
    id: 'apple',
    label: 'Continue with Apple',
    icon: <FaApple size={20} />,
  },
] as const;

export function OAuthButtons() {
  const handleOAuthSignin = async (provider: OAuthProvider) => {
    // next-auth / auth.js / custom implementation
  };

  return (
    <Box direction="col" gap="sm" width="full">
      {OAUTH_PROVIDERS.map(({ id, label, icon }) => (
        <Button
          key={id}
          variant="muted"
          width="full"
          height="lg"
          onClick={() => handleOAuthSignin(id)}
        >
          <Box width="full" justify="center">
            {icon}
            {label}
          </Box>
        </Button>
      ))}
    </Box>
  );
}
