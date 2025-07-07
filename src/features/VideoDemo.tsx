import React from 'react';

export default function VideoDemo() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 320,
      minHeight: 220,
      background: '#222',
      borderRadius: 'var(--border-radius)',
      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
      padding: '2.5rem 1.5rem',
    }}>
      <div style={{
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 18,
      }}>
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="19" r="19" fill="#fff" fillOpacity="0.12" />
          <polygon points="15,12 28,19 15,26" fill="#fff" />
        </svg>
      </div>
      <div style={{ fontWeight: 500, fontSize: '1.2rem', marginBottom: 8 }}>Demo Video Coming Soon</div>
      <div style={{ color: '#ededed', fontWeight: 300, fontSize: '1rem', textAlign: 'center' }}>
        See MaverickX Vision in action. Full demo video will be available soon!
      </div>
    </div>
  );
} 