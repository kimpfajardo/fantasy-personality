import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/utils/functions";
import { Inter, Marcellus } from "next/font/google";
import Image from "next/image";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Fantasy Character Quiz | Discover Your Inner Hero or Villain",
  description:
    "Take this fun and engaging personality quiz to discover which fantasy character best matches your traits. Are you a hero, a villain, or something in between?",
  keywords:
    "fantasy character quiz, personality quiz, find your hero, find your villain, discover your fantasy persona, mythical character match, fantasy personality test, adventure quiz, legendary characters, personality test, fantasy archetype",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Fantasy Character Quiz",
    description:
      "Discover which legendary fantasy character mirrors your personality in this fun and exciting personality quiz!",
    url: "https://your-quiz-app.com",
    images: [
      {
        url: "/path-to-your-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fantasy Character Quiz Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantasy Character Quiz",
    description:
      "Discover which legendary fantasy character mirrors your personality in this fun and exciting personality quiz!",
    images: ["/background.jpg"],
  },
};

export const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          marcellus.className,
          "antialiased grid grid-rows-[1fr_auto] min-h-screen bg-white"
        )}
      >
        <div
          className={"relative w-full bg-cover h-full flex justify-center px-5"}
        >
          <Image
            className="absolute inset-0 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 select-none pointer-events-none animate-pulse"
            src="/hex-fade.png"
            width={600}
            height={600}
            alt="Hexagon pattern"
          />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
