"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkHomePage = () => {
      if (typeof window !== "undefined") {
        setIsHomePage(window.location.pathname === "/");
      }
    };

    checkHomePage();

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", checkHomePage);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", checkHomePage);
      }
    };
  }, [typeof window !== "undefined" && window.location.pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {isLoading ? <></> : children}
        {!isHomePage && <Footer />}
      </body>
    </html>
  );
}
