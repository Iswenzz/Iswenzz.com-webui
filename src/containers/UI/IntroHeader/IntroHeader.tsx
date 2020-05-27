import * as appActions from 'store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "application";
import { useSelector, useDispatch } from 'react-redux';
import Intro from 'containers/Home/UI/Intro/Intro';
import { Parallax } from 'react-parallax';
import Spacing from 'components/Spacing/Spacing';
import VisibilitySensor from 'react-visibility-sensor';

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
                    <Intro title={props.title} desc={props.desc} />
                    <Spacing height={props.spaceBottom || '300px'} />
                </Parallax>
            );
        }}
        </VisibilitySensor>
    );
}

export default IntroHeader;