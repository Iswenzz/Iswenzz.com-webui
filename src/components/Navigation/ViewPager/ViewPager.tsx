import { useState, useEffect, RefObject, memo, FC } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "react-use-gesture";
import clamp from "lodash/clamp";

import scss from "./ViewPager.module.scss";

/**
 * Carousel with gesture features.
 */
const ViewPager: FC<ViewPagerProps> = ({ items, startIndex, background, style, config, onIndexChange  }) => 
{
	const [index, setIndex] = useState(startIndex !== undefined ? startIndex : 0);
	const [divRef, setDivRef] = useState<Nullable<HTMLElement>>(null);

	const [springProps, set] = useSprings(items.length, i => ({
		x: i * window.innerWidth,
		scale: 1,
		display: "block"
	}));

	/**
	 * Refresh the page on index change.
	 */
	useEffect(() =>
	{
		if (onIndexChange)
			onIndexChange(index);
	}, [index, onIndexChange]);

	/**
	 * Goes to the right pages on startIndex change.
	 */
	useEffect(() =>
	{
		if (startIndex)
			setIndex(startIndex);
		divRef?.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: false }));
	}, [startIndex, divRef]);

	/**
	 * Page dragging callback.
	 */
	const bind = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => 
	{
		if (down && distance > window.innerWidth / 4) 
		{
			setIndex(clamp(index + (xDir > 0 ? -1 : 1), 0, items.length - 1));
			if (onIndexChange)
				onIndexChange(index);
			if (cancel)
				cancel();
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
		<section style={style}>
			{springProps.map(({ x, display, scale }, i) => (
				<animated.div className={scss.viewpager} {...bind()} key={i} style={{ display, x, ...config }}>
					<animated.div ref={setDivRef} style={{ scale, background }}>
						{items[i]}
					</animated.div>
				</animated.div>
			))}
		</section>
	);
};

export type ViewPagerProps = {
	items: JSX.Element[],
	style?: React.CSSProperties,
	background?: string,
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

export default memo(ViewPager);
