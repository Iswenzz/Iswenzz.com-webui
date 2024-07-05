import type { Theme } from "@mui/material";
import { getThemeByName } from "@izui/react";

import type { Language } from "App/i18next";
import type { State } from "App/store";

export const getTheme = (state: State): Theme => getThemeByName(state.app.theme);
export const getLanguage = (state: State): Language => state.app.language;

export const isPastWindowHeight = (state: State): boolean => state.app.isPastWindowHeight;
export const isModalActive = (state: State): boolean => state.app.isModalActive;
export const isNavbarActive = (state: State): boolean => state.app.isNavbarActive;
