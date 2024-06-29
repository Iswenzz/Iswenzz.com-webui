// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent, RenderResult } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";

import initState, { MockState } from "./initState";
import aState from "./StateBuilder";

const mockStore = configureMockStore([thunk]);
const mockQueries = <Queries,>() => ({}) as Queries;

const AllTheProviders =
	(store: MockStoreEnhanced<unknown, {}>): FC =>
	// eslint-disable-next-line react/display-name
	({ children }: PropsWithChildren<{}>) => <Provider store={store}>{children}</Provider>;

export const customRender = (ui: ReactElement, { store = mockStore(initState) } = {}) => ({
	...render(ui, { wrapper: AllTheProviders(store) }),
	store
});

type Object<O> = O | {};

type BuildRenderOptions<Props, Queries> = {
	component: FC;
	defaultState?: MockState;
	defaultProps?: Object<Props>;
	queries?: (queries: Render) => Queries;
};

type Render<Queries = {}> = RenderResult &
	Queries & {
		store: MockStoreEnhanced<unknown, {}>;
	};

const buildRender = <Props, Queries>({
	component: Component,
	defaultState = initState,
	defaultProps = {},
	queries = mockQueries
}: BuildRenderOptions<Props, Queries>) => {
	return (props: Object<Props> = {}, state = defaultState): Render<Queries> => {
		const store = mockStore(state);
		const view = customRender(
			<Provider store={store}>
				<Component {...defaultProps} {...props} />
			</Provider>
		);

		const rerender = (newProps = props, newState = state) => {
			const newStore = mockStore(newState);
			return view.rerender(
				<Provider store={newStore}>
					<Component {...defaultProps} {...newProps} />
				</Provider>
			);
		};

		// There is another way to handle custom queries
		// https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
		// but it seems to return only functions
		return {
			...view,
			store,
			rerender,
			...queries({
				...view,
				store
			})
		};
	};
};

const mockObserverFunc = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn()
}));

window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;

export { fireEvent, buildRender, customRender as render, aState };
