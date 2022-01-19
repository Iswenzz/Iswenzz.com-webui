import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createInitState } from "App/utils/redux";
import type { ProjectSource } from "Home/components";
import projectSourceJson from "Home/design/Projects/Projects.json";

export type HomeRedux = {
	projects: ProjectSource[],
	projectsStartIndex: number
};

export const initialState = createInitState<HomeRedux>({
	projects: projectSourceJson as ProjectSource[],
	projectsStartIndex: 0
}, "home");

const slice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setProjectsStartIndex: (state: any, action: PayloadAction<number>) => ({
			...state,
			projectsStartIndex: action.payload
		}),
		setProjects: (state: any, action: PayloadAction<ProjectSource[]>) => ({
			...state,
			projects: action.payload
		}),
	}
});

export const { setProjectsStartIndex } = slice.actions;

export default slice.reducer;
