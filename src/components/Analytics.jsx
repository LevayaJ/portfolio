import Script from "next/script";

/**
 * Optional, privacy-conscious analytics via Plausible (https://plausible.io).
 * Plausible is cookie-free and does not collect personally identifiable
 * visitor data. This component renders nothing unless
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN is explicitly set — analytics stay off by
 * default and the site works identically either way.
 *
 * To enable: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN in Vercel's environment
 * variables (or .env.local) to your domain, e.g. "jayavel.dev".
 * No private token is required or used client-side.
 */
export default function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
