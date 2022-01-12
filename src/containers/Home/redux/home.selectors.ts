import type { RootRedux } from "App/store";

/**
 * Get the projects start index.
 */
export const getProjectsStartIndex = (state: RootRedux) => state.home.projectsStartIndex;

/**
 * Get the projects data.
 */
export const getProjects = (state: RootRedux) => state.home.projects;
