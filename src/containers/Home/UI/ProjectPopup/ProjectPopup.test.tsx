import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ProjectPopup } from './ProjectPopup';
import * as redux from 'react-redux';
import { Modal } from '@material-ui/core';
import { store } from '../../../../application';

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
        // dragging images
        wrapper.find("img").forEach(img => img.simulate("dragstart", {
            preventDefault() {}
        }));
        // close modal
        wrapper.find(Modal).simulate("close");
    });
});
