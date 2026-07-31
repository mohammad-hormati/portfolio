"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import { Logo } from "../Logo";
import { ThemeToggle } from "../ui/ThemeToggle";
import { DesktopNav } from "./DesktopNav";
import MobileMenuButton from "./MobileMenuButton";

export default function Header() {
  useActiveSection();
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-transparent">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <MobileMenuButton />
        </div>
      </nav>
    </header>
  );
}
