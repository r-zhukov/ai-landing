"use client";
import React, { useEffect, useRef, useState } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function Modal({ open, onClose, children, ariaLabel }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) setVisible(true);
    else {
      // Delay unmount for animation
      const timeout = setTimeout(() => setVisible(false), 220);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        // Trap focus
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
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
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open && !visible) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
      tabIndex={-1}
      className={`modal-backdrop${open ? ' modal-in' : ' modal-out'}`}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`modal-content${open ? ' modal-in' : ' modal-out'}`}
        onClick={e => e.stopPropagation()}
        tabIndex={0}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 18,
            right: 18,
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 22,
            cursor: 'pointer',
            borderRadius: '50%',
            width: 32,
            height: 32,
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
        {children}
      </div>
      <style jsx>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(10,10,10,0.65);
          backdrop-filter: blur(6px);
          opacity: 0;
          transition: opacity 0.22s cubic-bezier(.4,0,.2,1);
        }
        .modal-backdrop.modal-in {
          opacity: 1;
        }
        .modal-backdrop.modal-out {
          opacity: 0;
        }
        .modal-content {
          background: #181818;
          color: #fff;
          border-radius: var(--border-radius);
          min-width: 320px;
          max-width: 90vw;
          min-height: 120px;
          max-height: 90vh;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.25);
          padding: 2.5rem 2rem 2rem 2rem;
          position: relative;
          overflow-y: auto;
          outline: none;
          opacity: 0;
          transform: scale(0.96) translateY(32px);
          transition: opacity 0.22s cubic-bezier(.4,0,.2,1), transform 0.22s cubic-bezier(.4,0,.2,1);
        }
        .modal-content.modal-in {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
        .modal-content.modal-out {
          opacity: 0;
          transform: scale(0.96) translateY(32px);
        }
      `}</style>
    </div>
  );
} 