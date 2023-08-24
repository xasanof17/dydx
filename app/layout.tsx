import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Mono, Nanum_Pen_Script } from "next/font/google";
import LocalFont from "next/font/local";
import { Navbar } from "@/layouts";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const circularStd = LocalFont({
  src: [
    {
      path: "../public/fonts/CircularStd-Black.ttf",
      weight: "900",
    },
    {
      path: "../public/fonts/CircularStd-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/CircularStd-Book.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/CircularStd-Medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-circular",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spaceMono",
});

const nanumPen = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nanumPen",
});

export const metadata: Metadata = {
  title: "Dydx",
  description: "Generated by create next app",
  authors: {
    name: "Xasanov Javohir",
    url: "https://portfoliowebapp.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        spaceMono.variable,
        nanumPen.variable,
        circularStd.variable,
      ].join(" ")}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}