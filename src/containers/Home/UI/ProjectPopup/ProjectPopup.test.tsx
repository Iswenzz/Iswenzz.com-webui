import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ProjectPopup } from './ProjectPopup';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import { Modal } from '@material-ui/core';

const initialStore = {
    app: {
        isModalActive: false,
        isDarkMode: false
    },
    home: {
        projectsStartIndex: 0,
        projects: require("../Projects/Projects.json")
    }
}
let mockStore = configureMockStore([thunk])(initialStore);

describe('[Container] <ProjectPopup>', () => 
{
    let wrapper: ReactWrapper;
    
	beforeEach(() => 
	{
		wrapper = mount((
            <redux.Provider store={mockStore}>
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
