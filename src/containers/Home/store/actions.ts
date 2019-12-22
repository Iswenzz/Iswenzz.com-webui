import { HomeActionEnum, HomeActions } from './types';
import { AppState } from '../../../index';
import { Dispatch } from 'react';

export const toggleIntroText = (active: boolean) =>
{
    return (dispatch: Dispatch<HomeActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: HomeActionEnum.TOGGLE_INTRO_TRAIL,
            active
        });
    }
};