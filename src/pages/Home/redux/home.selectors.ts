import type { State } from "App/store";

export const getProjectModalOpen = (state: State) => state.home.projectModalOpen;
export const getProjectModalStartIndex = (state: State) => state.home.projectModalStartIndex;
