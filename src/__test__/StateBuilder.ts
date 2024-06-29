import initState, { MockState } from "./initState";

/**
 * Build a mock redux state.
 */
class StateBuilder {
	public state = {};

	/**
	 * Initialize a new StateBuilder.
	 * @param defaultState - The default state.
	 */
	public constructor(defaultState: MockState) {
		this.state = { ...defaultState };
	}

	/**
	 * Add more properties to the mock state.
	 * @param more - Properties to add to the mocked state.
	 * @returns
	 */
	public with(more: MockState) {
		this.state = {
			...this.state,
			...more
		};
		return this;
	}

	/**
	 * Build the mock state.
	 * @returns
	 */
	public build() {
		return this.state;
	}
}

const stateBuilder = (defaultState = initState) => new StateBuilder(defaultState);

export default stateBuilder;
