import { HomeActionEnum, HomeActions } from './types';
import { AppState } from '../../../index';
import { Dispatch } from 'react';
import { LinkedProjectProps } from '../UI/Project/Project';

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

export const toggleProjectModal = (active: boolean) =>
{
    return (dispatch: Dispatch<HomeActions>, getState: () => AppState) =>
    {
        return dispatch({
            type: HomeActionEnum.TOGGLE_PROJECT_MODAL,
            active
        });
    }
};

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