import {HomeActionEnum, SetProjectsStartIndex, ToggleProjectModalActive} from "./types";
import { AppState } from "application";
import { Dispatch } from "react";

/**
 * Set the projects ViewPager page index.
 * @param projectsStartIndex - Page index.
 */
export const setProjectsIndex = (projectsStartIndex: number) =>
{
	return (dispatch: Dispatch<SetProjectsStartIndex>, getState: () => AppState) =>
	{
		return dispatch({
			type: HomeActionEnum.SET_PROJECTS_INDEX,
			projectsStartIndex
		});
	};
};

/**
 * Toggle the projects modal (ViewPager).
 * @param projectModalActive - Visible state.
 */
export const toggleProjectModalActive = (projectModalActive: boolean) =>
{
	return (dispatch: Dispatch<ToggleProjectModalActive>, getState: () => AppState) =>
	{
		return dispatch({
			type: HomeActionEnum.TOGGLE_PROJECT_MODAL_ACTIVE,
			projectModalActive
		});
	};
};
