import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "@vivekkv178/library/dist/style.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component Library",
  description:
    "Ready to use React components and  functions available out of the box.",
  metadataBase: new URL(
    `${process.env.NEXT_PUBLIC_CDN_PATH}/library/Thumbnail.png`
  ),
  openGraph: {
    title: "Component Library",
    description:
      "Ready to use React components and  functions available out of the box.",
    url: "https://library-site-eight.vercel.app/",
    siteName: "Component Library",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CDN_PATH}/library/Thumbnail.png`, // Must be an absolute URL
        width: 800,
        height: 1000,
      },
      {
        url: `${process.env.NEXT_PUBLIC_CDN_PATH}/library/Thumbnail.png`, // Must be an absolute URL
        width: 1800,
        height: 2000,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
