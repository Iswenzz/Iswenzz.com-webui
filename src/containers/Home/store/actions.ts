import { HomeActionEnum, HomeActions } from './types';
import { AppState } from 'application';
import { Dispatch } from 'react';

/**
 * Set the projects ViewPager page index.
 * @param index - Page index.
 */
export const setProjectsIndex = (index: number) =>
{
    return (dispatch: Dispatch<HomeActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: HomeActionEnum.SET_PROJECTS_INDEX,
            index
        });
    }
};

/**
 * Toggle the projects modal (ViewPager).
 * @param active - Visible state.
 */
export const toggleProjectModalActive = (active: boolean) =>
{
    return (dispatch: Dispatch<HomeActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: HomeActionEnum.TOGGLE_PROJECT_MODAL_ACTIVE,
            active
        });
    }
};
