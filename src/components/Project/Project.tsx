import * as actions from '../../containers/Home/store/actions';
import React, { FunctionComponent } from 'react';
import { CardActions, Button, Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import { AppState } from '../..';
import { useSelector, useDispatch } from 'react-redux';
import '../../Text.scss';
import './Project.scss';

export interface ProjectRenderProps
{
    renderUrl?: string,
    renderStyle?: React.CSSProperties,
    renderIcons?: string[],
    renderFile?: string
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
    currentProj: LinkedProjectProps
}

const Project: FunctionComponent<ProjectProps> = (props: ProjectProps): JSX.Element =>
{
    const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
    const dispatch = useDispatch();

    const onToggle = () =>
    {
        dispatch(actions.toggleProjectModal(!projectModalActive));
    }

    const button: JSX.Element = (
        <CardActions style={{paddingLeft: 25}}>
            <Button size="small" variant="contained" color="primary" href={props.currentProj.buttonURL}>
                {props.currentProj.buttonText}
            </Button>
        </CardActions>
    );

    return (
        <Card onClick={projectModalActive ? () => null : onToggle} 
        style={{backgroundImage: `url(${props.currentProj.cardImage})`, 
        backgroundSize: `${props.currentProj.width} ${props.currentProj.height}`, 
        width: props.currentProj.width, height: props.currentProj.height, borderRadius: '8px'}}>
            <CardActionArea>
                <CardContent>
                    <Grid container alignItems="center" justify="center" direction="row">
                        <div style={{height: props.currentProj.height, width: props.currentProj.width,
                        paddingTop: parseInt(props.currentProj.height!) / 3}} 
                        className='ubuntu-text-center'>{props.currentProj.title}</div>
                    </Grid>
                </CardContent>
                {/* --- Optional Button --- */}
                {props.currentProj.button !== undefined ? button : null}
            </CardActionArea>
        </Card>
    );
}

export default Project;