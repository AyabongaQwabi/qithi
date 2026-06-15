import { Resend } from 'resend';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'aya@qwabi.co.za';

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY is not set');
  return new Resend(key);
}

function rows(data: Record<string, unknown>) {
  return Object.entries(data)
    .filter(([k]) => !k.startsWith('_'))
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #2C1810;color:#9E8C7A;font-size:12px;white-space:nowrap;vertical-align:top;">${k}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #2C1810;color:#F5E6C8;font-size:13px;">${String(v)}</td>
        </tr>`,
    )
    .join('');
}

function html(title: string, data: Record<string, unknown>) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#1A0F0A;font-family:Georgia,serif;padding:32px;">
  <div style="max-width:640px;margin:0 auto;background:#2C1810;border:1px solid #C4622D;">
    <div style="background:#C4622D;padding:20px 28px;">
      <h1 style="color:#F5E6C8;font-size:20px;margin:0;letter-spacing:0.04em;">AmaQithi — ${title}</h1>
    </div>
    <div style="padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;">${rows(data)}</table>
    </div>
    <div style="padding:12px 28px;border-top:1px solid #C4622D;">
      <p style="color:#9E8C7A;font-size:11px;margin:0;">
        Received ${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} SAST
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function sendMembershipEmail(data: Record<string, unknown>) {
  return getResend().emails.send({
    from: 'AmaQithi <noreply@qwabi.co.za>',
    to: ADMIN_EMAIL,
    subject: `New Membership Application — ${data.fullName} ${data.surname}`,
    html: html('New Membership Application', data),
  });
}

export async function sendHelpEmail(data: Record<string, unknown>) {
  return getResend().emails.send({
    from: 'AmaQithi <noreply@qwabi.co.za>',
    to: ADMIN_EMAIL,
    subject: `Help Request — ${data.helpType} — ${data.fullName} ${data.surname}`,
    html: html('Help Request', data),
  });
}

export async function sendGenomyEmail(data: Record<string, unknown>) {
  return getResend().emails.send({
    from: 'AmaQithi <noreply@qwabi.co.za>',
    to: ADMIN_EMAIL,
    subject: `Genomy Sign-up — ${data.fullName} ${data.surname}`,
    html: html('Genomy DNA Sign-up', data),
  });
}

export async function sendDirectoryNotification(data: Record<string, unknown>) {
  return getResend().emails.send({
    from: 'AmaQithi <noreply@qwabi.co.za>',
    to: ADMIN_EMAIL,
    subject: `Directory Registration — ${data.profession} — ${data.fullName} ${data.surname}`,
    html: html('Skills Directory Registration', data),
  });
}

export async function sendOralHistoryEmail(data: Record<string, unknown>) {
  return getResend().emails.send({
    from: 'AmaQithi <noreply@qwabi.co.za>',
    to: ADMIN_EMAIL,
    subject: `Oral History Submission — ${data.full_name}`,
    html: html('Oral History Submission', data),
  });
}
