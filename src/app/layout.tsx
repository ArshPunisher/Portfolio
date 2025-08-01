import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Arsh Ramgarhia - Full Stack Developer Portfolio",
  description: "Portfolio of Arsh Ramgarhia, a passionate Full Stack Web Developer specializing in React.js, Next.js, Node.js, TypeScript, and modern web technologies. View my projects, skills, and experience.",
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
    "JavaScript",
    "MongoDB",
    "Express.js"
  ],
  authors: [{ name: "Arsh Ramgarhia" }],
  creator: "Arsh Ramgarhia",
  publisher: "Arsh Ramgarhia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolioarsh.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Arsh Ramgarhia - Full Stack Developer Portfolio",
    description: "Portfolio of Arsh Ramgarhia, a passionate Full Stack Web Developer specializing in React.js, Next.js, Node.js, TypeScript, and modern web technologies.",
    url: 'https://portfolioarsh.vercel.app',
    siteName: 'Arsh Ramgarhia Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arsh Ramgarhia - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Arsh Ramgarhia - Full Stack Developer Portfolio",
    description: "Portfolio of Arsh Ramgarhia, a passionate Full Stack Web Developer specializing in React.js, Next.js, Node.js, TypeScript, and modern web technologies.",
    images: ['/og-image.png'],
    creator: '@arshramgarhia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
          integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
