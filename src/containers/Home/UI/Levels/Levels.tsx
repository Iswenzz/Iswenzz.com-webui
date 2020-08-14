import React, { FunctionComponent, useState, memo } from 'react';
import RadialGradient, { GradiantProps } from 'components/RadialGradient/RadialGradient';
import { Divider, Container, Grid } from '@material-ui/core';
import EmblaCarousel from 'components/EmblaCarousel/EmblaCarousel';
import Level, { LevelProject } from 'containers/Home/UI/Level/Level';
import posed from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { Element } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import Text from 'components/Text/Text';
import 'Common.scss';
import './Levels.scss';

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

/**
 * Embla carousel container with all level design flip cards.
 */
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
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 100 : 400 }}>
        {({ isVisible }) => (
			<section className="levels">
				<Element name="level-design-section" />
				<RadialGradient config={config} className="levels-gradient-grid">
					<Grid container direction="column" justify="center" alignItems="center">
						<Container component="header" className="levels-container">
							<Animation pose={isVisible ? "enter" : "exit"} key="carousel-header-anim">
								<Text align="center" color="textPrimary" component="h2" variant="h2"
								className='poiret-h1 noselect' items={["Level Design"]} />
								<Divider className="levels-divider" />
							</Animation>
						</Container>
						<Container component="article" maxWidth={false}>
							<Animation pose={isVisible ? "enter" : "exit"} key="carousel-anim">
								<EmblaCarousel width='100%' delayLength={10000} autoplay={false}
								height={isPortrait ? '500px' : isTabletOrMobileDevice ? '350px' : '700px' }>
									{levels.map((level: LevelProject) => (
										<Level key={level.name} levels={levels} currentLevel={level} />
									))}
								</EmblaCarousel>
							</Animation>
						</Container>
					</Grid>
				</RadialGradient>	
			</section>
		)}
		</VisibilitySensor>
	);
}

export default memo(Levels);