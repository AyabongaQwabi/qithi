import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendOralHistoryEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;

    if (!body.fullName || !body.email || !body.description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('oral_history_submissions')
      .insert({
        full_name:     body.fullName,
        email:         body.email,
        phone:         body.phone ?? null,
        description:   body.description,
        family_branch: body.familyBranch ?? null,
        region:        body.region ?? null,
        time_period:   body.timePeriod ?? null,
      })
      .select()
      .single();

    if (error) {
      console.error('[oral-history] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      await sendOralHistoryEmail(data);
    } catch {
      // email failure does not fail the submission
    }

    return NextResponse.json({ ok: true, id: data.id });
  } catch (err) {
    console.error('[oral-history] route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
