import { Theme } from "@mui/material";

import DarkTheme from "./app/Dark/Dark";
import LightTheme from "./app/Light/Light";

const registredThemes: Record<string, Theme> = {
	light: LightTheme,
	dark: DarkTheme
};

/**
 * Get a theme by name.
 * @param name - The name of the theme.
 * @returns
 */
export const getThemeByName = (name: string): Theme => registredThemes[name];
