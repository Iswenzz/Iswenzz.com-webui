export enum HomeActionEnum
{
    SET_PROJECTS_INDEX = 'SET_PROJECTS_INDEX',
    TOGGLE_PROJECT_MODAL_ACTIVE = 'TOGGLE_PROJECT_MODAL_ACTIVE'
}

export interface SetProjectsStartIndex
{
    type: string,
    index?: number
}

export interface ToggleProjectModalActive
{
    type: string,
    active?: boolean
}

export type HomeProjectsActions = SetProjectsStartIndex & ToggleProjectModalActive;

export type HomeActions = HomeProjectsActions;