import React, { memo, Component } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';
import uuid from 'uuid';

export interface TextProps extends TypographyProps
{
	items: string[]
}

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
				<Typography style={this.props.style} className={this.props.className} noWrap={this.props.noWrap} 
				align={this.props.align} color={this.props.color} paragraph={this.props.paragraph} 
				component={this.props.component} variant={this.props.variant} key={uuid.v4()}>
					{item} 
				</Typography>
			))}
			</>
		);
	}
}

export default memo(Text);