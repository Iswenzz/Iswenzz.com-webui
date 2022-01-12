// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
// import { mount, ReactWrapper } from "enzyme";
// import { EmblaCarouselComponent, EmblaCarouselProps } from "../EmblaCarousel";
// import { PrevButton, NextButton, DotButton } from "../EmblaCarouselButtons/EmblaCarouselButtons";

// describe("[Component] <ViewPager>", () => 
// {
// 	let wrapper: ReactWrapper<EmblaCarouselProps>;

// 	beforeEach(() => 
// 	{
// 		wrapper = mount((
// 			<EmblaCarouselComponent delayLength={300} autoplay>
// 				<h2>Test</h2>
// 				<h2>Test</h2>
// 			</EmblaCarouselComponent>
// 		));
// 	});

// 	it("Mount test", () => {
// 		expect(wrapper.find("h2")).toBeDefined();
// 		expect(wrapper.find("h2")).toHaveLength(2);
// 	});

// 	it("Testing props", () => 
// 	{
// 		wrapper.setProps({autoplay: false});
// 		expect(wrapper.prop("autoplay")).toBe(false);
// 	});

// 	it("Scroll to item", () => {
// 		wrapper.find(DotButton).last().simulate("click");
// 		expect(wrapper.find(".embla-dot").last()).toBeDefined();
// 		expect(wrapper.find(".embla-dot").last().hasClass("is-selected")).toBe(true);
// 	});

// 	it("Next item", () => {
// 		// setup : 1st slide
// 		wrapper.find(DotButton).first().simulate("click");
// 		expect(wrapper.find(".embla-dot").first().hasClass("is-selected")).toBe(true);
// 		// test : next slide = last
// 		wrapper.find(NextButton).simulate("click");
// 		expect(wrapper.find(".embla-dot").last().hasClass("is-selected")).toBe(true);
// 	});
    
// 	it("Prev item", () => {
// 		// setup : last slide
// 		wrapper.find(DotButton).last().simulate("click");
// 		expect(wrapper.find(".embla-dot").last().hasClass("is-selected")).toBe(true);
// 		// test : prev slide = 1st
// 		wrapper.find(PrevButton).simulate("click");
// 		expect(wrapper.find(".embla-dot").first().hasClass("is-selected")).toBe(true);
// 	});

// 	/* AUTOPLAY TESTS
// 	it("Auto Play", (done) => {
// 		const delay = 10;
// 		wrapper.setProps({autoplay: true, delayLength: delay});
// 		// setup : 1st slide
// 		wrapper.find(DotButton).first().simulate("click");
// 		expect(wrapper.find(".embla-dot").first().hasClass("is-selected")).toBe(true);
// 		// test : autoplay = last slide after 1 tick
// 		// console.log(wrapper.debug());
// 		setTimeout(() => {
// 			// console.log(wrapper.debug());
// 			expect(wrapper.find(".embla-dot").last().hasClass("is-selected")).toBe(true);
// 			done();
// 		}, delay*1.5);
// 	});

// 	it("Auto Loop", (done) => {
// 		// setup : last slide
// 		wrapper.find(DotButton).last().simulate("click");
// 		expect(wrapper.find(".embla-dot").last().hasClass("is-selected")).toBe(true);
// 		// test : autoplay loops on 1st slide
// 		const delay = 10;
// 		wrapper.setProps({autoplay: true, delayLength: delay});
// 		setTimeout(() => {
// 			expect(wrapper.find(".embla-dot").first().hasClass("is-selected")).toBe(true);
// 			done();
// 		}, delay*1,5);
// 	}); */
// });
