import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ProjectPopup } from './ProjectPopup';
import * as redux from 'react-redux';
import * as homeActions from 'containers/Home/store/actions';
import { Fab } from '@material-ui/core';
import { store } from 'application';

describe('[Container] <ProjectPopup>', () => 
{
    let wrapper: ReactWrapper;
    
	beforeEach(() => 
	{
		wrapper = mount((
            <redux.Provider store={store}>
                <ProjectPopup />
            </redux.Provider>
        ));
    });

	it('Testing component', () => 
	{
        // open modal TODO

        // dragging images
        wrapper.find("img").forEach(img => img.simulate("dragstart", {
            preventDefault() {}
        }));
        // close modal
        wrapper.find(Fab).forEach(fab => 
        {
            if (fab.props().id === "fab_modal_close")
                fab.simulate("click");
        });
    });
});
