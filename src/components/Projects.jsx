"use client";

import { useMemo, useState } from "react";
import { Lock, ExternalLink } from "lucide-react";
import projects from "@/data/projects";
import Reveal from "./Reveal";
import { GitHubIcon } from "./icons";

const ALL = "All";

export default function Projects() {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState(ALL);

  const filtered =
    active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Client engagements I&rsquo;ve tested
          </p>
          <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
            These are enterprise client projects delivered through Cyrino and ABN
            Consultancy Service. Code and live environments are private to each client.
          </p>
        </Reveal>

        {categories.length > 2 && (
          <div
            className="mt-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border bg-surface text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal delay={i * 0.05} key={project.name} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <h3 className="text-base font-semibold leading-snug text-foreground">
                  {project.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {project.period}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  <span className="font-medium text-foreground">My role: </span>
                  {project.contribution}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-2 pt-1 text-xs font-medium text-muted">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:underline"
                      >
                        {link.type === "github" ? (
                          <GitHubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        ) : (
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        )}
                        {link.label}
                      </a>
                    ))
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                      Private client project
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
