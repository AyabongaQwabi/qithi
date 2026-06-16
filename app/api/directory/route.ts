import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendDirectoryNotification } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, surname, email, profession, region, membershipStatus } = body;

    if (!fullName || !surname || !email || !profession || !region) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase
      .from('directory_registrations')
      .insert({
        full_name: fullName,
        email,
        phone:     null,
        region,
        skill:     profession,
      });

    if (error) {
      console.error('[directory] insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    try {
      await sendDirectoryNotification({ fullName, surname, email, profession, region, membershipStatus });
    } catch {
      // email failure does not fail the submission
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[directory] route error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
