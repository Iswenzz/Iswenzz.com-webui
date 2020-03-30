import { AppActions, AppActionEnum } from './types';
import { updateObject } from '../utility/utility';
import { ReduxAppProps } from '../App';
import { detect } from 'detect-browser';

export let initialState: ReduxAppProps = {
	browserInfo: detect(),
	isDarkMode: localStorage.getItem('isDarkMode') === 'true',
	isModalActive: false,
	isPastIntro: false,

	toggleDarkMode: () => null,
	toggleModalActive: () => null,
	togglePastIntro: () => null,
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

		case AppActionEnum.TOGGLE_PAST_INTRO:
			return updateObject(state, {
				isPastIntro: action.active
			});

		default:
			return state;
	}
};

export default reducer;