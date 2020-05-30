import * as appActions from 'store/actions';
import React, { FunctionComponent, memo } from 'react';
import { AppState } from "application";
import { useSelector, useDispatch } from 'react-redux';
import { Parallax } from 'react-parallax';
import Spacing from 'components/Spacing/Spacing';
import VisibilitySensor from 'react-visibility-sensor';
import SplitText from 'react-pose-text';
import { Grid, Typography } from '@material-ui/core';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }: any) => charIndex * 30
    }
};

export interface IntroHeaderProps
{
    title?: string,
    desc?: string,
    spaceTop?: string,
    spaceBottom?: string,
    bgImage: string,
    parallaxStrength?: number,
    parallaxBlur?: number
}

const IntroHeader: FunctionComponent<IntroHeaderProps> = (props: IntroHeaderProps): JSX.Element =>
{
    const dispatch = useDispatch();
    const isPastIntro = useSelector((state: AppState) => state.app.isPastIntro);

    return (
        <VisibilitySensor partialVisibility>
        {({ isVisible }) => {
            if (isVisible === isPastIntro)
                dispatch(appActions.togglePastIntro(!isPastIntro));
            return (
                <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
                bgImage={props.bgImage} bgImageAlt="index" blur={props.parallaxBlur || 0}
                strength={props.parallaxStrength || 400}>
                    <Spacing height={props.spaceTop || '70px'} />
                    <Grid style={{paddingTop: '200px'}} container 
                    direction="column" justify="center" alignItems="center">
                        <Typography align="center" variant="h3" component="div">
                            <div className='calli-h1' style={{fontWeight: 'bold'}}>
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    {props.title}
                                </SplitText>
                            </div>
                            <Typography className="poiret-header" align="center" variant="h3" component="h3">
                                <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                    {props.desc}
                                </SplitText>
                            </Typography>
                        </Typography>
                    </Grid>
                    <Spacing height={props.spaceBottom || '300px'} />
                </Parallax>
            );
        }}
        </VisibilitySensor>
    );
}

export default memo(IntroHeader);