"use client";
import React, { useState, createContext, useRef, useEffect } from 'react';
import Header from '../../widgets/Header';
import Modal from '../../features/Modal';
import EarlyAccessForm from '../../features/EarlyAccessForm';
import VideoDemo from '../../features/VideoDemo';

export const ModalContext = createContext({
  openModal: (type: 'early' | 'video') => {},
});

// Intersection Observer hook
function useInView(ref: React.RefObject<HTMLDivElement>, rootMargin = '-40px') {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);
  return inView;
}

// Section wrapper for animation
export function Section({ children, className = '', ...props }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={`section-animate ${inView ? 'section-in' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
      <style jsx>{`
        .section-animate {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .section-in {
          opacity: 1;
          transform: none;
        }
      `}</style>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<null | 'early' | 'video'>(null);

  const openModal = (type: 'early' | 'video') => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Header />
      {children}
      <Modal open={modal === 'early'} onClose={closeModal} ariaLabel="Get Early Access">
        <EarlyAccessForm onSuccess={closeModal} />
      </Modal>
      <Modal open={modal === 'video'} onClose={closeModal} ariaLabel="Demo Video">
        <VideoDemo />
      </Modal>
    </ModalContext.Provider>
  );
} 