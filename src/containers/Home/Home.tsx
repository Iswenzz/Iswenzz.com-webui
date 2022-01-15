import { FC } from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";

import { Typography, useTheme } from "@mui/material";

import Projects from "Home/components/Projects/Projects";
import IntroHeader from "App/components/IntroHeader/IntroHeader";
import IntroSkill from "Home/components/Intro/Intro";
import Contact from "Home/components/Contact/Contact";
import Levels from "Home/components/Levels/Levels";
import ProjectPopup from "Home/components/ProjectPopup/ProjectPopup";
import { Spacing, SplitText } from "Components";

/**
 * Home page.
 */
const Home: FC = () =>
{
	const { isDarkTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<>
			{/* About */}
			<IntroHeader title="Iswenzz" desc="HOME_HEADER"
				bgImage={require(`assets/images/index/${isDarkTheme ? "20.jpg" : "nature1.jpg"}`)} />
			<IntroSkill />
			<Parallax style={{backgroundColor: isDarkTheme ? "black" : "rgb(122,206,255)"}}
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkTheme ? "stars" : "clouds"}.svg`)}>
				<Spacing height="100px" />
			</Parallax>

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
				<Typography className="poiret-h1 bold noselect contact-typo" align="center" variant="h2" component="h2">
					<SplitText>
						{t("CONTACT_HEADER")}
					</SplitText>
				</Typography>
			</Parallax>
			<Contact />
		</>
	);
};

export default Home;
