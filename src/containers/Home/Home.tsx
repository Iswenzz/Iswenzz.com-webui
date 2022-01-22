import { FC } from "react";

import { Header, Parallax, TrailText } from "components";
import useThemeMode from "utils/hooks/useThemeMode";
import sunset from "assets/images/index/20.jpg";
import mountain from "assets/images/index/nature1.jpg";

import { Contact, About, Levels, Projects } from "./components";

/**
 * Home page.
 */
const Home: FC = () =>
{
	const { headerImage, isDarkTheme } = useThemeMode({
		headerImage: [sunset, mountain]
	});

	return (
		<>
			<Header title="Iswenzz" description="HOME_HEADER" background={headerImage} />

			<About />
			<Projects />
			<Levels />

			<Parallax className="contact-parallax" strength={200} blur={1}
				bgImage={require(`assets/images/index/${isDarkTheme ? "55.jpg" : "t1.jpg"}`)}>
				<TrailText className="poiret-h1 bold noselect contact-typo" align="center" variant="h2" component="h2">
					CONTACT_HEADER
				</TrailText>
			</Parallax>
			<Contact />
		</>
	);
};

export default Home;
