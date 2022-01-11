import React, { useState, useEffect, RefObject, memo, FC } from "react";
import clamp from "lodash/clamp";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import "./ViewPager.scss";

export type ViewPagerProps = {
	items: JSX.Element[],
	style?: React.CSSProperties,
	bgcolor?: string,
	startIndex?: number,
	config?: ViewPagerConfig,
	onIndexChange?: (index: number) => void
};

export type ViewPagerConfig = {
	top?: string | number,
	right?: string | number,
	width?: string | number,
	height?: string | number,
	maxWidth?: string | number,
	maxHeight?: string | number,
};

export type ViewPagerState = {
	items?: JSX.Element[],
	mainRef?: RefObject<HTMLDivElement>
};

/**
 * 3D Carousel with gesture features.
 * @param props - ViewPagerProps
 */
export const ViewPager: FC<ViewPagerProps> = (props: ViewPagerProps): JSX.Element => 
{
	const [index, setIndex] = useState(props.startIndex !== undefined ? props.startIndex : 0);
	const [divRef, setDivRef] = useState<HTMLElement | null>(null);

	const [springProps, set] = useSprings(props.items.length, i => ({
		x: i * window.innerWidth,
		scale: 1,
		display: "block"
	}));

	/**
	 * Refresh the page on index change.
	 */
	useEffect(() =>
	{
		if (props.onIndexChange)
			props.onIndexChange(index);
	}, [index]);

	/**
	 * Goes to the right pages on startIndex change.
	 */
	useEffect(() =>
	{
		setIndex(props.startIndex!);
		divRef?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: false }));
	}, [props.startIndex, divRef]);

	/**
	 * Page dragging callback.
	 */
	const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => 
	{
		if (down && distance > window.innerWidth / 4) 
		{
			setIndex(clamp(index + (xDir > 0 ? -1 : 1), 0, props.items.length - 1));
			if (props.onIndexChange)
				props.onIndexChange(index);
			cancel!();
		}

		set(i => 
		{
			if (i < index - 1 || i > index + 1) 
				return { display: "none" };

			const x = (i - index) * window.innerWidth + (down ? mx : 0);
			const scale = down ? 1 - distance / window.innerWidth / 2 : 1;

			return { x, scale, display: "block" };
		});
	});
	
	return (
		<section style={props.style}>
			{springProps.map(({ x, display, scale }, i) => (
				<animated.div className="carousel" {...bind()} key={i}
					style={{display, x, ...props.config }}>
					<animated.div ref={setDivRef} style={{scale, background: props.bgcolor}}>
						{props.items[i]}
					</animated.div>
				</animated.div>
			))}
		</section>
	);
};

export default memo(ViewPager);
