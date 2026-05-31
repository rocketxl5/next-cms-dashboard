import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ provider: string }> },
) {
  const { provider } = await params;

  if (provider !== 'google') {
    return NextResponse.json({ error: 'Usupported provider' }, { status: 400 });
  }
}
