"use client"
import { ThemeProvider } from "@/context/mui";
import "./globals.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import View from "@/components/view"
import { OpenProvider } from "@/context/open";
import SessionProvider from "@/components/session";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <SessionProvider>
          <DarkModeProvider>
            <ThemeProvider>
              <CatppuccinProvider>
                <OpenProvider>
                  <View>
                    {children}
                  </View>
                </OpenProvider>
              </CatppuccinProvider>
            </ThemeProvider>
          </DarkModeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
