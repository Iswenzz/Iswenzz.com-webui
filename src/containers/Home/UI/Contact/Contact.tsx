import React, { FunctionComponent, memo, useState } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography, Container, Avatar, TextField, Button, makeStyles, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import Spacing from '../../../../components/Spacing/Spacing';
import SplitText from 'react-pose-text';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import '../../../../Text.scss';

const charPoses = {
	exit: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		delay: ({ charIndex }: any) => charIndex * 30
	}
};

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		width: '120px',
		height: '120px'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	buttonDefault: {
		background: 'linear-gradient(45deg, #c51162 30%, #FF8E53 90%)',
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		margin: theme.spacing(4, 0, 2),
	},
	buttonSuccess: {
		background: 'linear-gradient(45deg, #174b0f 30%, #1c9209 90%)',
		boxShadow: '0 3px 5px 2px rgba(18, 74, 9, .7)',
		margin: theme.spacing(4, 0, 2),
	},
	buttonFail: {
		background: 'linear-gradient(45deg, #450301 30%, #7a0905 90%)',
		boxShadow: '0 3px 5px 2px rgba(69, 3, 1, .7)',
		margin: theme.spacing(4, 0, 2),
	},
	buttonProgress: {
		color: 'cyan',
    	margin: theme.spacing(-6.2, 0, 2),
	},
}));

export interface ContactState
{
	email?: string,
	subject?: string,
	message?: string
}

const Animation = posed.div({
	enter: { 
		y: '0%', 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: 'easeOut'
		}
	},
	exit: {
		y: '0%',
		opacity: 0,
		scale: 2.6,
		transition: { 
			duration: 1000,
			ease: 'easeIn'
		}
	}
});

const Contact: FunctionComponent = (): JSX.Element =>
{
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
	const classes = useStyles();
	const [state, setState] = useState<ContactState>({
		email: undefined,
		subject: undefined,
		message: undefined
	});
	const [loading, setLoading] = useState(false);
	  const [success, setSuccess] = useState(false);
	  const [fail, setFail] = useState(false);

	const onMailChange = (event: any): void => 
	{
		event.persist();
		setState(prevState => ({ ...prevState, email: event.target.value }));
	}

	const onSubjectChange = (event: any): void => 
	{
		event.persist();
		setState(prevState => ({ ...prevState, subject: event.target.value }));
	}

	const onMessageChange = (event: any): void => 
	{
		event.persist();
		setState(prevState => ({ ...prevState, message: event.target.value }));
	}

	const sendEmail = async (e: any): Promise<void> =>
	{
		e.preventDefault();

		if (!loading) 
		{
			setSuccess(false);
			setFail(false);
			setLoading(true);
		}
		// if the form as valid information send a post req
		if (Object.values(state).every(item => item !== undefined && item !== null))
		{
			await axios.post('http://localhost:3001/contact', state, { 
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } 
			}).then(res => {
				setSuccess(true);
				setLoading(false);
				setTimeout(() => setSuccess(false), 3000);
			}).catch(err => {
				console.log(err);
				setLoading(false);
				setFail(true);
				setTimeout(() => setFail(false), 3000);
			});
		}
	}

	return (
		<VisibilitySensor partialVisibility offset={{bottom: 500}}>
		{({ isVisible }) => (
			<Grid container direction="column" justify="center" alignItems="center">

				{/* Contact Title */}
				<Typography align="center" variant="h3" component="h2">
					<div className='calli-title'>
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							Contact
						</SplitText>
					</div>
				</Typography>

				<Spacing height='200px' />

				{/* Contact */}
				<Element name="contact-section" />
				<RadialGradient position='ellipse at bottom' colors={[
				{ color: '#51001C', colorPercent: '0%' },
				{ color: '#090A0A', colorPercent: '100%' }]}
				style={{ paddingTop: '70px', paddingBottom: '120px' }}>
					<PoseGroup>
					{isVisible && [
						<Animation key="contact-anim">
						<Grid container direction="row" justify="center" alignItems="center">
						<Container className={classes.paper} maxWidth="md">
							<Avatar alt='iswenzz avatar' src={require('../../../../assets/images/misc/iswenzz.png')} 
							className={classes.avatar} />
							<form onSubmit={sendEmail} className={classes.form}>
								<TextField name="email" id="email" color="secondary" variant="outlined" 
								margin="normal" required fullWidth label="Email Address" autoComplete="email" 
								onChange={onMailChange} />
								<TextField name="subject" id="subject" color="secondary" variant="outlined" 
								margin="normal" required fullWidth label="Subject"
								onChange={onSubjectChange} />
								<TextField name="message" id="message" multiline rows="6" color="secondary" 
								variant="outlined" margin="normal" required fullWidth label="Message"
								onChange={onMessageChange} />
	
								<Container maxWidth="xs">
									<Grid container direction="row" justify="center" alignItems="center">
										<Button fullWidth variant="contained" type="submit" 
										color="secondary" disabled={loading}
										className={success ? classes.buttonSuccess : fail ? classes.buttonFail : classes.buttonDefault}>
											Send
										</Button>
										{loading && <CircularProgress size={32} className={classes.buttonProgress} />}
									</Grid>
								</Container>
							</form>
						</Container>
						</Grid>
						</Animation>
					]}
					</PoseGroup>
					<Spacing height={isTabletOrMobileDevice ? '50px' : '600px'} />
				</RadialGradient>
				
			</Grid>
		)}
		</VisibilitySensor>
	);
}

export default memo(Contact);