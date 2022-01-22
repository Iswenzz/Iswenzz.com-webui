import { defaultSize } from "utils/default";

import type { Layout } from "../SpringGrid";
import config from "../config";

/**
 * Calculate the grid layout.
 * @param elements - The elements to layout.
 * @param columns - The number of columns.
 * @param gutter - The gutter size.
 * @param itemSize - The item size.
 * @returns
 */
export const computeSimpleLayout = (
	elements: any[],
	columns: number,
	gutter: Partial<Size> = defaultSize,
	itemSize: Partial<Size> = defaultSize
): Layout =>
{
	const { width: gutterWidth = config.gutter.width, height: gutterHeight = config.gutter.height } = gutter;
	const { width: itemWidth = config.itemSize.width, height: itemHeight = config.itemSize.height } = itemSize;

	const positions: Point[] = elements.map((_, index) =>
	{
		const column = index % columns;
		const row = Math.floor(index / columns);

		const x = column * itemWidth + column * gutterWidth;
		const y = row * itemHeight + row * gutterHeight;

		return { x, y };
	});

	const gridWidth = columns * itemWidth + (columns - 1) * gutterWidth;
	const gridHeight = Math.ceil(elements.length / columns) * (itemHeight + gutterHeight) - gutterHeight;

	return { positions, gridWidth, gridHeight };
};

export default computeSimpleLayout;
