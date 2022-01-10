import {HomeActions, HomeActionEnum, SetProjectsStartIndex, ToggleProjectModalActive} from ".";
import {updateObjectPartial} from "utils";
import { HomeProps } from "containers/Home/Home";

export let initialState: HomeProps = {
	projects: require("containers/Home/UI/Projects/Projects.json"),
	projectsStartIndex: 0,
	projectModalActive: false
};

const reducer = (state: HomeProps = initialState, action: HomeActions): HomeProps =>
{
	switch (action.type)
	{
		case HomeActionEnum.SET_PROJECTS_INDEX:
			action = action as SetProjectsStartIndex;
			return updateObjectPartial<HomeProps, SetProjectsStartIndex>(state, {
				projectsStartIndex: action.projectsStartIndex
			});

		case HomeActionEnum.TOGGLE_PROJECT_MODAL_ACTIVE:
			action = action as ToggleProjectModalActive;
			return updateObjectPartial<HomeProps, ToggleProjectModalActive>(state, {
				projectModalActive: action.projectModalActive
			});

		default:
			return state;
	}
};

export default reducer;