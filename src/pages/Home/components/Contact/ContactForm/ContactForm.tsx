import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@apollo/client";
import { Avatar, Container, Grid, TextField, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import classNames from "classnames";
import isNil from "lodash/isNil";

import { Loader, delay, Captcha, CaptchaCopyright, useCaptcha } from "@izui/react";
import iswenzzIcon from "@izui/assets/images/iswenzz/iswenzz.png";

import mutationContact from "api/graphql/Home/Contact.graphql";
import { Mutation, MutationContactArgs } from "api/generated/graphql";

import { contactFormInitial, ContactFormValues } from "../config";
import scss from "./ContactForm.module.scss";

/**
 * The contact form.
 * @returns
 */
const ContactForm: FC = () =>
{
	const { t } = useTranslation();

	const captcha = useCaptcha();
	const [contact] = useMutation<Mutation, MutationContactArgs>(mutationContact);

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
		if (!loading && !Object.values(values).some(isNil) && captcha.current)
		{
			await captcha.current.executeAsync();

			setSuccess(false);
			setFail(false);
			setLoading(true);

			const captcha_value = captcha.current.getValue();

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
				captcha.current.reset();
			}
			catch
			{
				await mailFail();
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
	 */
	const mailFail = async () =>
	{
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
							<CaptchaCopyright />
							<Captcha ref={captcha} />
						</Grid>
					</Container>
				</Form>
			</Formik>
		</Grid>
	);
};

export default ContactForm;
