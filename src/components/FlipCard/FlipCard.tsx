import React, { Component, memo } from 'react';
import ReactCardFlip from 'react-card-flip';
import './FlipCard.scss';

export interface FlipCardProps
{
	className?: string,
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
}

export interface FlipCardState
{
	isFlipped: boolean,
	drag: boolean
}

class FlipCard extends Component<FlipCardProps, FlipCardState>
{
	constructor(props: FlipCardProps) 
	{
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	state: FlipCardState = {
		isFlipped: false,
		drag: false
	}

	handleClick(e: any) 
	{
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	render(): JSX.Element
	{
		return (
			<ReactCardFlip containerStyle={{ width: '100%', height: '100%' }}
			isFlipped={this.state.isFlipped} flipDirection="vertical">
				<div className="c-flip" onClick={this.handleClick}>
					{this.props.back}
				</div>
				<div className="c-flip" onClick={this.handleClick}>
					{this.props.front}
				</div>
			</ReactCardFlip>
		);
	}
}

export default memo(FlipCard);