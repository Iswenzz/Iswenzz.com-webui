import React, { Component } from "react";
import { DialogTitle, Dialog, DialogContent, DialogContentText, DialogActions, Button, Slide } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";

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
			<Dialog open={this.props.isOpen} TransitionComponent={Transition} keepMounted 
			onClose={this.props.closeHandle} aria-labelledby="alert-dialog-slide-title" 
			aria-describedby="alert-dialog-slide-description">
				<DialogTitle id="alert-dialog-slide-title">{this.props.title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{this.props.desc}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.props.closeHandle} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

export default Popup;