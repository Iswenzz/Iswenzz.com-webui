import { Theme, useTheme } from "@mui/material";

/**
 * Get values corresponding to the current theme mode.
 * @param values - The values to get depending on the theme mode.
 * @returns 
 */
const useThemeMode = <V extends Values>(values: V) => 
{
	const theme = useTheme();

	return Object.entries(values).reduce((prev, [key, value]) => ({
		...prev,
		[key]: theme.isDarkTheme ? value.dark : value.light
	}), theme) as { [key in keyof V]: V[key]["dark"] } & Theme;
};

type Values<K extends string = string> = Record<K, {
	dark: any,
	light: any
}>;

export default useThemeMode;
