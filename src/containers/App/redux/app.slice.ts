import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detect } from "detect-browser";
import omit from "lodash/omit";
import i18next from "i18next";

import type { Language } from "App/i18next";
import { saveLocalState } from "App/utils/localStorage";
import { createInitState } from "App/utils/redux";

export type AppState = {
	theme: string;
	language: Language;
	browserInfo: Omit<ReturnType<typeof detect>, "prototypes">;
	isPastWindowHeight: boolean;
	isModalActive: boolean;
	isNavbarActive: boolean;
};

export const initialState = createInitState<AppState>("app", {
	theme: "dark",
	language: "en",
	browserInfo: omit(detect(), "prototypes"),
	isPastWindowHeight: false,
	isModalActive: false,
	isNavbarActive: true
});

const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setTheme: (state: AppState, action: PayloadAction<string>) => ({
			...state,
			...saveLocalState("app", { theme: action.payload })
		}),
		setPastWindowHeight: (state: AppState, action: PayloadAction<boolean>) => ({
			...state,
			isPastWindowHeight: action.payload
		}),
		setModalActive: (state: AppState, action: PayloadAction<boolean>) => ({
			...state,
			isModalActive: action.payload
		}),
		setNavbarActive: (state: AppState, action: PayloadAction<boolean>) => ({
			...state,
			isNavbarActive: action.payload
		}),
		setLanguage: (state: AppState, action: PayloadAction<Language>) => {
			i18next.changeLanguage(action.payload);
			return {
				...state,
				...saveLocalState("app", { language: action.payload })
			};
		}
	}
});

export const { setTheme, setPastWindowHeight, setModalActive, setNavbarActive, setLanguage } =
	slice.actions;

export default slice.reducer;
