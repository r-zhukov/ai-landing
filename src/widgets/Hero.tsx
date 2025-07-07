"use client";
import React, { useContext } from 'react';
import { ModalContext } from '../shared/ui/ClientLayout';

export default function Hero() {
  const { openModal } = useContext(ModalContext);
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #0a0a0a 80%, #181818 100%)',
        padding: '8rem 1.5rem 4rem 1.5rem',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <h1
        style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
          marginBottom: '2.2rem',
          maxWidth: 800,
          textAlign: 'center',
        }}
      >
        Create Viral, <span style={{
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 600,
        }}>Human-Like AI Videos</span> in Minutes
      </h1>
      <p
        style={{
          color: '#ededed',
          fontSize: '1.25rem',
          fontWeight: 300,
          maxWidth: 540,
          margin: '0 auto 2.5rem auto',
          lineHeight: 1.5,
        }}
      >
        MaverickX Vision empowers you to generate stunning, human-like AI videos for marketing, education, and social media—no editing skills required.
      </p>
      <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          className="mxv-button"
          style={{ padding: '1rem 2.2rem', fontSize: '1.1rem', marginBottom: '0.5rem' }}
          onClick={() => openModal('early')}
        >
          Get Started
        </button>
        <button
          style={{
            padding: '1rem 2.2rem',
            background: 'rgba(255,255,255,0.08)',
            color: '#fff',
            fontWeight: 400,
            fontSize: '1.1rem',
            borderRadius: 'var(--border-radius)',
            border: '1px solid #fff',
            cursor: 'pointer',
            marginBottom: '0.5rem',
            transition: 'background 0.18s, color 0.18s',
            backdropFilter: 'blur(2px)',
          }}
          onClick={() => openModal('video')}
        >
          Watch Demo
        </button>
      </div>
    </section>
  );
} 