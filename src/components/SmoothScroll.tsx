"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser's automatic scroll restoration to take full control
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial scroll handling for hash
    const scrollToHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          lenis.scrollTo(target, { 
            offset: -80, 
            duration: 1,
            immediate: true // Jump immediately on refresh
          });
        }
      }
    };

    // Try multiple times as components might render asynchronously
    scrollToHash();
    const timer1 = setTimeout(scrollToHash, 50);
    const timer2 = setTimeout(scrollToHash, 250);
    const timer3 = setTimeout(scrollToHash, 1000);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Handle hash navigation during active session
  useEffect(() => {
    if (window.location.hash && lenisRef.current) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        lenisRef.current.scrollTo(target, { offset: -80, duration: 1.5 });
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
