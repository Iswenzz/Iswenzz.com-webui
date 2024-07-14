import merge from "lodash/merge";

import type { State } from "App/store";
import { getLocalState } from "./localStorage";

/**
 * Create initial state combining local storage.
 * @param reducer - The reducer name.
 * @param initialState - The initial state.
 * @returns
 */
export const createInitState = <S, R extends string = string>(reducer: R, initialState: S): S =>
	merge(initialState, getLocalState(reducer as KeyOf<State>));
