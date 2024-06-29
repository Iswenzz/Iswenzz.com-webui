import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createInitState } from "App/utils/redux";

export type HomeRedux = {
	projectModalOpen: boolean;
	projectModalStartIndex: number;
};

export const initialState = createInitState<HomeRedux>(
	{
		projectModalOpen: false,
		projectModalStartIndex: 0
	},
	"home"
);

const slice = createSlice({
	name: "home",
	initialState,
	reducers: {
		setProjectModalOpen: (state: HomeRedux, action: PayloadAction<boolean>) => ({
			...state,
			projectModalOpen: action.payload
		}),
		setProjectModalStartIndex: (state: HomeRedux, action: PayloadAction<number>) => ({
			...state,
			projectModalStartIndex: action.payload
		})
	}
});

export const { setProjectModalOpen, setProjectModalStartIndex } = slice.actions;

export default slice.reducer;
