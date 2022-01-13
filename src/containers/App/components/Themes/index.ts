import { Theme } from "@mui/material";

import DarkTheme from "./app/Dark/Dark";
import LightTheme from "./app/Light/Light";

const registredThemes: Record<string, Theme> = {
	dark: DarkTheme,
	light: LightTheme
};

/**
 * Get a theme by name.
 * @param name - The name of the theme.
 * @returns 
 */
export const getThemeByName = (name: string): Theme => registredThemes[name];
