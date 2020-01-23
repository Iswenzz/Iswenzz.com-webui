import React, { Component, memo } from 'react';
import IntroText from './IntroText';
import IntroTextSkill from './IntroTextSkill';
import Spacing from '../../../../components/Spacing/Spacing';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import { Parallax } from 'react-parallax';

class IntroSkill extends Component
{
	render(): JSX.Element
	{
		return (
            <Grid container direction="column" justify="center" alignItems="stretch">
                <RadialGradient position='ellipse at bottom' colors={[
                    { color: '#002638', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]}>
                    <IntroText />
                </RadialGradient>

                <Parallax style={{backgroundColor: 'black'}} bgImage={require('../../../../assets/images/index/stars.svg')} bgImageAlt="index" strength={400}>
                    <Spacing height='100px' />
                </Parallax>

                <RadialGradient position='ellipse at top' colors={[
                    { color: '#002638', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]}>
                    <IntroTextSkill />
                </RadialGradient>
            </Grid>
		);
	}
}

export default memo(IntroSkill);