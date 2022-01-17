import merge from "lodash/merge";

import type { RootRedux } from "App/store";

/**
 * Load the local storage redux state.
 * @returns 
 */
export const loadLocalState = (): RootRedux | Record<string, unknown> => 
{
	try 
	{
		const serializedState = localStorage.getItem("state");
		if (!serializedState) 
			return { };
		return JSON.parse(serializedState) as RootRedux;
	}
	catch
	{
	 	return { };
	}
};

/**
 * Save the local storage redux state.
 * @param state - The redux state to save, merge if exsist. 
 */
export const saveLocalState = <R extends keyof RootRedux>(
	reducer: R, state: Partial<RootRedux[R]> 
): Partial<RootRedux[R]> => 
{
	const oldState = loadLocalState();
	const serializedState = JSON.stringify(merge(oldState, { [reducer]: state }));
	localStorage.setItem("state", serializedState);
	return state;
};

/**
 * Get a specific redux state from the local storage.
 */
export const getLocalState = <R extends keyof RootRedux>(reducer: R): RootRedux[R] =>
{
	const oldState = loadLocalState() as RootRedux;
	return oldState[reducer];
};

/**
 * Get a specific redux state value from the local storage.
 */
export const getLocalStateValue = <R extends keyof RootRedux, T>(
	reducer: R, value: keyof RootRedux[R]
): Optional<T> =>
{
	const oldState = loadLocalState() as RootRedux;
	return oldState[reducer]?.[value] as Optional<T>;
};
