export enum HomeActionEnum
{
    SET_PROJECTS_INDEX = 'SET_PROJECTS_INDEX'
}

export interface SetProjectsStartIndex
{
    type: string,
    index?: number
}

export type HomeProjectsActions = SetProjectsStartIndex;

export type HomeActions = HomeProjectsActions;