import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";
import { DarkThemeOptions as IzDarkThemeOptions } from "izui-react";
import merge from "lodash/merge";

const DarkThemeOptions: ThemeOptions = merge(IzDarkThemeOptions, {
	theme: "dark",
	isDarkTheme: true,
	typography: {
		subtitle1: {
			fontFamily: "Ubuntu",
		},
		subtitle2: {
			fontFamily: "Poiret One",
			fontWeight: "bold"
		},
		h1: {
			fontFamily: "Calligraffitti",
		},
		h2: {
			fontFamily: "Calligraffitti",
		},
		h3: {
			fontFamily: "Calligraffitti",
		},
		h4: {
			fontFamily: "Calligraffitti",
		},
		h5: {
			fontFamily: "Calligraffitti",
		},
		caption: {
			fontFamily: "Ubuntu",
		}
	}
});

export default responsiveFontSizes(createTheme(DarkThemeOptions));
