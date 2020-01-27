import React, { FunctionComponent, memo } from 'react';
import RadialGradient, { GradiantProps } from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import Spacing from '../../../../components/Spacing/Spacing';
import Project, { LinkedProjectProps } from '../Project/Project';
import StonecutterGrid from '../../../../components/StonecutterGrid/StonecutterGrid';
import { useSelector } from 'react-redux';
import { AppState } from '../../../..';
import { enterExitStyle } from 'react-stonecutter';
import { useMediaQuery } from 'react-responsive';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { Element } from 'react-scroll';
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
		y: '-100%',
		opacity: 0,
		scale: 2.6,
		transition: { 
			duration: 1000,
			ease: 'easeIn'
		}
	}
});

const Projects: FunctionComponent = (): JSX.Element =>
{
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    const projects = useSelector((state: AppState) => state.home.projects);
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    const config: GradiantProps = isDarkMode ? {
		position: 'ellipse at bottom', 
		colors: [
			{ color: '#3c0084', colorPercent: '0%' },
            { color: '#090A0A', colorPercent: '100%' }
		]
	} : {
		linear: true,
		position: '144deg', 
		colors: [
			{ color: '#ffffff' },
			{ color: '#f4f4f4' }
		]
    }
    
    const projectGrid: JSX.Element = (
        <Grid container direction="row" alignItems="center" justify="center">
            <StonecutterGrid responsive animStyle={enterExitStyle.skew} 
            config={{ component: 'div', columns: 5,
            perspective: 600, columnWidth: isPortrait ? 85 : 200, gutterWidth: 30, 
            gutterHeight: isPortrait ? -70 : 0,
            springConfig: { stiffness: 100, damping: 12 } }}>
                {projects!.map((project: LinkedProjectProps) => (
                    <li key={project.title}> 
                        <Project projects={projects!} currentProj={project} />
                    </li>
                ))}
            </StonecutterGrid>
        </Grid>
    );

    return (
        <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
            <Grid container direction="column" justify="center" alignItems="center">
                <Element name="projects-section" />
                <RadialGradient config={config} style={{listStyleType: 'none', paddingTop: isPortrait ? '90px' : '50px', 
                paddingBottom: '50px'}}>
                    {isTabletOrMobileDevice ? projectGrid : (
                        <PoseGroup>
                        {isVisible && [
                            <Animation key="grid-anim" style={{width: '100%', height: '100%'}}>
                                {projectGrid}
                            </Animation>
                        ]}
                        </PoseGroup>
                    )}
                    <Spacing height={isTabletOrMobileDevice ? '1100px' : isPortrait ? '400px' : '800px'} />
                </RadialGradient>     
            </Grid>
        )}
        </VisibilitySensor>
    );
}

export default memo(Projects);