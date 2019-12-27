import React, { Component } from 'react';

import IntroText from './IntroText';
import IntroTextSkill from './IntroTextSkill';
import Spacing from '../../../../components/Spacing/Spacing';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';

class IntroSkill extends Component
{
	render(): JSX.Element
	{
		return (
            <Grid container direction="column" justify="center" alignItems="stretch">
                <RadialGradient position='ellipse at bottom' colors={[
                    { color: '#23272B', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]}>
                    <IntroText />
                </RadialGradient>

                <Spacing height='100px' />

                <RadialGradient position='ellipse at top' colors={[
                    { color: '#23272B', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]}>
                    <IntroTextSkill />
                </RadialGradient>
            </Grid>
		);
	}
}

export default IntroSkill;