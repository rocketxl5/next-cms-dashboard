import { Box, Title, ZapLogo } from '@/components/ui';

export default function HomePage() {
  return (
    <main>
      <Box
        direction="col"
        gap="4xl"
        align="center"
        justify="center"
        className="h-screen w-full"
      >
        <ZapLogo size={100} />
        <Title size="3xl" className="w-full text-center">
          <span className="font-bold">Zap</span>
        </Title>
      </Box>
    </main>
  );
}
