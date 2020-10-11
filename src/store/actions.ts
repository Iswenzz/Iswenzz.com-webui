import {AppActionEnum, ToggleDarkMode, ToggleLanguage, ToggleModalActive} from "./types";
import { AppState } from "application";
import { Dispatch } from "react";
import i18n, {Language} from "../i18n";

/**
 * Toggle dark/light theme.
 * @param active - Theme state.
 */
export const toggleDarkMode = (active: boolean) =>
{
	return (dispatch: Dispatch<ToggleDarkMode>, getState: () => AppState) =>
	{
		return dispatch({
			type: AppActionEnum.TOGGLE_DARK_MODE,
			active
		});
	};
};

/**
 * Toggle modal state.
 * @param active - Visible state.
 */
export const toggleModalActive = (active: boolean) =>
{
	return (dispatch: Dispatch<ToggleModalActive>, getState: () => AppState) =>
	{
		return dispatch({
			type: AppActionEnum.TOGGLE_MODAL_ACTIVE,
			active
		});
	};
};

/**
 * Toggle the application language.
 * @param active - The selected language.
 */
export const toggleLanguage = (active: Language) =>
{
	return (dispatch: Dispatch<ToggleLanguage>, getState: () => AppState) =>
	{
		i18n.changeLanguage(active);
		return dispatch({
			type: AppActionEnum.TOGGLE_MODAL_ACTIVE,
			active
		});
	};
};
