import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { EmblaCarouselComponent, EmblaCarouselProps } from './EmblaCarousel';
import { PrevButton, NextButton, DotButton } from './EmblaCarouselButtons/EmblaCarouselButtons';

describe('[Component] <ViewPager>', () => 
{
    let wrapper: ReactWrapper<EmblaCarouselProps>;

	beforeEach(() => 
	{
        wrapper = mount((
            <EmblaCarouselComponent delayLength={300} autoplay>
                <h2>Test</h2>
                <h2>Test</h2>
            </EmblaCarouselComponent> 
        ));
	});

	it('Testing component', () => 
	{
        wrapper.setProps({autoplay: false});
    });

    it('Scroll to item', () => {
        wrapper.find(DotButton).first().simulate("click");
    });

    it('Next item', () => {
        wrapper.find(NextButton).simulate("click");
    });
    
    it('Prev item', () => {
        wrapper.find(NextButton).simulate("click");
        wrapper.find(PrevButton).simulate("click");
    });
});
