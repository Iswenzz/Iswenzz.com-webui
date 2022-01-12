import { PureComponent } from "react";

export type SpacingProps = React.HTMLAttributes<HTMLDivElement> & {
	height?: string
};

/**
 * Spacing div component.
 */
export class Spacing extends PureComponent<SpacingProps>
{
	render(): JSX.Element
	{
		return (
			<div {...this.props} style={{...this.props.style, height: this.props.height}} />
		);
	}
}

export default Spacing;
