import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { greeting, siteUrl, socialMediaLinks } from "@/data/portfolio";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "Arsh Ramgarhia - Full Stack Developer Portfolio";
const description =
  "Portfolio of Arsh Ramgarhia, a Full Stack Web Developer specializing in React.js, Next.js, Node.js, TypeScript, and modern web technologies. View my projects, skills, and experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Arsh Ramgarhia",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: greeting.username, url: siteUrl }],
  creator: greeting.username,
  publisher: greeting.username,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Arsh Ramgarhia Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arsh Ramgarhia - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
    creator: "@ArshRamgarhia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION to emit the Search Console tag. Omitted when
  // unset so a placeholder token never ships to production.
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

/** Structured data — what drives rich results for a personal site. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: greeting.username,
  url: siteUrl,
  jobTitle: "Full Stack Web Developer",
  description: greeting.subTitle,
  image: `${siteUrl}/og-image.jpg`,
  email: `mailto:${socialMediaLinks.gmail}`,
  sameAs: [
    socialMediaLinks.github,
    socialMediaLinks.linkedin,
    socialMediaLinks.twitter,
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Express.js",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
        <Toaster />
        <script
          type="application/ld+json"
          // Static, developer-authored object — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
