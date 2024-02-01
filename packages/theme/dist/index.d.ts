import * as tailwindcss_types_config from 'tailwindcss/types/config';
import { labels } from '@catppuccin/palette';
import { roles } from '@rose-pine/palette';

interface CatppuccinColors extends ColorScheme<{
    [K in keyof typeof labels]: string;
}> {
}
declare const catppuccinColors: CatppuccinColors;

interface RosePineColors extends ColorScheme<{
    [K in keyof typeof roles]: string;
}> {
}
declare const rosePineColors: RosePineColors;

interface ColorScheme<T> {
    light: Record<keyof T, string>;
    dark: Record<keyof T, string>;
}

declare const generateTailwindConfig: <T>(colorScheme: ColorScheme<T>) => tailwindcss_types_config.Config;

export { type ColorScheme, catppuccinColors, generateTailwindConfig, rosePineColors };
