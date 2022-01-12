import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Theme } from "@material-ui/core";
import { detect } from "detect-browser";

import type { Language } from "App/i18n";
import { getThemeByName } from "App/components/Themes";

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
	  	setTheme: (state: any, action: PayloadAction<Theme>) => ({
			...state,
			theme: action.payload
		}),
		setModalActive: (state: any, action: PayloadAction<boolean>) => ({
			...state,
			isModalActive: action.payload
		}),
		setLanguage: (state: any, action: PayloadAction<Language>) => ({
			...state,
			language: action.payload
		})
	}
});

export const { setTheme, setModalActive, setLanguage } = slice.actions;

export default slice.reducer;
