"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/store/useUIStore";
import { navLinks, getHref } from "@/config/nav";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const isOpen = useUIStore((s) => s.isMobileMenuOpen);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);
  const activeSection = useUIStore((s) => s.activeSection);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 md:hidden"
        >
          <nav className="flex flex-col">
            {navLinks.map((link, i) => {
              const isActive = isHome && activeSection === link.id;
              const Icon = link.icon;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.3 }}
                  className="group border-b border-border/50 first:border-t"
                >
                  <Link
                    href={getHref(link, pathname)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative flex items-center justify-between gap-4 py-5 pl-4 pr-2"
                  >
                    {/* left accent bar */}
                    <span
                      className={cn(
                        "absolute left-0 top-0 h-full w-0.75 origin-top scale-y-0 bg-brand transition-transform duration-300 group-hover:scale-y-100",
                        isActive && "scale-y-100",
                      )}
                    />
                    {/* label */}
                    <span
                      className={cn(
                        "text-xl font-bold tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-2",
                        isActive && "text-brand",
                      )}
                    >
                      {link.label}
                    </span>
                    {/* icon */}
                    <Icon
                      className={cn(
                        "h-5 w-5 shrink-0 text-foreground transition-colors duration-300 group-hover:text-brand",
                        isActive && "text-brand",
                      )}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
