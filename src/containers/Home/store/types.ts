import { LinkedProjectProps } from "../UI/Project/Project";

export enum HomeActionEnum
{
    UPDATE_PROJECTS = 'UPDATE_PROJECTS',
    SET_PROJECTS_INDEX = 'SET_PROJECTS_INDEX'
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

export type HomeProjectsActions = SetProjectsStartIndex 
    & UpdateProjects;

export type HomeActions = HomeProjectsActions;