import React, { memo, Component } from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import uuid from "uuid";

export interface TextProps extends TypographyProps
{
	items: string[]
}

/**
 * Typography wrapper for multiple strings.
 */
class Text extends Component<TextProps>
{
	shouldComponentUpdate(nextProps: TextProps): boolean
	{
		if (nextProps.items.length !== this.props.items.length)
			return true;
		for (let i = 0; i < nextProps.items.length; i++)
		{
			if (nextProps.items[i] !== this.props.items[i])
				return true;
		}
		return false;
	}

	render(): JSX.Element
	{
		return (
			<>
				{this.props.items.map(item => (
					<Typography {...this.props} key={uuid.v4()}>
						{item} 
					</Typography>
				))}
			</>
		);
	}
}

export default memo(Text);