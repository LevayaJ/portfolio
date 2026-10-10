import { GraduationCap } from "lucide-react";
import education from "@/data/education";
import Reveal from "./Reveal";

export default function Education() {
  if (!education.length) return null;

  return (
    <section id="education" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Education
          </h2>
        </Reveal>

        <div className="mt-8 space-y-4">
          {education.map((item, i) => (
            <Reveal delay={i * 0.05} key={item.degree}>
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{item.degree}</h3>
                  <p className="mt-0.5 text-sm text-muted">
                    {item.institution} · {item.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
