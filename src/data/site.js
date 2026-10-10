// Site-wide SEO / metadata configuration.
// Update `url` once a custom domain is attached in Vercel; until then this
// falls back to the live Vercel deployment URL at build/runtime.
import profile from "./profile";

const FALLBACK_URL = "https://jayavel-portfolio.vercel.app";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : FALLBACK_URL);

const site = {
  url: siteUrl,
  name: `${profile.name} — ${profile.title}`,
  title: `${profile.name} | ${profile.title}`,
  description: profile.tagline,
  keywords: [
    "QA Automation Engineer",
    "Quality Engineer",
    "Manual Testing",
    "Automation Testing",
    "Selenium WebDriver",
    "Playwright",
    "Cucumber BDD",
    "API Testing",
    "Postman",
    "REST Assured",
    "Java",
    "SQL",
    "Azure DevOps",
    "CI/CD",
    "Agile QA",
    "Software Test Engineer",
  ],
  locale: "en_US",
};

export default site;
