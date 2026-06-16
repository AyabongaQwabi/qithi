import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendMembershipEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;

    if (!body.fullName || !body.surname || !body.email || !body.lineage) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const vouchers = (body.vouchers ?? '').split(',').map((v: string) => v.trim());

    const { error } = await supabase
      .from('membership_applications')
      .insert({
        full_name:             body.fullName,
        surname:               body.surname,
        email:                 body.email,
        phone:                 body.phone ?? null,
        region:                body.region ?? null,
        lineage:               body.lineage,
        voucher_one:           vouchers[0] ?? null,
        voucher_two:           vouchers[1] ?? null,
        how_found:             body.referral ?? null,
        skill_profession:      body.profession ?? null,
        declaration_confirmed: body.declaration === 'on',
      });

    if (error) {
      console.error('[membership] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      await sendMembershipEmail({ full_name: body.fullName, email: body.email, surname: body.surname });
    } catch {
      // email failure does not fail the submission
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[membership] route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
