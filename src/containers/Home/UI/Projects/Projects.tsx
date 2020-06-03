import React, { FunctionComponent, memo } from 'react';
import RadialGradient, { GradiantProps } from 'components/RadialGradient/RadialGradient';
import { Grid, Divider, Container } from '@material-ui/core';
import Spacing from 'components/Spacing/Spacing';
import Project, { LinkedProjectProps } from 'containers/Home/UI/Project/Project';
import StonecutterGrid from 'components/StonecutterGrid/StonecutterGrid';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import { enterExitStyle, layout, SpringGridProps } from 'react-stonecutter';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { random } from 'lodash';
import { TrailText } from 'components/TrailText/TrailText';
import 'Text.scss';
import './Projects.scss';

/**
 * Stonecutter responsive grid container with all Project cards.
 */
export const Projects: FunctionComponent = (): JSX.Element =>
{
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    const projects = useSelector((state: AppState) => state.home.projects);
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? 'circle' : 'ellipse'} at center`, 
		colors: [
			{ color: '#3c0084', colorPercent: '0%' },
            { color: '#0e0f14', colorPercent: '50%' }
		]
	} : {
		linear: true,
		position: '144deg', 
		colors: [
			{ color: '#ffffff' },
			{ color: '#f4f4f4' }
		]
    }

	/**
	 * Stonecutter grid config.
	 */
    const gridConfig: SpringGridProps = { 
        component: 'div', 
        columns: 5,
        perspective: 600, 
        columnWidth: isTabletOrMobileDevice ? 85 : 200, gutterWidth: 30, 
        gutterHeight: isTabletOrMobileDevice ? -70 : 0, 
        layout: isTabletOrMobileDevice ? layout.simple : layout.pinterest,
        springConfig: { 
            stiffness: 100, 
            damping: 12 
        } 
    }

    return (
		<div>
			<Element name="projects-section" />
			<RadialGradient config={config} className="projects-gradient-grid">
				<Container className="projects-container">
					<TrailText align="center" color="textPrimary" component="h1" variant="h1"
					className='poiret-h1' active items={["Projects"]} />
					<Divider className="projects-divider" />
				</Container>
				<Grid container direction="row" alignItems="center" justify="center">
					<StonecutterGrid responsive animStyle={enterExitStyle.skew} config={gridConfig}>
					{projects!.map((project: LinkedProjectProps) => {
						let r = isTabletOrMobileDevice ? undefined : random(100, 220);
						return (
							//@ts-ignore - for itemHeight custom attribute
							<li key={project.title} itemHeight={r}> 
								<Project projects={projects!} currentProj={project}
								itemHeight={r} /> 
							</li>
						)
					})}
					</StonecutterGrid>
				</Grid>
				<Spacing height={isPortrait ? '1500px' : isTabletOrMobileDevice ? '500px' : '1000px'} />
			</RadialGradient>     
		</div>
    );
}

export default memo(Projects);