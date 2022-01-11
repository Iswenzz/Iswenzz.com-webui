import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LinkedProjectProps } from "Home/components";
import { updateObjectPartial } from "utils/objects";

export type HomeRedux = {
	projects: LinkedProjectProps[],
	projectsStartIndex: number,
	projectModalActive: boolean
};

export const initialState: HomeRedux = {
	projects: require("Home/components/Projects/Projects.json"),
	projectsStartIndex: 0,
	projectModalActive: false
};

const slice = createSlice({
	name: "home",
	initialState,
	reducers: {
		/**
		 * Set the projects start index.
		 */
		setProjectsStartIndex: (state, action: PayloadAction<number>) => updateObjectPartial<HomeRedux>(state, {
			projectsStartIndex: action.payload
		})
	}
});

export const { setProjectsStartIndex } = slice.actions;

export default slice.reducer;
