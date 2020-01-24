import { AppActionEnum, AppActions } from './types';
import { AppState } from '../index';
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
