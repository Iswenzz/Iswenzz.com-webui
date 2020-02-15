import { HomeActionEnum, HomeActions } from './types';
import { AppState } from '../../../application';
import { Dispatch } from 'react';
import { LinkedProjectProps } from '../UI/Project/Project';

export const updateProjects = (projects: LinkedProjectProps[]) =>
{
    return (dispatch: Dispatch<HomeActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: HomeActionEnum.UPDATE_PROJECTS,
            projects
        });
    }
};

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