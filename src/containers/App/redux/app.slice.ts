import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detect } from "detect-browser";
import { omit } from "lodash";

import type { Language } from "App/i18n";

export type AppRedux = {
	theme: string,
	language: Language,
	browserInfo: Omit<ReturnType<typeof detect>, "prototypes">,
	isModalActive: boolean
};

export const initialState: AppRedux = {
	theme: localStorage.getItem("theme") ?? "dark",
	language: (localStorage.getItem("language") ?? "en") as Language,
	browserInfo: omit(detect(), "prototypes"),
	isModalActive: false
};

const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
	  	setTheme: (state: any, action: PayloadAction<string>) => 
		{
			localStorage.setItem("theme", action.payload);
			return {
				...state,
				theme: action.payload
			};
		},
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
