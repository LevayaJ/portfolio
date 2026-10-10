import skills from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">Skills</h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Tools and techniques I use to ship quality software
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal delay={i * 0.05} key={group.category}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="text-sm font-semibold text-foreground">{group.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
