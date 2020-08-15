import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Contact } from './Contact';
import * as redux from 'react-redux';
import { store } from 'application';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@material-ui/core';

describe('[Container] <Contact>', () => 
{
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

	it('Sending email', () => 
	{
		// wrapper.find("input").at(0).simulate("change", {
		// 	target: { name: "email", value: "Test@gmail.com" },
		// 	persist: jest.fn()
		// });
		// wrapper.find("input").at(1).simulate("change", {
		// 	target: { name: "subject", value: "Test subject" },
		// 	persist: jest.fn()
		// });
		// wrapper.find("textarea").simulate("change", {
		// 	target: { name: "message", value: "Test message" },
		// 	persist: jest.fn()
		// });
		// wrapper.find(Button).simulate("submit");
    });
});
