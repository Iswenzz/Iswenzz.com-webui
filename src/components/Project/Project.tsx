import React, { Component } from 'react';
import Popup from '../../components/Popup/Popup';
import { Typography, CardActions, Button, Card, CardActionArea, CardContent } from '@material-ui/core';

export interface ProjectProps
{
    title: string,
    description?: string,
    image?: string,
    buttonText?: string,
    buttonURL?: string,
    font?: string,
    fontSize?: string,
    textColor?: string,
    width?: string,
    height?: string,
    altImage?: string,
    button?: boolean
    style?: React.CSSProperties
}

export interface ProjectState 
{
    isOpen: boolean
}

class Project extends Component<ProjectProps, ProjectState>
{
    state: ProjectState = {
        isOpen: false
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

        const popup: JSX.Element = (
            <Popup title="Funky Kong" desc="MOGI TIME" isOpen={this.state.isOpen} closeHandle={this.onClickClose} />
        );

        return (
            <Card onClick={this.state.isOpen ? () => null : this.onToggle} style={{backgroundImage: `url(${this.props.image})`, 
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
                    {this.state.isOpen ? popup : null}
                    {/* --- Button --- */}
                    {this.props.button !== undefined ? button : null}
                </CardActionArea>
            </Card>
        );
    }
}

export default Project;