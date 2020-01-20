import React, { FunctionComponent, memo } from 'react';
import TrailText from '../../../../components/TrailText/TrailText';
import { Typography, Grid, Container } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../index';
import '../../../../Text.scss';

const intro: { desc: string } = {
    desc: `Hi there! My name is Alexis, I'm a Software Developer and a Level Designer. Here you can find all my work that I've done.

    I've experience working on a diverse set of programming topics for the past 5 years 
    such as web development, database design, graphics programming, game development, automation, 
    UI/UX design, and reverse engineering.`
}

export interface IntroTextProps
{
    introTextActive?: boolean
}

const IntroText: FunctionComponent<IntroTextProps> = (props: IntroTextProps): JSX.Element =>
{
    const isVisible = useSelector((state: AppState) => state.home.introTextActive);

    return (
        <Grid style={{paddingTop: '50px', paddingBottom: '50px'}} container direction="row" justify="center" alignItems="center">
            {/* About me */}
            <Container>
                <Typography align="left" paragraph component="h5">
                    <TrailText className='pre-line poiret-text' active={isVisible} items={[intro.desc]} /> 
                </Typography>
            </Container>
        </Grid>
    );
}

export default memo(IntroText);