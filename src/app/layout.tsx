import type { Metadata } from "next";

// Self-hosted fonts via @fontsource — no external request to Google Fonts at
// runtime. Faster, no third-party font-request privacy concern, and works
// identically in dev, in this sandbox, and in production.
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Farhan Rizqi Aminullah — Frontend Developer",
    template: "%s — Farhan Rizqi Aminullah",
  },
  description:
    "Frontend Developer building modern digital experiences for businesses and individuals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground font-body">
        {children}
      </body>
    </html>
  );
}
