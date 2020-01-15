import React, { FunctionComponent, useState, useEffect, LegacyRef, RefObject, forwardRef, Ref } from 'react';
import clamp from 'lodash/clamp';
import { useSprings, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './ViewPager.scss';

const defaultItems: JSX.Element[] = [
	<img onDragStart={e => e.preventDefault()} src='https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='carousel' />,
	<img onDragStart={e => e.preventDefault()} src='https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='carousel' />,
	<img onDragStart={e => e.preventDefault()} src='https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='carousel' />,
	<img onDragStart={e => e.preventDefault()} src='https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='carousel' />,
	<img onDragStart={e => e.preventDefault()} src='https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='carousel' />
];

export interface ViewPagerProps
{
	items?: JSX.Element[],
	style?: React.CSSProperties,
	bgcolor?: string,
	ref?: RefObject<HTMLDivElement>,
	startIndex?: number,
	config?: ViewPagerConfig
}

export interface ViewPagerConfig
{
	top?: string | number,
	right?: string | number,
	width?: string | number,
	height?: string | number
}

export interface ViewPagerState
{
	items?: JSX.Element[],
	mainRef?: RefObject<HTMLDivElement>
}

const ViewPager = forwardRef((props: ViewPagerProps, ref: any) => 
{
	const [items,] = useState(props.items !== undefined ? props.items : defaultItems);
	const [index, setIndex] = useState(props.startIndex !== undefined ? props.startIndex : 0);
	const [divRef, setDivRef] = useState<HTMLElement | null>(null);
	
	const [springProps, set] = useSprings(items.length, i => 
	({
		x: i * window.innerWidth,
		scale: 1,
		display: 'block'
	}));

	useEffect(() =>
	{
		// TODO better way to get the right item
		setIndex(props.startIndex!);
		divRef?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: false }));
	}, 
	[props.startIndex, divRef]);

	const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => 
	{
		if (down && distance > window.innerWidth / 2) 
		{
			setIndex(clamp(index + (xDir > 0 ? -1 : 1), 0, items.length - 1));
			cancel!();
		}

		set(i => 
		{
			if (i < index - 1 || i > index + 1) 
				return { display: 'none' };

			const x = (i - index) * window.innerWidth + (down ? mx : 0);
			const scale = down ? 1 - distance / window.innerWidth / 2 : 1;

			return { x, scale, display: 'block' };
		});
	});
	
	return (
		<div style={props.style}>
			{springProps.map(({ x, display, scale }, i) => (
				<animated.div className="carousel" {...bind()} key={i} ref={ref}
				style={{display, x,
				height: props.config?.height, width: props.config?.width,
				top: props.config?.top, right: props.config?.right }}>
					<animated.div ref={ref => setDivRef(ref)} style={{scale, background: props.bgcolor}}>
						{items[i]}
					</animated.div>
				</animated.div>
			))}
		</div>
	);
});

export default ViewPager;