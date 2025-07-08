import React from 'react';

const feedbacks = [
  {
    name: 'Sarah Chen',
    role: 'Marketing Director, TechFlow Inc',
    avatar: '',
    quote: 'Vibe Video transformed our content strategy. We went from spending $50K on video production to creating viral content for under $500/month. Our engagement increased by 400%.',
    stars: 5,
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Founder, GrowthHack Pro',
    avatar: '',
    quote: 'The AI assistant is like having a creative director, scriptwriter, and video editor all in one. Our last video got 2.3M views in 48 hours. This tool is a game-changer.',
    stars: 5,
  },
  {
    name: 'Emma Thompson',
    role: 'Content Creator, Lifestyle Brands Co',
    avatar: '',
    quote: 'I was skeptical about AI videos, but the quality is incredible. My audience can\'t tell the difference, and I\'m creating 10x more content than before.',
    stars: 5,
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedback" style={{
      background: '#181818',
      padding: '5.5rem 0 4.5rem 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <h2 style={{
        fontSize: '2.3rem',
        fontWeight: 800,
        marginBottom: '1.1rem',
        letterSpacing: '-0.01em',
        textAlign: 'center',
        color: '#fff',
        lineHeight: 1.1,
      }}>
        Loved by 10,000+ Creators
      </h2>
      <div style={{
        color: '#bdbdbd',
        fontSize: '1.18rem',
        fontWeight: 400,
        marginBottom: '3.5rem',
        textAlign: 'center',
        maxWidth: 700,
      }}>
        See how brands and creators are using MaverickX Vision to create content that converts
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2.5rem',
        width: '100%',
        maxWidth: 1300,
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {feedbacks.map((f, i) => (
          <div key={i} style={{
            background: '#232323',
            borderRadius: '1.1rem',
            padding: '2.5rem 2.2rem 2rem 2.2rem',
            minWidth: 320,
            maxWidth: 400,
            flex: '1 1 320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '1.5px solid #232323',
            marginBottom: 24,
            position: 'relative',
          }}>
            <div style={{ marginBottom: 18 }}>
              {Array.from({ length: f.stars }).map((_, idx) => (
                <span key={idx} style={{ color: '#facc15', fontSize: '1.18rem', marginRight: 2 }}>★</span>
              ))}
            </div>
            <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.13rem', marginBottom: 22, lineHeight: 1.7, fontStyle: 'italic' }}>
              &quot;{f.quote}&quot;
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto' }}>
              {f.avatar ? (
                <img src={f.avatar} alt={f.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', background: '#232345' }} />
              ) : (
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#181818', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.15rem', border: '1.5px solid #232323' }}>{f.name.split(' ')[0][0]}</div>
              )}
              <div>
                <div style={{ fontWeight: 700, fontSize: '1.13rem', color: '#fff' }}>{f.name}</div>
                <div style={{ color: '#bdbdbd', fontWeight: 400, fontSize: '1.01rem', marginTop: 2 }}>{f.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 