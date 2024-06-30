import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createInitState } from "App/utils/redux";

export type HomeState = {
	projectModalOpen: boolean;
	projectModalStartIndex: number;
};

export const initialState = createInitState<HomeState>("home", {
	projectModalOpen: false,
	projectModalStartIndex: 0
});

const slice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setProjectModalOpen: (state: HomeState, action: PayloadAction<boolean>) => ({
			...state,
			projectModalOpen: action.payload
		}),
		setProjectModalStartIndex: (state: HomeState, action: PayloadAction<number>) => ({
			...state,
			projectModalStartIndex: action.payload
		})
	}
});

export const { setProjectModalOpen, setProjectModalStartIndex } = slice.actions;

export default slice.reducer;
