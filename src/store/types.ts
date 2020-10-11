import {Language} from "../i18n";

export enum AppActionEnum {
	TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE",
	TOGGLE_MODAL_ACTIVE = "TOGGLE_MODAL_ACTIVE",
	TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE"
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

export interface  ToggleLanguage
{
	type: string,
	active?: Language
}

export type AppActions = ToggleDarkMode & ToggleModalActive & ToggleLanguage;