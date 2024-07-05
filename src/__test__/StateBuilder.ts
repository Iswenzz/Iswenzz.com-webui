import { State } from "App/store";

/**
 * Build a mock redux state.
 */
class StateBuilder {
	public state = {};

	/**
	 * Initialize a new StateBuilder.
	 * @param defaultState - The default state.
	 */
	public constructor(defaultState: State) {
		this.state = { ...defaultState };
	}

	/**
	 * Add more properties to the mock state.
	 * @param more - Properties to add to the mocked state.
	 * @returns
	 */
	public with(more: State) {
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

/**
 * Create a new state builder.
 * @param defaultState - The default state.
 * @returns
 */
const stateBuilder = (defaultState = {}) => new StateBuilder(defaultState as State);

export default stateBuilder;
