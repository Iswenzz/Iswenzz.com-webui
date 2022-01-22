import { defaultSize } from "utils/default";

import type { Layout } from "../SpringGrid";
import config from "../config";

/**
 * Calculate the masonry layout.
 * @param elements - The elements to layout.
 * @param columns - The number of columns.
 * @param gutter - The gutter size.
 * @param itemSize - The item size.
 * @returns
 */
export const computeMasonryLayout = (
	elements: any[],
	columns: number,
	gutter: Partial<Size> = defaultSize,
	itemSize: Partial<Size> = defaultSize
): Layout =>
{
	const { width: gutterWidth = config.gutter.width, height: gutterHeight = config.gutter.height } = gutter;
	const { width: itemWidth = config.itemSize.width } = itemSize;

	const columnHeights: number[] = [];
	for (let i = 0; i < columns; i++)
		columnHeights.push(0);

	const positions: Point[] = elements.map(element =>
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
