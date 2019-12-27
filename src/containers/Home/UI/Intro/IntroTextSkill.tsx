import React, { FunctionComponent } from 'react';
import TrailText from '../../../../components/TrailText/TrailText';
import { Typography, Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../../../index';
import Spacing from '../../../../components/Spacing/Spacing';
import '../../../../Text.scss';

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

    return (
        <Grid style={{paddingTop: '50px', paddingBottom: '70px'}} container 
        direction="row" justify="space-evenly" alignItems="center">
            
            {/* Web Development */}
            <Typography align="left" variant="h5" component="h5">
                <TrailText className='poiret-text' active={isVisible} items={[webDev.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={webDev.points} />
                <Spacing height='40px' />
                <TrailText className='poiret-text' active={isVisible} items={[webDevStack.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={webDevStack.points} />
            </Typography>

            {/* Software Development */} 
            <Typography align="left" variant="h5" component="h5">
                <TrailText className='poiret-text' active={isVisible} items={[softDev.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={softDev.points} />
                <Spacing height='40px' />
                <TrailText className='poiret-text' active={isVisible} items={[softDevStack.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={softDevStack.points} />
            </Typography>

            {/* Level Design */}
            <Typography align="left" variant="h5" component="h5">
                <TrailText className='poiret-text' active={isVisible} items={[levelDesign.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={levelDesign.points} />
                <Spacing height='40px' />
                <TrailText className='poiret-text' active={isVisible} items={[levelDesignEditors.title]} />
                <TrailText className='ubuntu-p-left' active={isVisible} items={levelDesignEditors.points} />
            </Typography>

        </Grid>
    );
}

export default IntroText;