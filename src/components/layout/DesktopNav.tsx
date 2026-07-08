"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getHref, navLinks } from "@/config/nav";
import { useUIStore } from "@/store/useUIStore";
import { cn } from "@/lib/utils";

export function DesktopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const activeSection = useUIStore((s) => s.activeSection);

  return (
    <ul className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => {
        const isActive = isHome && activeSection === link.id;
        return (
          <li key={link.href}>
            <Link
              href={getHref(link, pathname)}
              className={cn(
                "relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform",
                "hover:after:scale-x-100",
                isActive && "text-foreground after:scale-x-100",
              )}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
