import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import BackToTopButton from "./components/BackToTopButton";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DOGM.AI - Accelerate Mastery. Learn With AI. Build Proof.",
  description: "Guided AI bootcamps to accelerate mastery.",
  metadataBase: new URL("https://dogm.ai"), // change if different
  openGraph: {
    title: "DOGM.AI - Accelerate Mastery. Learn With AI. Build Proof.",
    description: "Guided AI bootcamps to accelerate mastery.",
    url: "https://dogm.ai",
    siteName: "DOGM.AI",
    images: [
      {
        url: "/og-image.png", // must be absolute or resolvable via metadataBase
        width: 1200,
        height: 630,
        alt: "DOGM.AI – AI-Native Bootcamps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOGM.AI - Accelerate Mastery. Learn With AI. Build Proof.",
    description: "Guided AI bootcamps to accelerate mastery.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {children}
        <BackToTopButton />
        <GoogleAnalytics gaId="G-VW00E9B53J" />
      </body>
    </html>
  );
}
