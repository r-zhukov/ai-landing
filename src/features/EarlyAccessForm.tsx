import React, { useState } from 'react';

const companySizes = [
  '1-10',
  '11-50',
  '51-200',
  '201-1000',
  '1000+',
];
const useCases = [
  'Marketing',
  'Education',
  'Social Media',
  'Internal Comms',
  'Other',
];

export default function EarlyAccessForm({ onSuccess }: { onSuccess?: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    brand: '',
    phone: '',
    website: '',
    role: '',
    size: '',
    useCase: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.brand) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <div style={{ fontWeight: 500, fontSize: '1.2rem', marginBottom: 8 }}>Thank you!</div>
        <div style={{ color: '#ededed', fontWeight: 300, fontSize: '1rem' }}>We'll be in touch soon about early access.</div>
      </div>
    );
  }

  const inputStyle = {
    background: '#222',
    color: '#fff',
    border: '1.5px solid #232323',
    borderRadius: '0.7rem',
    padding: '0.85rem 1rem',
    fontSize: '1rem',
    fontWeight: 400,
    width: '100%',
    outline: 'none',
    transition: 'border 0.18s',
  } as React.CSSProperties;
  const fieldWrap = { width: '100%' } as React.CSSProperties;
  const labelStyle = { color: '#bdbdbd', fontWeight: 500, fontSize: '0.97rem', marginBottom: 6, display: 'block', letterSpacing: '0.01em' } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '1.2rem 1.5rem',
      minWidth: 260,
      maxWidth: 600,
      width: '100%',
      background: 'none',
    }}>
      <div style={{ gridColumn: '1 / -1', fontWeight: 700, fontSize: '1.35rem', marginBottom: 8, color: '#fff' }}>Get Started</div>
      {/* Name */}
      <div style={fieldWrap}>
        <label htmlFor="name" style={labelStyle}>Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name*"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      {/* Email */}
      <div style={fieldWrap}>
        <label htmlFor="email" style={labelStyle}>Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email*"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      {/* Brand */}
      <div style={fieldWrap}>
        <label htmlFor="brand" style={labelStyle}>Brand *</label>
        <input
          id="brand"
          name="brand"
          type="text"
          placeholder="Brand*"
          value={form.brand}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      {/* Phone */}
      <div style={fieldWrap}>
        <label htmlFor="phone" style={labelStyle}>Phone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      {/* Website */}
      <div style={fieldWrap}>
        <label htmlFor="website" style={labelStyle}>Website</label>
        <input
          id="website"
          name="website"
          type="url"
          placeholder="Website"
          value={form.website}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      {/* Role/Title */}
      <div style={fieldWrap}>
        <label htmlFor="role" style={labelStyle}>Role/Title</label>
        <input
          id="role"
          name="role"
          type="text"
          placeholder="Role/Title"
          value={form.role}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      {/* Company Size */}
      <div style={fieldWrap}>
        <label htmlFor="size" style={labelStyle}>Company Size</label>
        <select
          id="size"
          name="size"
          value={form.size}
          onChange={handleChange}
          style={{ ...inputStyle, appearance: 'none' }}
        >
          <option value="">Select...</option>
          {companySizes.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      {/* Use Case */}
      <div style={fieldWrap}>
        <label htmlFor="useCase" style={labelStyle}>Use Case</label>
        <select
          id="useCase"
          name="useCase"
          value={form.useCase}
          onChange={handleChange}
          style={{ ...inputStyle, appearance: 'none' }}
        >
          <option value="">Select...</option>
          {useCases.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      {/* Message (full width) */}
      <div style={{ ...fieldWrap, gridColumn: '1 / -1' }}>
        <label htmlFor="message" style={labelStyle}>Message (optional)</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
        />
      </div>
      {/* Error (full width) */}
      {error && <div style={{ color: '#ff6b6b', fontWeight: 400, fontSize: '0.98rem', gridColumn: '1 / -1' }}>{error}</div>}
      {/* Button (full width) */}
      <button
        type="submit"
        className="mxv-button"
        style={{ marginTop: 8, padding: '1.1rem 0', fontSize: '1.13rem', fontWeight: 700, gridColumn: '1 / -1' }}
      >
        Request Access
      </button>
      <style>{`
        @media (max-width: 600px) {
          form {
            grid-template-columns: 1fr !important;
            gap: 1.1rem !important;
            min-width: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </form>
  );
} 