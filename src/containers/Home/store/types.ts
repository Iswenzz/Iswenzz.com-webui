import { LinkedProjectProps } from "../../../components/Project/Project";

export enum HomeActionEnum
{
    TOGGLE_INTRO_TRAIL = 'TOGGLE_INTRO_TRAIL',
    TOGGLE_PROJECT_MODAL = 'TOGGLE_PROJECT_MODAL',
    UPDATE_PROJECTS = 'UPDATE_PROJECTS'
}

export interface HomeToggleIntroText 
{
    type: string,
    active?: boolean
}

export interface HomeToggleProjectModal
{
    type: string,
    active?: boolean
}

export interface HomeUpdateProjects
{
    type: string,
    projects?: LinkedProjectProps[]
}

export type HomeActions = HomeToggleIntroText & HomeToggleProjectModal & HomeUpdateProjects;