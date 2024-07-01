import { createTheme, responsiveFontSizes } from "@mui/material";
import { LightThemeOptions as IzLightThemeConfig } from "@izui/react/types";
import merge from "lodash/merge";

const LightThemeOptions = merge(IzLightThemeConfig, {
	theme: "light",
	isDarkTheme: false,
	typography: {
		subtitle1: {
			fontFamily: "Ubuntu"
		},
		subtitle2: {
			fontFamily: "Poiret One",
			fontWeight: "bold"
		},
		h1: {
			fontFamily: "Calligraffitti"
		},
		h2: {
			fontFamily: "Calligraffitti"
		},
		h3: {
			fontFamily: "Calligraffitti"
		},
		h4: {
			fontFamily: "Calligraffitti"
		},
		h5: {
			fontFamily: "Calligraffitti"
		},
		caption: {
			fontFamily: "Ubuntu"
		}
	}
});

export default responsiveFontSizes(createTheme(LightThemeOptions));
