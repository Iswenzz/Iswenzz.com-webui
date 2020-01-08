import { LinkedProjectProps } from "../UI/Project/Project";

export enum HomeActionEnum
{
    TOGGLE_INTRO_TRAIL = 'TOGGLE_INTRO_TRAIL',
    TOGGLE_PROJECT_MODAL = 'TOGGLE_PROJECT_MODAL',
    UPDATE_PROJECTS = 'UPDATE_PROJECTS',
    SET_PROJECTS_INDEX = 'SET_PROJECTS_INDEX'
}

export interface ToggleIntroText 
{
    type: string,
    active?: boolean
}

export interface ToggleProjectModal
{
    type: string,
    active?: boolean
}

export interface UpdateProjects
{
    type: string,
    projects?: LinkedProjectProps[]
}

export interface SetProjectsStartIndex
{
    type: string,
    index?: number
}

export type HomeAnimationActions = ToggleIntroText;
export type HomeProjectsActions = ToggleProjectModal & SetProjectsStartIndex & UpdateProjects;

export type HomeActions = HomeAnimationActions & HomeProjectsActions;