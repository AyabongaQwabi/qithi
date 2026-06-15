import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, AUTH_COOKIE } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const body = await req.json() as { password?: string };

  if (!body.password || !checkPassword(body.password)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE.name, AUTH_COOKIE.value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  });
  return res;
}
