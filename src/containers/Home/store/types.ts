export enum HomeActionEnum {
	SET_PROJECTS_INDEX = "SET_PROJECTS_INDEX",
	TOGGLE_PROJECT_MODAL_ACTIVE = "TOGGLE_PROJECT_MODAL_ACTIVE"
}

export type SetProjectsStartIndex = {
	type: string,
	index?: number
};

export type ToggleProjectModalActive = {
	type: string,
	active?: boolean
};

export type HomeProjectsActions = SetProjectsStartIndex & ToggleProjectModalActive;

export type HomeActions = HomeProjectsActions;