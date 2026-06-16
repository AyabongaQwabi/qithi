import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendHelpEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;

    if (!body.fullName || !body.surname || !body.email || !body.helpType || !body.description || !body.specificAsk) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase
      .from('help_requests')
      .insert({
        full_name:         body.fullName,
        surname:           body.surname,
        email:             body.email,
        phone:             body.phone ?? null,
        membership_number: body.membershipNumber ?? null,
        request_type:      body.helpType.toLowerCase(),
        description:       body.description,
        what_tried:        body.alreadyTried ?? null,
        specific_ask:      body.specificAsk,
      });

    if (error) {
      console.error('[help-request] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      await sendHelpEmail({ full_name: body.fullName, email: body.email, request_type: body.helpType, description: body.description });
    } catch {
      // email failure does not fail the submission
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[help-request] route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
