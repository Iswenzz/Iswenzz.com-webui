import type { Theme } from "@mui/material";
import { getThemeByName } from "App/components/Themes";

import type { Language } from "App/i18n";
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
export const getModalActiveState = (state: RootRedux): boolean => state.app.isModalActive;
