import React, { FunctionComponent } from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { IconProps } from '../Project/Project';
import '../../../../Text.scss';
import './Level.scss';

export interface LevelProps
{
	project: LevelProject
}

export interface LevelProject
{
	name: string,
	image: string,
	width?: string,
	height?: string,
	renderIcons?: IconProps[]
}

const Level: FunctionComponent<LevelProps> = (props: LevelProps): JSX.Element =>
{
	return (
		<div className="level" style={{ backgroundImage: `url(${props.project.image})` }}>
			<Grid container className="level-grid" 
			direction="column" justify="space-between" alignItems="center">
				<div />
				<Grid className="level-title" container direction="column" justify="center" alignItems="center">
					<p className='calli-title text-stroke'>
						<b>{props.project.name}</b>
					</p>
				</Grid>
				<Grid container direction="row" justify="flex-start" alignItems="flex-end">
					{props.project.renderIcons?.map(icon => (
						<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
							<img onDragStart={(e) => e.preventDefault()} 
							style={{ margin: '0 4px 0 4px' }} width='64' height='64' alt='lang' src={icon.src} />
						</Tooltip>
					))}
				</Grid>
			</Grid>
		</div>
	);
}

export default Level;