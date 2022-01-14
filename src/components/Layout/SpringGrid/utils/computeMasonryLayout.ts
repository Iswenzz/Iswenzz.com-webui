import { ReactElement } from "react";

import type { Layout } from "../SpringGrid";
import config from "../config";

/**
 * Calculate the masonry layout.
 * @param elements 
 * @param columns 
 * @param margin 
 * @returns 
 */
export const computeMasonryLayout = (
	elements: ReactElement[], columns: number, gutter: Partial<Size>, itemSize: Partial<Size>
): Layout => 
{
	const { width: gutterWidth = config.gutter.width, height: gutterHeight = config.gutter.height } = gutter;
	const { width: itemWidth = config.itemSize.width } = itemSize;

	const columnHeights: number[] = [];
	for (let i = 0; i < columns; i++) 
		columnHeights.push(0);

	const positions: Position[] = elements.map(element => 
	{
		const column = columnHeights.indexOf(Math.min.apply(null, columnHeights));
		const { height } = element.props;

		if (!(height && typeof height === "number")) 
			throw new Error("Each child must have an \"height\" prop.");

		const x = column * itemWidth + column * gutterWidth;
		const y = columnHeights[column];

		columnHeights[column] += Math.round(height) + gutterHeight;

		return { x, y };
	});

	const gridWidth = columns * itemWidth + (columns - 1) * gutterWidth;
	const gridHeight = Math.max.apply(null, columnHeights) - gutterHeight;

	return { positions, gridWidth, gridHeight };
};

export default computeMasonryLayout;
