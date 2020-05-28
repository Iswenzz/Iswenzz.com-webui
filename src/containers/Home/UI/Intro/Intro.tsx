import React, { memo, FunctionComponent } from 'react';
import Spacing from 'components/Spacing/Spacing';
import RadialGradient from 'components/RadialGradient/RadialGradient';
import { Parallax } from 'react-parallax';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import TrailText from 'components/TrailText/TrailText';
import { Grid, Container, Divider } from '@material-ui/core';
import VisibilitySensor from "react-visibility-sensor";
import 'Text.scss';

const intro = {
	header: `Hello there!`,
	title: `My name is Alexis, I'm a Software Engineer and a Level Designer.`,
	desc: `I've experience working on a diverse set of programming topics for the past 5 years 
	such as software development, web development, database design, graphics programming, game development,
	UI/UX design, and reverse engineering.`
}

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

export const IntroSkill: FunctionComponent = (): JSX.Element =>
{
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	return (
        <Grid container direction="column" justify="center" alignItems="stretch">

            {/* First Section */}
            <RadialGradient position='ellipse at bottom' colors={[
                { color: isDarkMode ? '#0e0f14' : '#e5e5e5', colorPercent: '0%' },
                { color: isDarkMode ? '#181a21' : '#f4f4f4', colorPercent: '100%' }
            ]}>
                <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Grid style={{paddingTop: '100px', paddingBottom: '100px'}} container direction="row" 
                    justify="center" alignItems="center">
                        {/* About me */}
                        <Container maxWidth="md">
                            <TrailText align="left" color="textPrimary" component="h1" variant="h1"
                            className='poiret-h1' active={isVisible} items={[intro.header]} />
                            <Divider style={{ width: '350px', height: '2px', marginTop: '16px', marginBottom: '16px' }} />
                            <TrailText align="left" style={{marginTop: '16px', marginBottom: '16px'}} 
                            color="textPrimary" component="h3" variant="h3"
                            className='ubuntu-h3' active={isVisible} items={[intro.title]} />
                            <TrailText align="left" color="textPrimary" paragraph component="h4" variant="h4"
                            className='ubuntu-h4' active={isVisible} items={[intro.desc]} />
                        </Container>
                    </Grid>
                )}
                </VisibilitySensor>
            </RadialGradient>

            <Parallax style={{backgroundColor: isDarkMode ? 'black' : 'rgb(122, 206, 255)'}} 
            bgImageAlt="index" strength={400}
            bgImage={require(`assets/images/index/${isDarkMode ? 'stars' : 'clouds'}.svg`)}>
                <Spacing height='100px' />
            </Parallax>

            {/* Second Section */}
            <RadialGradient position='ellipse at top' colors={[
                { color: isDarkMode ? '#0e0f14' : '#e5e5e5', colorPercent: '0%' },
                { color: isDarkMode ? '#181a21' : '#f4f4f4', colorPercent: '100%' }
            ]}>
                <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                    <Container>
                        <Container style={{paddingTop: '50px', paddingBottom: '50px'}}>
                            <TrailText align="center" color="textPrimary" component="h1" variant="h1"
                            className='poiret-h1' active={true} items={["Technological Skills"]} />
                            <Divider style={{ margin: '10px 0px 10px 0px', width: '100%', height: '2px'}} />
                        </Container>
                        <Grid style={{paddingBottom: '100px'}} container alignItems="center"
                        direction="row" justify="space-around">
                            
                            {/* Web Development */}
                            <div style={{padding: '20px 0px 20px 0px'}}>
                                <TrailText className='poiret-h2' active={isVisible} items={[webDev.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={webDev.points} />
                                <Spacing height='20px' />
                                <TrailText className='poiret-h2' active={isVisible} items={[webDevStack.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={webDevStack.points} />
                            </div>

                            {/* Software Development */} 
                            <div style={{padding: '20px 0px 20px 0px'}}>
                                <TrailText className='poiret-h2' active={isVisible} items={[softDev.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={softDev.points} />
                                <Spacing height='20px' />
                                <TrailText className='poiret-h2' active={isVisible} items={[softDevStack.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={softDevStack.points} />
                            </div>

                            {/* Level Design */}
                            <div style={{padding: '20px 0px 20px 0px'}}>
                                <TrailText className='poiret-h2' active={isVisible} items={[levelDesign.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={levelDesign.points} />
                                <Spacing height='20px' />
                                <TrailText className='poiret-h2' active={isVisible} items={[levelDesignEditors.title]} />
                                <TrailText className='ubuntu-h4' active={isVisible} items={levelDesignEditors.points} />
                            </div>

                        </Grid>
                    </Container>
                )}
                </VisibilitySensor>
            </RadialGradient>
        </Grid>
    );
}

export default memo(IntroSkill);