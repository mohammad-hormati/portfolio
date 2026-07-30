"use client";

import { Menu, X } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

export default function MobileMenuButton() {
  const isMobileMenuOpen = useUIStore((s) => s.isMobileMenuOpen);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);

  return (
    <button
      type="button"
      onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={isMobileMenuOpen}
      className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center text-foreground"
    >
      <Menu
        className={`absolute h-5 w-5 transition-all duration-200 ${
          isMobileMenuOpen
            ? "opacity-0 rotate-90 scale-75"
            : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <X
        className={`absolute h-5 w-5 transition-all duration-200 ${
          isMobileMenuOpen
            ? "opacity-100 rotate-0 scale-100"
            : "opacity-0 -rotate-90 scale-75"
        }`}
      />
    </button>
  );
}
