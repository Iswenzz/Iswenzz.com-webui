import React, { Component } from "react";
import { DialogTitle, Dialog, DialogContent, Slide, Fab, Grid } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close, Lock } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOsi } from '@fortawesome/free-brands-svg-icons';
import { LinkedProjectProps } from "../Project/Project";
import './ProjectPopup.scss';

export interface ProjectPopupProps
{
	proj: LinkedProjectProps
	isOpen: boolean,
	closeHandle?: any,
	children?: any
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class Popup extends Component<ProjectPopupProps>
{
	render(): JSX.Element
	{
		const openSource: JSX.Element = (
			<Fab href={this.props.proj.sourceURL} style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
				<FontAwesomeIcon icon={faOsi} size='2x' />
			</Fab>
		);

		const privateSource: JSX.Element = (
			<Fab style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
				<Lock />
			</Fab>
		);

		return (
			<Dialog maxWidth='xl' open={this.props.isOpen} TransitionComponent={Transition} 
			keepMounted onClose={this.props.closeHandle} aria-labelledby="alert-dialog-slide-title" 
			aria-describedby="alert-dialog-slide-description">
				<Grid container className="project-title" direction="row" justify="space-between" alignItems="center">
					<div className='project-icons'>
						{this.props.proj.renderIcons!.map(icon => (
							<img style={{ margin: '0 4px 0 4px' }} width='64' height='64' alt='lang' 
							src={icon} />
						))}
					</div>
					<div>
						{this.props.proj.isOpenSource ? openSource : privateSource}
						<Fab onClick={this.props.closeHandle} style={{ margin: '0 8px 0 8px'}} 
						color="primary" aria-label="add">
							<Close />
						</Fab>
					</div>
				</Grid>
				<DialogContent className='project-modal'>
					{this.props.proj.showTitle ? this.props.proj.title : null}
					{this.props.proj.desc}
					{this.props.children}
				</DialogContent>
			</Dialog>
		);
	}
}

export default Popup;