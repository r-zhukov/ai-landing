"use client";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ScrollToHashInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      let attempts = 0;
      const scroll = () => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(scroll, 100);
        }
      };
      scroll();
    }
  }, [pathname, searchParams]);
  return null;
}

export default function ScrollToHash() {
  return (
    <Suspense fallback={null}>
      <ScrollToHashInner />
    </Suspense>
  );
} 