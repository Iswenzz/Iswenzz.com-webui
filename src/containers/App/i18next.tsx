import { FC } from "react";
import { initReactI18next } from "react-i18next";
import i18next, { InitOptions, Resource } from "i18next";
import detector from "i18next-browser-languagedetector";

import flagUnitedKingdom from "@izui/assets/images/flags/262-united-kingdom.svg";
import flagFrance from "@izui/assets/images/flags/077-france.svg";
import flagSpain from "@izui/assets/images/flags/044-spain.svg";
import flagItaly from "@izui/assets/images/flags/011-italy.svg";
import flagChina from "@izui/assets/images/flags/261-china.svg";

import english from "assets/locales/english.json";
import french from "assets/locales/french.json";
import spanish from "assets/locales/spanish.json";
import italian from "assets/locales/italian.json";
import chinese from "assets/locales/chinese.json";

import { getLocalStateValue } from "./utils/localStorage";

/**
 * Supported languages.
 */
export type Language = "en" | "fr" | "es" | "it" | "zh";
export const i18nLanguages: Record<Language, string> = {
	en: "English",
	fr: "Français",
	es: "Español",
	it: "Italiano",
	zh: "简体中文"
};

/**
 * Language locale files.
 */
const resources: Record<Language, Resource> = {
	en: { translation: english },
	fr: { translation: french },
	es: { translation: spanish },
	it: { translation: italian },
	zh: { translation: chinese }
};

/**
 * Language icons.
 */
export const languages: Record<Language, FC<React.HTMLAttributes<HTMLImageElement>>> = {
	en: props => <img {...props} src={flagUnitedKingdom} alt="United Kingdom" />,
	fr: props => <img {...props} src={flagFrance} alt="France" />,
	es: props => <img {...props} src={flagSpain} alt="Spain" />,
	it: props => <img {...props} src={flagItaly} alt="Italy" />,
	zh: props => <img {...props} src={flagChina} alt="China" />
};

const initOption: InitOptions = {
	resources,
	lng: getLocalStateValue("app", "language"),
	fallbackLng: "en", // Use en if detected lng is not available
	keySeparator: false, // We do not use keys in form messages.welcome
	interpolation: {
		escapeValue: false // React already safes from xss
	}
};

i18next.use(detector).use(initReactI18next).init(initOption);

export default i18next;
