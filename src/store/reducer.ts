import { AppActions, AppActionEnum } from './types';
import { updateObject } from '../utility/utility';
import { ReduxAppProps } from '../App';

export let initialState: ReduxAppProps = {
	isDarkMode: localStorage.getItem('isDarkMode') === 'true',
	isModalActive: false,

	toggleDarkMode: () => null,
	toggleModalActive: () => null
};

const reducer = (state: ReduxAppProps = initialState, action: AppActions): ReduxAppProps =>
{
	switch (action.type)
	{
		case AppActionEnum.TOGGLE_DARK_MODE:
			return updateObject(state, {
				isDarkMode: action.active
			});

		case AppActionEnum.TOGGLE_MODAL_ACTIVE:
			return updateObject(state, {
				isModalActive: action.active
			});

		default:
			return state;
	}
};

export default reducer;