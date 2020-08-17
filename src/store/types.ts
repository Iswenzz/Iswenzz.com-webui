export enum AppActionEnum
	{
	TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE",
	TOGGLE_MODAL_ACTIVE = "TOGGLE_MODAL_ACTIVE"
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

export type AppActions = ToggleDarkMode & ToggleModalActive;