import React, { FunctionComponent, memo, useState, useRef } from "react";
import RadialGradient, { GradiantProps } from "components/RadialGradient/RadialGradient";
import { Grid, Container, Avatar, Button, makeStyles, CircularProgress, Typography } from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import posed from "react-pose";
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { AppState } from "application";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { TextField } from "formik-material-ui";
import ReCAPTCHA from "react-google-recaptcha";
import { delay } from "utility/utility";
import "Common.scss";
import "./Contact.scss";
import {Trans, useTranslation} from "react-i18next";

const useStyles = makeStyles(theme => ({
	avatar: {
		margin: theme.spacing(1),
		width: "120px",
		height: "120px"
	},
	form: {
		marginTop: theme.spacing(1),
	},
	buttonDefault: {
		background: "linear-gradient(45deg, #c51162 30%, #FF8E53 90%)",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		margin: theme.spacing(4, 0, 2),
	},
	buttonSuccess: {
		background: "linear-gradient(45deg, #174b0f 30%, #1c9209 90%)",
		boxShadow: "0 3px 5px 2px rgba(18, 74, 9, .7)",
		margin: theme.spacing(4, 0, 2),
	},
	buttonFail: {
		background: "linear-gradient(45deg, #450301 30%, #7a0905 90%)",
		boxShadow: "0 3px 5px 2px rgba(69, 3, 1, .7)",
		margin: theme.spacing(4, 0, 2),
	},
	buttonProgress: {
		color: "cyan",
		margin: theme.spacing(-6.2, 0, 2),
	},
}));

export type ContactFormValues = {
	email?: string,
	subject?: string,
	message?: string,
	token?: string
};

export const contactFormInitial: ContactFormValues = {
	email: "",
	subject: "",
	message: ""
};

const Animation = posed.div({
	enter: { 
		y: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeOut"
		}
	},
	exit: {
		y: "-100%",
		opacity: 0,
		scale: 0.4,
		transition: { 
			duration: 1000,
			ease: "easeIn"
		}
	}
});

/**
 * Contact container to send an email.
 */
export const Contact: FunctionComponent = (): JSX.Element =>
{
	const { t } = useTranslation();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
	const classes = useStyles();
	const recaptchaRef = useRef<ReCAPTCHA>(null);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);

	const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? "circle" : "ellipse"} at bottom`, 
		colors: [
			{ color: "#841A2A", colorPercent: "0%" },
			{ color: "#151243", colorPercent: "70%" }
		]
	} : {
		linear: true,
		position: "-45deg", 
		colors: [
			{ color: "#ffdf00" },
			{ color: "#f4f4f4" }
		]
	};

	/**
	 * Submit callback - post req to send an email
	 * @param values - formik values
	 * @param param1 - formik helpers
	 */
	const sendEmail = async (values: ContactFormValues, { setSubmitting }: FormikHelpers<ContactFormValues>) =>
	{
		// if the form as valid information send a post req
		if (Object.values(values).every(item => item !== undefined && item !== null))
		{
			await (recaptchaRef.current as any).executeAsync();
			// show progress circle
			if (!loading) 
			{
				setSuccess(false);
				setFail(false);
				setLoading(true);
			}
			const captcha_value = recaptchaRef.current?.getValue();

			try
			{
				let res: AxiosResponse = await axios.post("https://iswenzz.com/contact", {
					...values,
					token: captcha_value ? captcha_value : ""
				}, { 
					headers: { "Accept": "application/json", "Content-Type": "application/json" } 
				});
				res.data.status === "success" ? await mailSuccess() : await mailFail();
				recaptchaRef.current?.reset();
			}
			catch (err)
			{
				await mailFail(err);
			}
		}
	};

	/**
	 * Change button color to green and stop the progress circle.
	 */
	const mailSuccess = async (): Promise<void> =>
	{
		setSuccess(true);
		setLoading(false);
		await delay(3000);
		setSuccess(false);
	};

	/**
	 * Change button color to red and stop the progress circle.
	 * @param err - Fail reason.
	 */
	const mailFail = async (err?: any): Promise<void> =>
	{
		if (err)
			console.log(err);
		setLoading(false);
		setFail(true);
		await delay(3000);
		setFail(false);
	};

	/**
	 * Contact form element.
	 */
	const form: JSX.Element = (
		<Grid container component="section" direction="column" justify="center" alignItems="center">
			<header>
				<Avatar alt='iswenzz avatar' src={require("assets/images/misc/iswenzz.png")} 
					className={classes.avatar} />
			</header>
			<Formik initialValues={contactFormInitial} onSubmit={sendEmail}>
				<Form>
					<Field component={TextField} required label={t("CONTACT_EMAIL")} id="email" name="email" type="email"
						fullWidth color="secondary" variant="outlined" margin="normal" autoComplete="email" />
					<Field component={TextField} required label={t("CONTACT_SUBJECT")} id="subject" name="subject" type="text"
						fullWidth color="secondary" variant="outlined" margin="normal" />
					<Field component={TextField} required label={t("CONTACT_MESSAGE")} id="message" name="message" type="text"
						fullWidth multiline rows="6" color="secondary" variant="outlined" margin="normal" />
					<Container maxWidth="xs">
						<Grid container direction="row" justify="center" alignItems="center">
							<Button fullWidth variant="contained" type="submit" color="secondary" disabled={loading || success || fail}
								className={success ? classes.buttonSuccess : fail ? classes.buttonFail : classes.buttonDefault}>
								<Trans>CONTACT_SEND</Trans>
							</Button>
							{loading && <CircularProgress size={32} className={classes.buttonProgress} />}
							<Typography variant="subtitle2" align="center" component="p" paragraph color="textPrimary">
								<Trans>GOOGLE_RECAPTCHA</Trans>&nbsp;
								<a className="link" href="https://policies.google.com/privacy">
									<Trans>GOOGLE_RECAPTCHA_POLICY</Trans>
								</a> &&nbsp;
								<a className="link" href="https://policies.google.com/terms">
									<Trans>GOOGLE_RECAPTCHA_TERMS</Trans>
								</a> <Trans>GOOGLE_RECAPTCHA_APPLY</Trans>
							</Typography>
							<ReCAPTCHA ref={recaptchaRef} sitekey="6LdE8QAVAAAAAKvBLdna3qVhf6ml05DKXRXwDxmn"
								size="invisible" badge="inline" theme={isDarkMode ? "dark" : "light"} />
						</Grid>
					</Container>
				</Form>
			</Formik>
		</Grid>
	);

	return (
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 0 : 200 }}>
			{({ isVisible }) => (
				<section className="contact">
					<Element name="contact-section" />
					<RadialGradient config={config} style={{ paddingTop: "80px", paddingBottom: "120px" }}>
						<Container>
							<Animation pose={isVisible ? "enter" : "exit"} key="contact-anim">
								{form}
							</Animation>
						</Container>
					</RadialGradient>	
				</section>
			)}
		</VisibilitySensor>
	);
};

export default memo(Contact);