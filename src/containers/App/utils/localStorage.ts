import merge from "lodash/merge";

import type { State } from "App/store";

/**
 * Load the local storage redux state.
 * @returns
 */
export const loadLocalState = (): State | Record<string, unknown> => {
	try {
		const serializedState = localStorage.getItem("state");
		if (!serializedState) return {};
		return JSON.parse(serializedState) as State;
	} catch {
		return {};
	}
};

/**
 * Save the local storage redux state.
 * @param state - The redux state to save, merge if exsist.
 */
export const saveLocalState = <R extends keyof State>(
	reducer: R,
	state: Partial<State[R]>
): Partial<State[R]> => {
	const oldState = loadLocalState();
	const serializedState = JSON.stringify(merge(oldState, { [reducer]: state }));
	localStorage.setItem("state", serializedState);
	return state;
};

/**
 * Get a specific redux state from the local storage.
 */
export const getLocalState = <R extends keyof State>(reducer: R): State[R] => {
	const oldState = loadLocalState() as State;
	return oldState[reducer];
};

/**
 * Get a specific redux state value from the local storage.
 */
export const getLocalStateValue = <R extends keyof State, T>(
	reducer: R,
	value: keyof State[R]
): Optional<T> => {
	const oldState = loadLocalState() as State;
	return oldState[reducer]?.[value] as Optional<T>;
};
