import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

/**
 * The ReCAPTCHA copyright.
 * @returns
 */
const CaptchaCopyright: FC = () =>
{
	const { t } = useTranslation();

	return (
		<Typography variant="subtitle2" align="center" color="textPrimary" paragraph>
			{t("GOOGLE_RECAPTCHA")}&nbsp;
			<a className="link" href="https://policies.google.com/privacy">
				{t("GOOGLE_RECAPTCHA_POLICY")}
			</a> &&nbsp;
			<a className="link" href="https://policies.google.com/terms">
				{t("GOOGLE_RECAPTCHA_TERMS")}
			</a> {t("GOOGLE_RECAPTCHA_APPLY")}
		</Typography>
	);
};

export default CaptchaCopyright;
