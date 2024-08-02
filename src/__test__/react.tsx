// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import { Provider } from "react-redux";

import { DarkTheme, Themes } from "@izui/react";
import { AppStore, State, setupStore } from "App/store";
import aState from "./StateBuilder";

export const customRender = (
	ui: ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
		...renderOptions
	}: CustomRenderOptions = {}
): CustomRenderResult => {
	const wrapper: FC<PropsWithChildren> = ({ children }) => (
		<Provider store={store}>
			<Themes theme={DarkTheme}>{children}</Themes>
		</Provider>
	);
	return { store, ...render(ui, { wrapper, ...renderOptions }) };
};

const buildRender = <Props, Queries>({
	component: Component,
	defaultState = {},
	defaultProps = {},
	queries = () => ({}) as Queries
}: BuildRenderOptions<Props, Queries>) => {
	return (props = defaultProps, state = defaultState): BuildRenderResult<Props, Queries> => {
		const store = setupStore(state);
		const view = customRender(<Component {...defaultProps} {...props} />, { store });
		const rerender = (newProps = props, newState = state) => {
			const newStore = setupStore(newState);
			return view.rerender(
				<Provider store={newStore}>
					<Themes theme={DarkTheme}>
						<Component {...defaultProps} {...newProps} />
					</Themes>
				</Provider>
			);
		};
		return { ...view, ...queries(view), rerender };
	};
};

type Object<O> = O | {};

type CustomRenderOptions = RenderOptions & {
	preloadedState?: Partial<State>;
	store?: AppStore;
};

type CustomRenderResult = RenderResult & {
	store: AppStore;
};

type BuildRenderOptions<Props, Queries> = {
	component: FC<Object<Props>>;
	defaultState?: Partial<State>;
	defaultProps?: Object<Props>;
	queries?: (screen: CustomRenderOptions) => Queries;
};

type BuildRenderResult<Props, Queries> = CustomRenderResult &
	Queries & {
		rerender: (props: Object<Props>, state: State) => void;
	};

export * from "@testing-library/react";
export { buildRender, customRender as render, aState };
