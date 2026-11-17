"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapContext(
  scopeRef: React.RefObject<HTMLElement | null>,
  animationFn: (ctx: gsap.Context) => void,
  deps: any[] = []
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = scopeRef.current;
    if (!element) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(element.querySelectorAll(".gsap-reveal, .gsap-card, .gsap-fade"), {
        opacity: 1,
        y: 0,
        scale: 1,
        clearProps: "all",
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((self) => {
      animationFn(self);
    }, element);

    return () => {
      ctx.revert();
    };
  }, deps);
}

export { gsap, ScrollTrigger };
