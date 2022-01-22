import { useEffect, RefObject, memo, FC, useRef, useCallback } from "react";
import { useSprings, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import clamp from "lodash/clamp";

import scss from "./ViewPager.module.scss";

/**
 * Carousel with gesture features.
 */
const ViewPager: FC<ViewPagerProps> = ({
	items, startIndex = 0, background, style, config, onIndexChange, onDragState
}) =>
{
	const index = useRef(startIndex);
	const width = window.innerWidth;

	const [springProps, api] = useSprings(items.length, i => ({
		x: i * width,
		scale: 1,
		display: "block",
	}));

	const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) =>
	{
		if (active && Math.abs(mx) > width / 2)
		{
			index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, items.length - 1);
			if (onIndexChange)
				onIndexChange(index.current);
			cancel();
		}
		api.start(i =>
		{
			if (onDragState)
				onDragState(true);
			if (i < index.current - 1 || i > index.current + 1)
				return { display: "none" };

			const x = (i - index.current) * width + (active ? mx : 0);
			const scale = active ? 1 - Math.abs(mx) / width / 2 : 1;
			return { x, scale, display: "block" };
		});
	});

	const { onPointerUp, ...binding } = bind();

	/**
	 * Handle pointer up event.
	 * @param e - The pointer up event.
	 */
	const handlePointerUp = (e: React.PointerEvent<EventTarget>) =>
	{
		if (onPointerUp)
			onPointerUp(e);
		if (onDragState)
			onDragState(false);
	};

	/**
	 * Move to the new start index.
	 */
	const moveToStart = useCallback(async () =>
	{
		if (startIndex)
			index.current = startIndex;

		// animate to the new startIndex
		await Promise.all(api.start(i => ({
			x: (i - index.current) * width,
			scale: 1,
			display: items.length <= 1 || i >= index.current - 1 ? "block" : "none"
		})));
	}, [api, items.length, startIndex, width]);

	/**
	 * Refresh the page on index change.
	 */
	useEffect(() =>
	{
		if (onIndexChange)
			onIndexChange(index.current);
	}, [index, onIndexChange]);

	/**
	 * Move to the new start index.
	 */
	useEffect(() => void moveToStart(), [moveToStart]);

	return (
		<section style={style}>
			{springProps.map(({ x, display, scale }, i) => (
				<animated.div className={scss.viewpager} key={i} style={{ display, x, ...config }}
					{...binding} onPointerUp={handlePointerUp}>
					<animated.div style={{ scale, background }}>
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
	onIndexChange?: (index: number) => void,
	onDragState?: (state: boolean) => void,
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
