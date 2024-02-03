import { Shadows, ThemeOptions } from "@mui/material/styles";
import { catppuccinColors } from "../catppuccin";
import colorsea from "colorsea";

const primaryLight = catppuccinColors.light.mauve;
const secondaryLight = catppuccinColors.light.pink;

const primaryDark = catppuccinColors.dark.mauve;
const secondaryDark = catppuccinColors.dark.pink;

const commonConfigs: ThemeOptions = {
  shadows: new Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: "Open Sans",
    button: {
      textTransform: "none",
    },
  }
};

export const muiDarkThemeConfig: ThemeOptions = {
  ...commonConfigs,
  palette: {
    mode: "dark",
    primary: {
      light: colorsea(primaryDark).lighten(5).hex(),
      main: primaryDark,
      dark: colorsea(primaryDark).darken(5).hex(),
    },
    secondary: {
      light: colorsea(secondaryDark).lighten(5).hex(),
      main: secondaryDark,
      dark: colorsea(secondaryDark).darken(5).hex(),
    },
    background: {
      default: catppuccinColors.dark.base,
      paper: catppuccinColors.dark.mantle,
    },
    text: {
      primary: catppuccinColors.dark.text,
      secondary: catppuccinColors.dark.subtext0,
    },
  },
};
export const muiLightThemeConfig: ThemeOptions = {
  ...commonConfigs,
  palette: {
    mode: "light",
    primary: {
      light: colorsea(primaryLight).lighten(5).hex(),
      main: primaryLight,
      dark: colorsea(primaryLight).darken(5).hex(),
    },
    secondary: {
      light: colorsea(secondaryLight).lighten(5).hex(),
      main: secondaryLight,
      dark: colorsea(secondaryLight).darken(5).hex(),
    },
    background: {
      default: catppuccinColors.light.base,
      paper: catppuccinColors.light.mantle,
    },
    text: {
      primary: catppuccinColors.light.text,
      secondary: catppuccinColors.light.subtext0,
    },
  },
};
