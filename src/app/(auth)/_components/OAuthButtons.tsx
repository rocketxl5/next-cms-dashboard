import { Box, Button} from '@/components/ui';
import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';
import { OAuthProviderId } from '@/lib/auth/oauth';

const OAUTH_PROVIDER_UI: Record<
  OAuthProviderId,
  {
    label: string;
    icon: React.ReactNode;
  }
> = {
  google: {
    label: 'Continue with Google',
    icon: <FcGoogle size={20} />,
  },
  // apple: {
  //   label: 'Continue with Apple',
  //   icon: <FaApple size={20} />,
  // },
};

export function OAuthButtons() {
  const handleOAuthSignin = async (provider: OAuthProviderId) => {
    location.assign(`/api/auth/oauth/${provider}`);
  };

  return (
    <Box direction="col" gap="sm" width="full">
      {Object.entries(OAUTH_PROVIDER_UI).map(([id, { label, icon }]) => (
        <Button
          key={id}
          variant="muted"
          width="full"
          height="lg"
          onClick={() => handleOAuthSignin(id as OAuthProviderId)}
        >
          <Box width="full" justify="center" gap="sm">
            {icon}
            {label}
          </Box>
        </Button>
      ))}
    </Box>
  );
}
