import { HomeActions, HomeActionEnum } from './types';
import { updateObject } from '../../../utility';
import { ReduxHomeProps } from '../Home';

export const initialState: ReduxHomeProps = {
	introTextActive: false,
	toggleIntroText: () => null
};

const reducer = (state: ReduxHomeProps = initialState, action: HomeActions): ReduxHomeProps =>
{
	switch (action.type)
	{
		case HomeActionEnum.TOGGLE_INTRO_TRAIL:
			return updateObject(state, {
				introTextActive: action.active
			});

		default:
			return state;
	}
};

export default reducer;