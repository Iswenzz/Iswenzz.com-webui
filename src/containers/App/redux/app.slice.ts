import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { detect } from "detect-browser";
import omit from "lodash/omit";
import i18next from "i18next";

import type { Language } from "App/i18next";
import { saveLocalState } from "App/utils/localStorage";
import { createInitState } from "App/utils/redux";

export type AppRedux = {
	theme: string,
	language: Language,
	browserInfo: Omit<ReturnType<typeof detect>, "prototypes">,
	isModalActive: boolean,
	navbar: boolean
};

export const initialState = createInitState<AppRedux>({
	theme: "dark",
	language: "en",
	browserInfo: omit(detect(), "prototypes"),
	isModalActive: false,
	navbar: true
}, "app");

const slice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setTheme: (state: AppRedux, action: PayloadAction<string>) => ({
			...state,
			...saveLocalState("app", { theme: action.payload })
		}),
		setModalActive: (state: AppRedux, action: PayloadAction<boolean>) => ({
			...state,
			isModalActive: action.payload
		}),
		setNavbarActive: (state: AppRedux, action: PayloadAction<boolean>) => ({
			...state,
			navbar: action.payload
		}),
		setLanguage: (state: AppRedux, action: PayloadAction<Language>) =>
		{
			i18next.changeLanguage(action.payload);

			return {
				...state,
				...saveLocalState("app", { language: action.payload })
			};
		}
	}
});

export const { setTheme, setModalActive, setNavbarActive, setLanguage } = slice.actions;

export default slice.reducer;
