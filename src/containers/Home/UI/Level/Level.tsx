import React, { FunctionComponent, memo, useState } from "react";
import { Grid, Tooltip, Container, Typography, GridList, GridListTile, makeStyles } from "@material-ui/core";
import { IconProps } from '../Project/Project';
import FlipCard from '../../../../components/FlipCard/FlipCard';
import ReactPlayer from 'react-player';
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { AppState } from "../../../..";
import '../../../../Text.scss';
import './Level.scss';

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

const useStyles = makeStyles(theme => ({
	darkCard: {
		height: '100%', 
		width: '100%',
		background: 'radial-gradient(ellipse at 80%, rgb(0, 48, 138) 0%, rgb(14, 14, 14) 110%)',
		borderColor: 'rgba(0, 131, 255, .3)',
		borderStyle: 'dotted',
	},
	whiteCard: {
		height: '100%', 
		width: '100%',
		background: 'radial-gradient(ellipse at 80%, white 0%, rgb(240, 240, 240) 110%)',
		borderColor: 'rgba(0, 131, 255, .3)',
		borderStyle: 'dotted',
	}
}));

const Level: FunctionComponent<LevelProps> = (props: LevelProps): JSX.Element =>
{
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const [isFlipped, setFlipped] = useState<boolean>(true);
	const classes = useStyles();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	const flipCallback = (flipState: boolean): void =>
	{
		setFlipped(flipState);
	}

	const desktopCard: JSX.Element = (
		<Container className={isDarkMode ? classes.darkCard : classes.whiteCard}>
			<GridList className="level-grid-list" cellHeight='auto' spacing={1}>
				<GridListTile key={Math.random()} cols={2} rows={2} style={{height: '150px'}}>
					<h1 className="calli-title">{props.currentLevel.name}</h1>
				</GridListTile>
				<GridListTile key={Math.random()} cols={1} rows={1} style={{width: '70%', height: '500px'}}>
					{!isFlipped ? <ReactPlayer width='100%' height='100%' url={props.currentLevel.videoUrl} /> : null}
				</GridListTile>
				<GridListTile key={Math.random()} cols={1} rows={1} style={{width: '30%'}}>
					<Grid container direction="row" justify="center" alignItems="center">
						<Container>
							<Typography className="ubuntu-text" align="left" color="textPrimary" paragraph component="h3">
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
				{!isFlipped ? <ReactPlayer width='100%' height='50%' url={props.currentLevel.videoUrl} /> : null}
				<Container>
					<Typography className="ubuntu-text" align="left" color="textPrimary" paragraph component="h3">
						{props.currentLevel.description}
					</Typography>
				</Container>
			</Grid>
		</Container>
	);

	return (
		<FlipCard flipCallback={flipCallback} back={(
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