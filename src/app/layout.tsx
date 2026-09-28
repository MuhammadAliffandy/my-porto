import type { Metadata } from "next";
import {
  Cinzel,
  Lora,
  Pirata_One,
} from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import StoreProvider from "./redux/storeProvider";
import AppBubbleChat from "./components/atoms/AppBubbleChat/AppBubbleChat";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const medieval = Pirata_One({
  variable: "--font-medieval",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Aliffandy | Fullstack Engineer",
    template: "%s | Muhammad Aliffandy"
  },
  description: "Portfolio of Muhammad Aliffandy, a Fullstack Engineer and Frontend Developer specializing in crafting high-performance web applications, robust mobile experiences, and scalable systems.",
  keywords: ["Muhammad Aliffandy", "Aliffandy", "Fullstack Engineer", "Frontend Developer", "Portfolio", "Web Development", "Mobile Development", "React", "Next.js", "Software Engineer", "UI/UX", "Tech", "Indonesia"],
  authors: [{ name: "Muhammad Aliffandy" }],
  creator: "Muhammad Aliffandy",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://aliffandy.com", // Assuming a canonical domain
    siteName: "Muhammad Aliffandy Portfolio",
    title: "Muhammad Aliffandy | Fullstack Engineer",
    description: "Portfolio of Muhammad Aliffandy, a Fullstack Engineer and Frontend Developer specializing in high-performance web and mobile applications.",
    images: [
      {
        url: "/aliffandy-transparent.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Aliffandy - Fullstack Engineer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Aliffandy | Fullstack Engineer",
    description: "Portfolio of Muhammad Aliffandy, a Fullstack Engineer and Frontend Developer.",
    images: ["/aliffandy-transparent.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/dragon.png" sizes="any" />
      </head>
      <body
        className={`${cinzel.variable} ${lora.variable} ${medieval.variable} antialiased`}
        suppressHydrationWarning
      >
        <StoreProvider>{children}</StoreProvider>
        <AppBubbleChat />
      </body>
    </html>
  );
}
