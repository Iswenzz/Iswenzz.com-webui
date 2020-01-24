import React, { memo, FunctionComponent } from 'react';
import IntroText from './IntroText';
import IntroTextSkill from './IntroTextSkill';
import Spacing from '../../../../components/Spacing/Spacing';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid } from '@material-ui/core';
import { Parallax } from 'react-parallax';
import { useSelector } from 'react-redux';
import { AppState } from '../../../..';

const IntroSkill: FunctionComponent = (): JSX.Element =>
{
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	return (
        <Grid container direction="column" justify="center" alignItems="stretch">
            <RadialGradient position='ellipse at bottom' colors={[
                { color: isDarkMode ? '#0e0f14' : '#e5e5e5', colorPercent: '0%' },
                { color: isDarkMode ? '#181a21' : '#f4f4f4', colorPercent: '100%' }
            ]}>
                <IntroText />
            </RadialGradient>

            <Parallax style={{backgroundColor: 'black'}} bgImageAlt="index" strength={400}
            bgImage={require(`../../../../assets/images/index/${isDarkMode ? 'stars' : 'clouds'}.svg`)}>
                <Spacing height='100px' />
            </Parallax>

            <RadialGradient position='ellipse at top' colors={[
                { color: isDarkMode ? '#0e0f14' : '#e5e5e5', colorPercent: '0%' },
                { color: isDarkMode ? '#181a21' : '#f4f4f4', colorPercent: '100%' }
            ]}>
                <IntroTextSkill />
            </RadialGradient>
        </Grid>
    );
}

export default memo(IntroSkill);