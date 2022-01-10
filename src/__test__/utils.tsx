// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";

import initState, { MockState } from "./initState";
import aState from "./StateBuilder";

const mockStore = configureMockStore([thunk]);

const AllTheProviders = (store: MockStoreEnhanced<unknown, {}>): FC => 
	({ children }) => <Provider store={store}>{children}</Provider>;

const customRender = (ui: ReactElement, { store = mockStore(initState) } = {}) => ({
	...render(ui, { wrapper: AllTheProviders(store) }),
	store,
});

type Props<P> = P | {};

type BuildRenderOptions<DefaultProps> = {
	component: FC,
	defaultState?: MockState,
	defaultProps?: Props<DefaultProps>,
	queries?: (queries?: BuildRenderQueries) => BuildRenderQueries;
};

type BuildRenderQueries = Partial<ReturnType<typeof customRender>> & Record<string, any>;

const buildRender = <DefaultProps,>({
	component: Component,
	defaultState = initState,
	defaultProps = {},
	queries: customQueries = () => ({}) }: BuildRenderOptions<DefaultProps>) =>
{
	return (props: Props<DefaultProps> = {}, state = defaultState) =>
	{
		const store = mockStore(state);
		const rendered = customRender(
			<Provider store={store}>
				<Component {...defaultProps} {...props} />
			</Provider>
		);

		const rerender = (newProps = props, newState = state) =>
		{
			const newStore = mockStore(newState);
			return rendered.rerender(
				<Provider store={newStore}>
					<Component {...defaultProps} {...newProps} />
				</Provider>
			);
		}

		// There is another way to handle custom queries 
		// https://testing-library.com/docs/dom-testing-library/api-helpers#custom-queries
		// but it seems to return only functions
		return {
			...rendered,
			store,
			rerender,
			...customQueries({
				...rendered,
				store
			})
		};
	};
};

const mockObserverFunc = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn(),
}));

window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;

export { fireEvent, buildRender, aState };
