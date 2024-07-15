import { FC, PropsWithChildren } from "react";
import { Header, TrailText } from "@izui/react";

import sunset from "assets/images/background/sunset2.jpg";
import { NavigationChevron } from "router";

import { Contact, About, Levels, Projects } from "./components";

/**
 * Home page.
 */
const Home: FC = () => (
	<>
		<Header
			id="header"
			title="Iswenzz"
			description="HOME_HEADER"
			background={sunset}
			titleClassName="gainsboro-90"
			descriptionClassName="gainsboro-90"
			TextComponent={TrailText as FC<PropsWithChildren>}
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
