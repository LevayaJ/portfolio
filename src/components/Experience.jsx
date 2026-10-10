import { Briefcase } from "lucide-react";
import experience from "@/data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Where I&rsquo;ve worked
          </p>
        </Reveal>

        <ol className="mt-12 space-y-10 border-l border-border pl-8 sm:pl-10">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                className="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent sm:-left-[3.1rem]"
                aria-hidden="true"
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <Reveal delay={i * 0.06}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role} · {job.company}
                  </h3>
                  {job.current && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.period} · {job.duration}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-base"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
