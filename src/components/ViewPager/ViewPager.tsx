import React, { FunctionComponent, useState, useEffect } from 'react';
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
	startIndex?: number,
	height?: string,
	width?: string
}

export interface ViewPagerState
{
	items?: JSX.Element[]
}

const ViewPager: FunctionComponent<ViewPagerProps> = (props: ViewPagerProps): JSX.Element => 
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
		<div>
			{springProps.map(({ x, display, scale }, i) => (
				<animated.div className="carousel" {...bind()} key={i} ref={ref => setDivRef(ref)}
				style={{ display, x, height: props.height, width: props.width }}>
					<animated.div style={{scale}}>
						{items[i]}
					</animated.div>
				</animated.div>
			))}
		</div>
	);
}

export default ViewPager;