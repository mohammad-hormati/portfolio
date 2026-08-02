import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import TypingCode from "./components/TypingCode";
import ParticlesBackground from "./components/ParticlesBackground";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-12"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <FadeIn delay={0}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--brand)" }}
              />
              Available for freelance
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Mohamad Hormati
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="mt-3 text-xl font-medium md:text-2xl"
              style={{ color: "var(--brand)" }}
            >
              Web Developer & Programmer
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              I build fast, thoughtful interfaces — from idea to production, one
              clean commit at a time.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-md px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "var(--brand)" }}
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Contact
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
              <span>React.js</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Next.js</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>TypeScript</span>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <FadeIn delay={0.3}>
          <TypingCode />
        </FadeIn>
      </div>
    </section>
  );
}
