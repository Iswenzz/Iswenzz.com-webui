import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { NavBar } from './NavBar';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import { Fab } from '@material-ui/core';

const initialStore = {
    app: {
        isDarkMode: false
    }
}

let mockStore = configureMockStore([thunk])(initialStore);
function updateMockStore(props: Object)
{
    mockStore = configureMockStore([thunk])({
        ...initialStore,
        ...props
    });
}

describe('[Container] <NavBar>', () => 
{
    let wrapper: ReactWrapper;
    
	beforeEach(() => 
	{
		wrapper = mount((
            <redux.Provider store={mockStore}>
                <NavBar />
            </redux.Provider>
        ));
	});

	it('Testing component', () => 
	{
        wrapper.find(Fab).last().simulate("click");
    });

    it('Dark mode', () =>
    {
        updateMockStore({
            app: {
                isDarkMode: true
            }
        });
        mount((
            <redux.Provider store={mockStore}>
                <NavBar />
            </redux.Provider>
        ));
    });
});
