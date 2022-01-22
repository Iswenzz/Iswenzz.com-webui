import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { getModalActive, getTheme } from "App/redux";
import { getElementByXPath } from "utils/elements";

import "App/styles/Main.scss";

/**
 * App themes.
 * @todo - Hook for locking page scroll with empty scroll bar.
 */
export const Themes: FC = ({ children }) =>
{
	const theme = useSelector(getTheme);
	const isModalActive = useSelector(getModalActive);

	const html = useRef<HTMLElement>(getElementByXPath("html") as HTMLElement);

	/**
	 * Dynamic changes.
	 */
	useEffect(() =>
	{
		html.current.style.overflowY = isModalActive ? "hidden" : "visible";
	}, [isModalActive]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default Themes;
