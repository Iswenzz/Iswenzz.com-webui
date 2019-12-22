export enum HomeActionEnum
{
    TOGGLE_INTRO_TRAIL = 'TOGGLE_INTRO_TRAIL'
}

export interface HomeToggleIntroText 
{
    type: string,
    active: boolean
}

export type HomeActions = HomeToggleIntroText;