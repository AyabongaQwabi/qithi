'use client';

import { useState, useRef } from 'react';

type Track = 'membership' | 'help' | 'genomy';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(245, 230, 200, 0.05)',
  border: '1px solid rgba(196, 98, 45, 0.3)',
  padding: '10px 14px',
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.88rem',
  color: 'var(--bone)',
  outline: 'none',
  display: 'block',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--sand)',
  display: 'block',
  marginBottom: '6px',
};

const fieldStyle: React.CSSProperties = { marginBottom: '18px' };

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={fieldStyle}>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: 'var(--ochre)', marginLeft: '4px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function Input({
  name,
  type = 'text',
  placeholder,
  required,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      style={inputStyle}
    />
  );
}

function Textarea({
  name,
  placeholder,
  rows = 4,
  required,
}: {
  name: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      required={required}
      style={{ ...inputStyle, resize: 'vertical' }}
    />
  );
}

function Select({
  name,
  options,
  required,
}: {
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <select name={name} required={required} style={{ ...inputStyle, cursor: 'pointer' }}>
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function SubmitButton({ label }: { label: string }) {
  return (
    <button
      type="submit"
      style={{
        background: 'var(--ochre)',
        color: 'var(--bone)',
        fontFamily: 'var(--font-body), Inter, sans-serif',
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: 'none',
        padding: '14px 36px',
        cursor: 'pointer',
        transition: 'background 0.2s',
        marginTop: '8px',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--terracotta)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--ochre)')}
    >
      {label}
    </button>
  );
}

function MembershipForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => { if (typeof v === 'string') payload[k] = v; });

    const file = data.get('documents') as File | null;
    let fileInfo = '';
    if (file && file.size > 0) {
      fileInfo = `${file.name} (${Math.round(file.size / 1024)}KB)`;
    }

    try {
      const res = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, fileInfo }),
      });
      if (res.ok) { onSuccess(); formRef.current?.reset(); }
      else { alert('Something went wrong. Please try again.'); }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Full name" required><Input name="fullName" required /></Field>
        <Field label="Surname" required><Input name="surname" required /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Email" required><Input name="email" type="email" required /></Field>
        <Field label="Phone"><Input name="phone" type="tel" /></Field>
      </div>
      <Field label="Region / Village"><Input name="region" placeholder="e.g. Lady Frere, Hala 2, Ngcobo" /></Field>
      <Field label="Your lineage back to a known Qithi ancestor" required>
        <Textarea name="lineage" rows={5} required
          placeholder="e.g. My father is X, son of Y, son of Z Qwabi from Hala 2 / Agnes…" />
      </Field>
      <Field label="Skill or profession">
        <Input name="profession" placeholder="e.g. Teacher, Nurse, Carpenter, Accountant" />
      </Field>
      <Field label="Names of two AmaQithi members who can vouch for you">
        <Input name="vouchers" placeholder="Full names of two vouching members" />
      </Field>
      <Field label="How did you find this site?">
        <Input name="referral" />
      </Field>
      <Field label="Supporting documents (optional)">
        <input name="documents" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          style={{ ...inputStyle, padding: '8px 14px', cursor: 'pointer' }} />
      </Field>
      <Field label="Declaration" required>
        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
          <input name="declaration" type="checkbox" required
            style={{ marginTop: '3px', accentColor: 'var(--ochre)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.5 }}>
            I confirm that the information I have given is honest and true to the best of my knowledge.
          </span>
        </label>
      </Field>
      <SubmitButton label={loading ? 'Submitting…' : 'Submit Application'} />
    </form>
  );
}

function HelpForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => { if (typeof v === 'string') payload[k] = v; });

    try {
      const res = await fetch('/api/help-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) { onSuccess(); formRef.current?.reset(); }
      else { alert('Something went wrong. Please try again.'); }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Full name" required><Input name="fullName" required /></Field>
        <Field label="Surname" required><Input name="surname" required /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Email" required><Input name="email" type="email" required /></Field>
        <Field label="Phone"><Input name="phone" type="tel" /></Field>
      </div>
      <Field label="AmaQithi membership number (or 'applying for membership')">
        <Input name="membershipNumber" placeholder="e.g. QIT-001 or 'applying for membership'" />
      </Field>
      <Field label="Type of help needed" required>
        <Select name="helpType" required
          options={['Business', 'Project', 'Education', 'Emergency']} />
      </Field>
      <Field label="Describe what you need" required>
        <Textarea name="description" rows={4} required />
      </Field>
      <Field label="What have you already done or tried?">
        <Textarea name="alreadyTried" rows={3} />
      </Field>
      <Field label="What specifically are you asking for?" required>
        <Textarea name="specificAsk" rows={3} required />
      </Field>
      <Field label="Supporting documents (optional)">
        <input name="documents" type="file" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          style={{ ...inputStyle, padding: '8px 14px', cursor: 'pointer' }} />
      </Field>
      <SubmitButton label={loading ? 'Submitting…' : 'Submit Request'} />
    </form>
  );
}

function GenomyForm({ onSuccess }: { onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};
    data.forEach((v, k) => { if (typeof v === 'string') payload[k] = v; });

    try {
      const res = await fetch('/api/genomy-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) { onSuccess(); formRef.current?.reset(); }
      else { alert('Something went wrong. Please try again.'); }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Full name" required><Input name="fullName" required /></Field>
        <Field label="Surname" required><Input name="surname" required /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Email" required><Input name="email" type="email" required /></Field>
        <Field label="Phone"><Input name="phone" type="tel" /></Field>
      </div>
      <Field label="Region">
        <Input name="region" placeholder="e.g. Lady Frere, Ngcobo, Cofimvaba, Free State" />
      </Field>
      <Field label="Lineage — as far back as you know">
        <Textarea name="lineage" rows={5}
          placeholder="e.g. My grandfather was X Qwabi from Agnes. His father was Y Qwabi. Before that, Qwabi Joka from Agnes, son of Joka…" />
      </Field>
      <Field label="Consent to DNA testing" required>
        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
          <input name="consentDNA" type="checkbox" required
            style={{ marginTop: '3px', accentColor: 'var(--ochre)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.5 }}>
            I agree to take a DNA test and for my anonymised results to be used in the AmaQithi ancestry project. My data will not be sold or shared.
          </span>
        </label>
      </Field>
      <Field label="Optional: Future use consent">
        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
          <input name="consentFuture" type="checkbox"
            style={{ marginTop: '3px', accentColor: 'var(--ochre)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--smoke)', lineHeight: 1.5 }}>
            I am happy for my DNA results to be used in future phases of the AmaQithi ancestry project as it grows.
          </span>
        </label>
      </Field>
      <SubmitButton label={loading ? 'Submitting…' : 'Sign Up for Genomy'} />
    </form>
  );
}

const tracks: { id: Track; label: string; description: string }[] = [
  {
    id: 'membership',
    label: 'Join the Clan',
    description: 'Register as a member of the AmaQithi clan. Share your lineage and connect with your family.',
  },
  {
    id: 'help',
    label: 'Ask for Help',
    description: 'Need support with school fees, a business, a project, or an emergency? Let us know.',
  },
  {
    id: 'genomy',
    label: 'DNA Ancestry Project',
    description: 'Join the AmaQithi Genomy project and help us trace our San roots through science.',
  },
];

export default function Apply() {
  const [activeTrack, setActiveTrack] = useState<Track>('membership');
  const [success, setSuccess] = useState<Track | null>(null);

  return (
    <section
      id="apply"
      className="cave-section cave-bg"
      style={{
        background: '#2C1810',
        padding: '100px 0',
        position: 'relative',
      }}
      aria-labelledby="apply-heading"
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ochre)',
            marginBottom: '16px',
          }}
        >
          Apply
        </p>

        <h2
          id="apply-heading"
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--bone)',
            marginBottom: '48px',
            lineHeight: 1.1,
          }}
        >
          Connect. Get support. Trace your roots.
        </h2>

        {/* Track selector */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1px',
            background: 'rgba(196, 98, 45, 0.3)',
            marginBottom: '48px',
          }}
        >
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => { setActiveTrack(t.id); setSuccess(null); }}
              style={{
                background: activeTrack === t.id ? 'rgba(196, 98, 45, 0.15)' : '#2C1810',
                border: 'none',
                borderBottom: activeTrack === t.id ? '2px solid var(--ochre)' : '2px solid transparent',
                padding: '20px 24px',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: activeTrack === t.id ? '#E8A857' : '#D4A96A',
                  letterSpacing: '0.04em',
                  marginBottom: '4px',
                }}
              >
                {t.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body), Inter, sans-serif',
                  fontSize: '0.75rem',
                  color: 'var(--smoke)',
                  lineHeight: 1.5,
                }}
              >
                {t.description}
              </p>
            </button>
          ))}
        </div>

        {/* Success message */}
        {success && (
          <div
            style={{
              background: 'rgba(196, 98, 45, 0.1)',
              border: '1px solid #C4622D',
              padding: '24px 28px',
              marginBottom: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-display), Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#E8A857',
                marginBottom: '6px',
              }}
            >
              Received.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), Inter, sans-serif',
                fontSize: '0.88rem',
                color: 'var(--smoke)',
              }}
            >
              Your submission has been recorded. You will be contacted at the email address
              provided. The clan committee reviews all applications.
            </p>
          </div>
        )}

        {/* Active form */}
        <div
          style={{
            background: 'rgba(245, 230, 200, 0.02)',
            border: '1px solid rgba(196, 98, 45, 0.4)',
            padding: '40px',
          }}
        >
          {activeTrack === 'membership' && (
            <MembershipForm onSuccess={() => setSuccess('membership')} />
          )}
          {activeTrack === 'help' && (
            <HelpForm onSuccess={() => setSuccess('help')} />
          )}
          {activeTrack === 'genomy' && (
            <GenomyForm onSuccess={() => setSuccess('genomy')} />
          )}
        </div>

        {/* Skills directory stub notice */}
        <div className="section-rule" style={{ margin: '56px 0 32px' }} />
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.8rem',
            color: 'var(--smoke)',
            lineHeight: 1.6,
            maxWidth: '560px',
          }}
        >
          Skills and professions listed in membership applications will populate an internal
          AmaQithi Skills Directory — visible to registered members only. Before hiring or
          partnering outside, look inside.
        </p>
      </div>
    </section>
  );
}
