import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

const TABLE_MAP: Record<string, string> = {
  membership:   'membership_applications',
  help:         'help_requests',
  genomy:       'genomy_signups',
  oral_history: 'oral_history_submissions',
  directory:    'directory_registrations',
};

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const type = req.nextUrl.searchParams.get('type') ?? 'membership';
  const page = Math.max(1, parseInt(req.nextUrl.searchParams.get('page') ?? '1'));
  const limit = 50;
  const offset = (page - 1) * limit;

  const table = TABLE_MAP[type];
  if (!table) return NextResponse.json({ error: 'Invalid type' }, { status: 400 });

  const { data, error, count } = await supabaseAdmin
    .from(table)
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error('[admin/entries]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ entries: data, count, page, limit });
}
