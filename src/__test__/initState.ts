import { RootRedux } from "App/store";
import { initialState as app } from "App/redux";
import { initialState as home } from "Home/redux";

export type MockState = {
	[key in keyof RootRedux]: Partial<RootRedux[key]>;
};

const initState: MockState = {
	app,
	home
};

export default initState;
