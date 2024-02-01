import SessionProvider from "@/components/provider";
import { CatppuccinProvider } from "@/context/catppuccin";
import { DarkModeProvider } from "@/context/darkmode";
import { IssuesProvider } from "@/context/issues";
import { ThemeProvider } from "@/context/mui";
import { OpenProvider } from "@/context/open";
import { normalizePaths } from "@/lib/normalize-path";
import View from "@/views/view";
import { allBlogs } from "contentlayer/generated";
import "./global.css";
import "./tailwind.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="__next">
      <body>
        <SessionProvider>
          <DarkModeProvider>
            <ThemeProvider>
              <CatppuccinProvider>
                <OpenProvider>
                  <IssuesProvider>
                    <View tree={normalizePaths(allBlogs.map(blog => blog.url))}>
                      {children}
                    </View>
                  </IssuesProvider>
                </OpenProvider>
              </CatppuccinProvider>
            </ThemeProvider>
          </DarkModeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}