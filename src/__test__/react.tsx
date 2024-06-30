// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, fireEvent, RenderResult, RenderOptions } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";

import { State, setupStore } from "App/store";
import aState from "./StateBuilder";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
	preloadedState?: Partial<State>;
	store?: State;
}

export const customRender = (
	ui: ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: ExtendedRenderOptions = {}
) => {
	const Wrapper = ({ children }: PropsWithChildren<{}>) => (
		<Provider store={store}>{children}</Provider>
	);
	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

const buildRender = <Props, Queries>({
	component: Component,
	defaultState = {},
	defaultProps = {},
	queries = mockQueries
}: BuildRender<Props, Queries>) => {
	return (props = {}, state = defaultState) => {
		const store = setupStore(state);
		const view = customRender(<Component {...defaultProps} {...props} />, { store });
		const rerender = (newProps = props, newState = state) => {
			const newStore = setupStore(newState);
			return view.rerender(
				<Provider store={newStore}>
					<Component {...defaultProps} {...newProps} />
				</Provider>
			);
		};
		return { ...view, rerender, ...queries({ ...view, store }) };
	};
};

type Object<O> = O | {};
type Render = RenderResult & { store: State };

type BuildRender<Props, Queries> = {
	component: FC;
	defaultState?: State;
	defaultProps?: Object<Props>;
	queries?: (screen: Render) => Queries;
};

const mockObserverFunc = jest.fn().mockImplementation(() => ({
	disconnect: jest.fn(),
	observe: jest.fn(),
	unobserve: jest.fn()
}));

const mockQueries = <Queries,>() => ({}) as Queries;

window.ResizeObserver = window.ResizeObserver || mockObserverFunc;
window.MutationObserver = window.MutationObserver || mockObserverFunc;

export { fireEvent, buildRender, customRender as render, aState };
