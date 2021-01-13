import {AppActionEnum, ToggleDarkMode, ToggleLanguage, ToggleModalActive} from "./types";
import { AppState } from "application";
import { Dispatch } from "react";
import i18n, {Language} from "../i18n";

/**
 * Toggle dark/light theme.
 * @param isDarkMode - Theme state.
 */
export const toggleDarkMode = (isDarkMode: boolean) =>
{
	return (dispatch: Dispatch<ToggleDarkMode>, getState: () => AppState) =>
	{
		return dispatch({
			type: AppActionEnum.TOGGLE_DARK_MODE,
			isDarkMode
		});
	};
};

/**
 * Toggle modal state.
 * @param isModalActive - Visible state.
 */
export const toggleModalActive = (isModalActive: boolean) =>
{
	return (dispatch: Dispatch<ToggleModalActive>, getState: () => AppState) =>
	{
		return dispatch({
			type: AppActionEnum.TOGGLE_MODAL_ACTIVE,
			isModalActive
		});
	};
};

/**
 * Toggle the application language.
 * @param language - The selected language.
 */
export const toggleLanguage = (language: Language) =>
{
	return (dispatch: Dispatch<ToggleLanguage>, getState: () => AppState) =>
	{
		i18n.changeLanguage(language);
		localStorage.setItem("language", language);
		return dispatch({
			type: AppActionEnum.TOGGLE_LANGUAGE,
			language
		});
	};
};
