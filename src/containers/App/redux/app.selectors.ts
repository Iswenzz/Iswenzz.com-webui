import type { Theme } from "@mui/material";
import { getThemeByName } from "@izui/react";

import type { Language } from "App/i18next";
import type { State } from "App/store";

/**
 * Get the application theme.
 */
export const getTheme = (state: State): Theme => getThemeByName(state.app.theme);

/**
 * Get the application language.
 */
export const getLanguage = (state: State): Language => state.app.language;

/**
 * Check if we scrolled past the window height.
 */
export const isPastWindowHeight = (state: State): boolean => state.app.isPastWindowHeight;

/**
 * Get main modal active state.
 */
export const isModalActive = (state: State): boolean => state.app.isModalActive;

/**
 * Get the navbar active state.
 */
export const isNavbarActive = (state: State): boolean => state.app.isNavbarActive;
