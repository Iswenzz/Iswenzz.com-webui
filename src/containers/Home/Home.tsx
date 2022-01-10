import React, { FC } from "react";
import { connect, useSelector } from "react-redux";
import { Parallax } from "react-parallax";
import { Element } from "react-scroll";
import {useTranslation} from "react-i18next";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

import { Typography } from "@material-ui/core";

import NavBar from "App/NavBar/NavBar";
import Projects from "Home/Projects/Projects";
import Footer from "App/Footer/Footer";
import IntroHeader from "App/IntroHeader/IntroHeader";
import IntroSkill from "Home/Intro/Intro";
import Contact from "Home/Contact/Contact";
import Levels from "Home/Levels/Levels";
import { LinkedProjectProps } from "Home/Project/Project";
import ProjectPopup from "Home/ProjectPopup/ProjectPopup";
import { Spacing } from "Components/Spacing/Spacing";
import SplitText from "Components/SplitText/SplitText";

import { HomeActions, setProjectsIndex, toggleProjectModalActive } from "./redux";
import { AppState } from "../App";

import "../App/Common.scss";
import "./Home.scss";

/**
 * Home page container.
 */
const Home: FC<HomeProps> = (props: HomeProps): JSX.Element =>
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

export type HomeProps = {
	projects: LinkedProjectProps[],
	projectsStartIndex: number,
	projectModalActive: boolean
};

export type HomeDispatchProps = {
	setProjectsIndex: (index: number) => void,
	toggleProjectModalActive: (active: boolean) => void
};

const mapStateToProps = (state: AppState, ownProps: any): HomeProps => ({
	projects: state.home.projects,
	projectsStartIndex: state.home.projectsStartIndex,
	projectModalActive: state.home.projectModalActive
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): HomeDispatchProps => ({
	setProjectsIndex: bindActionCreators(setProjectsIndex, dispatch),
	toggleProjectModalActive: bindActionCreators(toggleProjectModalActive, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);