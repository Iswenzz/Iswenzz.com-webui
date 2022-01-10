import React, { memo, FC } from "react";
import Spacing from "Components/Spacing/Spacing";
import RadialGradient, { GradientColor } from "Components/RadialGradient/RadialGradient";
import { Parallax } from "react-parallax";
import { useSelector } from "react-redux";
import { AppState } from "../../App";
import Text from "Components/Text/Text";
import { Grid, Container, Divider } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import {motion, Variants} from "framer-motion";
import TrailText from "Components/TrailText/TrailText";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import "./Intro.scss";

export type IntroSkill = {
	title: string,
	points: string[]
};

export type IntroInfo = {
	header: string,
	title: string,
	desc: string,
	skills: IntroSkill[]
};

export const introJSON: IntroInfo = require("./Intro.json");

const animationUp: Variants = {
	enter: { 
		y: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		y: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

const animationRight: Variants = {
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		x: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

const animationLeft: Variants = {
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		x: "-100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

/**
 * Container to introduce my portfolio and technological skills.
 */
export const IntroSkill: FC = (): JSX.Element =>
{
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });

	const gradientColor: GradientColor[] = [
		{ color: isDarkMode ? "#0e0f14" : "#e5e5e5", colorPercent: "0%" },
		{ color: isDarkMode ? "#181a21" : "#f4f4f4", colorPercent: "100%" }
	];

	/**
	 * Grid containing skills informations.
	 */
	const skillGrid: JSX.Element = (
		<Grid className="skill-grid" container component="section"
			alignItems="center" direction="row" justifyContent="space-around">
			
			{/* Web Development */}
			<article className="info-div">
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[0].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[0].points} />
				<Spacing height='20px' />
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[1].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[1].points} />
			</article>

			{/* Software Development */} 
			<article className="info-div">
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[2].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[2].points} />
				<Spacing height='20px' />
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[3].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[3].points} />
			</article>

			{/* Level Design */}
			<article className="info-div">
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[4].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[4].points} />
				<Spacing height='20px' />
				<Text i18n component="h2" className='poiret-h2' items={[introJSON.skills[5].title]} />
				<Text component="h4" className='ubuntu-h4' items={introJSON.skills[5].points} />
			</article>

		</Grid>
	);

	return (
		<Grid container component="section" direction="column" justifyContent="center" alignItems="stretch">
			<Element name="intro-section" />

			{/* First Section (About) */}
			<RadialGradient className="intro" component="section" position='ellipse at bottom' colors={gradientColor}>
				<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 20 : 200 }}>
					{({ isVisible }) => (
						<Grid className="intro-grid" container direction="row" justifyContent="center" alignItems="center">
							<motion.div className="intro-anim" variants={animationUp} initial={"exit"} animate={isVisible ? "enter" : "exit"}>
								<Container component="header" maxWidth="md">
									<Text i18n align="left" color="textPrimary" component="h2" variant="h2"
										className='poiret-h1 noselect' items={[introJSON.header]} />
									<Divider className="intro-divider" />
									<Text i18n align="left" className="intro-second-text ubuntu-h3" color="textPrimary"
										component="h3" variant="h3" items={[introJSON.title]} />
									<Text i18n align="left" color="textPrimary" paragraph component="h4" variant="h4"
										className='ubuntu-h4' items={[introJSON.desc]} />
								</Container>
							</motion.div>
						</Grid>
					)}
				</VisibilitySensor>
			</RadialGradient>

			<Parallax style={{backgroundColor: isDarkMode ? "black" : "rgb(122, 206, 255)"}} 
				bgImageAlt="index" strength={400}
				bgImage={require(`assets/images/index/${isDarkMode ? "stars" : "clouds"}.svg`)}>
				<Spacing height='100px' />
			</Parallax>

			{/* Second Section (Skills) */}
			<RadialGradient className="skill" component="section" position='ellipse at top' colors={gradientColor}>
				<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 10 : 200 }}>
					{({ isVisible }) => (
						<Container>
							<motion.div variants={animationLeft} initial={"exit"} animate={isVisible ? "enter" : "exit"}>
								<Container component="header" className="skill-container">
									<TrailText i18n align="center" color="textPrimary" component="h2" variant="h2"
										className="poiret-h1 noselect" active={isVisible} items={["TECHNO_SKILLS"]} />
									<Divider className="skill-divider" />
								</Container>
							</motion.div>
							{isTabletOrMobileDevice ? skillGrid : (
								<motion.div variants={animationRight} initial={"exit"} animate={isVisible ? "enter" : "exit"}>
									{skillGrid}
								</motion.div>
							)}
						</Container>
					)}
				</VisibilitySensor>
			</RadialGradient>
		</Grid>
	);
};

export default memo(IntroSkill);