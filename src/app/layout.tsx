import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Argus — The All-Seeing Eye",
  description:
    "Autonomous detection of insider trading patterns across political prediction markets.",
};

import { SocialLinks } from "@/components/SocialLinks";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
        suppressHydrationWarning
      >
        <LoadingScreen />
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <SocialLinks />
      </body>
    </html>
  );
}
