"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./providers/next-theme";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}
