import { ArrowRight, Download, Mail } from "lucide-react";
import profile from "@/data/profile";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem]" />
      <div className="container-page">
        <Reveal>
          {profile.availableForWork && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new QA opportunities
            </span>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-xl font-medium text-accent sm:text-2xl">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.resume.href}
              download={profile.resume.filename}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
