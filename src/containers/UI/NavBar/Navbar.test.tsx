import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { NavBar } from './NavBar';
import * as redux from 'react-redux';
import { Fab } from '@material-ui/core';
import { store } from 'application';

describe('[Container] <NavBar>', () => 
{
    let wrapper: ReactWrapper;
    
	beforeEach(() => 
	{
		wrapper = mount((
            <redux.Provider store={store}>
                <NavBar />
            </redux.Provider>
        ));
	});

	it('Testing component', () => 
	{
        wrapper.find(Fab).last().simulate("click");
    });
});
