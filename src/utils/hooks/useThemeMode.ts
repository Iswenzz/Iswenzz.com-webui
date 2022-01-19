import { Theme, useTheme } from "@mui/material";

/**
 * Get values corresponding to the current theme mode.
 * @remarks [dark, light]
 * @param values - The values to get depending on the theme mode.
 * @returns 
 */
const useThemeMode = <V extends Values>(values: V) => 
{
	const theme = useTheme();

	return Object.entries(values).reduce((prev, [key, [dark, light]]) => ({
		...prev,
		[key]: theme.isDarkTheme ? dark : light
	}), theme) as { [key in keyof V]: V[key][0] } & Theme;
};

type Values<K extends string = string> = Record<K, [any, any]>;

export default useThemeMode;
