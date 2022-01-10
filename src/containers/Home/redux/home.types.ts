import {Action} from "redux";

export enum HomeActionEnum {
	SET_PROJECTS_INDEX = "SET_PROJECTS_INDEX",
	TOGGLE_PROJECT_MODAL_ACTIVE = "TOGGLE_PROJECT_MODAL_ACTIVE"
}

export type SetProjectsStartIndex = Action<HomeActionEnum> & {
	projectsStartIndex: number
};

export type ToggleProjectModalActive = Action<HomeActionEnum> & {
	projectModalActive: boolean
};

export type HomeActions = SetProjectsStartIndex | ToggleProjectModalActive;