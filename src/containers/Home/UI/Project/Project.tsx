import * as homeActions from '../../store/actions';
import * as appActions from '../../../../store/actions';
import React, { FunctionComponent } from 'react';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import { AppState } from '../../../../application';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import '../../../../Text.scss';
import posed from 'react-pose';

export interface ProjectRenderProps
{
    renderUrl?: string,
    renderStyle?: React.CSSProperties,
    renderIcons?: IconProps[],
    renderFile?: JSX.Element[]
}

export interface IconProps
{
    src: string,
    name: string
}

export interface ProjectCarouselProps
{
    carouselImages?: string[],
    carouselStyle?: React.CSSProperties
}

export interface CardProps
{
    title?: string,
    showTitle?: boolean,
    desc?: string,
    isOpenSource?: boolean,
    sourceURL?: string,
    description?: string,
    cardImage?: string,
    altImage?: string,
    style?: React.CSSProperties,
    width?: string,
    height?: string,
    carousel?: boolean
}

export type LinkedProjectProps = CardProps & ProjectRenderProps & ProjectCarouselProps;

export interface ProjectProps
{
    projects: LinkedProjectProps[]
    currentProj: LinkedProjectProps
}

const Animation = posed.div({
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.2,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});

export const Project: FunctionComponent<ProjectProps> = (props: ProjectProps): JSX.Element =>
{
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const isModalActive = useSelector((state: AppState) => state.app.isModalActive);
    const dispatch = useDispatch();

    const onToggle = () =>
    {
        dispatch(homeActions.setProjectsIndex(props.projects.indexOf(props.currentProj)));
        dispatch(appActions.toggleModalActive(!isModalActive));
    }

    const cardSize: { width: string, height: string } = isPortrait ? {
        width: `${parseInt(props.currentProj.width!) / 2}px`,
        height: `${parseInt(props.currentProj.height!) / 2}px`
    } : {
        width: props.currentProj.width!,
        height: props.currentProj.height!
    }

    return (
        <Animation>
            <Card onClick={onToggle} 
            style={{ backgroundImage: `url(${props.currentProj.cardImage})`, 
            backgroundSize: `${cardSize.width} ${cardSize.height}`,
            width: cardSize.width, height: cardSize.height, borderRadius: '8px', 
            boxShadow: '0 3px 5px 2px rgba(60, 60, 60, .3)', borderColor: 'dimgray'}}>
                <CardActionArea style={{ height: '100%', width: '100%' }}>
                    <Typography variant="subtitle1" align="center" 
                    paragraph component="p" style={{ fontSize: isPortrait ? 14 : 20, 
                    height: parseInt(cardSize.height) / 3 }}>
                        {props.currentProj.title}
                    </Typography>
                </CardActionArea>
            </Card>
        </Animation>
    );
}

export default Project;