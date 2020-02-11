import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Project, LinkedProjectProps, ProjectProps } from './Project';
import configureMockStore from 'redux-mock-store';
import * as redux from 'react-redux';
import thunk from 'redux-thunk';
import { Card } from '@material-ui/core';

const project: LinkedProjectProps = {
    title: "AION Chat",
    sourceURL: "https://github.com/Iswenzz/AION-Chat",
    isOpenSource: true,
    showTitle: false,
    width: "200px",
    height: "100px",
    cardImage: "https://i.imgur.com/tyhB0rJ.png",
    renderUrl: "https://raw.githubusercontent.com/Iswenzz/AION-Chat/master/README.md",
    renderIcons: [
        {"name": "C#", "src": "https://iswenzz.com:1337/iswenzz/devicons/csharp.svg"},
        {"name": ".NET", "src": "https://iswenzz.com:1337/iswenzz/devicons/dotnet.svg"}
    ]
}

const initialStore = {
    app: {
        isModalActive: false
    }
}
let mockStore = configureMockStore([thunk])(initialStore);

describe('[Container] <Project>', () => 
{
    let wrapper: ReactWrapper<ProjectProps>;
    
	beforeEach(() => 
	{
		wrapper = mount((
            <redux.Provider store={mockStore}>
                <Project currentProj={project} projects={[project]}/>
            </redux.Provider>
        ));
	});

	it('Testing component', () => 
	{
        wrapper.find(Card).simulate("click");
    });
});
