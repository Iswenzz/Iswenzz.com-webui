import React, { memo, Component, ElementType } from "react";
import { Typography, TypographyProps } from "@material-ui/core";
import uuid from "uuid";
import {Trans} from "react-i18next";

export interface TextProps extends TypographyProps
{
	items: string[],
	component?: ElementType,
	i18n?: boolean
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
						{this.props.i18n ? <Trans>{item}</Trans> : item}
					</Typography>
				))}
			</>
		);
	}
}

export default memo(Text);