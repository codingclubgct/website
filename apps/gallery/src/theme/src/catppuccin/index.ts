import { variants, labels, Color, AlphaColor, Labels } from "@catppuccin/palette";

type CatppuccinColors = {
  [key in "light" | "dark"]: { [K in keyof typeof labels]: string };
};

export const catppuccinColors = Object.entries(variants)
  .reduce<{ themeName: string; themeDetails: Labels<Color, AlphaColor> }[]>((themes, [themeName, themeDetails]) => {
    if (["latte", "mocha"].indexOf(themeName) > -1) {
      return [
        ...themes,
        {
          themeName,
          themeDetails,
        },
      ];
    } else {
      return themes;
    }
  }, [])
  .map(({ themeName, themeDetails }) => {
    return {
      themeName,
      themeDetails: Object.entries(themeDetails).reduce(
        (reducedThemeDetails, [colorName, colorDetails]) => ({
          ...reducedThemeDetails,
          [colorName]: colorDetails.hex,
        }),
        {}
      ),
    };
  })
  .reduce(
    (theme, { themeName, themeDetails }) => ({
      ...theme,
      [themeName === "latte" ? "light" : "dark"]: themeDetails,
    }),
    {}
  ) as CatppuccinColors;
