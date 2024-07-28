import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Themes as IzThemes, registerTheme, initializeHighlight } from "@izui/react";
import { useWindowScroll } from "react-use";

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

	const { y } = useWindowScroll();

	useEffect(() => {
		const scrollPastWindowHeight = y >= window.innerHeight;
		if (scrollPastWindowHeight !== pastWindowHeight)
			dispatch(setPastWindowHeight(scrollPastWindowHeight));
	}, [y]);

	return (
		<IzThemes theme={theme} scrollLock={modalActive}>
			{children}
		</IzThemes>
	);
};

registerTheme("dark", DarkTheme);
registerTheme("light", LightTheme);

initializeHighlight();

export default Themes;
