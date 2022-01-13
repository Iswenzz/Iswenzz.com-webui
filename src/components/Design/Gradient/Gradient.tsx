import { FC } from "react";
import { Grid, GridProps, Box } from "@mui/material";

/**
 * Gradient grid container.
 */
const Gradient: FC<GradientProps> = (props) =>
{
	const { className, container, id, gradientPosition, linear, style, children, 
		colors = [], justifyContent = "center", alignItems = "center", direction = "row", 
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
		`linear-gradient(${gradientPosition}, ${formatColors(colors)})`: 
		`radial-gradient(${gradientPosition}, ${formatColors(colors)})`;

	return container ? (
		<Box className={className} id={id} component={component} 
			style={{ ...style, margin, background: getBackground() }}>
			{children}
		</Box>
	) : (
		<Grid className={className} id={id} component={component} container direction={direction} 
			justifyContent={justifyContent} alignItems={alignItems} 
			style={{ ...style, background: getBackground() }}>
			{children}
		</Grid>
	);
};

export type GradientColor = {
	color: string,
	colorPercent?: string
};

export type GradientProps = Partial<GridProps> & {
	config?: GradientProps,
	container?: boolean,
	linear?: boolean,
	component?: React.ElementType,
	gradientPosition?: string,
	margin?: string,
	colors?: GradientColor[],
};

export default Gradient;
