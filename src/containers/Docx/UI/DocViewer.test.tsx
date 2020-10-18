import React from "react";
import { mount, ReactWrapper } from "enzyme";
import DocViewer from "./DocViewer";

describe("[Container] <DocViewer>", () => {

	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount(<DocViewer />);
	});

	it("Mount test", () => {
		expect(wrapper).toBeDefined();
	});

	// TODO
	// it("Click", () => {
	// 	console.log(wrapper.debug());
	// 	wrapper.simulate("click");
	// });
});