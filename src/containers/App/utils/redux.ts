import { RootRedux } from "App/store";

import { getLocalState } from "./localStorage";

/**
 * Create an initial redux state with persisted state from local storage.
 * @param initState - The initial state of the reducer.
 * @param reducer - The name of the reducer.
 * @returns 
 */
export const createInitState = <S extends ValueOf<RootRedux>>(
	initState: S, reducer: KeyOf<RootRedux>
): S => ({
	...initState,
	...getLocalState(reducer)
});
