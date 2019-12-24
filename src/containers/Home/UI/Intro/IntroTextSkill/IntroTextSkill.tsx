import * as actions from '../../../store/actions';
import React, { FunctionComponent } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import TrailText from '../../../../../components/TrailText/TrailText';
import { Typography, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../../index';
import Spacing from '../../../../../components/Spacing/Spacing';

const webDev: { title: string, points: string[] } = {
    title: "Web Development",
    points: [
        "• Javascript ES7+",
        "• Typescript",
        "• HTML5",
        "• CSS & SCSS / SASS",
    ]
};

const webDevStack: { title: string, points: string[] } = {
    title: "Web Stacks",
    points: [
        "• React",
        "• Redux",
        "• JQuery",
        "• MySQL / MangoDB",
        "• Bootstrap / Material UI",
    ]
};

const softDev: { title: string, points: string[] } = {
    title: "Software Development",
    points: [
        "• C C++",
        "• C# VB C++/CLI",
        "• Java",
        "• Python",
        "• GSC",
        "• Bash / Shell / Powershell",
        "• Assembly x86 / x64",
    ]
};

const softDevStack: { title: string, points: string[] } = {
    title: "Software Stacks",
    points: [
        "• .NET",
        "• Qt",
        "• Winform & WPF",
        "• DirectX",
        "• Selenium",
    ]
};

const levelDesign: { title: string, points: string[] } = {
    title: "Level Design",
    points: [
        "• BSP Blockout & Landscape",
        "• Detail geometry",
        "• Shader / Material creation",
        "• Lighting, FX / SFX placement",
        "• Level optimization & Portaling"
    ]
};

const levelDesignEditors: { title: string, points: string[] } = {
    title: "Editors",
    points: [
        "• Unreal Engine 4",
        "• Unity 5",
        "• Radiant / GtkRadiant",
    ]
};

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

    if (percentage > 0.7)
        dispatch(actions.toggleIntroText(true));

    return (
        <Grid ref={ref} style={{paddingTop: '50px', paddingBottom: '70px'}} container direction="row" justify="space-evenly" alignItems="center">
            
            {/* Web Development */}
            <Typography style={{fontFamily: "Poiret One, sans-serif", fontWeight: 200, fontSize: 24,
            color: 'rgba(220, 220, 220, 0.9)'}} align="left" variant="h5" component="h5">
                <TrailText active={isVisible} items={[webDev.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={webDev.points} />
                </div>
                <Spacing height='40px' />
                <TrailText active={isVisible} items={[webDevStack.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={webDevStack.points} />
                </div>
            </Typography>

            {/* Software Development */}
            <Typography style={{fontFamily: "Poiret One, sans-serif", fontWeight: 200, fontSize: 24,
            color: 'rgba(220, 220, 220, 0.9)'}} align="left" variant="h5" component="h5">
                <TrailText active={isVisible} items={[softDev.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={softDev.points} />
                </div>
                <Spacing height='40px' />
                <TrailText active={isVisible} items={[softDevStack.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={softDevStack.points} />
                </div>
            </Typography>

            {/* Level Design */}
            <Typography style={{fontFamily: "Poiret One, sans-serif", fontWeight: 200, fontSize: 24,
            color: 'rgba(220, 220, 220, 0.9)'}} align="left" variant="h5" component="h5">
                <TrailText active={isVisible} items={[levelDesign.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={levelDesign.points} />
                </div>
                <Spacing height='40px' />
                <TrailText active={isVisible} items={[levelDesignEditors.title]} />
                <div style={{fontFamily: "Ubuntu, sans-serif", textAlign: 'left', fontSize: 14}}>
                    <TrailText active={isVisible} items={levelDesignEditors.points} />
                </div>
            </Typography>

        </Grid>
    );
}

export default IntroText;