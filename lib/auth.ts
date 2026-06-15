import { cookies } from 'next/headers';

const COOKIE_NAME = 'aq_admin';
const COOKIE_VALUE = 'authenticated';

export async function isAuthenticated(): Promise<boolean> {
  const jar = await cookies();
  return jar.get(COOKIE_NAME)?.value === COOKIE_VALUE;
}

export function checkPassword(attempt: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  return attempt === pw;
}

export const AUTH_COOKIE = { name: COOKIE_NAME, value: COOKIE_VALUE };
