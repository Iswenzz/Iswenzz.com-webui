import { FC } from "react";
import { Grid, GridDirection, GridJustification, GridItemsAlignment, Box } from "@material-ui/core";

/**
 * Radial gradient grid container.
 */
const RadialGradient: FC<GradiantProps> = (props) =>
{
	const { className, container, id, position, linear, style, children, 
		colors = [], justify = "center", alignItems = "center", direction = "row", 
		margin = "0", component = "div" } = props.config || props;

	/**
	 * Format all gradient colors to a string separated by a coma.
	 * @param gradientColor - The gradient color.
	 * @returns 
	 */
	const formatColors = (gradientColors: GradientColor[]) => 
		gradientColors.map(c => `${c.color} ${c.colorPercent}`).join(",");

	/**
	 * Generate a linear/radial gradient CSS string.
	 */
	const getBackground = () => linear ? 
		`linear-gradient(${position}, ${formatColors(colors)})`: 
		`radial-gradient(${position}, ${formatColors(colors)})`;

	return container ? (
		<Box className={className} id={id} component={component} 
			style={{ ...style, margin, background: getBackground() }}>
			{children}
		</Box>
	) : (
		<Grid className={className} id={id} component={component} container direction={direction} 
			justifyContent={justify} alignItems={alignItems} 
			style={{ ...style, background: getBackground() }}>
			{children}
		</Grid>
	);
};

export type GradientColor = {
	color: string,
	colorPercent?: string
};

export type GradiantProps = React.HTMLAttributes<HTMLDivElement> & {
	config?: GradiantProps,
	container?: boolean,
	linear?: boolean,
	direction?: GridDirection,
	justify?: GridJustification,
	alignItems?: GridItemsAlignment,
	component?: React.ElementType,
	position?: string,
	margin?: string,
	colors?: GradientColor[],
};

export default RadialGradient;
