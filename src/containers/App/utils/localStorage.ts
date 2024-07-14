import merge from "lodash/merge";

import type { State } from "App/store";

/**
 * Load the local storage redux state.
 * @returns
 */
export const loadLocalState = (): State => {
	try {
		return JSON.parse(localStorage.getItem("state") || "{}") as State;
	} catch {
		return {} as State;
	}
};

/**
 * Save the local storage redux state.
 * @param state - The redux state to save, merge if exsist.
 */
export const saveLocalState = <R extends KeyOf<State>>(
	reducer: R,
	state: Partial<State[R]>
): Partial<State[R]> => {
	const serializedState = JSON.stringify(merge(loadLocalState(), { [reducer]: state }));
	localStorage.setItem("state", serializedState);
	return state;
};

/**
 * Get a specific redux state from the local storage.
 */
export const getLocalState = <R extends KeyOf<State>>(reducer: R): State[R] =>
	loadLocalState()[reducer];

/**
 * Get a specific redux state value from the local storage.
 */
export const getLocalStateValue = <R extends KeyOf<State>, T>(
	reducer: R,
	value: KeyOf<State[R]>
): Optional<T> => getLocalState(reducer)?.[value] as Optional<T>;
