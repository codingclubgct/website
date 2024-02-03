import { Config } from "tailwindcss";
import { catppuccinColors } from "../catppuccin";
import { createThemes } from "tw-colors";
import typography from "@tailwindcss/typography"

export const tailwindConfig: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  important: "#__next",
  corePlugins: {
    preflight: false
  },
  plugins: [
    createThemes({
      light: catppuccinColors.light,
      dark: catppuccinColors.dark
    }),
    typography
  ],
};
