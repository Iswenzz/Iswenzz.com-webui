import React, { Component } from 'react';
import { Parallax } from 'react-parallax';

import { Transition, animated } from 'react-spring/renderprops'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import IntroText from './IntroText/IntroText';
import TrailText from '../../../../components/TrailText/TrailText';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';

class Intro extends Component
{
	render(): JSX.Element
	{
		return (
            <div id="Intro">

                <Parallax bgImage={require('../../../../assets/images/index/1.jpg')} bgImageAlt="index bg1" strength={500}>
                    <div style={{ height: '250px' }} />
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Typography style={{fontFamily: "'Poiret One', sans-serif", fontWeight: 1000,
                        color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h3" component="h2">

                            {/* Iswenzz */}
                            <div style={{fontFamily: "'Calligraffitti', cursive", fontSize: 60}}>
                                <Transition native items={true} from={{ overflow: 'hidden', height: 0 }}
                                enter={[{ height: 'auto' }]} delay={400} leave={{ height: 0 }}>
                                { show => show && (props => <animated.div style={props}>Iswenzz</animated.div>)}
                                </Transition>
                            </div>

                            {/* Text Below */}
                            <Transition native items={true} from={{ overflow: 'hidden', height: 0 }}
                            enter={[{ height: 'auto' }]} delay={600} leave={{ height: 0 }}>
                            { show => show && (props => <animated.div style={props}>Software Engineer and Level Designer</animated.div>)}
                            </Transition>

                            {/* TEST */}
                            <TrailText items={[]} />

                        </Typography>
                    </Grid>
                    <div style={{ height: '250px' }} />
                </Parallax>

                <RadialGradient height='600px' position='ellipse at bottom' colors={[
                    { color: '#23272B', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]}>
                    <div style={{height: '100px'}}/>
                    <IntroText />
                </RadialGradient>
            </div>
		);
	}
}

export default Intro;