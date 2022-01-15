import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, responsiveFontSizes } from "@mui/material";

import { getModalActiveState, getTheme } from "App/redux";
import { getElementByXPath } from "utils/elements";

import "App/styles/Main.scss";

/**
 * App themes.
 */
export const Themes: FC = ({ children }): JSX.Element =>
{
	const html = useRef<HTMLElement>(getElementByXPath("html") as HTMLElement);

	const theme = useSelector(getTheme);
	const isModalActive = useSelector(getModalActiveState);

	/**
	 * Dynamic changes.
	 */
	useEffect(() =>
	{
		html.current.style.overflowY = isModalActive ? "hidden" : "visible";
	}, [isModalActive]);

	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default Themes;
