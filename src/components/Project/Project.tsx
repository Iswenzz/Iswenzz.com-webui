import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import { Typography, CardActions, Button } from '@material-ui/core';

interface ProjectProps
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
    blur?: string,
    button?: boolean
    style?: React.CSSProperties
}

class Project extends Component<ProjectProps>
{
    render() : JSX.Element
    {
        const button: JSX.Element = (
            <CardActions style={{paddingLeft: 25}}>
                <Button size="small" variant="contained" color="primary" href={this.props.buttonURL}>
                    {this.props.buttonText}
                </Button>
            </CardActions>
        );

        return (
            <Parallax blur={4} bgImage={this.props.image} style={{ ...this.props.style, width: this.props.width, 
            height: this.props.height, boxShadow: this.props.blur }}
            bgImageAlt={this.props.altImage} strength={400}>
                <div style={{width: this.props.width, height: this.props.height}}>
                    
                    {/* --- Title --- */}
                    <Typography style={{fontSize: parseInt(this.props.fontSize || "16")}} variant="h5" component="h2">
                        <h2 style={{paddingTop: (parseInt(this.props.height || "0") / 2) - 75, textAlign: "center", color: "#FFFFFF"}}>
                            {this.props.title}
                        </h2>
                    </Typography>
                    
                    {/* --- Description --- */}
                    <Typography style={{fontSize: parseInt(this.props.fontSize || "12")}} variant="h3" component="h3">
                        <h3 style={{paddingLeft: 25, textAlign: "left", color: "#d1d1d1"}}>
                            {this.props.description}
                        </h3>
                    </Typography>
                   
                    {/* --- Button --- */}
                    {this.props.button !== undefined ? button : null}

                </div>
            </Parallax>
        );
    }
}

export default Project;