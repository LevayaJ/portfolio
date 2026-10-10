import profile from "@/data/profile";
import Reveal from "./Reveal";

const STATS = [
  { label: "Years of experience", value: "3+" },
  { label: "Employers", value: "2" },
  { label: "Client projects", value: "3+" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">About</h2>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {profile.summary.map((paragraph, i) => (
              <Reveal delay={i * 0.05} key={paragraph.slice(0, 24)}>
                <p className="mt-4 text-base leading-relaxed text-muted first:mt-0 sm:text-lg">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
