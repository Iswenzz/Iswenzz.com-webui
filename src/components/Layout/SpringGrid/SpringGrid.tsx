import { useMemo, ReactElement, FC, CSSProperties, memo } from "react";
import { animated, useTransition } from "react-spring";
import { Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import useBreakpoint, { BreakpointValues } from "utils/hooks/useBreakpoint";

import computeSimpleLayout from "./utils/computeSimpleLayout";
import computeMasonryLayout from "./utils/computeMasonryLayout";
import config from "./config";

/**
 * Responsive grid component with masonry layout and spring animation.
 */
export const SpringGrid: FC<SpringGridProps> = ({
	children = [], style,
	columns = config.columns,
	gutter = config.gutter,
	itemSize = config.itemSize,
	layout = "simple"
}) =>
{
	const responsiveColumns = useBreakpoint(columns, 3);

	const { items, height, width } = useMemo(() =>
	{
		const { positions, gridHeight, gridWidth } = layout === "simple"
			? computeSimpleLayout(children, responsiveColumns, gutter, itemSize)
			: computeMasonryLayout(children, responsiveColumns, gutter, itemSize);

		const items = children.map((item: ReactElement, index: number) => ({
			key: item.key || uuidv4(),
			top: positions[index].y,
			left: positions[index].x,
			index
		}));

		return { items, height: gridHeight, width: gridWidth };
	}, [children, gutter, itemSize, layout, responsiveColumns]);

	const transitions = useTransition(items, {
		from: ({ top, left }) => ({ top, left }),
		enter: ({ top, left }) => ({ top, left }),
		update: ({ top, left }) => ({ top, left }),
		keys: el => el.key,
		config: config.spring
	});

	return (
		<Grid container component={"ul"} style={{ ...style, width, height, position: "relative" }}>
			{children.length && transitions(({ top, left, ...rest }: any, item) => (
				<animated.li
					key={item.key}
					style={{
						position: "absolute",
						top: top.to((top: string) => `${top}px`),
						left: left.to((left: string) => `${left}px`),
						...rest
					}}
				>
					{children[item.index]}
				</animated.li>))}
		</Grid>
	);
};

export type SpringGridProps = {
	children: ReactElement[],
	columns?: BreakpointValues<number>,
	gutter?: Partial<Size>,
	itemSize?: Partial<Size>,
	style?: CSSProperties,
	layout?: "simple" | "masonry"
};

export type Layout = {
	positions: Position[],
	gridWidth: number,
	gridHeight: number
};

export default memo(SpringGrid);
