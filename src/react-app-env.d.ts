/// <reference types="react-scripts" />

import "@mui/material/styles";

declare global
{
	type JSONValue = string | number | boolean | null | object | JSONValue[];
	type Nullable<T> = T | null;
	type Optional<T> = T | undefined;
}

declare module "@mui/material/styles" 
{
	interface Theme
	{
		themeName: string,
		isDarkTheme: boolean
	}

	interface ThemeOptions 
	{ 
		themeName?: string,
		isDarkTheme?: boolean
	}
}
