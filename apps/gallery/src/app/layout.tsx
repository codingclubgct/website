import { ThemeProvider } from "@/context/mui";
import "./globals.css"
import { DarkModeProvider } from "@/context/darkmode";
import { CatppuccinProvider } from "@/context/catppuccin";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <DarkModeProvider>
          <ThemeProvider>
            <CatppuccinProvider>
              <AppRouterCacheProvider>
                {children}
              </AppRouterCacheProvider>
            </CatppuccinProvider>
          </ThemeProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
