import Link from "next/link";
import { FadeIn } from "@/components/motion/FadeIn";
import TypingCode from "./components/TypingCode";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 md:px-12"
    >
      {/* Background layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 2px)",
            backgroundSize: "24px 24px",
            color: "var(--brand)",
          }}
        />
        {/* soft glow, offset toward the code panel */}
        <div
          className="absolute right-0 top-1/3 h-125 w-125 rounded-full opacity-20 blur-[120px]"
          style={{ backgroundColor: "var(--brand)" }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left column */}
        <div>
          <FadeIn delay={0}>
            <p className="mb-4 font-mono text-sm text-muted-foreground">
              <span style={{ color: "var(--brand)" }}>{">"}</span> available for
              freelance
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Mohamad Hormati
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-2 text-xl font-light text-muted-foreground md:text-2xl">
              Web Developer & Programmer
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-6 max-w-md text-muted-foreground">
              I build fast, thoughtful interfaces — from idea to production, one
              clean commit at a time.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-8 flex gap-4">
              <Link
                href="#projects"
                className="rounded-md px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
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
        </div>

        {/* Right column */}
        <FadeIn delay={0.3}>
          <TypingCode />
        </FadeIn>
      </div>
    </section>
  );
}
