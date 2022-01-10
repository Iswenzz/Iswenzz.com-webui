import {HomeActions, HomeActionEnum, SetProjectsStartIndex, ToggleProjectModalActive} from ".";
import {updateObjectPartial} from "utils/objects";
import { LinkedProjectProps } from "Home/components";

export type HomeRedux = {
	projects: LinkedProjectProps[],
	projectsStartIndex: number,
	projectModalActive: boolean
};

export type HomeDispatch = {
	setProjectsIndex: (index: number) => void,
	toggleProjectModalActive: (active: boolean) => void
};

export let initialState: HomeRedux = {
	projects: require("Home/components/Projects/Projects.json"),
	projectsStartIndex: 0,
	projectModalActive: false
};

const reducer = (state: HomeRedux = initialState, action: HomeActions): HomeRedux =>
{
	switch (action.type)
	{
		case HomeActionEnum.SET_PROJECTS_INDEX:
			action = action as SetProjectsStartIndex;
			return updateObjectPartial<HomeRedux, SetProjectsStartIndex>(state, {
				projectsStartIndex: action.projectsStartIndex
			});

		case HomeActionEnum.TOGGLE_PROJECT_MODAL_ACTIVE:
			action = action as ToggleProjectModalActive;
			return updateObjectPartial<HomeRedux, ToggleProjectModalActive>(state, {
				projectModalActive: action.projectModalActive
			});

		default:
			return state;
	}
};

export default reducer;