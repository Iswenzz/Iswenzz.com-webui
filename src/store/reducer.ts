import { AppActions, AppActionEnum } from './types';
import { updateObject } from '../Utility/utility';
import { ReduxAppProps } from '../App';

export let initialState: ReduxAppProps = {
	isDarkMode: false,

	toggleDarkMode: () => null
};

const reducer = (state: ReduxAppProps = initialState, action: AppActions): ReduxAppProps =>
{
	switch (action.type)
	{
		case AppActionEnum.TOGGLE_DARK_MODE:
			return updateObject(state, {
				isDarkMode: action.active
			});

		default:
			return state;
	}
};

export default reducer;