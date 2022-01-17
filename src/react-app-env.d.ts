/// <reference types="react-scripts" />

import "@mui/material/styles";

declare global
{
	type JSONValue = string | number | boolean | null | object | JSONValue[];
	
	type KeyOf<T> = keyof T;
	type ValueOf<T> = T[keyof T];
	type Nullable<T> = T | null;
	type Optional<T> = T | undefined;

	type BoundingBox = Position & Size;

	type Rectangle = {
		top: number,
		left: number,
		bottom: number,
		right: number
	};

	type Position = {
		x: number,
		y: number
	};
	
	type Size = {
		width: number,
		height: number
	};
}

declare module "@mui/material/styles" 
{
	interface Theme
	{
		theme: string,
		isDarkTheme: boolean
	}

	interface ThemeOptions 
	{ 
		theme?: string,
		isDarkTheme?: boolean
	}
}
