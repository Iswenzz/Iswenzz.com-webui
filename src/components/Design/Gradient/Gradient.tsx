import { FC, ReactNode } from "react";
import { Grid, GridProps, Box } from "@mui/material";

/**
 * Gradient grid container.
 */
const Gradient: FC<GradientProps> = ({ className, id, children, config, ...props }) =>
{
	const { gradientPosition, linear, style, colors = [], 
		justifyContent = "center", alignItems = "center", 
		direction = "row", component = "div" } = config || props;

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
	const getBackground = () => linear 
		? `linear-gradient(${gradientPosition}, ${formatColors(colors)})` 
		: `radial-gradient(${gradientPosition}, ${formatColors(colors)})`;

	return (
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
	colors?: GradientColor[],
	children?: ReactNode[] | ReactNode
};

export default Gradient;
