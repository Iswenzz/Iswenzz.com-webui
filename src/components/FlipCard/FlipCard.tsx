import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import './FlipCard.scss';

export interface FlipCardProps
{
	className?: string,
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
	flipCallback?: (flipState: boolean) => void,
}

export interface FlipCardState
{
	isFlipped: boolean
}

/**
 * Card component that flip on mouse click event.
 */
export class FlipCard extends Component<FlipCardProps, FlipCardState>
{
	constructor(props: FlipCardProps) 
	{
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	state: FlipCardState = {
		isFlipped: false
	}

	handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void
	{
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
		if (this.props.flipCallback !== undefined)
			this.props.flipCallback(this.state.isFlipped);
	}

	shouldComponentUpdate(nextProps: FlipCardProps, nextState: FlipCardState): boolean
	{
		return nextState.isFlipped !== this.state.isFlipped;
	}

	render(): JSX.Element
	{
		return (
			<ReactCardFlip containerStyle={{ width: '100%', height: '100%' }}
			isFlipped={this.state.isFlipped} flipDirection="vertical">
				<section className="flipcard" onClick={this.handleClick}>
					{this.props.back}
				</section>
				<section className="flipcard" onClick={this.handleClick}>
					{this.props.front}
				</section>
			</ReactCardFlip>
		);
	}
}

export default FlipCard;