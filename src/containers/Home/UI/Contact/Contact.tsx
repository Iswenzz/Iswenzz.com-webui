import React, { FunctionComponent, memo, useState } from 'react';
import RadialGradient, { GradiantProps } from 'components/RadialGradient/RadialGradient';
import { Grid, Container, Avatar, Button, makeStyles, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import posed from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { TextField } from 'formik-material-ui';
import 'Text.scss';

const useStyles = makeStyles(theme => ({
	avatar: {
		margin: theme.spacing(1),
		width: '120px',
		height: '120px'
	},
	form: {
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

export interface ContactFormValues
{
	email?: string,
	subject?: string,
	message?: string
}

export const contactFormInitial: ContactFormValues = {
	email: '',
	subject: '',
	message: ''
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
		y: '-100%',
		opacity: 0,
		scale: 0.4,
		transition: { 
			duration: 1000,
			ease: 'easeIn'
		}
	}
});

/**
 * Contact container to send an email.
 */
export const Contact: FunctionComponent = (): JSX.Element =>
{
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);

	const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? 'circle' : 'ellipse'} at bottom`, 
		colors: [
			{ color: '#841A2A', colorPercent: '0%' },
			{ color: '#151243', colorPercent: '70%' }
		]
	} : {
		linear: true,
		position: '-45deg', 
		colors: [
			{ color: '#ffdf00' },
			{ color: '#f4f4f4' }
		]
	}

	/**
	 * Submit callback - post req to send an email
	 * @param values - formik values
	 * @param param1 - formik helpers
	 */
	const sendEmail = async (values: ContactFormValues, { setSubmitting }: FormikHelpers<ContactFormValues>) =>
	{
		if (!loading) 
		{
			setSuccess(false);
			setFail(false);
			setLoading(true);
		}
		// if the form as valid information send a post req
		if (Object.values(values).every(item => item !== undefined && item !== null))
		{
			await axios.post('https://iswenzz.com/contact', values, { 
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } 
			}).then(res => {
				if (res.data.status === "success")
				{
					setSuccess(true);
					setLoading(false);
					setSubmitting(true);
					setTimeout(() => setSuccess(false), 3000);
				}
				else
				{
					setLoading(false);
					setFail(true);
					setSubmitting(false);
					setTimeout(() => setFail(false), 3000);
				}
			}).catch(err => {
				console.log(err);
				setLoading(false);
				setFail(true);
				setSubmitting(false);
				setTimeout(() => setFail(false), 3000);
			});
		}
	}

	const form: JSX.Element = (
		<Grid container direction="column" justify="center" alignItems="center">
			<Avatar alt='iswenzz avatar' src={require('assets/images/misc/iswenzz.png')} 
			className={classes.avatar} />
			<Formik initialValues={contactFormInitial} onSubmit={sendEmail} render={() => (
				<Form>
					<Field component={TextField} required label="Email Address" id="email" name="email" type="email"
					fullWidth color="secondary" variant="outlined" margin="normal" autoComplete="email" />
					<Field component={TextField} required label="Subject" id="subject" name="subject" type="text"
					fullWidth color="secondary" variant="outlined" margin="normal" />
					<Field component={TextField} required label="Message" id="message" name="message" type="text"
					fullWidth multiline rows="6" color="secondary" variant="outlined" margin="normal" />
					<Container maxWidth="xs">
						<Grid container direction="row" justify="center" alignItems="center">
							<Button fullWidth variant="contained" type="submit" color="secondary" disabled={loading}
							className={success ? classes.buttonSuccess : fail ? classes.buttonFail : classes.buttonDefault}>
								Send
							</Button>
							{loading && <CircularProgress size={32} className={classes.buttonProgress} />}
						</Grid>
					</Container>
				</Form>
			)}/>
		</Grid>
	);

	return (
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 0 : 200 }}>
		{({ isVisible }) => (
			<div>
				<Element name="contact-section" />
				<RadialGradient config={config} style={{ paddingTop: '80px', paddingBottom: '120px' }}>
					<Container>
						<Animation pose={isVisible ? "enter" : "exit"} key="contact-anim">
							{form}
						</Animation>
					</Container>
				</RadialGradient>	
			</div>
		)}
		</VisibilitySensor>
	);
}

export default memo(Contact);