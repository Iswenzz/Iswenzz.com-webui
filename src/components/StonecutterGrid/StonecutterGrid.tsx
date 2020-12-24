import React, { FunctionComponent, memo } from "react";
import { SpringGrid, enterExitStyle, SpringGridProps, makeResponsive, layout } from "react-stonecutter";

export type StonecutterGridProps = {
	config: SpringGridProps,
	animStyle?: typeof enterExitStyle | any,
	children?: JSX.Element[],
	responsive?: boolean 
	layout?: typeof layout;
};

/**
 * Responsive grid component with layout/animation config.
 * @param props - StonecutterGridProps
 */
export const StonecutterGrid: FunctionComponent<StonecutterGridProps> = (props: StonecutterGridProps): JSX.Element =>
{
	const ResponsiveGrid: typeof SpringGrid = makeResponsive(SpringGrid, { 
		maxWidth: 1920, 
		minPadding: 100 
	});

	return (
		<ResponsiveGrid {...props.config} enter={props.animStyle?.enter} 
			entered={props.animStyle?.entered} exit={props.animStyle?.exit}
			columns={props.responsive !== undefined && props.responsive ? 5 : props.config?.columns}>
			{props.children}
		</ResponsiveGrid>
	);
};

export default memo(StonecutterGrid);