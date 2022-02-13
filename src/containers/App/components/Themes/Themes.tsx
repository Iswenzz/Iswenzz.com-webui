import { FC } from "react";
import { useSelector } from "react-redux";
import { Themes as IzThemes, registerTheme } from "@izui/react";

import { getModalActive, getTheme } from "App/redux";

import DarkTheme from "./app/Dark/Dark";
import LightTheme from "./app/Light/Light";

/**
 * App themes.
 */
export const Themes: FC = ({ children }) =>
{
	const theme = useSelector(getTheme);
	const isModalActive = useSelector(getModalActive);

	return (
		<IzThemes theme={theme} scrollLock={isModalActive}>
			{children}
		</IzThemes>
	);
};

registerTheme("dark", DarkTheme);
registerTheme("light", LightTheme);

export default Themes;
