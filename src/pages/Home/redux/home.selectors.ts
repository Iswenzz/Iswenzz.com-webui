import type { State } from "App/store";

/**
 * Get the project modal state.
 */
export const getProjectModalOpen = (state: State) => state.home.projectModalOpen;

/**
 * Get the project modal start index.
 */
export const getProjectModalStartIndex = (state: State) => state.home.projectModalStartIndex;
