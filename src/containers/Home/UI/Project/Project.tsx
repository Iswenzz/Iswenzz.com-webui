import * as actions from '../../store/actions';
import React, { FunctionComponent } from 'react';
import { CardActions, Button, Card, CardActionArea } from '@material-ui/core';
import { AppState } from '../../../..';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Parallax } from 'react-parallax';
import '../../../../Text.scss';

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
    buttonText?: string,
    buttonURL?: string,
    width?: string,
    height?: string,
    button?: boolean,
    carousel?: boolean
}

export type LinkedProjectProps = CardProps & ProjectRenderProps & ProjectCarouselProps;

export interface ProjectProps
{
    projects: LinkedProjectProps[]
    currentProj: LinkedProjectProps
}

const Project: FunctionComponent<ProjectProps> = (props: ProjectProps): JSX.Element =>
{
    const isPortrait = useMediaQuery({ orientation: 'portrait' });
    const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
    const dispatch = useDispatch();

    const onToggle = () =>
    {
        dispatch(actions.setProjectsIndex(props.projects.indexOf(props.currentProj)));
        dispatch(actions.toggleProjectModal(!projectModalActive));
    }

    const button: JSX.Element = (
        <CardActions style={{paddingLeft: 25}}>
            <Button size="small" variant="contained" color="primary" href={props.currentProj.buttonURL}>
                {props.currentProj.buttonText}
            </Button>
        </CardActions>
    );

    const cardSize: { width: string, height: string } = isPortrait ? {
        width: `${parseInt(props.currentProj.width!) / 2}px`,
        height: `${parseInt(props.currentProj.height!) / 2}px`
    } : {
        width: props.currentProj.width!,
        height: props.currentProj.height!
    }

    return (
        <Card onClick={onToggle} 
        style={{ backgroundImage: `url(${props.currentProj.cardImage})`, 
        backgroundSize: `${cardSize.width} ${cardSize.height}`,
        width: cardSize.width, height: cardSize.height, borderRadius: '8px', 
        boxShadow: '0 8px 6px -6px rgba(0, 0, 0, 1)', borderColor: 'dimgray', borderStyle: 'dashed' }}>
            <CardActionArea style={{ height: '100%', width: '100%' }}>
                <p className='ubuntu-text-center' style={{ fontSize: isPortrait ? 14 : 20,
                height: parseInt(cardSize.height) / 3 }}>
                    {props.currentProj.title}
                </p>
                {/* --- Optional Button --- */}
                {props.currentProj.button !== undefined ? button : null}
            </CardActionArea>
        </Card>
    );
}

export default Project;