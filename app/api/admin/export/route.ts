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

function toCSV(rows: Record<string, unknown>[]): string {
  if (rows.length === 0) return '';
  const keys = Object.keys(rows[0]);
  const escape = (v: unknown) => {
    const str = typeof v === 'object' ? JSON.stringify(v ?? '') : String(v ?? '');
    return `"${str.replace(/"/g, '""')}"`;
  };
  return [keys.join(','), ...rows.map((r) => keys.map((k) => escape(r[k])).join(','))].join('\n');
}

export async function GET(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  const type = req.nextUrl.searchParams.get('type') ?? 'membership';
  const table = TABLE_MAP[type];
  if (!table) return new NextResponse('Invalid type', { status: 400 });

  const { data, error } = await supabaseAdmin
    .from(table)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('[admin/export]', error);
    return new NextResponse('Server error', { status: 500 });
  }

  const csv = toCSV((data ?? []) as Record<string, unknown>[]);
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': `attachment; filename="amaqithi-${type}-${Date.now()}.csv"`,
    },
  });
}
