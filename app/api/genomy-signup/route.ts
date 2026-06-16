import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendGenomyEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, string>;

    if (!body.fullName || !body.surname || !body.email || !body.consentDNA) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase
      .from('genomy_signups')
      .insert({
        full_name:                  body.fullName,
        surname:                    body.surname,
        email:                      body.email,
        phone:                      body.phone ?? null,
        region:                     body.region ?? null,
        lineage:                    body.lineage ?? null,
        consent_dna_testing:        body.consentDNA === 'on' || body.consentDNA === 'true',
        consent_anonymised_data:    body.consentDNA === 'on' || body.consentDNA === 'true',
        consent_future_requirement: body.consentFuture === 'on' || body.consentFuture === 'true',
      });

    if (error) {
      console.error('[genomy-signup] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      await sendGenomyEmail({ full_name: body.fullName, email: body.email, surname: body.surname });
    } catch {
      // email failure does not fail the submission
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[genomy-signup] route error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
