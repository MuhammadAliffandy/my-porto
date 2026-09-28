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
  title: "Aliffandy",
  description: "That the portfolio of Fandy, a Fullstack Engineer",
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
