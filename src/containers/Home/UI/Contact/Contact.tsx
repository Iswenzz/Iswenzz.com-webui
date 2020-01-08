import React, { FunctionComponent } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography } from '@material-ui/core';
import Spacing from '../../../../components/Spacing/Spacing';
import '../../../../Text.scss';
import SplitText from 'react-pose-text';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }: any) => charIndex * 30
    }
};

const Contact: FunctionComponent = (): JSX.Element =>
{
    return (
        <Grid container direction="column" justify="center" alignItems="center">

            {/* Contact Title */}
            <Typography align="center" variant="h3" component="h2">
                <div className='calli-title'>
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Contact
                    </SplitText>
                </div>
            </Typography>

            <Spacing height='200px' />

            {/* Projects */}
            <div style={{width: '100%', height: '100%', listStyleType: 'none'}}>
                <RadialGradient position='ellipse at bottom' colors={[
                { color: '#23272B', colorPercent: '0%' },
                { color: '#090A0A', colorPercent: '100%' }]}>
                    <Spacing height='600px' />
                </RadialGradient>
            </div>
            
        </Grid>
    );
}

export default Contact;