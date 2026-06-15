'use client';

import { useState, useRef } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(245, 230, 200, 0.05)',
  border: '1px solid rgba(196, 98, 45, 0.3)',
  padding: '10px 14px',
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.88rem',
  color: '#F5E6C8',
  outline: 'none',
  display: 'block',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-body), Inter, sans-serif',
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#D4A96A',
  display: 'block',
  marginBottom: '6px',
};

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: '#C4622D', marginLeft: '4px' }}>*</span>}
      </label>
      {children}
    </div>
  );
}

export default function GenomySignupForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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
      if (res.ok) {
        setSubmitted(true);
        formRef.current?.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          background: 'rgba(196, 98, 45, 0.1)',
          border: '1px solid #C4622D',
          padding: '28px',
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
            color: '#9E8C7A',
          }}
        >
          Your Genomy sign-up has been recorded. You will be contacted when kit logistics are
          confirmed. Welcome to the project.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Full name" required>
          <input name="fullName" type="text" required style={inputStyle} />
        </Field>
        <Field label="Surname" required>
          <input name="surname" type="text" required style={inputStyle} />
        </Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 16px' }}>
        <Field label="Email" required>
          <input name="email" type="email" required style={inputStyle} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" style={inputStyle} />
        </Field>
      </div>
      <Field label="Region">
        <input name="region" type="text" style={inputStyle} placeholder="e.g. Lady Frere, Ngcobo, Cofimvaba, Free State" />
      </Field>
      <Field label="Lineage — as far back as you know">
        <textarea
          name="lineage"
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="e.g. My grandfather was X Qwabi from Agnes. His father was Y Qwabi…"
        />
      </Field>
      <Field label="Consent to DNA testing" required>
        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
          <input
            name="consentDNA"
            type="checkbox"
            required
            style={{ marginTop: '3px', accentColor: '#C4622D', flexShrink: 0 }}
          />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#9E8C7A', lineHeight: 1.5 }}>
            I consent to DNA testing and to my anonymised genetic data being used exclusively
            for the AmaQithi genealogy project.
          </span>
        </label>
      </Field>
      <Field label="Future verification consent">
        <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
          <input
            name="consentFuture"
            type="checkbox"
            style={{ marginTop: '3px', accentColor: '#C4622D', flexShrink: 0 }}
          />
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#9E8C7A', lineHeight: 1.5 }}>
            I understand that in the future, confirmed AmaQithi DNA may be required for full
            platform access, and I consent to this use.
          </span>
        </label>
      </Field>
      <button
        type="submit"
        disabled={loading}
        style={{
          background: '#C4622D',
          color: '#F5E6C8',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: 'none',
          padding: '14px 36px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '8px',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Submitting…' : 'Sign Up for Genomy'}
      </button>
    </form>
  );
}
