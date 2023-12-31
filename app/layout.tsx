import type { Metadata } from "next";
import { Sora } from "next/font/google";

import Header from "@/components/Header";
import TopLeftImg from "@/components/TopLeftImg";
import Nav from "@/components/Nav";
import FramerMotionWrapper from "@/providers/FramerMotionWrapper";

import "./globals.css";

// font style
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ali Rezayi",
  description: "Ali is a Front-End developer with 2 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <FramerMotionWrapper>
          <div className="page bg-site text-white bg-cover bg-no-repeat relative">
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </div>
        </FramerMotionWrapper>
      </body>
    </html>
  );
}
