import React, { FunctionComponent, memo } from 'react';
import RadialGradient, { GradiantProps } from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import Spacing from '../../../../components/Spacing/Spacing';
import Project, { LinkedProjectProps } from '../Project/Project';
import StonecutterGrid from '../../../../components/StonecutterGrid/StonecutterGrid';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../application';
import { enterExitStyle, layout } from 'react-stonecutter';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { random } from 'lodash';
import '../../../../Text.scss';

export const Projects: FunctionComponent = (): JSX.Element =>
{
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    const projects = useSelector((state: AppState) => state.home.projects);
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? 'circle' : 'ellipse'} at bottom`, 
		colors: [
			{ color: '#3c0084', colorPercent: '0%' },
            { color: '#181a21', colorPercent: '50%' }
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
            perspective: 600, columnWidth: isTabletOrMobileDevice ? 85 : 200, gutterWidth: 30, 
            gutterHeight: isTabletOrMobileDevice ? -70 : 0, 
            layout: isTabletOrMobileDevice ? layout.simple : layout.pinterest,
            springConfig: { stiffness: 100, damping: 12 } }}>
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
    );

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Element name="projects-section" />
            <RadialGradient config={config} style={{listStyleType: 'none', 
            paddingTop: isTabletOrMobileDevice ? '90px' : '50px', 
            paddingBottom: '50px'}}>
                {projectGrid}
                <Spacing height={isPortrait ? '1500px' : '1000px'} />
            </RadialGradient>     
        </Grid>
    );
}

export default memo(Projects);