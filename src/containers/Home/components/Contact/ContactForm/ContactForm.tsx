import { FC, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { Avatar, Container, Grid, TextField, Typography, Button, useTheme } from "@mui/material";
import { Loader, delay } from "izui-react";
import { Field, Form, Formik } from "formik";
import classNames from "classnames";
import isNil from "lodash/isNil";

import iswenzzIcon from "assets/images/iswenzz/iswenzz.png";
import { Mutation, MutationContactArgs } from "api/generated/graphql";

import { contactFormInitial, ContactFormValues, GRAPHQL_CONTACT } from "../config";
import scss from "./ContactForm.module.scss";

/**
 * The contact form.
 * @returns
 */
const ContactForm: FC = () =>
{
	const { isDarkTheme } = useTheme();
	const { t } = useTranslation();

	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const [contact] = useMutation<Mutation, MutationContactArgs>(GRAPHQL_CONTACT);

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [fail, setFail] = useState(false);

	const buttonStyle = classNames(scss.buttonDefault, {
		[scss.buttonSuccess]: success, [scss.buttonFail]: fail
	});

	/**
	 * Submit callback - post req to send an email.
	 * @param values - Formik values.
	 * @param param1 - Formik helpers.
	 */
	const sendEmail = async (values: ContactFormValues) =>
	{
		// if the form as valid information send a request
		if (!loading && !Object.values(values).some(isNil))
		{
			await recaptchaRef.current?.executeAsync();

			setSuccess(false);
			setFail(false);
			setLoading(true);

			const captcha_value = recaptchaRef.current?.getValue();

			try
			{
				const response = await contact({
					variables: {
						input: {
							...values,
							token: captcha_value ?? ""
						}
					}
				});
				response.data?.contact
					? await mailSuccess()
					: await mailFail();
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
	const mailSuccess = async () =>
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
	const mailFail = async (err?: any) =>
	{
		if (err) console.log(err);
		setFail(true);
		setLoading(false);

		await delay(3000);
		setFail(false);
	};

	return (
		<Grid container component="section" direction="column" justifyContent="center" alignItems="center">
			<header>
				<Avatar alt="iswenzz avatar" src={iswenzzIcon} className={scss.avatar} />
			</header>
			<Formik initialValues={contactFormInitial} onSubmit={sendEmail}>
				<Form>
					<Field component={TextField} required label={t("CONTACT_EMAIL")}
						id="email" name="email" type="email" fullWidth color="secondary"
						variant="outlined" margin="normal" autoComplete="email" />
					<Field component={TextField} required label={t("CONTACT_SUBJECT")}
						id="subject" name="subject" type="text" fullWidth color="secondary"
						variant="outlined" margin="normal" />
					<Field component={TextField} required label={t("CONTACT_MESSAGE")}
						id="message" name="message" type="text" fullWidth multiline
						rows="6" color="secondary" variant="outlined" margin="normal" />
					<Container maxWidth="xs">
						<Grid container justifyContent="center" alignItems="center">
							<Button fullWidth variant="contained" type="submit" color="secondary"
								disabled={loading || success || fail} className={buttonStyle}>
								{t("CONTACT_SEND")}
							</Button>
							{loading && <Loader size={32} className={scss.buttonProgress} />}
							<Typography variant="subtitle2" align="center" color="textPrimary" paragraph>
								{t("GOOGLE_RECAPTCHA")}&nbsp;
								<a className="link" href="https://policies.google.com/privacy">
									{t("GOOGLE_RECAPTCHA_POLICY")}
								</a> &&nbsp;
								<a className="link" href="https://policies.google.com/terms">
									{t("GOOGLE_RECAPTCHA_TERMS")}
								</a> {t("GOOGLE_RECAPTCHA_APPLY")}
							</Typography>
							<ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_RECAPTCHA_TOKEN as string}
								size="invisible" badge="inline" theme={isDarkTheme ? "dark" : "light"} />
						</Grid>
					</Container>
				</Form>
			</Formik>
		</Grid>
	);
};

export default ContactForm;
