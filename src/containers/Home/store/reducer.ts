import { HomeActions, HomeActionEnum } from "./types";
import { updateObject } from "utility/utility";
import { ReduxHomeProps } from "containers/Home/Home";

export let initialState: ReduxHomeProps = {
	projects: require("containers/Home/UI/Projects/Projects.json"),
	projectsStartIndex: 0,
	projectModalActive: false,

	setProjectsIndex: () => null,
	toggleProjectModalActive: () => null
};

const reducer = (state: ReduxHomeProps = initialState, action: HomeActions): ReduxHomeProps =>
{
	switch (action.type)
	{
		case HomeActionEnum.SET_PROJECTS_INDEX:
			return updateObject(state, {
				projectsStartIndex: action.index
			});
		case HomeActionEnum.TOGGLE_PROJECT_MODAL_ACTIVE:
			return updateObject(state, {
				projectModalActive: action.active
			});

		default:
			return state;
	}
};

export default reducer;