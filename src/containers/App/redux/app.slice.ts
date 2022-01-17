import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detect } from "detect-browser";
import { omit } from "lodash";

import type { Language } from "App/i18n";
import { saveLocalState } from "App/utils/localStorage";
import { createInitState } from "App/utils/redux";

export type AppRedux = {
	theme: string,
	language: Language,
	browserInfo: Omit<ReturnType<typeof detect>, "prototypes">,
	isModalActive: boolean
};

export const initialState = createInitState<AppRedux>({
	theme: "dark",
	language: "en",
	browserInfo: omit(detect(), "prototypes"),
	isModalActive: false
}, "app");

const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
	  	setTheme: (state: any, action: PayloadAction<string>) => ({
			...state,
			...saveLocalState("app", { theme: action.payload })
		}),
		setModalActive: (state: any, action: PayloadAction<boolean>) => ({
			...state,
			isModalActive: action.payload
		}),
		setLanguage: (state: any, action: PayloadAction<Language>) => ({
			...state,
			...saveLocalState("app", { language: action.payload })
		})
	}
});

export const { setTheme, setModalActive, setLanguage } = slice.actions;

export default slice.reducer;
