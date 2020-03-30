import { AppActionEnum, AppActions } from './types';
import { AppState } from '../application';
import { Dispatch } from 'react';

export const toggleDarkMode = (active: boolean) =>
{
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: AppActionEnum.TOGGLE_DARK_MODE,
            active
        });
    }
};

export const toggleModalActive = (active: boolean) =>
{
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: AppActionEnum.TOGGLE_MODAL_ACTIVE,
            active
        });
    }
};

export const togglePastIntro = (active: boolean) =>
{
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: AppActionEnum.TOGGLE_PAST_INTRO,
            active
        });
    }
};
