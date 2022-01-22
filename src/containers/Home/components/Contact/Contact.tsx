import { FC, memo, useState, useRef } from "react";
import { Gradient, GradientProps } from "components";
import { Grid, Container, Avatar, Button, CircularProgress, Typography, useTheme, TextField } from "@mui/material";
import VisibilitySensor from "react-visibility-sensor";
// import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { Element } from "react-scroll";
import { Formik, Field, Form, FormikHelpers } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { delay } from "utils/misc";
import {Trans, useTranslation} from "react-i18next";
import {gql, useMutation} from "@apollo/client";
import {Mutation, MutationContactArgs} from "api/generated/graphql";
import {motion, Variants} from "framer-motion";
import iswenzzIcon from "assets/images/misc/iswenzz.png";

import scss from "./Contact.module.scss";
import classNames from "classnames";
import { animationScaleFadeDown } from "utils/animate";

export type ContactFormValues = {
	email: string,
	subject: string,
	message: string,
	token: string
};

export const contactFormInitial: ContactFormValues = {
	email: "",
	subject: "",
	message: "",
	token: ""
};

export const GRAPHQL_CONTACT = gql`
mutation Contact($input: ContactInput!) {
	contact(input: $input)
}`;

/**
 * Contact container to send an email.
 */
export const Contact: FC = (): JSX.Element =>
{
	const { t } = useTranslation();
	const { isDarkTheme } = useTheme();
	const isTabletOrMobile = useTabletOrMobile();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [contact] = useMutation<Mutation, MutationContactArgs>(GRAPHQL_CONTACT);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);

	const buttonStyle = classNames(scss.buttonDefault, {
		[scss.buttonSuccess]: success, [scss.buttonFail]: fail
	});

	const config: GradientProps = isDarkTheme ? {
		gradientPosition: `${isTabletOrMobile ? "circle" : "ellipse"} at bottom`,
		colors: [
			{ color: "#841A2A", colorPercent: "0%" },
			{ color: "#151243", colorPercent: "70%" }
		]
	} : {
		linear: true,
		gradientPosition: "-45deg",
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
			// init ReCAPTCHA
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
				// send graphql contact req
				const res = await contact({
					variables: {
						input: {
							...values,
							token: captcha_value ? captcha_value : ""
						}
					}
				});
				console.log(res);
				res.data?.contact ? await mailSuccess() : await mailFail();
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
		<Grid container component="section" direction="column" justifyContent="center" alignItems="center">
			<header>
				<Avatar alt="iswenzz avatar" src={iswenzzIcon}
					className={scss.avatar} />
			</header>
			<Formik initialValues={contactFormInitial} onSubmit={sendEmail}>
				<Form>
					<Field component={TextField} required label={t("CONTACT_EMAIL")} id="email" name="email" type="email"
						fullWidth color="secondary" variant="outlined" margin="normal" autoComplete="email" />
					<Field component={TextField} required label={t("CONTACT_SUBJECT")} id="subject" name="subject"
						type="text" fullWidth color="secondary" variant="outlined" margin="normal" />
					<Field component={TextField} required label={t("CONTACT_MESSAGE")} id="message" name="message"
						type="text" fullWidth multiline rows="6" color="secondary" variant="outlined" margin="normal" />
					<Container maxWidth="xs">
						<Grid container justifyContent="center" alignItems="center">
							<Button fullWidth variant="contained" type="submit"
								color="secondary" disabled={loading || success || fail} className={buttonStyle}>
								<Trans>CONTACT_SEND</Trans>
							</Button>
							{loading && <CircularProgress size={32} className={scss.buttonProgress} />}
							<Typography variant="subtitle2" align="center" component="p" paragraph color="textPrimary">
								<Trans>GOOGLE_RECAPTCHA</Trans>&nbsp;
								<a className="link" href="https://policies.google.com/privacy">
									<Trans>GOOGLE_RECAPTCHA_POLICY</Trans>
								</a> &&nbsp;
								<a className="link" href="https://policies.google.com/terms">
									<Trans>GOOGLE_RECAPTCHA_TERMS</Trans>
								</a> <Trans>GOOGLE_RECAPTCHA_APPLY</Trans>
							</Typography>
							{/* <ReCAPTCHA ref={recaptchaRef} sitekey="6LdE8QAVAAAAAKvBLdna3qVhf6ml05DKXRXwDxmn"
								size="invisible" badge="inline" theme={isDarkTheme ? "dark" : "light"} /> */}
						</Grid>
					</Container>
				</Form>
			</Formik>
		</Grid>
	);

	return (
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobile ? 0 : 200 }}>
			{({ isVisible }) => (
				<section>
					<Element name="contact-section" />
					<Gradient config={config} style={{ paddingTop: "80px", paddingBottom: "120px" }}>
						<Container>
							<motion.div initial={"exit"} animate={isVisible ? "enter" : "exit"} variants={animationScaleFadeDown()}>
								{form}
							</motion.div>
						</Container>
					</Gradient>
				</section>
			)}
		</VisibilitySensor>
	);
};

export default memo(Contact);
