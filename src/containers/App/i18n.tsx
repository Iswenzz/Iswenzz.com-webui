import { FC } from "react";
import { initReactI18next } from "react-i18next";
import i18n, {InitOptions, Resource} from "i18next";
import detector from "i18next-browser-languagedetector";

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
	en: { translation: require("assets/locales/english.json") },
	fr: { translation: require("assets/locales/french.json") },
	es: { translation: require("assets/locales/spanish.json") },
	it: { translation: require("assets/locales/italian.json") },
	zh: { translation: require("assets/locales/chinese.json") }
};

/**
 * Language icons.
 */
export const languages: Record<Language, FC<React.HTMLAttributes<HTMLImageElement>>> = {
	en: (props) => <img {...props} src={require("assets/images/flags/262-united-kingdom.svg").default} alt={"United Kingdom"} />,
	fr: (props) => <img {...props} src={require("assets/images/flags/077-france.svg").default} alt={"France"} />,
	es: (props) => <img {...props} src={require("assets/images/flags/044-spain.svg").default} alt={"Spain"} />,
	it: (props) => <img {...props} src={require("assets/images/flags/011-italy.svg").default} alt={"Italy"} />,
	zh: (props) => <img {...props} src={require("assets/images/flags/261-china.svg").default} alt={"Chinese"} />
};

const initOption: InitOptions = {
	resources,
	lng: getLocalStateValue("app", "language"),
	fallbackLng: "en", 		// Use en if detected lng is not available
	keySeparator: false, 	// We do not use keys in form messages.welcome
	interpolation: {
		escapeValue: false 	// React already safes from xss
	}
};

i18n.use(detector)
	.use(initReactI18next) 	// Passes i18n down to react-i18next
	.init(initOption);

export default i18n;
