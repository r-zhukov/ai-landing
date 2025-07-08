"use client";

import React, { useState } from 'react';
import ScrollToHash from '../../shared/ui/ScrollToHash';

const subjects = [
  'General Inquiry',
  'Partnership',
  'Support',
  'Other',
];
const hearOptions = [
  'Google Search',
  'Social Media',
  'Friend/Colleague',
  'Event/Conference',
  'Other',
];

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: subjects[0],
    message: '',
    hear: '',
    subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  return (
    <section style={{
      background: '#181818',
      padding: '5rem 0 4rem 0',
      color: '#fff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <ScrollToHash />
      {/* Header */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.1rem', letterSpacing: '-0.01em', textAlign: 'center', color: '#fff' }}>Contact Us</h1>
      <div style={{ color: '#bdbdbd', fontSize: '1.18rem', fontWeight: 400, marginBottom: '2.8rem', textAlign: 'center', maxWidth: 540 }}>
        We&apos;d love to hear from you. Reach out for partnerships, support, or general inquiries.
      </div>
      {/* Contact Form */}
      <form style={{
        background: '#232323',
        borderRadius: '1.1rem',
        boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
        padding: '2.2rem 2.2rem 2rem 2.2rem',
        maxWidth: 540,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.3rem',
        color: '#ededed',
        fontSize: '1.13rem',
        fontWeight: 400,
      }} onSubmit={e => { e.preventDefault(); alert('Thank you for contacting us!'); }}>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="name" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>Name *</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} style={{
              padding: '0.95rem',
              borderRadius: '0.7rem',
              border: '1.5px solid #232323',
              background: '#181818',
              color: '#fff',
              fontSize: '1.08rem',
              fontWeight: 500,
            }} />
          </div>
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="email" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>Email *</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} style={{
              padding: '0.95rem',
              borderRadius: '0.7rem',
              border: '1.5px solid #232323',
              background: '#181818',
              color: '#fff',
              fontSize: '1.08rem',
              fontWeight: 500,
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="company" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>Company</label>
            <input id="company" name="company" type="text" value={form.company} onChange={handleChange} style={{
              padding: '0.95rem',
              borderRadius: '0.7rem',
              border: '1.5px solid #232323',
              background: '#181818',
              color: '#fff',
              fontSize: '1.08rem',
              fontWeight: 500,
            }} />
          </div>
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="subject" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>Subject</label>
            <select id="subject" name="subject" value={form.subject} onChange={handleChange} style={{
              padding: '0.95rem',
              borderRadius: '0.7rem',
              border: '1.5px solid #232323',
              background: '#181818',
              color: '#fff',
              fontSize: '1.08rem',
              fontWeight: 500,
              appearance: 'none',
            }}>
              {subjects.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 180, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label htmlFor="hear" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>How did you hear about us?</label>
            <select id="hear" name="hear" value={form.hear} onChange={handleChange} style={{
              padding: '0.95rem',
              borderRadius: '0.7rem',
              border: '1.5px solid #232323',
              background: '#181818',
              color: '#fff',
              fontSize: '1.08rem',
              fontWeight: 500,
              appearance: 'none',
            }}>
              <option value="">Select...</option>
              {hearOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <label htmlFor="message" style={{ color: '#bdbdbd', fontWeight: 600, fontSize: '0.98rem', marginBottom: 2 }}>Message *</label>
          <textarea id="message" name="message" required value={form.message} onChange={handleChange} rows={5} style={{
            padding: '0.95rem',
            borderRadius: '0.7rem',
            border: '1.5px solid #232323',
            background: '#181818',
            color: '#fff',
            fontSize: '1.08rem',
            fontWeight: 500,
            resize: 'vertical',
          }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2 }}>
          <input id="subscribe" name="subscribe" type="checkbox" checked={form.subscribe} onChange={handleChange} style={{ accentColor: '#4f8cff', width: 18, height: 18 }} />
          <label htmlFor="subscribe" style={{ color: '#bdbdbd', fontWeight: 500, fontSize: '0.98rem', cursor: 'pointer' }}>Subscribe to updates</label>
        </div>
        <button type="submit" className="mxv-button" style={{ marginTop: 8, padding: '1.05rem 0', fontSize: '1.13rem', fontWeight: 700 }}>Send Message</button>
      </form>
    </section>
  );
} 