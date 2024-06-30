import { State } from "App/store";

import { getLocalState } from "./localStorage";

/**
 * Create an initial redux state with persisted state from local storage.
 * @param reducer - The name of the reducer.
 * @param initState - The initial state of the reducer.
 * @returns
 */
export const createInitState = <S extends ValueOf<State>>(
	reducer: KeyOf<State>,
	initState: S
): S => ({
	...initState,
	...getLocalState(reducer)
});
