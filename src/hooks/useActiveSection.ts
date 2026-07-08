"use client";

import { useEffect } from "react";
import { useUIStore } from "@/store/useUIStore";
import { navLinks } from "@/config/nav";

export function useActiveSection() {
  const setActiveSection = useUIStore((s) => s.setActiveSection);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return; // e.g. on /blog/[slug], no-op

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px", // "active" when section is roughly in the middle of viewport
        threshold: 0,
      },
    );

    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setActiveSection]);
}
