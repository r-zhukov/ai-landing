"use client";
import React from 'react';

const stats = [
  { label: 'Founded', value: '2024', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#4f8cff"/><path d="M10 22V12a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10" stroke="#fff" strokeWidth="2"/><rect x="14" y="16" width="4" height="6" rx="1" fill="#fff"/></svg>
  ) },
  { label: 'Team Size', value: '18', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#34d399"/><path d="M16 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#fff"/><rect x="10" y="20" width="12" height="4" rx="2" fill="#fff"/></svg>
  ) },
  { label: 'Customers', value: '1,200+', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#a78bfa"/><circle cx="12" cy="14" r="3" fill="#fff"/><circle cx="20" cy="14" r="3" fill="#fff"/><rect x="8" y="20" width="16" height="4" rx="2" fill="#fff"/></svg>
  ) },
  { label: 'Videos Generated', value: '120K+', icon: (
    <svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#facc15"/><rect x="10" y="10" width="12" height="12" rx="3" fill="#fff"/><polygon points="16,14 20,16 16,18" fill="#facc15"/></svg>
  ) },
];

const founders = [
  { initials: 'RM', name: 'Roman Midis', role: 'CEO' },
  { initials: 'AL', name: 'Alex Lee', role: 'CTO' },
  { initials: 'SK', name: 'Sara Kim', role: 'CPO' },
  { initials: 'JD', name: 'James Doe', role: 'COO' },
  { initials: 'MT', name: 'Maria Torres', role: 'Head of AI' },
  { initials: 'BK', name: 'Ben Kumar', role: 'Lead Designer' },
];

export default function Company() {
  return (
    <section id="company" style={{
      background: 'linear-gradient(120deg, #101010 80%, #181818 100%)',
      padding: '6rem 0 4.5rem 0',
      color: '#fff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: '0.7rem', letterSpacing: '-0.01em', textAlign: 'center' }}>Company</h2>
      <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.25rem', marginBottom: '4.5rem', textAlign: 'center', opacity: 0.85, maxWidth: 700 }}>
        Building the future of AI-powered video creation
      </div>
      {/* Wide horizontal stats bar */}
      <div style={{
        display: 'flex',
        gap: '2.5rem',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '100%',
        maxWidth: 1400,
        flexWrap: 'wrap',
        marginBottom: '4.5rem',
      }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '1.2rem',
            border: '1.5px solid #232323',
            padding: '2.2rem 2.5rem 1.7rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: 220,
            minHeight: 120,
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'box-shadow 0.18s, border 0.18s',
            backdropFilter: 'blur(4px)',
            flex: '1 1 220px',
            maxWidth: 320,
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, marginBottom: 18 }}>{s.icon}</span>
            <div style={{ fontWeight: 700, fontSize: '1.7rem', marginBottom: 2, letterSpacing: '-0.01em', color: '#fff' }}>{s.value}</div>
            <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.13rem', opacity: 0.85 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Divider */}
      <div style={{ width: '100%', maxWidth: 1200, height: 1, background: 'linear-gradient(90deg, #fff2 0%, #232323 100%)', margin: '0 0 3.5rem 0' }} />
      {/* Our Story - wide block */}
      <div style={{ width: '100%', maxWidth: 900, textAlign: 'left' }}>
        <div style={{ fontWeight: 600, fontSize: '1.35rem', marginBottom: 18 }}>Our Story</div>
        <div style={{ color: '#ededed', fontWeight: 300, fontSize: '1.13rem', lineHeight: 1.7, marginBottom: 28 }}>
          MaverickX Vision was founded to democratize high-quality video creation with the power of AI. Our mission is to empower brands, creators, and educators to produce viral, human-like videos in minutes—no technical skills required. We believe in creativity, speed, and results.
        </div>
        <a href="/our-story" style={{
          display: 'inline-block',
          background: 'var(--accent-gradient)',
          color: '#111',
          fontWeight: 600,
          fontSize: '1rem',
          border: 'none',
          borderRadius: '999px',
          padding: '0.6rem 1.5rem',
          boxShadow: '0 2px 12px 0 rgba(79,140,255,0.10)',
          cursor: 'pointer',
          transition: 'background 0.18s, color 0.18s',
          outline: 'none',
          letterSpacing: '0.01em',
          textDecoration: 'none',
        }}>Read more</a>
      </div>
    </section>
  );
} 