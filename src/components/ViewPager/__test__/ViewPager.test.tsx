import React from "react";
// import { mount, ReactWrapper } from "enzyme";
// import { ViewPager, ViewPagerProps, ViewPagerState, ViewPagerConfig } from "../ViewPager";
// import { animated } from "react-spring";

// function getConfig(): ViewPagerConfig
// {
// 	return {
// 		height: 1080,
// 		width: 1920,
// 		top: 0,
// 		right: 0,
// 		maxHeight: "100vh",
// 		maxWidth: "100vw"
// 	};
// }

// describe("[Component] <ViewPager>", () => 
// {
// 	let wrapper: ReactWrapper<ViewPagerProps, ViewPagerState>;

// 	beforeEach(() => 
// 	{
// 		wrapper = mount(<ViewPager bgcolor={"#202326"} config={{...getConfig()}} items={[
// 			<p>1</p>,
// 			<p>2</p>,
// 			<p>3</p>,
// 			<p>4</p>
// 		]} />);
// 	});

// 	it("Testing component", () => 
// 	{
// 		wrapper.find(animated.div).map(i => i.simulate("mousedown", {}));
// 		wrapper.find(animated.div).map(i => i.simulate("drag", {}));
// 		wrapper.setProps({ startIndex: 0, items: [
// 			<h2>test</h2>
// 		]});
// 	});
    
// 	it("Dragging default images", () => {
// 		wrapper.find("img").forEach(img => img.simulate("dragstart", { 
// 			preventDefault() { }
// 		}));
// 	});
// });
