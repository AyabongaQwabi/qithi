import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { supabaseAdmin } from '@/lib/supabase';

const VALID_TABLES = new Set([
  'membership_applications',
  'help_requests',
  'genomy_signups',
  'oral_history_submissions',
  'directory_registrations',
]);

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { table, id, status, reviewer_notes } = await req.json() as {
    table: string;
    id: string;
    status: string;
    reviewer_notes?: string;
  };

  if (!VALID_TABLES.has(table)) {
    return NextResponse.json({ error: 'Invalid table' }, { status: 400 });
  }
  if (!id || !status) {
    return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from(table)
    .update({ status, reviewer_notes: reviewer_notes ?? null, reviewed_at: new Date().toISOString() })
    .eq('id', id);

  if (error) {
    console.error('[admin/update-status]', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  await supabaseAdmin.from('admin_audit_log').insert({
    action:       `status_updated_to_${status}`,
    table_name:   table,
    record_id:    id,
    performed_by: 'admin',
    notes:        reviewer_notes ?? null,
  });

  return NextResponse.json({ ok: true });
}
