import { FC } from "react";
import { Parallax } from "react-parallax";
import { useTheme } from "@mui/material";

import { Header, Spacing, TrailText } from "components";

import { Contact, About, Levels, Projects } from "./design";
import { ProjectPopup } from "./components";

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
			<Parallax style={{backgroundColor: isDarkTheme ? "black" : "rgb(122, 206, 255)"}} 
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkTheme ? "stars" : "clouds"}.svg`)}>
				<Spacing height="100px" />
			</Parallax>

			{/* Levels */}
			<Levels />

			{/* Contact */}
			<Parallax className="contact-parallax" bgImageAlt="index" strength={200} blur={1}
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
