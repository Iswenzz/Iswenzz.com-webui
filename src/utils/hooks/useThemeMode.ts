import { useTheme } from "@mui/material";

/**
 * Get values corresponding to the current theme mode.
 * @param values - The values to get depending on the theme mode.
 * @returns 
 */
const useThemeMode = <V extends Values>(values: V) => 
{
	const { isDarkTheme } = useTheme();

	return Object.entries(values).reduce((prev, [key, value]) => ({
		...prev,
		[key]: isDarkTheme ? value.dark : value.light
	}), {}) as { [key in keyof V]: V[key]["dark"] };
};

type Values<K extends string = string> = Record<K, {
	dark: any,
	light: any
}>;

export default useThemeMode;
