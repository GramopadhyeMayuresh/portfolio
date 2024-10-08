import Navbar from "@/components/navbar";
import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import {DATA} from "@/data/resume";
import type {Metadata} from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={cn(
              "max-w-7xl md:mx-auto",
              fontSans.variable
          )}
      >
      <ThemeProvider attribute="class" defaultTheme="system">
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar/>
        </TooltipProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
