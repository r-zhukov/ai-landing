import React from 'react';

const testimonials = [
  { name: 'Emily R.', company: 'Acme Corp', industry: 'E-commerce', quote: 'We saw a 320% boost in engagement and our videos look truly human.', metric: '+320% Engagement' },
  { name: 'Carlos M.', company: 'BetaSoft', industry: 'SaaS', quote: 'MaverickX Vision cut our video production time by 80%.', metric: '5x Faster Production' },
  { name: 'Priya S.', company: 'EduPro', industry: 'Education', quote: 'Our online courses went viral thanks to the AI video assistant.', metric: '2M+ Views' },
  { name: 'Linda T.', company: 'Healthly', industry: 'Healthcare', quote: 'Patients love our explainer videos—so easy to make and personalize.', metric: '98% Satisfaction' },
  { name: 'James F.', company: 'FinEdge', industry: 'Finance', quote: 'We reached the top 1% of viral finance content on TikTok.', metric: 'Top 1% Viral' },
  { name: 'Sophie K.', company: 'Travelio', industry: 'Travel', quote: 'Our brand awareness soared with AI-powered travel reels.', metric: '4.7/5 Rating' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{
      background: '#0d0d0d',
      padding: '5rem 0 3.5rem 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <h2 style={{ fontSize: '2.1rem', fontWeight: 500, marginBottom: '2.5rem', letterSpacing: '-0.01em' }}>Testimonials</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2.5rem',
        width: '100%',
        maxWidth: 1100,
      }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{
            background: '#181818',
            border: '1px solid #232323',
            borderRadius: 'var(--border-radius)',
            padding: '2.2rem 1.5rem 1.5rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minHeight: 220,
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
          }}>
            <div style={{ color: '#ededed', fontWeight: 300, fontSize: '1.05rem', marginBottom: 16, lineHeight: 1.6 }}>
              “{t.quote}”
            </div>
            <div style={{ fontWeight: 500, fontSize: '1.08rem', marginBottom: 2 }}>{t.name} <span style={{ color: '#ededed', fontWeight: 300, fontSize: '0.98rem' }}>({t.company}, {t.industry})</span></div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem', marginTop: 4 }}>{t.metric}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 