import { Theme } from "@material-ui/core";
import { Language } from "App/i18n";
import { AppRedux } from "App/redux";

/**
 * Get the application theme.
 */
export const getTheme = (state: AppRedux): Theme => state.theme;

/**
 * Get the application language.
 */
export const getLanguage = (state: AppRedux): Language => state.language;

/**
 * Get main modal active state.
 */
export const getModalActiveState = (state: AppRedux): boolean => state.isModalActive;
