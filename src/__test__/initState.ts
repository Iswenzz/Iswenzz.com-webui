import { AppRedux, initialState as app } from "App/redux";
import { HomeRedux, initialState as home } from "Home/redux";

export type MockState = {
	app: Partial<AppRedux>,
	home: Partial<HomeRedux>
};

const initState: MockState = {
	app,
	home
};

export default initState;
