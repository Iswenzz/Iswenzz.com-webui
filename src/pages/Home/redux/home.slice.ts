import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createInitState } from "App/utils/redux";

export type HomeState = {
	projectModalOpen: boolean;
	projectModalIndex: number;
};

export const initialState = createInitState<HomeState>("home", {
	projectModalOpen: false,
	projectModalIndex: 0
});

const slice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setProjectModalOpen: (state: HomeState, action: PayloadAction<boolean>) => {
			state.projectModalOpen = action.payload;
		},
		setProjectModalIndex: (state: HomeState, action: PayloadAction<number>) => {
			state.projectModalIndex = action.payload;
		}
	}
});

export const { setProjectModalOpen, setProjectModalIndex } = slice.actions;

export default slice.reducer;
