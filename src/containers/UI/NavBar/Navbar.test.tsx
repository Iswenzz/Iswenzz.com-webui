import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { NavBar } from './NavBar';
import * as redux from 'react-redux';
import { Fab, Drawer } from '@material-ui/core';
import { store } from 'application';
import { Link } from 'react-scroll';

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
        wrapper.find(Link).map(i => i.simulate("click"));
        wrapper.find(Fab).map(i => i.simulate("click"));
        wrapper.find(Drawer).map(i => i.simulate("click"));
    });
});
