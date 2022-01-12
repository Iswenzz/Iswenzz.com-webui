import { FC } from "react";
import { Parallax } from "react-parallax";
import { useTranslation } from "react-i18next";

import { Typography } from "@material-ui/core";

import Projects from "Home/components/Projects/Projects";
import IntroHeader from "App/components/IntroHeader/IntroHeader";
import IntroSkill from "Home/components/Intro/Intro";
import Contact from "Home/components/Contact/Contact";
import Levels from "Home/components/Levels/Levels";
import ProjectPopup from "Home/components/ProjectPopup/ProjectPopup";
import { Spacing, SplitText } from "Components";

import "./Home.scss";

/**
 * Home page container.
 */
const Home: FC = (): JSX.Element =>
{
	const { t } = useTranslation();
	// const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isDarkMode = true;

	return (
		<>
			{/* About */}
			<IntroHeader title="Iswenzz" desc="HOME_HEADER"
				bgImage={require(`assets/images/index/${isDarkMode ? "20.jpg" : "nature1.jpg"}`)} />
			<IntroSkill />
			<Parallax style={{backgroundColor: isDarkMode ? "black" : "rgb(122,206,255)"}}
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkMode ? "stars" : "clouds"}.svg`)}>
				<Spacing height="100px" />
			</Parallax>

			{/* Projects */}
			<ProjectPopup />
			<Projects />
			<Parallax style={{backgroundColor: isDarkMode ? "black" : "rgb(122, 206, 255)"}} 
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkMode ? "stars" : "clouds"}.svg`)}>
				<Spacing height="100px" />
			</Parallax>

			{/* Levels */}
			<Levels />

			{/* Contact */}
			<Parallax className="contact-parallax" bgImageAlt="index" strength={200} blur={1}
				bgImage={require(`assets/images/index/${isDarkMode ? "55.jpg" : "t1.jpg"}`)}>
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
