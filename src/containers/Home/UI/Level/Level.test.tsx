import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Level, LevelProps, LevelProject } from './Level';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import { FlipCard } from '../../../../components/FlipCard/FlipCard';

const initialStore = {
    app: {
        isDarkMode: false
    }
}
let mockStore = configureMockStore([thunk])(initialStore);
const levels: LevelProject[] = require('../Levels/Levels.json');

describe('[Container] <Level>', () => 
{
    let wrapper: ReactWrapper<LevelProps>;
    
	beforeEach(() => 
	{ 
		wrapper = mount((
            <redux.Provider store={mockStore}>
                <Level currentLevel={levels[0]} levels={levels}/>
            </redux.Provider>
        ));
	});

	it('Testing component', () => 
	{
        // dragging images
        wrapper.find("img").forEach(img => img.simulate("dragstart", {
            preventDefault() {}
        }));
        // flip card
        wrapper.find(FlipCard).find("div").forEach(div => div.simulate("click"));
    });
});
