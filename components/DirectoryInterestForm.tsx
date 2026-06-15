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

export default function DirectoryInterestForm() {
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
      const res = await fetch('/api/directory', {
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
          background: 'rgba(196, 98, 45, 0.08)',
          border: '1px solid rgba(196, 98, 45, 0.4)',
          padding: '24px',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display), Cormorant Garamond, serif',
            fontSize: '1.2rem',
            fontWeight: 600,
            color: '#E8A857',
            marginBottom: '6px',
          }}
        >
          Registered.
        </p>
        <p
          style={{
            fontFamily: 'var(--font-body), Inter, sans-serif',
            fontSize: '0.85rem',
            color: '#9E8C7A',
          }}
        >
          You will be notified when the Skills Directory launches. Your profession
          will be included in the first iteration.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0 16px' }}>
        <Field label="Full name" required>
          <input name="fullName" type="text" required style={inputStyle} />
        </Field>
        <Field label="Surname" required>
          <input name="surname" type="text" required style={inputStyle} />
        </Field>
      </div>
      <Field label="Email" required>
        <input name="email" type="email" required style={inputStyle} />
      </Field>
      <Field label="Profession / Trade" required>
        <input
          name="profession"
          type="text"
          required
          style={inputStyle}
          placeholder="e.g. Plumber, Accountant, Nurse, Developer"
        />
      </Field>
      <Field label="Region / Province" required>
        <input
          name="region"
          type="text"
          required
          style={inputStyle}
          placeholder="e.g. Lady Frere, Johannesburg, Cape Town"
        />
      </Field>
      <Field label="AmaQithi membership status">
        <select name="membershipStatus" style={{ ...inputStyle, cursor: 'pointer' }}>
          <option value="">Select…</option>
          <option value="verified">Verified member</option>
          <option value="applying">Currently applying</option>
          <option value="not-yet">Not yet applied</option>
        </select>
      </Field>
      <button
        type="submit"
        disabled={loading}
        style={{
          background: '#C4622D',
          color: '#F5E6C8',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '0.78rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: 'none',
          padding: '13px 28px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '4px',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading ? 'Registering…' : 'Register My Skills'}
      </button>
    </form>
  );
}
