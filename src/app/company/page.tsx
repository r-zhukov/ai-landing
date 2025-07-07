"use client";
import React from 'react';

const sections = [
  {
    title: 'Our Mission',
    text: "MaverickX Vision was founded to democratize high-quality video creation with the power of AI. Our mission is to empower brands, creators, and educators to produce viral, human-like videos in minutes—no technical skills required. We believe in creativity, speed, and results."
  },
  {
    title: 'AI as a Creative Partner',
    text: "At MaverickX Vision, we see AI not just as a tool, but as a creative partner. Our vision is to harness the latest advancements in artificial intelligence to make video production smarter, more intuitive, and accessible to everyone. We're passionate about blending cutting-edge technology with human creativity, enabling our users to tell compelling stories that resonate in today's fast-moving digital world."
  },
  {
    title: 'Vision for Marketing',
    text: "We understand that marketing is constantly evolving. That's why we're committed to helping our customers stay ahead of the curve—whether it's adapting to new social platforms, leveraging emerging content formats, or optimizing for the latest algorithms. Our platform is designed to be flexible and future-proof, so you can focus on your message while we handle the technical complexity."
  },
  {
    title: 'Staying Ahead',
    text: "Staying up-to-date with technology trends is in our DNA. Our team is always exploring new AI breakthroughs, creative tools, and industry shifts. We pride ourselves on our ability to react quickly to changes, rolling out new features and improvements at a rapid pace."
  },
  {
    title: 'Agility & Innovation',
    text: "This agility ensures that MaverickX Vision users are always equipped with the most powerful, relevant tools to succeed in a dynamic market. Join us as we shape the future of video creation—where innovation, creativity, and speed come together to unlock new possibilities for everyone."
  },
];

export default function OurStoryPage() {
  return (
    <section style={{
      background: '#101010',
      minHeight: '100vh',
      padding: '5rem 0 4rem 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <h1 style={{ fontSize: '2.7rem', fontWeight: 700, marginBottom: '3.5rem', letterSpacing: '-0.01em', textAlign: 'left', width: '100%', maxWidth: 1100 }}>About us</h1>
      <div style={{ width: '100%', maxWidth: 1100, display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: '1.55rem', marginBottom: 14, color: '#fff', letterSpacing: '-0.01em', textAlign: 'left' }}>{s.title}</div>
            <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.18rem', opacity: 0.92, lineHeight: 1.7, textAlign: 'left' }}>{s.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 