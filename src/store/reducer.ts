import {AppActions, AppActionEnum, ToggleDarkMode, ToggleModalActive, ToggleLanguage} from "./types";
import {updateObjectPartial} from "utility/utility";
import { AppProps } from "App";
import { detect } from "detect-browser";
import {Language} from "i18n";

export let initialState: AppProps = {
	browserInfo: detect(),
	isDarkMode: localStorage.getItem("isDarkMode") === "true",
	isModalActive: false,
	language: (localStorage.getItem("language") ?? "en") as Language
};

const reducer = (state: AppProps = initialState, action: AppActions): AppProps =>
{
	switch (action.type)
	{
		case AppActionEnum.TOGGLE_DARK_MODE:
			action = action as ToggleDarkMode;
			return updateObjectPartial<AppProps, ToggleDarkMode>(state, {
				isDarkMode: action.isDarkMode
			});

		case AppActionEnum.TOGGLE_MODAL_ACTIVE:
			action = action as ToggleModalActive;
			return updateObjectPartial<AppProps, ToggleModalActive>(state, {
				isModalActive: action.isModalActive
			});

		case AppActionEnum.TOGGLE_LANGUAGE:
			action = action as ToggleLanguage;
			return updateObjectPartial<AppProps, ToggleLanguage>(state, {
				language: action.language
			});

		default:
			return state;
	}
};

export default reducer;