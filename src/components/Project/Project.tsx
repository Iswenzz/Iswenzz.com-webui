import React, { Component } from 'react';
import Popup from '../../components/Popup/Popup';
import { Typography, CardActions, Button, Card, CardActionArea, CardContent } from '@material-ui/core';
import marked from "marked";

export interface ProjectRenderProps
{
    renderFormat?: 'md' | 'css' | 'json' | 'xml' | 'mp4',
    renderUrl?: string,
    renderStyle?: React.CSSProperties,
}

export interface ProjectCarouselProps
{
    carouselImages?: string[],
    carouselStyle?: React.CSSProperties
}

export interface CardProps
{
    title: string,
    description?: string,
    cardImage?: string,
    altImage?: string,
    style?: React.CSSProperties,
    buttonText?: string,
    buttonURL?: string,
    width?: string,
    height?: string,
    button?: boolean,
    render?: boolean,
    carousel?: boolean
}

export interface ProjectState 
{
    isOpen: boolean,
    markdown: any
}

export type LinkedProjectProps = CardProps & ProjectRenderProps & ProjectCarouselProps;

class Project extends Component<LinkedProjectProps, ProjectState>
{
    state: ProjectState = {
        isOpen: false,
        markdown: null
    }

    componentDidMount() 
    {
        if (this.props.renderUrl !== undefined)
            fetch(this.props.renderUrl).then(response => response.text())
                .then(text => this.setState({ markdown: marked(text) }));
    }

    onToggle = (): void =>
    {
        console.log(!this.state.isOpen);
        this.setState(state => ({ isOpen: !this.state.isOpen }));
    }

    onClickClose = (): void => 
    {
        console.log(false);
        this.setState(state => ({ isOpen: false }));
    }

    render() : JSX.Element
    {
        const button: JSX.Element = (
            <CardActions style={{paddingLeft: 25}}>
                <Button size="small" variant="contained" color="primary" href={this.props.buttonURL}>
                    {this.props.buttonText}
                </Button>
            </CardActions>
        );

        const md: JSX.Element = (
            <section>
                <article dangerouslySetInnerHTML={{__html: this.state.markdown}} />
            </section>
        );

        return (
            <Card onClick={this.state.isOpen ? () => null : this.onToggle} style={{backgroundImage: `url(${this.props.cardImage})`, 
            backgroundSize: `${this.props.width} ${this.props.height}`, 
            width: this.props.width, height: this.props.height, borderRadius: '8px'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography color='secondary' style={{width: this.props.width, height: this.props.height}} 
                        gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                    </CardContent>
                    {/* --- Popup --- */}
                    <Popup isOpen={this.state.isOpen} closeHandle={this.onClickClose}>
                        {md}
                    </Popup>
                    {/* --- Button --- */}
                    {this.props.button !== undefined ? button : null}
                </CardActionArea>
            </Card>
        );
    }
}

export default Project;