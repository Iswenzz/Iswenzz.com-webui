import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { TrailText, TrailProps } from './TrailText';

describe('[Component] <TrailText>', () => 
{
	let wrapper: ShallowWrapper<TrailProps>

	beforeEach(() => 
	{
		wrapper = shallow(<TrailText active items={["test"]} />);
	});

	it('Testing component', () => 
	{
		wrapper.setProps({active: false});
		wrapper.setProps({active: true});
	});
});
