"use client";

import React, { useState, useContext, useRef, useEffect } from 'react';
import { ModalContext } from '../shared/ui/ClientLayout';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Features', dropdown: true },
  { name: 'Customers', href: '/customers' },
  { name: 'Company', href: '/company' },
  { name: 'Testimonials' },
  { name: 'Contact', href: '/contacts' },
  { name: 'FAQ', href: '/faq' },
];

const featuresDropdown = [
  'AI Assistant',
  'Content Vault',
  'Views Heatmap',
  'Workflows',
  'Vibe Marketing',
];

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
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
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          userSelect: 'none',
        }}>
          <img
            src="/logo_maverickx_vision.svg"
            alt="MaverickX Vision Logo"
            style={{ height: 24, width: 'auto', display: 'block' }}
            draggable={false}
          />
        </a>
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
              {link.dropdown ? (
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  style={{ display: 'inline-block', position: 'relative' }}
                >
                  <button
                    style={{
                      background: 'none',
                      color: '#fff',
                      fontWeight: 400,
                      fontSize: '1rem',
                      border: 'none',
                      padding: 0,
                      cursor: 'pointer',
                      borderRadius: 'var(--border-radius)',
                    }}
                    aria-haspopup="true"
                    aria-expanded={showDropdown}
                  >
                    Features
                  </button>
                  {showDropdown && (
                    <ul
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        background: '#181818',
                        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                        borderRadius: 'var(--border-radius)',
                        minWidth: 180,
                        padding: '0.5rem 0',
                        zIndex: 100,
                        border: '1px solid #222',
                        marginTop: 0,
                      }}
                    >
                      {featuresDropdown.map(f => {
                        const sectionId = f.toLowerCase().replace(/ /g, '-');
                        return (
                          <li key={f} style={{
                            padding: '0.5rem 1.5rem',
                            color: '#fff',
                            fontWeight: 400,
                            fontSize: '1rem',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'background 0.15s',
                          }}>
                            <Link
                              href={`/#${sectionId}`}
                              style={{ color: '#fff', textDecoration: 'none', display: 'block', width: '100%' }}
                              tabIndex={0}
                              scroll={true}
                              onClick={e => {
                                if (typeof window !== 'undefined' && window.location.pathname !== '/') {
                                  window.location.href = `/#${sectionId}`;
                                  e.preventDefault();
                                }
                              }}
                            >
                              {f}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              ) : (
                link.href ? (
                  <Link
                    href={link.href}
                    style={{
                      color: (pathname === link.href) ? '#6800F8' : '#fff',
                      fontWeight: 400,
                      fontSize: '1rem',
                      borderRadius: 'var(--border-radius)',
                      padding: '0.25rem 0.5rem',
                      transition: 'background 0.15s',
                      textDecoration: 'none',
                    }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={`/#${link.name.toLowerCase()}`}
                    style={{
                      color: '#fff',
                      fontWeight: 400,
                      fontSize: '1rem',
                      borderRadius: 'var(--border-radius)',
                      padding: '0.25rem 0.5rem',
                      transition: 'background 0.15s',
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
                )
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
                  {link.dropdown ? (
                    <details style={{ color: '#fff' }}>
                      <summary style={{
                        background: 'none',
                        color: '#fff',
                        fontWeight: 400,
                        fontSize: '1.3rem',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        borderRadius: 'var(--border-radius)',
                        outline: 'none',
                        listStyle: 'none',
                      }}>Features</summary>
                      <ul style={{
                        background: 'rgba(24,24,24,0.98)',
                        borderRadius: 'var(--border-radius)',
                        marginTop: 10,
                        padding: '0.5rem 0',
                        minWidth: 180,
                        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
                        border: '1px solid #222',
                        zIndex: 100,
                        position: 'relative',
                      }}>
                        {featuresDropdown.map(f => {
                          const sectionId = f.toLowerCase().replace(/ /g, '-');
                          return (
                            <li key={f} style={{
                              padding: '0.5rem 1.5rem',
                              color: '#fff',
                              fontWeight: 400,
                              fontSize: '1rem',
                              cursor: 'pointer',
                              whiteSpace: 'nowrap',
                              transition: 'background 0.15s',
                            }}>
                              <Link
                                href={`/#${sectionId}`}
                                style={{ color: '#fff', textDecoration: 'none', display: 'block', width: '100%' }}
                                tabIndex={0}
                                scroll={true}
                                onClick={e => {
                                  if (typeof window !== 'undefined' && window.location.pathname !== '/') {
                                    window.location.href = `/#${sectionId}`;
                                    e.preventDefault();
                                  }
                                }}
                              >
                                {f}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </details>
                  ) : (
                    link.href ? (
                      <Link
                        href={link.href}
                        style={{
                          color: (pathname === link.href) ? '#6800F8' : '#fff',
                          fontWeight: 400,
                          fontSize: '1.3rem',
                          borderRadius: 'var(--border-radius)',
                          padding: '0.25rem 0.5rem',
                          transition: 'background 0.15s',
                          outline: 'none',
                          textDecoration: 'none',
                        }}
                        onClick={() => setMobileMenu(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        href={`/#${link.name.toLowerCase()}`}
                        style={{
                          color: '#fff',
                          fontWeight: 400,
                          fontSize: '1.3rem',
                          borderRadius: 'var(--border-radius)',
                          padding: '0.25rem 0.5rem',
                          transition: 'background 0.15s',
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
                    )
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
