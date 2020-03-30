export enum AppActionEnum
{
    TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
    TOGGLE_MODAL_ACTIVE = 'TOGGLE_MODAL_ACTIVE',
    TOGGLE_PAST_INTRO = 'TOGGLE_PAST_INTRO'
}

export interface ToggleDarkMode
{
    type: string,
    active?: boolean
}

export interface ToggleModalActive
{
    type: string,
    active?: boolean
}

export interface TogglePastIntro
{
    type: string,
    active?: boolean
}

export type AppActions = ToggleDarkMode & ToggleModalActive & TogglePastIntro;