"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What is MaverickX Vision?",
    a: "MaverickX Vision is an AI-powered platform that enables anyone to create high-quality, human-like videos in minutes—no technical skills required.",
  },
  {
    q: "Who can use MaverickX Vision?",
    a: "Our platform is designed for brands, creators, educators, and businesses looking to produce engaging video content quickly and easily.",
  },
  {
    q: "Do I need video editing experience?",
    a: "No! MaverickX Vision is built for everyone. Our AI handles the technical details so you can focus on your message.",
  },
  {
    q: "What makes MaverickX Vision different?",
    a: "We combine cutting-edge AI with intuitive design, enabling rapid, creative video production that's accessible to all.",
  },
  {
    q: "How do I get early access?",
    a: "Click the \"Get Early Access\" button and fill out the form. Our team will reach out with next steps.",
  },
  {
    q: "Is my data secure with MaverickX Vision?",
    a: "Yes, we take data privacy and security seriously. All your content is encrypted and handled according to industry best practices.",
  },
  {
    q: "Can I collaborate with my team?",
    a: "Absolutely! MaverickX Vision supports team collaboration, allowing multiple users to work on projects together in real time.",
  },
  {
    q: "What platforms does MaverickX Vision support?",
    a: "Our platform is web-based and works on all modern browsers, so you can create and manage videos from any device.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section style={{
      background: '#181818',
      padding: '4.5rem 0',
      color: '#fff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h2 style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', letterSpacing: '-0.01em', textAlign: 'center' }}>Frequently Asked Questions</h2>
      <div style={{ width: '100%', maxWidth: 700, display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: '#232323', borderRadius: '1.1rem', padding: '1.5rem 2rem', boxShadow: '0 2px 16px 0 rgba(0,0,0,0.13)' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.18rem',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                padding: 0,
                marginBottom: open === i ? 14 : 0,
                letterSpacing: '-0.01em',
                outline: 'none',
                transition: 'color 0.18s',
              }}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
            >
              {faq.q}
            </button>
            <div
              id={`faq-answer-${i}`}
              style={{
                maxHeight: open === i ? 500 : 0,
                overflow: 'hidden',
                color: '#bdbdbd',
                fontWeight: 400,
                fontSize: '1.08rem',
                lineHeight: 1.7,
                opacity: open === i ? 1 : 0,
                transition: 'max-height 0.32s cubic-bezier(.4,0,.2,1), opacity 0.22s cubic-bezier(.4,0,.2,1)',
              }}
            >
              {open === i && <div>{faq.a}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 