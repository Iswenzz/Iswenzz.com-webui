import React, { FunctionComponent, useState, memo } from 'react';
import RadialGradient, { GradiantProps } from 'components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import Spacing from 'components/Spacing/Spacing';
import Level, { LevelProject } from 'containers/Home/UI/Level/Level';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
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
				<RadialGradient config={config}>
					<PoseGroup>
					{isVisible || process.env.NODE_ENV === "test" ? [
						<Animation key="carousel-anim" style={{width: '100%', height: '100%'}}>
							<EmblaCarousel style={{ padding: '5% 0 5% 0' }} 
							height={isPortrait ? '500px' : isTabletOrMobileDevice ? '350px' : '700px' } width='100%' 
							delayLength={10000} autoplay={false}>
								{levels.map((level: LevelProject) => (
									<Level key={level.name} levels={levels} currentLevel={level} />
								))}
							</EmblaCarousel>
						</Animation>	
					]: []}
					</PoseGroup>
					<Spacing height={isPortrait ? '800px' : '1100px'} />
				</RadialGradient>	
			</Grid>
		)}
		</VisibilitySensor>
	);
}

export default memo(Levels);