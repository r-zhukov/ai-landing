"use client";
import React from 'react';

const brands = [
  { name: 'T-Mobile', logo: '/brand1.svg' },
  { name: 'Repsol', logo: '/brand2.svg' },
  { name: 'ReedSmith', logo: '/brand3.svg' },
  { name: 'PwC', logo: '/brand4.svg' },
  { name: 'Bridgewater', logo: '/brand5.svg' },
  { name: 'Macfarlanes', logo: '/brand6.svg' },
  { name: 'KKR', logo: '/brand7.svg' },
  { name: 'A&O Shearman', logo: '/brand8.svg' },
];

export default function TrustStrip() {
  return (
    <section style={{ width: '100%', background: '#111', padding: '2.5rem 0 2.5rem 0', borderTop: '1px solid #222', borderBottom: '1px solid #222', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontWeight: 700, fontSize: '2rem', color: '#fff', marginBottom: '2.2rem', textAlign: 'center', letterSpacing: '-0.01em' }}>
        Built for Industry Leaders
      </div>
      <div style={{
        display: 'flex',
        gap: '3.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1200,
        overflowX: 'auto',
        padding: '0 1.5rem',
        scrollbarWidth: 'none',
      }}>
        {brands.map((brand, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 100 }}>
            <img src={brand.logo} alt={brand.name} style={{ height: 38, width: 'auto', filter: 'invert(1) grayscale(1) brightness(1.2)', opacity: 0.92, marginBottom: 8, maxWidth: 120 }} />
          </div>
        ))}
      </div>
      <a href="#customers" style={{
        color: '#ededed',
        fontWeight: 500,
        fontSize: '1.08rem',
        marginTop: '2.2rem',
        textDecoration: 'none',
        opacity: 0.8,
        transition: 'color 0.18s, opacity 0.18s',
      }}
      onMouseOver={e => (e.currentTarget.style.opacity = '1')}
      onMouseOut={e => (e.currentTarget.style.opacity = '0.8')}
      >
        See Customers &rarr;
      </a>
    </section>
  );
} 