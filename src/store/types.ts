export enum AppActionEnum
{
    TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}

export interface ToggleDarkMode
{
    type: string,
    active?: boolean
}

export type AppActions = ToggleDarkMode;