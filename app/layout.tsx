import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const display = localFont({
  src: "../assets/fonts/gintoNord-bold.woff",
  display: "swap",
  variable: "--display-tf",
  preload: true,
});
const body = localFont({
  src: "../assets/fonts/ginto.woff",
  display: "swap",
  variable: "--body-tf",
  preload: true,
});
const gintoMd = localFont({
  src: "../assets/fonts/gintoNord-md.woff",
  display: "swap",
  variable: "--ginto-md",
  preload: true,
});

export const metadata: Metadata = {
  title: "GoodSpace Stream",
  description: "GOODSpace Stream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${body.variable} ${display.variable} ${gintoMd.variable} font-body antialiased`}
        // className={cn("font-body antialiased", body.variable, display.variable)}
      >
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
