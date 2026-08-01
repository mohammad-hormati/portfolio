"use client";

import { useState } from "react";
import { Mail, ArrowUpRight, Loader2, Check, Phone } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FadeIn } from "@/components/motion/FadeIn";

const EMAIL: string = "m.hormati1996@gmail.com";
const PHONE: string = "+989203013260";

const socials = [
  { label: "GitHub", href: "https://github.com/mhmdhrmti", icon: SiGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/mohamad-hormati-807bb219b",
    icon: FaLinkedin,
  },
  { label: "X", href: "https://x.com/mhmdhrmti", icon: SiX },
  {
    label: "Telegram",
    href: "https://t.me/mhmdhrmti",
    icon: FaTelegramPlane,
  },
];

type Status = "idle" | "submitting" | "sent";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Wire this up to an API route / email service when ready.
    await new Promise((r) => setTimeout(r, 900));

    setStatus("sent");
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-16 sm:grid-cols-2">
          {/* Left: intro + direct contact */}
          <FadeIn>
            <div className="flex h-full flex-col">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span>Available for new projects</span>
              </div>

              <h2 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something
              </h2>

              <p className="mb-8 max-w-sm leading-relaxed text-muted-foreground">
                Have a project in mind, or just want to talk shop? My inbox is
                open — I read everything myself.
              </p>

              <div className="mb-8 flex flex-col gap-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex w-fit items-center gap-2 text-md font-medium"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  <span className="relative">
                    <span>{EMAIL}</span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <a
                  href={`tel:${PHONE}`}
                  className="group inline-flex w-fit items-center gap-2 text-md font-medium"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span className="relative">
                    <span>{PHONE}</span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="flex items-center gap-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="text-muted-foreground transition-colors hover:text-brand"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="What are you working on?"
                />
              </div>

              <Button
                type="submit"
                disabled={status !== "idle"}
                className="mt-4 bg-brand text-brand-foreground hover:bg-(--brand)/90"
              >
                {status === "idle" && "Send message"}
                {status === "submitting" && (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending
                  </>
                )}
                {status === "sent" && (
                  <>
                    <Check className="h-4 w-4" />
                    Sent
                  </>
                )}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
