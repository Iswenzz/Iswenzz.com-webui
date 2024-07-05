import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "App/redux";
import home from "Home/redux";

import { loadLocalState } from "./utils/localStorage";

const rootReducer = combineReducers({
	app,
	home
});

export const setupStore = (preloadedState?: Partial<State>) =>
	configureStore({
		reducer: rootReducer,
		preloadedState
	});

export type State = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type Thunk = { state: State; dispatch: AppDispatch };

/**
 * Redux store provider.
 */
const Redux: FC<PropsWithChildren> = ({ children }) => (
	<Provider store={setupStore(loadLocalState())}>{children}</Provider>
);

export default Redux;
