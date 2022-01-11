import { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, MuiThemeProvider, responsiveFontSizes } from "@material-ui/core";

import { getModalActiveState, getTheme } from "App/redux";
import { getElementByXPath } from "utils/elements";

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
		<MuiThemeProvider theme={responsiveFontSizes(theme)}>
			<CssBaseline />
			{children}
		</MuiThemeProvider>
	);
};

export default Themes;
