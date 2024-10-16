import { FC } from "react";
import { Header, TrailText } from "@izui/react";

import sunset from "assets/images/background/sunset2.jpg";

import { NavigationChevron } from "router";

import { Contact, About, Levels, Projects } from "./components";
import scss from "./Home.module.scss";

/**
 * Home page.
 */
const Home: FC = () => (
	<>
		<Header
			id="header"
			title="Iswenzz"
			description="HOME_HEADER"
			className={scss.header}
			background={sunset}
			titleClassName="gainsboro-90"
			descriptionClassName="gainsboro-90"
			TextComponent={TrailText}
		>
			<NavigationChevron />
		</Header>
		<About />
		<Projects />
		<Levels />
		<Contact />
	</>
);

export default Home;
