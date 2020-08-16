import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { StonecutterGrid, StonecutterGridProps } from "./StonecutterGrid";

describe("[Component] <StonecutterGrid>", () => 
{
	let wrapper: ShallowWrapper<StonecutterGridProps>;

	beforeEach(() => 
	{
		wrapper = shallow(<StonecutterGrid config={{ component: "div", columns: 5,
			perspective: 600, columnWidth: 200, gutterWidth: 30, gutterHeight: 0,
			springConfig: { stiffness: 100, damping: 12 } }} />);
	});

	it("Testing component", () => 
	{
		wrapper.setProps({responsive: false});
		wrapper.setProps({responsive: true});
	});
});
