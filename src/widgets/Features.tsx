"use client";

import React, { useContext } from 'react';
import { ModalContext } from '../shared/ui/ClientLayout';

const features = [
  {
    name: 'AI Assistant',
    image: (
      <img
        src="/features/ai-assistant.jpg"
        alt="AI Assistant"
        style={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: '1.2rem 0 0 1.2rem',
        }}
        loading="lazy"
      />
    ),
    desc: 'Meet your creative partner. The AI Assistant helps you brainstorm, script, and refine video content with natural, conversational intelligence. It adapts to your style, suggests improvements, and accelerates your workflow so you can focus on what matters most: your message.',
    headline: 'Tailored to Your Expertise',
    label: 'Assistant',
    subtext: 'Delegate complex tasks in natural language to your domain-specific personal assistant.'
  },
  {
    name: 'Content Vault',
    image: (
      <img
        src="/features/content-vault.jpg"
        alt="Content Vault"
        style={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: '1.2rem 0 0 1.2rem',
        }}
        loading="lazy"
      />
    ),
    desc: 'All your video assets, perfectly organized and instantly accessible. The Content Vault is your secure, searchable home for every draft, final cut, and creative resource. Never lose track of a file or waste time searching again.'
  },
  {
    name: 'Views Heatmap',
    image: (
      <img
        src="/features/views-heatmap.jpg"
        alt="Views Heatmap"
        style={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: '1.2rem 0 0 1.2rem',
        }}
        loading="lazy"
      />
    ),
    desc: 'See exactly where your audience is most engaged. The Views Heatmap visualizes attention, drop-off, and sharing points, helping you optimize every second of your video for maximum impact.'
  },
  {
    name: 'Workflows',
    image: (
      <img
        src="/features/workflows.jpg"
        alt="Workflows"
        style={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: '1.2rem 0 0 1.2rem',
        }}
        loading="lazy"
      />
    ),
    desc: 'Automate the tedious. Workflows let you set up publishing, collaboration, and approval pipelines that run themselves. Focus on creativity while the platform handles the busywork.'
  },
  {
    name: 'Vibe Marketing',
    image: (
      <img
        src="/features/vibe-marketing.jpg"
        alt="Vibe Marketing"
        style={{
          width: '100%',
          height: 220,
          objectFit: 'cover',
          borderRadius: '1.2rem 0 0 1.2rem',
        }}
        loading="lazy"
      />
    ),
    desc: 'Reach your audience everywhere. Vibe Marketing distributes your videos to every major platform, automatically optimizing formats and timing for maximum reach and engagement.'
  },
  {
    name: 'Smart Editing',
    image: (
      <svg width="120" height="100" viewBox="0 0 120 100"><rect x="24" y="40" width="72" height="44" rx="10" fill="#818cf8"/><rect x="44" y="22" width="32" height="22" rx="7" fill="#fff" opacity="0.8"/><rect x="54" y="52" width="12" height="10" rx="2" fill="#fff"/><rect x="58" y="62" width="4" height="10" rx="2" fill="#818cf8"/></svg>
    ),
    desc: 'Edit smarter, not harder. Instantly generate drafts, clone voices, and get AI-powered suggestions as you work. Smart Editing makes professional-quality video creation effortless.'
  },
];

export default function Features() {
  const { openModal } = useContext(ModalContext);
  return (
    <section id="features" style={{
      background: '#101010',
      padding: '5rem 0 4rem 0',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}>
      <h2 style={{ fontSize: '2.3rem', fontWeight: 700, marginBottom: '0.7rem', letterSpacing: '-0.01em', textAlign: 'center' }}>Features</h2>
      <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.18rem', marginBottom: '3.2rem', textAlign: 'center', opacity: 0.85, maxWidth: 700 }}>
        Create viral, human-like AI videos with these powerful tools
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2.8rem',
        width: '100%',
        maxWidth: 1300,
      }}>
        {features.map((f, i) => (
          <div key={i} id={f.name.toLowerCase().replace(/ /g, '-')}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              background: 'none',
              borderRadius: '1.2rem',
              overflow: 'hidden',
              minHeight: 260,
              boxShadow: '0 2px 24px 0 rgba(0,0,0,0.10)',
            }}>
              {/* Left: Unique SVG illustration for each feature */}
              <div style={{ flex: 1.1, minWidth: 0, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {i === 0 && (
                  // AI Assistant: Chat bubbles and AI avatar
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <ellipse cx="320" cy="200" rx="60" ry="18" fill="#4f8cff" opacity="0.10" />
                    <rect x="60" y="40" width="180" height="38" rx="16" fill="#f4f8ff" />
                    <rect x="80" y="52" width="120" height="12" rx="6" fill="#4f8cff" opacity="0.18" />
                    <rect x="60" y="90" width="120" height="38" rx="16" fill="#ededed" />
                    <rect x="80" y="102" width="80" height="12" rx="6" fill="#232323" opacity="0.12" />
                    <circle cx="320" cy="120" r="38" fill="#4f8cff" />
                    <ellipse cx="320" cy="120" rx="18" ry="10" fill="#fff" opacity="0.8" />
                    <circle cx="320" cy="120" r="10" fill="#fff" />
                    <rect x="260" y="170" width="120" height="18" rx="9" fill="#ededed" />
                  </svg>
                )}
                {i === 1 && (
                  // Content Vault: Folder, files, and search
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <rect x="40" y="40" width="320" height="120" rx="18" fill="#f3e8ff" />
                    <rect x="60" y="60" width="60" height="80" rx="10" fill="#a78bfa" />
                    <rect x="140" y="60" width="60" height="80" rx="10" fill="#ededed" />
                    <rect x="220" y="60" width="60" height="80" rx="10" fill="#ededed" />
                    <rect x="300" y="60" width="40" height="80" rx="10" fill="#ededed" />
                    <rect x="80" y="160" width="240" height="16" rx="8" fill="#ededed" />
                    <rect x="60" y="24" width="180" height="18" rx="9" fill="#ededed" />
                    <rect x="260" y="24" width="80" height="18" rx="9" fill="#fff" />
                    <rect x="270" y="28" width="60" height="10" rx="5" fill="#a78bfa" opacity="0.18" />
                  </svg>
                )}
                {i === 2 && (
                  // Views Heatmap: Video player and heatmap
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <rect x="40" y="60" width="320" height="80" rx="18" fill="#232323" />
                    <rect x="40" y="160" width="320" height="14" rx="7" fill="#facc15" opacity="0.18" />
                    <rect x="40" y="160" width="100" height="14" rx="7" fill="#facc15" />
                    <rect x="150" y="160" width="60" height="14" rx="7" fill="#facc15" opacity="0.7" />
                    <rect x="220" y="160" width="80" height="14" rx="7" fill="#facc15" opacity="0.5" />
                    <polygon points="80,100 120,120 120,80" fill="#fff" opacity="0.7" />
                    <rect x="60" y="80" width="60" height="10" rx="5" fill="#fff" opacity="0.12" />
                  </svg>
                )}
                {i === 3 && (
                  // Workflows: Flowchart with arrows
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <rect x="60" y="80" width="60" height="38" rx="12" fill="#34d399" />
                    <rect x="170" y="80" width="60" height="38" rx="12" fill="#ededed" />
                    <rect x="280" y="80" width="60" height="38" rx="12" fill="#ededed" />
                    <rect x="120" y="98" width="50" height="6" rx="3" fill="#34d399" />
                    <rect x="230" y="98" width="50" height="6" rx="3" fill="#34d399" />
                    <polygon points="170,101 180,106 170,111" fill="#34d399" />
                    <polygon points="280,101 290,106 280,111" fill="#34d399" />
                  </svg>
                )}
                {i === 4 && (
                  // Vibe Marketing: Social post and share icons
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <rect x="60" y="40" width="280" height="40" rx="14" fill="#f472b6" />
                    <rect x="60" y="100" width="180" height="16" rx="8" fill="#ededed" />
                    <rect x="60" y="130" width="120" height="16" rx="8" fill="#ededed" />
                    <circle cx="320" cy="120" r="18" fill="#f472b6" />
                    <rect x="310" y="110" width="20" height="20" rx="5" fill="#fff" />
                    <rect x="340" y="110" width="20" height="20" rx="5" fill="#fff" />
                  </svg>
                )}
                {i === 5 && (
                  // Smart Editing: Video timeline and edit handles
                  <svg width="95%" height="90%" viewBox="0 0 400 220" style={{ maxWidth: 400, maxHeight: 220 }}>
                    <rect x="0" y="0" width="400" height="220" rx="28" fill="#fff" />
                    <rect x="60" y="100" width="280" height="24" rx="10" fill="#818cf8" />
                    <rect x="60" y="140" width="60" height="12" rx="6" fill="#ededed" />
                    <rect x="130" y="140" width="80" height="12" rx="6" fill="#ededed" />
                    <rect x="220" y="140" width="60" height="12" rx="6" fill="#ededed" />
                    <rect x="290" y="140" width="50" height="12" rx="6" fill="#ededed" />
                    <rect x="100" y="100" width="10" height="24" rx="5" fill="#fff" />
                    <rect x="250" y="100" width="10" height="24" rx="5" fill="#fff" />
                    <rect x="180" y="60" width="40" height="18" rx="6" fill="#818cf8" opacity="0.18" />
                  </svg>
                )}
              </div>
              {/* Right: Text block */}
              <div style={{
                flex: 1,
                background: '#181818',
                padding: '2.8rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: 260,
              }}>
                <div style={{ color: '#bdbdbd', fontSize: '1.05rem', fontWeight: 500, marginBottom: 10, letterSpacing: '0.04em' }}>{f.name}</div>
                <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.13rem', opacity: 0.92, lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom CTA Panel */}
      <div style={{
        width: '100%',
        marginTop: '4.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          background: 'linear-gradient(90deg, #181818 60%, #232323 100%)',
          borderRadius: '2rem',
          boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)',
          padding: '3.2rem 4.5rem',
          maxWidth: 1100,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div style={{ fontWeight: 700, fontSize: '2.1rem', color: '#fff', marginBottom: 18, textAlign: 'center', letterSpacing: '-0.01em' }}>
            Ready to create with MaverickX Vision?
          </div>
          <div style={{ color: '#ededed', fontWeight: 400, fontSize: '1.18rem', opacity: 0.92, marginBottom: 32, textAlign: 'center', maxWidth: 600 }}>
            Be the first to experience next-gen AI video.
          </div>
          <button
            style={{
              background: 'linear-gradient(90deg, #4f8cff 60%, #a78bfa 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.18rem',
              border: 'none',
              borderRadius: '999px',
              padding: '1.1rem 2.8rem',
              boxShadow: '0 2px 16px 0 rgba(79,140,255,0.10)',
              cursor: 'pointer',
              transition: 'background 0.18s',
              outline: 'none',
            }}
            onClick={() => openModal('early')}
          >
            Get Started
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          #features > div:last-child > div {
            flex-direction: column !important;
            min-height: 0 !important;
          }
          #features > div:last-child > div > div:first-child {
            border-radius: 1.2rem 1.2rem 0 0 !important;
            min-height: 160px !important;
            border-bottom: 1.5px solid #232323;
            border-right: none !important;
          }
          #features > div:last-child > div > div:last-child {
            padding: 1.5rem 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
} 