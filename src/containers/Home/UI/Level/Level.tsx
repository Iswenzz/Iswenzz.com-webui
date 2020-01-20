import React, { FunctionComponent, memo } from "react";
import { Grid, Tooltip, Container, Typography, GridList, GridListTile } from "@material-ui/core";
import { IconProps } from '../Project/Project';
import FlipCard from '../../../../components/FlipCard/FlipCard';
import ReactPlayer from 'react-player';
import '../../../../Text.scss';
import './Level.scss';
import { useMediaQuery } from "react-responsive";

export interface LevelProps
{
	currentLevel: LevelProject,
	levels: LevelProject[]
}

export interface LevelProject
{
	name: string,
	image: string,
	description?: string,
	videoUrl?: string,
	width?: string,
	height?: string,
	renderIcons?: IconProps[]
}

const Level: FunctionComponent<LevelProps> = (props: LevelProps): JSX.Element =>
{
	const isPortrait = useMediaQuery({ orientation: 'portrait' });

	const desktopCard: JSX.Element = (
		<Container className="level-desc">
			<GridList className="level-grid-list" cellHeight='auto' spacing={1}>
				<GridListTile key={Math.random()} cols={2} rows={2} style={{height: '150px'}}>
					<h1 className="calli-title">{props.currentLevel.name}</h1>
				</GridListTile>
				<GridListTile key={Math.random()} cols={1} rows={1} style={{width: '70%', height: '500px'}}>
					<ReactPlayer width='100%' height='100%' url={props.currentLevel.videoUrl} />
				</GridListTile>
				<GridListTile key={Math.random()} cols={1} rows={1} style={{width: '30%'}}>
					<Grid container direction="row" justify="center" alignItems="center">
						<Container>
							<Typography className="ubuntu-text" align="left" paragraph component="h3">
								{props.currentLevel.description}
							</Typography>
						</Container>
					</Grid>
				</GridListTile>
			</GridList>
		</Container>
	);

	const mobileCard: JSX.Element = (
		<Container className="level-desc">
			<Grid container className="level-grid" direction="row" justify="center" alignItems="center">
				<h3 className="calli-title" style={{fontSize: '30px'}}>{props.currentLevel.name}</h3>
				<ReactPlayer width='100%' height='50%' url={props.currentLevel.videoUrl} />
				<Container>
					<Typography className="ubuntu-text" align="left" paragraph component="h3">
						{props.currentLevel.description}
					</Typography>
				</Container>
			</Grid>
		</Container>
	);

	return (
		<FlipCard back={(
			<Container className="level" style={{ backgroundImage: `url(${props.currentLevel.image})`}}>
				<Grid container direction="column" justify="space-evenly" alignItems="flex-end">
					{props.currentLevel.renderIcons?.map(icon => (
						<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
							<img onDragStart={(e) => e.preventDefault()} style={{ margin: '0 4px 0 4px' }} 
							width={isPortrait ? '32' : '64'} height={isPortrait ? '32' : '64'} 
							alt='lang' src={icon.src} />
						</Tooltip>
					))}
				</Grid>
			</Container>
		)} front={isPortrait ? mobileCard : desktopCard} />
	);
}

export default memo(Level);