import * as actions from '../../../store/actions';
import React, { FunctionComponent } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import TrailText from '../../../../../components/TrailText/TrailText';
import { Typography, Grid, Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../../index';

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
    const dispatch = useDispatch();
    const [ref, percentage] = useScrollPercentage({
        threshold: 0,
    });

    if (percentage > 0.3)
        dispatch(actions.toggleIntroText(true));

    return (
        <Grid ref={ref} style={{paddingTop: '50px', paddingBottom: '50px'}} container direction="row" justify="center" alignItems="center">
            {/* Intro */}
            <Container>
                <Typography style={{fontFamily: "Poiret One, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="left" paragraph component="h5">
                    <TrailText style={{whiteSpace: 'pre-line'}} active={isVisible} items={[intro.desc]} /> 
                </Typography>
            </Container>
        </Grid>
    );
}

export default IntroText;