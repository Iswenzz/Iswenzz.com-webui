import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import RadialGradient, { GradiantProps } from "./RadialGradient";
import { Box, Grid } from "@material-ui/core";

describe("[Component] <RadialGradient>", () => 
{
	let wrapper: ShallowWrapper<GradiantProps>;

	beforeEach(() => 
	{
		wrapper = shallow(<RadialGradient position='ellipse at bottom' colors={[
			{ color: "#0e0f14", colorPercent: "0%" },
			{ color: "#181a21", colorPercent: "100%" }
		]} />);
	});

	it("Testing component", () => 
	{
		wrapper.setProps({container: true});
		expect(wrapper.find(Box)).toHaveLength(1);
		expect(wrapper.find(Grid)).toHaveLength(0);
		wrapper.setProps({container: false});
		expect(wrapper.find(Box)).toHaveLength(0);
		expect(wrapper.find(Grid)).toHaveLength(1);
	});

	it("Linear gradient", () =>
	{
		wrapper.setProps({linear: true});
	});

	it("Config props", () =>
	{
		wrapper.setProps({config: {
			position: "ellipse at bottom" ,
			colors: [
				{ color: "#0e0f14", colorPercent: "0%" },
				{ color: "#181a21", colorPercent: "100%" }
			]}
		});
	});
});
