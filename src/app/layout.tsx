import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softie.studio"),
  title: {
    default: "Softie — Code made soft. Web & app studio.",
    template: "%s · Softie",
  },
  description:
    "Softie is a software studio building fast, scalable web and mobile experiences that feel alive. WordPress, custom web apps, and mobile — crafted with care.",
  keywords: [
    "software studio",
    "web development",
    "mobile apps",
    "WordPress",
    "Next.js",
    "UI UX design",
    "Algeria",
  ],
  authors: [{ name: "Softie" }],
  openGraph: {
    type: "website",
    title: "Softie — Code made soft.",
    description:
      "We blend logic and emotion — because good software should feel good. Web, mobile, and WordPress builds from idea to deployment.",
    siteName: "Softie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Softie — Code made soft.",
    description:
      "A software studio crafting fast, scalable, surprisingly delightful digital experiences.",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} font-inter antialiased bg-[#FBFAFC] text-[#0E0E0E] selection:bg-[#DDCCF5] selection:text-[#3a2a55]`}
      >
        <div className="grain-overlay" aria-hidden />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
