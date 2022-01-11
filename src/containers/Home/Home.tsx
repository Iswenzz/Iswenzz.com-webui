import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import {useTranslation} from "react-i18next";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

import { Typography } from "@material-ui/core";

import NavBar from "App/components/NavBar/NavBar";
import Projects from "Home/components/Projects/Projects";
import Footer from "App/components/Footer/Footer";
import IntroHeader from "App/components/IntroHeader/IntroHeader";
import IntroSkill from "Home/components/Intro/Intro";
import Contact from "Home/components/Contact/Contact";
import Levels from "Home/components/Levels/Levels";
import ProjectPopup from "Home/components/ProjectPopup/ProjectPopup";
import { Spacing } from "Components/Spacing/Spacing";
import SplitText from "Components/SplitText/SplitText";

import { HomeActions, HomeDispatch, HomeRedux, setProjectsIndex, toggleProjectModalActive } from "./redux";
import { AppState } from "App";

import "./Home.scss";

/**
 * Home page container.
 */
const Home: FC<HomeRedux> = (props: HomeRedux): JSX.Element =>
{
	const { t } = useTranslation();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	return (
		<>
			{/* Header */}
			<Element name="header-section" />
			<NavBar className="navbar" />

			{/* About */}
			<IntroHeader title="Iswenzz" desc="HOME_HEADER"
				bgImage={require(`assets/images/index/${isDarkMode ? "20.jpg" : "nature1.jpg"}`)} />
			<IntroSkill />
			<Parallax style={{backgroundColor: isDarkMode ? "black" : "rgb(122,206,255)"}}
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkMode ? "stars" : "clouds"}.svg`)}>
				<Spacing height='100px' />
			</Parallax>

			{/* Projects */}
			<ProjectPopup />
			<Projects />
			<Parallax style={{backgroundColor: isDarkMode ? "black" : "rgb(122, 206, 255)"}} 
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkMode ? "stars" : "clouds"}.svg`)}>
				<Spacing height='100px' />
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

			{/* Footer */}
			<Footer />
		</>
	);
};

const mapStateToProps = (state: AppState, ownProps: any): HomeRedux => ({
	projects: state.home.projects,
	projectsStartIndex: state.home.projectsStartIndex,
	projectModalActive: state.home.projectModalActive
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): HomeDispatch => ({
	setProjectsIndex: bindActionCreators(setProjectsIndex, dispatch),
	toggleProjectModalActive: bindActionCreators(toggleProjectModalActive, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
