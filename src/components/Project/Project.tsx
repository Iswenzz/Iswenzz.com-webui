import React, { Component } from 'react';
import ProjectPopup from '../ProjectPopup/ProjectPopup';
import { CardActions, Button, Card, CardActionArea, CardContent, Grid } from '@material-ui/core';
import marked from "marked";
import '../../Text.scss';

export interface ProjectRenderProps
{
    renderFormat?: 'md' | 'css' | 'json' | 'xml' | 'mp4',
    renderUrl?: string,
    renderStyle?: React.CSSProperties,
    renderIcons?: string[]
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
    proj: LinkedProjectProps
}

export interface ProjectState 
{
    isOpen: boolean,
    markdown: any
}

class Project extends Component<ProjectProps, ProjectState>
{
    state: ProjectState = {
        isOpen: false,
        markdown: null
    }

    componentDidMount() 
    {
        if (this.props.proj.renderUrl !== undefined)
            fetch(this.props.proj.renderUrl).then(response => response.text())
                .then(text => this.setState({ markdown: marked(text) }));
    }

    onToggle = (): void =>
    {
        this.setState(state => ({ isOpen: !this.state.isOpen }));
    }

    onClickClose = (): void => 
    {
        this.setState(state => ({ isOpen: false }));
    }

    render() : JSX.Element
    {
        const button: JSX.Element = (
            <CardActions style={{paddingLeft: 25}}>
                <Button size="small" variant="contained" color="primary" href={this.props.proj.buttonURL}>
                    {this.props.proj.buttonText}
                </Button>
            </CardActions>
        );

        const md: JSX.Element = (
            <section>
                <article dangerouslySetInnerHTML={{__html: this.state.markdown}} />
            </section>
        );

        return (
            <Card onClick={this.state.isOpen ? () => null : this.onToggle} style={{backgroundImage: `url(${this.props.proj.cardImage})`, 
            backgroundSize: `${this.props.proj.width} ${this.props.proj.height}`, 
            width: this.props.proj.width, height: this.props.proj.height, borderRadius: '8px'}}>
                <CardActionArea>
                    <CardContent>
                        <Grid container alignItems="center" justify="center" direction="row">
                            <div style={{height: this.props.proj.height, width: this.props.proj.width,
                            paddingTop: parseInt(this.props.proj.height!) / 3}} 
                            className='ubuntu-text-center'>{this.props.proj.title}</div>
                        </Grid>
                    </CardContent>
                    {/* --- Popup --- */}
                    <ProjectPopup proj={this.props.proj} isOpen={this.state.isOpen} 
                    closeHandle={this.onClickClose}>
                        {md}
                    </ProjectPopup>
                    {/* --- Button --- */}
                    {this.props.proj.button !== undefined ? button : null}
                </CardActionArea>
            </Card>
        );
    }
}

export default Project;