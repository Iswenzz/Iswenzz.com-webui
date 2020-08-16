import { AppActionEnum, AppActions } from "./types";
import { AppState } from "application";
import { Dispatch } from "react";

/**
 * Toggle dark/light theme.
 * @param active - Theme state.
 */
export const toggleDarkMode = (active: boolean) =>
{
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) =>
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
	return (dispatch: Dispatch<AppActions>, getState: () => AppState) =>
	{
		return dispatch({
			type: AppActionEnum.TOGGLE_MODAL_ACTIVE,
			active
		});
	};
};
