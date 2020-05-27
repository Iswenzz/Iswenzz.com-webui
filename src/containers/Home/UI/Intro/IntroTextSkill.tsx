import React, { memo, FunctionComponent } from 'react';
import TrailText from 'components/TrailText/TrailText';
import { Grid, Container, Tooltip, Divider } from '@material-ui/core';
import VisibilitySensor from "react-visibility-sensor";
import uuid from 'uuid';
import 'Text.scss';

const webDev: { title: string, points: any[] } = {
    title: "Web Development",
    points: [
        {"name": "HTML5", "src": "https://iswenzz.com:1337/iswenzz/devicons/html5.svg"},
        {"name": "CSS3", "src": "https://iswenzz.com:1337/iswenzz/devicons/css3.svg"},
        {"name": "SASS", "src": "https://iswenzz.com:1337/iswenzz/devicons/sass.svg"},
        {"name": "Javacript", "src": "https://iswenzz.com:1337/iswenzz/devicons/javascript.svg"},
        {"name": "Typescript", "src": "https://iswenzz.com:1337/iswenzz/devicons/typescript.svg"},
        {"name": "React", "src": "https://iswenzz.com:1337/iswenzz/devicons/react.svg"},
        {"name": "Redux", "src": "https://iswenzz.com:1337/iswenzz/devicons/redux.svg"},
        {"name": "MySQL", "src": "https://iswenzz.com:1337/iswenzz/devicons/mysql.svg"},
        {"name": "JQuery", "src": "https://iswenzz.com:1337/iswenzz/devicons/jquery.svg"},
        {"name": "Bootstrap", "src": "https://iswenzz.com:1337/iswenzz/devicons/bootstrap-wordmark.svg"},
        {"name": "Material UI", "src": "https://iswenzz.com:1337/iswenzz/devicons/material-ui.svg"},
    ]
};

const softDev: { title: string, points: any[] } = {
    title: "Software Development",
    points: [
        {"name": "C", "src": "https://iswenzz.com:1337/iswenzz/devicons/c.svg"},
        {"name": "C++", "src": "https://iswenzz.com:1337/iswenzz/devicons/cpp.svg"},
        {"name": "C#", "src": "https://iswenzz.com:1337/iswenzz/devicons/csharp.svg"},
        {"name": "VB", "src": "https://iswenzz.com:1337/iswenzz/devicons/vb.svg"},
        {"name": ".NET", "src": "https://iswenzz.com:1337/iswenzz/devicons/dotnet.svg"},
        {"name": "Java", "src": "https://iswenzz.com:1337/iswenzz/devicons/java.svg"},
        {"name": "Python", "src": "https://iswenzz.com:1337/iswenzz/devicons/python.svg"},
        {"name": "GSC", "src": "https://iswenzz.com:1337/iswenzz/devicons/gsc.svg"},
        {"name": "Assembly", "src": "https://iswenzz.com:1337/iswenzz/devicons/assembly.svg"},
        {"name": "Selenium", "src": "https://iswenzz.com:1337/iswenzz/devicons/selenium.svg"},
        {"name": "SharpDX", "src": "https://iswenzz.com:1337/iswenzz/devicons/sharpdx.svg"},
        {"name": "DirectX", "src": "https://iswenzz.com:1337/iswenzz/devicons/directx.svg"},
        {"name": "Qt", "src": "https://iswenzz.com:1337/iswenzz/devicons/qt.svg"},
    ]
};

const levelDesign: { title: string, points: any[] } = {
    title: "Level Design",
    points: [
        {"name": "Unreal Engine 4", "src": "https://iswenzz.com:1337/iswenzz/devicons/unreal-engine2.svg"},
        {"name": "Unity 5", "src": "https://iswenzz.com:1337/iswenzz/devicons/unity.svg"},
        {"name": "Radiant", "src": "https://iswenzz.com:1337/iswenzz/devicons/radiant.svg"},
        {"name": "Maya", "src": "https://iswenzz.com:1337/iswenzz/devicons/maya.svg"},
        {"name": "3DS Max", "src": "https://iswenzz.com:1337/iswenzz/devicons/3ds-max.svg"},
    ]
};

const IntroText: FunctionComponent = (): JSX.Element =>
{
    return (
        <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
            <Container>
                <Grid style={{paddingTop: '50px', paddingBottom: '50px'}} container direction="column" alignItems="center" justify="center">
                    <TrailText align="center" color="textPrimary" component="h1" variant="h1"
                    className='poiret-h1' active={isVisible} items={["Technological Skills"]} />
                    <Divider style={{ width: '400px', height: '2px', alignItems: "center" }} variant="middle" />
                </Grid>
                <Grid style={{paddingBottom: '100px'}} container alignItems="flex-start"
                direction="column" justify="space-evenly">
                    
                    {/* Software Development */}
                    <TrailText align="left" variant="h5" component="h5" color="textPrimary" 
                        className='poiret-h2' active={isVisible} items={[softDev.title]} />
                    <Grid style={{ padding: "10px 0px 10px 0px" }} container 
                    alignItems="center" justify="flex-start" direction="row">
                    {softDev.points.map((icon: any): JSX.Element => (
                        <Tooltip key={uuid.v4()} title={icon.name} arrow disableFocusListener disableTouchListener>
                            <img onDragStart={(e) => e.preventDefault()} 
                            style={{ margin: '0 4px 0 4px' }} width="64px" height="64px"
                            alt='lang' src={icon.src} />
                        </Tooltip>
                    ))}
                    </Grid>

                    {/* Web Development */}
                    <TrailText align="left" variant="h5" component="h5" color="textPrimary" 
                        className='poiret-h2' active={isVisible} items={[webDev.title]} />
                    <Grid style={{ padding: "10px 0px 10px 0px" }} container 
                    alignItems="center" justify="flex-start" direction="row">
                    {webDev.points.map((icon: any): JSX.Element => (
                        <Tooltip key={uuid.v4()} title={icon.name} arrow disableFocusListener disableTouchListener>
                            <img onDragStart={(e) => e.preventDefault()} 
                            style={{ margin: '0 4px 0 4px' }} width="64px" height="64px"
                            alt='lang' src={icon.src} />
                        </Tooltip>
                    ))}
                    </Grid>

                    {/* Level Design */}
                    <TrailText align="left" variant="h5" component="h5" color="textPrimary" 
                        className='poiret-h2' active={isVisible} items={[levelDesign.title]} />
                    <Grid style={{ padding: "10px 0px 10px 0px" }} container 
                    alignItems="center" justify="flex-start" direction="row">
                    {levelDesign.points.map((icon: any): JSX.Element => (
                        <Tooltip key={uuid.v4()} title={icon.name} arrow disableFocusListener disableTouchListener>
                            <img onDragStart={(e) => e.preventDefault()} 
                            style={{ margin: '0 4px 0 4px' }} width="64px" height="64px"
                            alt='lang' src={icon.src} />
                        </Tooltip>
                    ))}
                    </Grid>

                </Grid>
            </Container>
        )}
        </VisibilitySensor>
    );
}

export default memo(IntroText);