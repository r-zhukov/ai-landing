"use client";
import React from 'react';

const customers = [
  { logo: '/acme.svg', name: 'Acme Corp', industry: 'E-commerce', metric: '+320% Engagement' },
  { logo: '/betasoft.svg', name: 'BetaSoft', industry: 'SaaS', metric: '2M+ Views' },
  { logo: '/edupro.svg', name: 'EduPro', industry: 'Education', metric: '5x Faster Production' },
  { logo: '/healthly.svg', name: 'Healthly', industry: 'Healthcare', metric: '98% Satisfaction' },
  { logo: '/finedge.svg', name: 'FinEdge', industry: 'Finance', metric: 'Top 1% Viral' },
  { logo: '/travelio.svg', name: 'Travelio', industry: 'Travel', metric: '4.7/5 Rating' },
];

const stats = [
  { label: 'Videos Created', value: '120K+' },
  { label: 'Avg. Watch Time', value: '3m 42s' },
  { label: 'Viral Rate', value: '27%' },
  { label: 'Global Brands', value: '80+' },
];

export default function Customers() {
  return (
    <section style={{ width: '100%', background: '#101010', padding: '5rem 0 4rem 0', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3.5rem', letterSpacing: '-0.01em', textAlign: 'center' }}>Customers</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.2rem', width: '100%', maxWidth: 1200, margin: '0 auto 2.5rem auto' }}>
        {customers.map((c, i) => (
          <div key={i} style={{ background: '#181818', borderRadius: '0.7rem', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)', padding: '2.5rem 2.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180 }}>
            <img src={c.logo} alt={c.name} style={{ height: 38, width: 'auto', marginBottom: 18, filter: 'grayscale(0.2)', opacity: 0.95 }} />
            <div style={{ fontWeight: 600, fontSize: '1.18rem', marginBottom: 2 }}>{c.name}</div>
            <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1rem', marginBottom: 8 }}>{c.industry}</div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.08rem', marginTop: 8 }}>{c.metric}</div>
          </div>
        ))}
      </div>
      <a href="/customers" style={{
        display: 'inline-block',
        marginTop: '1.5rem',
        padding: '0.85rem 2.2rem',
        background: 'var(--accent-gradient)',
        color: '#111',
        fontWeight: 600,
        fontSize: '1.08rem',
        borderRadius: '999px',
        textDecoration: 'none',
        boxShadow: '0 2px 12px 0 rgba(79,140,255,0.10)',
        cursor: 'pointer',
        letterSpacing: '0.01em',
        transition: 'background 0.18s, color 0.18s',
      }}>Read more</a>
    </section>
  );
} 