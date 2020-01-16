import * as actions from '../../store/actions';
import React, { FunctionComponent } from 'react';
import { CardActions, Button, Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import { AppState } from '../../../..';
import { useSelector, useDispatch } from 'react-redux';
import '../../../../Text.scss';
import { useMediaQuery } from 'react-responsive';

export interface ProjectRenderProps
{
    renderUrl?: string,
    renderStyle?: React.CSSProperties,
    renderIcons?: string[],
    renderFile?: JSX.Element[]
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
        <Card onClick={projectModalActive ? () => null : onToggle} 
        style={{backgroundImage: `url(${props.currentProj.cardImage})`, 
        backgroundSize: `${cardSize.width} ${cardSize.height}`, 
        width: cardSize.width, height: cardSize.height, borderRadius: '8px', 
        boxShadow: '3px 3px 5px 6px rgb(16,16,16)'}}>
            <CardActionArea>
                <CardContent>
                    <Grid container alignItems="center" justify="center" direction="row">
                        <div style={{height: cardSize.height, width: cardSize.width,
                        paddingTop: parseInt(cardSize.height!) / 3}} 
                        className='ubuntu-text-center'>
                            {props.currentProj.title}
                        </div>
                    </Grid>
                </CardContent>
                {/* --- Optional Button --- */}
                {props.currentProj.button !== undefined ? button : null}
            </CardActionArea>
        </Card>
    );
}

export default Project;