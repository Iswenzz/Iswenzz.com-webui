import React, { Component } from "react";
import { DialogTitle, Dialog, DialogContent, Slide, Fab, Grid } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close } from '@material-ui/icons';
import './Popup.scss';

export interface PopupProps
{
	isOpen: boolean,
	closeHandle?: any,
	children?: any
}

export interface PopupContextProps
{
	title?: string,
	desc?: string,
	buttons?: JSX.Element[] | null
}

type LinkedPopupProps = PopupContextProps & PopupProps;

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

class Popup extends Component<LinkedPopupProps>
{
	render(): JSX.Element
	{
		return (
			<Dialog maxWidth='xl' open={this.props.isOpen} TransitionComponent={Transition} 
			keepMounted onClose={this.props.closeHandle} aria-labelledby="alert-dialog-slide-title" 
			aria-describedby="alert-dialog-slide-description">
				<DialogTitle className='project-title'>
					<Grid container direction="row" justify="space-between" alignItems="center">
						{this.props.title}
						<Fab onClick={this.props.closeHandle} color="primary" aria-label="add">
							<Close />
						</Fab>
					</Grid>
				</DialogTitle>
				<DialogContent className='project-modal'>
					{this.props.desc}
					{this.props.children}
				</DialogContent>
			</Dialog>
		);
	}
}

export default Popup;