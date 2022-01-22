import type { Theme } from "@mui/material";
import { getThemeByName } from "App/components/Themes";

import type { Language } from "App/i18next";
import type { RootRedux } from "App/store";

/**
 * Get the application theme.
 */
export const getTheme = (state: RootRedux): Theme => getThemeByName(state.app.theme);

/**
 * Get the application language.
 */
export const getLanguage = (state: RootRedux): Language => state.app.language;

/**
 * Get main modal active state.
 */
export const getModalActive = (state: RootRedux): boolean => state.app.isModalActive;

/**
 * Get the navbar active state.
 */
export const getNavbarActive = (state: RootRedux): boolean => state.app.navbar;
