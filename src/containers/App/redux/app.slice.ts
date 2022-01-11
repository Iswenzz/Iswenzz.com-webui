import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Theme } from "@material-ui/core";
import { detect } from "detect-browser";

import { Language } from "App/i18n";
import { getThemeByName } from "App/components/Themes";
import { updateObjectPartial } from "utils/objects";

export type AppRedux = {
	theme: Theme,
	language: Language,
	browserInfo: ReturnType<typeof detect>,
	isModalActive: boolean
};

export const initialState: AppRedux = {
	theme: getThemeByName(localStorage.getItem("theme") ?? "dark"),
	language: (localStorage.getItem("language") ?? "en") as Language,
	browserInfo: detect(),
	isModalActive: false
};

const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
		/**
		 * Set the application theme.
		 */
	  	setTheme: (state, action: PayloadAction<Theme>) => updateObjectPartial<AppRedux>(state, {
			theme: action.payload
		}),
		/**
		 * Toggle main modal.
		 */
		setModalActive: (state, action: PayloadAction<boolean>) => updateObjectPartial<AppRedux>(state, {
			isModalActive: action.payload
		}),
		/**
		 * Set the application language.
		 */
		setLanguage: (state, action: PayloadAction<Language>) => updateObjectPartial<AppRedux>(state, {
			language: action.payload
		})
	}
});

export const { setTheme, setModalActive, setLanguage } = slice.actions;

export default slice.reducer;
