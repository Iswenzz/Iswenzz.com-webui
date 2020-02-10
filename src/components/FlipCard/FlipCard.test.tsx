import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { FlipCard, FlipCardProps, FlipCardState } from './FlipCard';

function flipCallback(flipState: boolean) { }

describe('[Component] <FlipCard>', () => 
{
	let wrapper: ShallowWrapper<FlipCardProps, FlipCardState>;

	beforeEach(() => 
	{
		wrapper = shallow(<FlipCard />);
	});

	it('Flipping the card.', () => 
	{
		wrapper.find('div').first().simulate('click', { preventDefault() {} });
		expect(wrapper.state().isFlipped).toEqual(true);
		wrapper.setProps({flipCallback: (flipState: boolean) => flipCallback(flipState)});
		wrapper.find('div').first().simulate('click', { preventDefault() {} });
		expect(wrapper.state().isFlipped).toEqual(false);
	});
});
