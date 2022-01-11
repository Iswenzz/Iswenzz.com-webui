import { initReactI18next } from "react-i18next";
import i18n, {InitOptions, Resource} from "i18next";
import detector from "i18next-browser-languagedetector";

const resources: Record<Language, Resource> = {
	en: { translation: require("assets/locales/english.json") },
	fr: { translation: require("assets/locales/french.json") },
	es: { translation: require("assets/locales/spanish.json") },
	it: { translation: require("assets/locales/italian.json") },
	zh: { translation: require("assets/locales/chinese.json") }
};

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

const initOption: InitOptions = {
	resources,
	lng: localStorage.getItem("language") ?? "en",
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
