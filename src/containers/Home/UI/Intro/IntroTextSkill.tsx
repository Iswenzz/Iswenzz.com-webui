import React, { memo, Component } from 'react';
import TrailText from '../../../../components/TrailText/TrailText';
import { Grid } from '@material-ui/core';
import VisibilitySensor from "react-visibility-sensor";
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

class IntroText extends Component
{
    render(): JSX.Element
    {
        return (
            <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
                <Grid style={{paddingTop: '50px', paddingBottom: '70px'}} container 
                direction="row" justify="space-evenly" alignItems="center">
                    
                    {/* Web Development */}
                    <div style={{paddingBottom: '20px'}}>
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary" 
                        className='poiret-text' active={isVisible} items={[webDev.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={webDev.points} />
                        <Spacing height='40px' />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='poiret-text' active={isVisible} items={[webDevStack.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={webDevStack.points} />
                    </div>
    
                    {/* Software Development */} 
                    <div style={{paddingBottom: '20px'}}>
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='poiret-text' active={isVisible} items={[softDev.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={softDev.points} />
                        <Spacing height='40px' />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='poiret-text' active={isVisible} items={[softDevStack.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={softDevStack.points} />
                    </div>
    
                    {/* Level Design */}
                    <div style={{paddingBottom: '20px'}}>
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='poiret-text' active={isVisible} items={[levelDesign.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={levelDesign.points} />
                        <Spacing height='40px' />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='poiret-text' active={isVisible} items={[levelDesignEditors.title]} />
                        <TrailText align="left" variant="h5" component="h5" color="textPrimary"
                        className='ubuntu-p-left' active={isVisible} items={levelDesignEditors.points} />
                    </div>
    
                </Grid>
            )}
            </VisibilitySensor>
        );
    }
}

export default memo(IntroText);