import React, { memo, Component } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export interface TextProps extends TypographyProps
{
	items: string[]
}

class Text extends Component<TextProps>
{
	  render(): JSX.Element
	  {
		return (
			<>
			{this.props.items.map(item => (
				<Typography style={this.props.style} className={this.props.className} noWrap={this.props.noWrap} 
				align={this.props.align} color={this.props.color} paragraph={this.props.paragraph} 
				component={this.props.component} variant={this.props.variant}>
					{item} 
				</Typography>
			))}
			</>
		);
	  }
}

export default memo(Text);