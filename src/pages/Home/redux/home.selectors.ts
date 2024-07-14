import type { State } from "App/store";

export const getProjectModalOpen = (state: State) => state.home.projectModalOpen;
export const getProjectModalIndex = (state: State) => state.home.projectModalIndex;
