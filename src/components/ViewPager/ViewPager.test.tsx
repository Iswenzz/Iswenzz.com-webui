import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { ViewPager, ViewPagerProps, ViewPagerState, ViewPagerConfig } from './ViewPager';
import { animated } from 'react-spring';

function getConfig(): ViewPagerConfig
{
    return {
        height: 1080,
        width: 1920,
        top: 0,
        right: 0
    }
}

describe('[Component] <ViewPager>', () => 
{
    let wrapper: ReactWrapper<ViewPagerProps, ViewPagerState>;

	beforeEach(() => 
	{
        wrapper = mount(<ViewPager bgcolor={'#202326'} config={{...getConfig()}} />);
	});

	it('Testing component', () => 
	{
        wrapper.setProps({ startIndex: 0, items: [
            <h1>test</h1>
        ]});
        wrapper.find(animated.div).first().simulate("drag", {})
    });
    
    it('Dragging default images', () => {
        wrapper.find('img').forEach(img => img.simulate('dragstart', { 
            preventDefault() { }
        }));
    });
});
