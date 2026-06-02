import { useRouter } from 'next/navigation';

import { Box } from './layout';
import { Button } from './button';
import { ZapLogo } from './Logo';
import { Title } from './Title';

export function NotFound() {
  const router = useRouter();

  return (
    <Box justify="center" align="center" width="full" className="h-screen">
      <Box direction="col" gap="2xl">
        <ZapLogo
          size={100}
          stroke={1}
          variant="warning"
          className="mb-14"
          color="warning"
        />
        <Title as="h1" weight="bold" className="text-9xl">
          404
        </Title>
        <p className="mt-4 text-2xl font-semibold">
          Sorry! This page does not exist...
        </p>
        <Button
          variant="info"
          width="1/2"
          height="lg"
          textSize="lg"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}
