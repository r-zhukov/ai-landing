import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#181818',
      color: '#bdbdbd',
      padding: '2.5rem 0 1.2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderTop: '1.5px solid #232323',
      marginTop: '4rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 1300,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        padding: '0 2rem',
      }}>
        {/* Brand as external link, centered */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1.5rem' }}>
          <a href="https://maverickx.ai" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <span style={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '1.35rem', letterSpacing: '0.01em', color: '#fff', userSelect: 'none' }}>
              Maverick
              <span style={{
                background: 'var(--accent-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                margin: '0 0.1em',
                fontSize: '1.35em',
                letterSpacing: '-0.03em',
              }}>X</span>
              <span style={{ marginLeft: 6, fontWeight: 400, fontSize: '1.1rem', color: '#fff', opacity: 0.7 }}>Vision</span>
            </span>
          </a>
        </div>
      </div>
      <div style={{ width: '100%', maxWidth: 1300, padding: '0 2rem', marginTop: '2.2rem', fontSize: '0.98rem', color: '#7a7a7a', textAlign: 'center' }}>
        © {new Date().getFullYear()} MaverickX Vision. All rights reserved.
      </div>
      <style>{`
        @media (max-width: 700px) {
          footer > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.2rem !important;
          }
          footer nav {
            gap: 1.2rem !important;
          }
        }
      `}</style>
    </footer>
  );
} 