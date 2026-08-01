import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { MdEmail, MdCall } from "react-icons/md";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";

import { navLinks } from "@/config/nav";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/your-username",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-username",
    icon: FaLinkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/your-username",
    icon: FaTwitter,
  },
  {
    label: "Telegram",
    href: "https://telegram.com/your-username",
    icon: FaTelegramPlane,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Logo showWordmark />
            <p className="text-sm text-muted-foreground">
              Making the web a little better, one line at a time
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center sm:items-start gap-6">
            <div className="flex flex-col items-center sm:items-start gap-2">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MdEmail className="w-5 h-5" /> m.hormati1996@gmail.com
              </p>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <MdCall className="w-5 h-5" /> +989203013260
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted-foreground transition-colors hover:text-brand"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Mohamad. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
