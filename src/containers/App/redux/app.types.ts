import {Language} from "../i18n";
import {Action} from "redux";

export enum AppActionEnum 
	{
	TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE",
	TOGGLE_MODAL_ACTIVE = "TOGGLE_MODAL_ACTIVE",
	TOGGLE_LANGUAGE = "TOGGLE_LANGUAGE"
}

export type ToggleDarkMode = Action<AppActionEnum> & {
	isDarkMode: boolean
};

export type ToggleModalActive = Action<AppActionEnum> & {
	isModalActive: boolean
};

export type ToggleLanguage = Action<AppActionEnum> & {
	language: Language
};

export type AppActions = ToggleDarkMode | ToggleModalActive | ToggleLanguage;
