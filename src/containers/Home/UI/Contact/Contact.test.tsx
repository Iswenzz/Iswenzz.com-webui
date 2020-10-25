import React from "react";
import { mount, ReactWrapper } from "enzyme";
import { Contact } from "./Contact";
import * as redux from "react-redux";
import { store } from "application";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@material-ui/core";
// mocks
// import mockAxios from "./__mocks__/axios";
// import { useMediaQuery } from "./__mocks__/react-responsive";

describe("[Container] <Contact>", () => 
{
	it("Portrait mode", () =>
	{
		const Context = React.createContext({orientation: "portrait"});
		mount((
			<redux.Provider store={store}>
				<Context.Consumer>
					{value => <Contact />}
				</Context.Consumer>
			</redux.Provider>
		));
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let wrapper: ReactWrapper;


	beforeEach(() => 
	{
		wrapper = mount((
			<redux.Provider store={store}>
				<Contact />
			</redux.Provider>
		)); 
	});


	it("Mount test", () => {
		expect(wrapper.find(Contact)).toBeDefined();
	});

	it("Sending email", () => 
	{
		wrapper.find("#email").first().simulate("change", {
			target: { name: "email", value: "Test@gmail.com" },
			persist: jest.fn()
		});
		wrapper.find("#subject").first().simulate("change", {
			target: { name: "subject", value: "Test subject" },
			persist: jest.fn()
		});
		wrapper.find("#message").first().simulate("change", {
			target: { name: "message", value: "Test message" },
			persist: jest.fn()
		});
		wrapper.find(Button).simulate("submit");
	});
});
