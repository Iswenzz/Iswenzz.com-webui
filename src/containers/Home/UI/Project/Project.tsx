import * as homeActions from 'containers/Home/store/actions';
import * as appActions from 'store/actions';
import React, { FunctionComponent, memo } from 'react';
import { Card, CardActionArea, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import posed from 'react-pose';
import 'Common.scss';
import './Project.scss';

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
    projects: LinkedProjectProps[],
    currentProj: LinkedProjectProps,
    itemHeight?: number,
    visible?: boolean
}

const ZoomAnimation = posed.article({
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

/**
 * Project card container with a preview image, and dispatch ProjectPopup modal on click.
 * @param props - ProjectProps
 */
export const Project: FunctionComponent<ProjectProps> = (props: ProjectProps): JSX.Element =>
{
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    const dispatch = useDispatch();

    /**
     * Card click handler: toggle the ProjectPopup modal.
     */
    const onToggle = () =>
    {
        dispatch(homeActions.setProjectsIndex(props.projects.indexOf(props.currentProj)));
        dispatch(homeActions.toggleProjectModalActive(true));
        dispatch(appActions.toggleModalActive(true));
    }

    /**
     * Responsive card size.
     */
    const cardSize: { width: number, height: number } = isTabletOrMobileDevice ? {
        width: parseInt(props.currentProj.width!, 10) / 2,
        height: (props.itemHeight === undefined) ? parseInt(props.currentProj.height!, 10) / 2 : props.itemHeight! / 2,
    } : {
        width: parseInt(props.currentProj.width!, 10),
        height: (props.itemHeight === undefined) ? parseInt(props.currentProj.height!, 10) : props.itemHeight!
    }

    return (
        <ZoomAnimation className="project">
            <Card onClick={onToggle} className="project-card" 
            style={{ backgroundImage: `url(${props.currentProj.cardImage})`,
            width: cardSize.width, height: cardSize.height}}>
                <CardActionArea className="project-card-action">
                    <Typography variant="caption" align="center" paragraph component="p" 
                    style={{ fontSize: isTabletOrMobileDevice ? 14 : 20, height: cardSize.height / 3 }}>
                        {props.currentProj.title}
                    </Typography>
                </CardActionArea>
            </Card>
        </ZoomAnimation>
    );
}

export default memo(Project);