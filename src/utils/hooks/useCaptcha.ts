import ReCAPTCHA from "react-google-recaptcha";
import { useGenericRef } from "@izui/react";

/**
 * Google ReCAPTCHA ref.
 * @returns
 */
const useCaptcha = () => useGenericRef<ReCAPTCHA>();

export default useCaptcha;
