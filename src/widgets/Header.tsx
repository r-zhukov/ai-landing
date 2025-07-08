"use client";

import React, { useState, useContext, useRef, useEffect } from 'react';
import { ModalContext } from '../shared/ui/ClientLayout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Customers', href: '/customers' },
  { name: 'Company', href: '/company' },
  { name: 'Contact', href: '/contacts' },
  { name: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { openModal } = useContext(ModalContext);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Trap focus in mobile menu
  useEffect(() => {
    if (!mobileMenu) return;
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable && focusable.length > 0) focusable[0].focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenu(false);
      if (e.key === 'Tab' && focusable && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileMenu]);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 50,
      background: '#181818',
      borderBottom: '1.5px solid #232323',
      height: 'var(--header-height)',
      display: 'flex',
      alignItems: 'center',
      fontWeight: 400,
      fontSize: '1rem',
      fontFamily: 'inherit',
      boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)'
    }}>
      <nav style={{
        width: '100%',
        maxWidth: 1440,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        height: '100%'
      }}>
        {/* Logo */}
        <Link href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          userSelect: 'none',
        }}>
          <img
            src={process.env.NEXT_PUBLIC_BASE_PATH ? `${process.env.NEXT_PUBLIC_BASE_PATH}/logo_maverickx_vision.svg` : "/logo_maverickx_vision.svg"}
            alt="MaverickX Vision Logo"
            style={{ height: 24, width: 'auto', display: 'block' }}
            draggable={false}
          />
        </Link>
        {/* Desktop Nav */}
        <ul className="header-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}>
          {navLinks.map(link => (
            <li key={link.name} style={{ position: 'relative' }}>
              {link.href ? (
                <Link
                  href={link.href}
                  style={{
                    color: (pathname === link.href) ? '#6800F8' : '#fff',
                    fontWeight: 400,
                    fontSize: '1rem',
                    borderRadius: 'var(--border-radius)',
                    padding: '0.25rem 0.5rem',
                    transition: 'color 0.15s',
                    textDecoration: 'none',
                    boxShadow: 'none',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.color = '#6800F8';
                    e.currentTarget.style.background = 'none';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.color = (pathname === link.href) ? '#6800F8' : '#fff';
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#${link.name.toLowerCase()}`}
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    fontSize: '1rem',
                    borderRadius: 'var(--border-radius)',
                    padding: '0.25rem 0.5rem',
                    transition: 'color 0.15s',
                  }}
                  scroll={true}
                  onClick={e => {
                    const sectionId = link.name.toLowerCase();
                    if (
                      typeof window !== 'undefined' &&
                      window.location.pathname !== '/'
                    ) {
                      window.location.href = `/#${sectionId}`;
                      e.preventDefault();
                    }
                  }}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
          <li>
            <button
              className="mxv-button"
              style={{ marginLeft: '1.5rem', fontSize: '1rem' }}
              onClick={() => openModal('early')}
            >
              Get Started
            </button>
          </li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="header-hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer',
            marginLeft: '1.5rem',
          }}
          aria-label="Open menu"
          onClick={() => setMobileMenu(true)}
        >
          <span style={{ fontWeight: 200 }}>&#9776;</span>
        </button>
        {/* Mobile Menu Overlay */}
        {mobileMenu && (
          <div
            ref={menuRef}
            tabIndex={-1}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(10,10,10,0.98)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            aria-modal="true"
            role="dialog"
          >
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenu(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: 32,
                cursor: 'pointer',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.15s',
              }}
              onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              onMouseOut={e => (e.currentTarget.style.background = 'none')}
            >
              ×
            </button>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2.2rem',
              marginBottom: '2.5rem',
            }}>
              {navLinks.map(link => (
                <li key={link.name} style={{ position: 'relative' }}>
                  {link.href ? (
                    <Link
                      href={link.href}
                      style={{
                        color: (pathname === link.href) ? '#6800F8' : '#fff',
                        fontWeight: 400,
                        fontSize: '1.3rem',
                        borderRadius: 'var(--border-radius)',
                        padding: '0.25rem 0.5rem',
                        transition: 'color 0.15s',
                        outline: 'none',
                        textDecoration: 'none',
                      }}
                      onClick={() => setMobileMenu(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <Link
                      href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/#${link.name.toLowerCase()}`}
                      style={{
                        color: '#fff',
                        fontWeight: 400,
                        fontSize: '1.3rem',
                        borderRadius: 'var(--border-radius)',
                        padding: '0.25rem 0.5rem',
                        transition: 'color 0.15s',
                        outline: 'none',
                        textDecoration: 'none',
                      }}
                      scroll={true}
                      onClick={e => {
                        const sectionId = link.name.toLowerCase();
                        if (
                          typeof window !== 'undefined' &&
                          window.location.pathname !== '/'
                        ) {
                          window.location.href = `/#${sectionId}`;
                          e.preventDefault();
                        }
                        setMobileMenu(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
} 
