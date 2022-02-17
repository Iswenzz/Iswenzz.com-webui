import type { RootRedux } from "App/store";

/**
 * Get the project modal state.
 */
export const getProjectModalOpen = (state: RootRedux) => state.home.projectModalOpen;

/**
 * Get the project modal start index.
 */
export const getProjectModalStartIndex = (state: RootRedux) => state.home.projectModalStartIndex;
