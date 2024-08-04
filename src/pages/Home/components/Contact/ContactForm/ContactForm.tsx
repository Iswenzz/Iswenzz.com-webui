import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Container, Grid, Button, TextField } from "@mui/material";
import { FormikHelpers, useFormik } from "formik";
import classNames from "classnames";

import { Loader, Captcha, CaptchaCopyright, useCaptcha } from "@izui/react";
import iswenzz from "@izui/assets/images/iswenzz/iswenzz.png";

import { useContactMutation } from "api";

import { contactFormInitial, ContactFormValues } from "../config";
import scss from "./ContactForm.module.scss";

/**
 * The contact form.
 * @returns
 */
const ContactForm: FC = () => {
	const { t } = useTranslation();

	const captcha = useCaptcha();
	const [contact, { loading, error, data }] = useContactMutation();

	const success = data?.contact || false;
	const fail = !!error;

	const buttonStyle = classNames(scss.buttonDefault, {
		[scss.buttonSuccess]: success,
		[scss.buttonFail]: fail
	});

	const onSubmit = async (
		values: ContactFormValues,
		formik: FormikHelpers<ContactFormValues>
	) => {
		if (!captcha.current) return;
		await captcha.current.executeAsync();
		await contact({
			variables: {
				input: {
					...values,
					token: captcha.current.getValue() || ""
				}
			}
		});
		captcha.current.reset();
		formik.setSubmitting(false);
	};

	const formik = useFormik({ initialValues: contactFormInitial, onSubmit });

	return (
		<Grid
			container
			component="section"
			direction="column"
			justifyContent="center"
			alignItems="center"
		>
			<header>
				<Avatar alt="iswenzz avatar" src={iswenzz} className={scss.avatar} />
			</header>
			<form onSubmit={formik.handleSubmit}>
				<TextField
					required
					fullWidth
					label={t("CONTACT_EMAIL")}
					name="email"
					type="email"
					autoComplete="email"
					color="secondary"
					variant="outlined"
					margin="normal"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<TextField
					required
					fullWidth
					label={t("CONTACT_SUBJECT")}
					name="subject"
					type="text"
					color="secondary"
					variant="outlined"
					margin="normal"
					onChange={formik.handleChange}
					value={formik.values.subject}
				/>
				<TextField
					required
					multiline
					fullWidth
					label={t("CONTACT_MESSAGE")}
					name="message"
					type="text"
					rows="6"
					color="secondary"
					variant="outlined"
					margin="normal"
					onChange={formik.handleChange}
					value={formik.values.message}
				/>
				<Container maxWidth="xs">
					<Grid container justifyContent="center" alignItems="center">
						<Button
							fullWidth
							variant="contained"
							type="submit"
							color="secondary"
							className={buttonStyle}
						>
							{t("CONTACT_SEND")}
						</Button>
						{loading && <Loader size={32} className={scss.buttonProgress} />}
						<CaptchaCopyright />
						<Captcha ref={captcha} />
					</Grid>
				</Container>
			</form>
		</Grid>
	);
};

export default ContactForm;
