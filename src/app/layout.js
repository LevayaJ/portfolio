import "@fontsource-variable/inter";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Analytics from "@/components/Analytics";
import profile from "@/data/profile";
import site from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${profile.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: site.url,
  email: `mailto:${profile.email}`,
  sameAs: Object.values(profile.social).filter(Boolean),
  description: profile.tagline,
  knowsAbout: [
    "Manual Testing",
    "Automation Testing",
    "Selenium WebDriver",
    "Playwright",
    "API Testing",
    "SQL",
    "Azure DevOps",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
