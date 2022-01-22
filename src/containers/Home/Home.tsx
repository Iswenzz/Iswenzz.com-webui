import { FC } from "react";

import { Header } from "components";
import useThemeMode from "utils/hooks/useThemeMode";
import sunset from "assets/images/index/20.jpg";
import mountain from "assets/images/index/nature1.jpg";

import { Contact, About, Levels, Projects } from "./components";

/**
 * Home page.
 */
const Home: FC = () =>
{
	const { headerImage } = useThemeMode({
		headerImage: [sunset, mountain]
	});

	return (
		<>
			<Header title="Iswenzz" description="HOME_HEADER" background={headerImage} />

			<About />
			<Projects />
			<Levels />
			<Contact />
		</>
	);
};

export default Home;
