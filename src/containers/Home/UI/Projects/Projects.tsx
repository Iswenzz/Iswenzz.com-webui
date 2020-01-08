import React, { FunctionComponent } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography, Container } from '@material-ui/core';
import Spacing from '../../../../components/Spacing/Spacing';
import { SpringGrid, enterExitStyle } from 'react-stonecutter';
import Project, { LinkedProjectProps } from '../Project/Project';
import ProjectPopup from '../ProjectPopup/ProjectPopup';
import { useSelector } from 'react-redux';
import { AppState } from '../../../..';
import SplitText from 'react-pose-text';
import '../../../../Text.scss';

const animStyle: any = enterExitStyle.skew; 
const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }: any) => charIndex * 30
    }
};

const Projects: FunctionComponent = (): JSX.Element =>
{
    const projects = useSelector((state: AppState) => state.home.projects);

    return (
        <Grid container direction="column" justify="center" alignItems="center">

            {/* Projects Title */}
            <Typography align="center" variant="h3" component="h2">
                <div className='calli-title'>
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Projects
                    </SplitText>
                </div>
            </Typography>

            <Spacing height='200px' />

            {/* Projects */}
            <RadialGradient style={{listStyleType: 'none'}} position='ellipse at bottom' colors={[
            { color: '#23272B', colorPercent: '0%' },
            { color: '#090A0A', colorPercent: '100%' }]}>
                <Container>
                    <SpringGrid enter={animStyle.enter} entered={animStyle.entered} exit={animStyle.exit} 
                    component='div' columns={5} perspective={600} columnWidth={250} gutterWidth={20} 
                    gutterHeight={20} springConfig={{ stiffness: 100, damping: 30 }}>
                        {projects!.map((project: LinkedProjectProps) => (
                            <li key={project.title}> 
                                <Project projects={projects!} currentProj={project} />
                            </li>
                        ))}
                    </SpringGrid>
                </Container>
                <ProjectPopup projects={projects!} />
                <Spacing height='600px' />
            </RadialGradient>
            
        </Grid>
    );
}

export default Projects;