import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://catamaraconsulting.com";
const iconUrl = new URL("/assets/catamara-logo.jpeg", siteUrl).toString();

export const metadata: Metadata = {
  title: {
    default: "CATAMARA | Industrial Supply Chain Intelligence",
    template: "CATAMARA | %s",
  },
  metadataBase: new URL(siteUrl),
  description:
    "CATAMARA is a global supply chain intelligence, sourcing, supplier development, and industrial technology company operating across Germany, India, and China.",
  openGraph: {
    title: "CATAMARA | Industrial Supply Chain Intelligence",
    description:
      "Global sourcing, supplier development, VAVE, NPD, NVD, and workflow automation for automotive and industrial manufacturing teams.",
    images: [
      {
        url: "/assets/catamara-logo.jpeg",
        alt: "CATAMARA logo",
      },
    ],
  },
  icons: {
    icon: iconUrl,
    shortcut: iconUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pb-20">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
