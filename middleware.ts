import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAccessTokenEdge } from '@/lib/auth';
import { redirectToSignin } from '@/lib/server';
import { COOKIE_KEYS } from '@/types/cookies';

const PROTECTED = ['/dashboard', '/account'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ----------------------------
  // 1️⃣ Skip static files & auth API
  // ----------------------------
  if (pathname.startsWith('/_next') || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // ----------------------------
  // 2️⃣ Only guard protected routes
  // ----------------------------
  const mustProtect = PROTECTED.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`)
  );
  if (!mustProtect) {
    return NextResponse.next();
  }

  // ----------------------------
  // 3️⃣ Read access token
  // ----------------------------
  const token = req.cookies.get(COOKIE_KEYS.accessToken)?.value;
  if (!token) {
    return redirectToSignin(req);
  }

  // ----------------------------
  // 4️⃣ Verify token
  // ----------------------------
  try {
    await verifyAccessTokenEdge(token);
  } catch {
    return redirectToSignin(req);
  }

  // ----------------------------
  // 6️⃣ Everything OK → continue
  // ----------------------------
  return NextResponse.next();
}

// ----------------------------
// 7️⃣ Matcher config
// ----------------------------
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*', '/account', '/account/:path*'],
};
