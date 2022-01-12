import { PureComponent } from "react";
import { Grid, GridDirection, GridJustification, GridItemsAlignment, Box } from "@material-ui/core";

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
	colors?: GradientColor[],
};

/**
 * Radial gradient grid container.
 */
class RadialGradient extends PureComponent<GradiantProps>
{
	/**
	 * Generate a linear/radial gradient CSS string.
	 * @param position - The position or degree.
	 * @param propsColors - The gradient colors.
	 * @param isLinear - true = linear, false = radial.
	 */
	processBackgroundColor = (position?: string, propsColors?: GradientColor[], isLinear?: boolean): string =>
	{
		let colors = "";
		if (isLinear)
		{
			propsColors?.forEach((c, index, arr) => 
				colors += `${c.color} ${(index + 1 !== arr.length) ? "," : ""}`);
			return `linear-gradient(${position}, ${colors})`;
		}
		else
		{
			propsColors?.forEach((c, index, arr) => 
				colors += `${c.color} ${c.colorPercent} ${(index + 1 !== arr.length) ? "," : ""}`);
			return `radial-gradient(${position}, ${colors})`;
		}
	};

	render(): JSX.Element
	{
		const { container, id, justify, alignItems, direction, 
			position, colors, linear } = this.props.config !== undefined ? this.props.config : this.props;
			
		return container ? (
			<Box className={this.props.className} id={id} component={this.props.component ?? "div"} style={{ ...this.props.style, margin: "0", 
				background: this.processBackgroundColor(position, colors, linear) }}>
				{this.props.children}
			</Box>
		) : (
			<Grid className={this.props.className} id={id} component={this.props.component ?? "div"} container direction={direction || "row"} 
				justifyContent={justify || "center"} alignItems={alignItems || "center"} 
				style={{ ...this.props.style, background: this.processBackgroundColor(position, colors, linear) }}>
				{this.props.children}
			</Grid>
		);
	}
}

export default RadialGradient;
