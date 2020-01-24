import React, { memo, Component } from 'react';
import TrailText from '../../../../components/TrailText/TrailText';
import { Grid, Container } from '@material-ui/core';
import VisibilitySensor from "react-visibility-sensor";
import '../../../../Text.scss';

const intro: { desc: string } = {
    desc: `Hi there! My name is Alexis, I'm a Software Developer and a Level Designer. Here you can find all my work that I've done.

    I've experience working on a diverse set of programming topics for the past 5 years 
    such as web development, database design, graphics programming, game development, automation, 
    UI/UX design, and reverse engineering.`
}

class IntroText extends Component
{
    render(): JSX.Element
    {
        return (
            <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
                <Grid style={{paddingTop: '50px', paddingBottom: '50px'}} container direction="row" 
                justify="center" alignItems="center">
                    {/* About me */}
                    <Container>
                        <TrailText align="left" color="textPrimary" paragraph component="h5" 
                        className='pre-line poiret-text' active={isVisible} items={[intro.desc]} /> 
                    </Container>
                </Grid>
            )}
            </VisibilitySensor>
        );
    }
}

export default memo(IntroText);