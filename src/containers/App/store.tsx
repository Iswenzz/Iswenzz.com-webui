import { FC } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import app, { AppRedux } from "App/redux";
import home, { HomeRedux } from "Home/redux";

const store = configureStore({
	reducer: {
		app,
		home
	}
});

export type RootRedux = {
	app: AppRedux;
	home: HomeRedux;
};

/**
 * Redux store provider.
 */
const Redux: FC = ({ children }) => (
	<Provider store={store}>
		{children}
	</Provider>
);

export default Redux;
