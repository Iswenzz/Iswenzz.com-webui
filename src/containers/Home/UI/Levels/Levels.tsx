import React, { FunctionComponent, useState, memo } from 'react';
import RadialGradient, { GradiantProps } from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import EmblaCarousel from '../../../../components/EmblaCarousel/EmblaCarousel';
import Spacing from '../../../../components/Spacing/Spacing';
import Level, { LevelProject } from '../Level/Level';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { AppState } from '../../../..';
import '../../../../Text.scss';

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

const Levels: FunctionComponent = (): JSX.Element =>
{
	const [levels,] = useState<LevelProject[]>(require('./Levels.json'));
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	const config: GradiantProps = isDarkMode ? {
		position: 'ellipse at bottom', 
		colors: [
			{ color: '#001C51', colorPercent: '0%' },
			{ color: '#090A0A', colorPercent: '100%' }
		]
	} : {
		position: 'ellipse at bottom', 
		colors: [
			{ color: '#f69100', colorPercent: '0%' },
			{ color: '#f4f4f4', colorPercent: '50%' }
		]
	}

	return (
		<VisibilitySensor partialVisibility offset={{bottom: 800}}>
        {({ isVisible }) => (
			<Grid container direction="column" justify="center" alignItems="center">
				<Element name="level-design-section" />
				<RadialGradient config={config}>
					<PoseGroup>
					{isVisible && [
						<Animation key="carousel-anim" style={{width: '100%', height: '100%'}}>
							<EmblaCarousel style={{ padding: '5% 0 5% 0' }} 
							height={isTabletOrMobileDevice ? '500px' : '700px' } width='100%' 
							delayLength={10000} autoplay={false}>
								{levels.map((level: LevelProject) => (
									<Level levels={levels} currentLevel={level} />
								))}
							</EmblaCarousel>
						</Animation>	
					]}
					</PoseGroup>
					<Spacing height='1000px' />
				</RadialGradient>	
			</Grid>
		)}
		</VisibilitySensor>
	);
}

export default memo(Levels);