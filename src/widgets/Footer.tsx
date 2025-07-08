"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Customers', href: '/customers' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contacts' },
  { name: 'FAQ', href: '/faq' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer style={{
      width: '100%',
      background: '#181818',
      borderTop: '1.5px solid #232323',
      padding: '2.8rem 0 1.2rem 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '4rem',
    }}>
      <div className="footer-main" style={{
        width: '100%',
        maxWidth: 1200,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        gap: '2.2rem',
      }}>
        {/* Logo (left) */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', height: 26 }}>
          <img
            src={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/logo_maverickx_vision.svg` : "/logo_maverickx_vision.svg"}
            alt="MaverickX Vision Logo"
            style={{ height: 26, width: 'auto', display: 'block' }}
            draggable={false}
          />
        </Link>
        {/* Navigation (center/right) */}
        <nav style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <ul style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href.startsWith('/#') ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${link.href}` : link.href}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.08rem',
                    letterSpacing: '0.09em',
                    textTransform: 'uppercase',
                    padding: '0.2rem 0',
                    borderBottom: pathname === link.href ? '2px solid #4f8cff' : '2px solid transparent',
                    transition: 'border-color 0.18s, color 0.18s',
                    display: 'inline-block',
                    boxShadow: 'none',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.color = '#6800F8';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.color = '#fff';
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div style={{ width: '100%', maxWidth: 1200, padding: '0 2rem', fontSize: '1.01rem', color: '#7a7a7a', textAlign: 'center', paddingTop: 22, letterSpacing: '0.01em' }}>
        © {new Date().getFullYear()} MaverickX Vision. All rights reserved.
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-main {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.5rem !important;
          }
          .footer-main nav ul {
            flex-direction: column !important;
            gap: 1.1rem !important;
            align-items: center !important;
          }
        }
      `}</style>
    </footer>
  );
} 