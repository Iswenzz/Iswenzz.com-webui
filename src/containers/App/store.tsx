import { FC } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import app from "App/redux";
import home from "Home/redux";

const store = configureStore({
	reducer: {
		app,
		home
	}
});

export type RootRedux = ReturnType<typeof store.getState>;

/**
 * Redux store provider.
 */
const Redux: FC = ({ children }) => (
	<Provider store={store}>
		{children}
	</Provider>
);

export default Redux;
