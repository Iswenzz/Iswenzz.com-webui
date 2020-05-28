import React, { FunctionComponent, useState, memo } from 'react';
import RadialGradient, { GradiantProps } from 'components/RadialGradient/RadialGradient';
import { Grid, Divider, Container } from '@material-ui/core';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import Spacing from 'components/Spacing/Spacing';
import Level, { LevelProject } from 'containers/Home/UI/Level/Level';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import { TrailText } from 'components/TrailText/TrailText';
import 'Text.scss';

const Animation = posed.div({
	enter: { 
		y: '0%', 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: 'easeOut'
		}
	},
	exit: {
		y: '100%',
		opacity: 0,
		scale: 0.4,
		transition: { 
			duration: 1000,
			ease: 'easeIn'
		}
	}
});

export const Levels: FunctionComponent = (): JSX.Element =>
{
	const [levels,] = useState<LevelProject[]>(require('./Levels.json'));
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? 'circle' : 'ellipse'} at bottom`, 
		colors: [
			{ color: '#001C51', colorPercent: '0%' },
			{ color: '#090A0A', colorPercent: '50%' }
		]
	} : {
		position: 'circle at bottom', 
		colors: [
			{ color: '#f69100', colorPercent: '0%' },
			{ color: '#f4f4f4', colorPercent: '50%' }
		]
	}

	return (
		<VisibilitySensor partialVisibility>
        {({ isVisible }) => (
			<Grid container direction="column" justify="center" alignItems="center">
				<Element name="level-design-section" />
				<RadialGradient direction="column" config={config} style={{padding: '80px 0px 200px 0px'}}>
					<Container style={{paddingTop: '30px', paddingBottom: '120px'}}>
						<TrailText align="center" color="textPrimary" component="h1" variant="h1"
						className='poiret-h1' active={true} items={["Level Design"]} />
						<Divider style={{ margin: '10px 0px 10px 0px', width: '100%', height: '2px'}} />
					</Container>
					<EmblaCarousel  
					height={isPortrait ? '500px' : isTabletOrMobileDevice ? '350px' : '700px' } width='100%' 
					delayLength={10000} autoplay={false}>
						{levels.map((level: LevelProject) => (
							<Level key={level.name} levels={levels} currentLevel={level} />
						))}
					</EmblaCarousel>
				</RadialGradient>	
			</Grid>
		)}
		</VisibilitySensor>
	);
}

export default memo(Levels);