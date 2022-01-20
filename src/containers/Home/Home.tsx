import { FC } from "react";
import { useTheme } from "@mui/material";

import { Header, Parallax, TrailText } from "components";

import { Contact, About, Levels, Projects } from "./components";
import { ProjectPopup } from "./components/Projects/ProjectPopup/ProjectPopup";

/**
 * Home page.
 */
const Home: FC = () =>
{
	const { isDarkTheme } = useTheme();

	return (
		<>
			<Header title="Iswenzz" description="HOME_HEADER"
				background={require(`assets/images/index/${isDarkTheme ? "20.jpg" : "nature1.jpg"}`)} />
			<About />

			{/* Projects */}
			<ProjectPopup />
			<Projects />

			{/* Levels */}
			<Levels />

			{/* Contact */}
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
