import { FC } from "react";
import { Header, useThemeMode } from "@izui/react";

import sunset from "assets/images/background/sunset2.jpg";
import mountain from "assets/images/background/nature1.jpg";
import { NavigationChevron } from "router/components";

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
			<Header title="Iswenzz" description="HOME_HEADER" background={headerImage}
				titleClassName="gainsboro-90" descriptionClassName="gainsboro-90">
				<NavigationChevron />
			</Header>

			<About />
			<Projects />
			<Levels />
			<Contact />
		</>
	);
};

export default Home;
