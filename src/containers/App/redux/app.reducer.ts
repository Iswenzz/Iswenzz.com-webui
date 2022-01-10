import { detect } from "detect-browser";
import {AppActions, AppActionEnum, ToggleDarkMode, ToggleModalActive, ToggleLanguage} from ".";
import { updateObjectPartial } from "utils/objects";
import {Language} from "../i18n";

export type AppRedux = {
	browserInfo: ReturnType<typeof detect>,
	isDarkMode: boolean,
	isModalActive: boolean,
	language: Language
};

export type AppDispatch = {
	toggleDarkMode: (active: boolean) => void,
	toggleModalActive: (active: boolean) => void,
	toggleLanguage: (active: Language) => void
};

export let initialState: AppRedux = {
	browserInfo: detect(),
	isDarkMode: localStorage.getItem("isDarkMode") === "true",
	isModalActive: false,
	language: (localStorage.getItem("language") ?? "en") as Language
};

const reducer = (state: AppRedux = initialState, action: AppActions): AppRedux =>
{
	switch (action.type)
	{
		case AppActionEnum.TOGGLE_DARK_MODE:
			action = action as ToggleDarkMode;
			return updateObjectPartial<AppRedux, ToggleDarkMode>(state, {
				isDarkMode: action.isDarkMode
			});

		case AppActionEnum.TOGGLE_MODAL_ACTIVE:
			action = action as ToggleModalActive;
			return updateObjectPartial<AppRedux, ToggleModalActive>(state, {
				isModalActive: action.isModalActive
			});

		case AppActionEnum.TOGGLE_LANGUAGE:
			action = action as ToggleLanguage;
			return updateObjectPartial<AppRedux, ToggleLanguage>(state, {
				language: action.language
			});

		default:
			return state;
	}
};

export default reducer;