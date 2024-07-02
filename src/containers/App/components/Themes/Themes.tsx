import { FC, PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Themes as IzThemes, registerTheme, scrollConfig } from "@izui/react";
import { useScroll } from "@use-gesture/react";

import { isModalActive, getTheme, setPastWindowHeight, isPastWindowHeight } from "App/redux";

import DarkTheme from "./app/Dark/Dark";
import LightTheme from "./app/Light/Light";

/**
 * App themes.
 */
const Themes: FC<PropsWithChildren> = ({ children }) => {
	const dispatch = useDispatch();

	const theme = useSelector(getTheme);
	const modalActive = useSelector(isModalActive);
	const pastWindowHeight = useSelector(isPastWindowHeight);

	useScroll(() => {
		const scrollPastWindowHeight = window.scrollY >= window.innerHeight;
		if (scrollPastWindowHeight !== pastWindowHeight)
			dispatch(setPastWindowHeight(scrollPastWindowHeight));
	}, scrollConfig);

	return (
		<IzThemes theme={theme} scrollLock={modalActive}>
			{children}
		</IzThemes>
	);
};

registerTheme("dark", DarkTheme);
registerTheme("light", LightTheme);

export default Themes;
