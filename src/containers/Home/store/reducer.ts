import React from 'react';
import { HomeActions, HomeActionEnum } from './types';
import { updateObject } from '../../../utility';
import { ReduxHomeProps } from '../Home';
import { LinkedProjectProps } from '../../../components/Project/Project';

export let initialState: ReduxHomeProps = {
	projectModalActive: false,
	introTextActive: false,
	projects: require('../UI/Projects/Projects.json'),

	toggleIntroText: () => null,
	toggleProjectModal: () => null,
	updateProjects: () => null
};

const reducer = (state: ReduxHomeProps = initialState, action: HomeActions): ReduxHomeProps =>
{
	switch (action.type)
	{
		case HomeActionEnum.TOGGLE_INTRO_TRAIL:
			return updateObject(state, {
				introTextActive: action.active
			});
		
		case HomeActionEnum.TOGGLE_PROJECT_MODAL:
			return updateObject(state, {
				projectModalActive: action.active
			});

		case HomeActionEnum.UPDATE_PROJECTS:
			return updateObject(state, {
				projects: action.projects
			});

		default:
			return state;
	}
};

export default reducer;