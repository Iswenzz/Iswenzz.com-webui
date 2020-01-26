import { HomeActions, HomeActionEnum } from './types';
import { updateObject } from '../../../utility/utility';
import { ReduxHomeProps } from '../Home';

export let initialState: ReduxHomeProps = {
	projects: require('../UI/Projects/Projects.json'),
	projectsStartIndex: 0,

	updateProjects: () => null,
	setProjectsIndex: () => null
};

const reducer = (state: ReduxHomeProps = initialState, action: HomeActions): ReduxHomeProps =>
{
	switch (action.type)
	{
		case HomeActionEnum.UPDATE_PROJECTS:
			return updateObject(state, {
				projects: action.projects
			});

		case HomeActionEnum.SET_PROJECTS_INDEX:
			return updateObject(state, {
				projectsStartIndex: action.index
			});

		default:
			return state;
	}
};

export default reducer;