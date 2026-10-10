"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import profile from "@/data/profile";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — the email is still shown and linked below.
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
              Contact
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Let&rsquo;s talk about your next QA hire
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              I&rsquo;m open to new QA automation and quality engineering roles. The
              fastest way to reach me is by email.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    Copy email
                  </>
                )}
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-muted"
                >
                  <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-muted"
                >
                  <GitHubIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
