import React from "react";
import { mount, ReactWrapper } from "enzyme";
import * as redux from "react-redux";
import { store } from "../../application";
import Docx from "./Docx";

describe("[Container] <Docx>", () => {

	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount((
			<redux.Provider store={store}>
				<Docx />
			</redux.Provider>));
	});

	it("Mount test", () => {
		expect(wrapper).toBeDefined();
	});
});