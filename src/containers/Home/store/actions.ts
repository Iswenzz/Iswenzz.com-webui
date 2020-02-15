import { HomeActionEnum, HomeActions } from './types';
import { AppState } from '../../../application';
import { Dispatch } from 'react';

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