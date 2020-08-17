import React, { memo, FunctionComponent } from "react";
import Spacing from "components/Spacing/Spacing";
import RadialGradient, { IGradientColor } from "components/RadialGradient/RadialGradient";
import { Parallax } from "react-parallax";
import { useSelector } from "react-redux";
import { AppState } from "application";
import Text from "components/Text/Text";
import { Grid, Container, Divider } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import posed from "react-pose";
import TrailText from "components/TrailText/TrailText";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import "Common.scss";
import "./Intro.scss";

const intro = {
	header: "Hello there!",
	title: "My name is Alexis, I'm a Software Engineer and a Level Designer.",
	desc: `I've experience working on a diverse set of programming topics for the past 5 years 
	such as software development, web development, database design, graphics programming, game development,
	UI/UX design, and reverse engineering.`
};

export type Info = {
	title: string,
	points: string[]
};

const webDev: Info = {
	title: "Web Development",
	points: [
		"• Javascript ES7+",
		"• Typescript",
		"• HTML5",
		"• CSS & SCSS / SASS",
	]
};

const webDevStack: Info = {
	title: "Web Stacks",
	points: [
		"• React",
		"• Redux",
		"• JQuery",
		"• MySQL / MangoDB",
		"• Bootstrap / Material UI",
	]
};

const softDev: Info = {
	title: "Software Development",
	points: [
		"• C C++",
		"• C# VB C++/CLI",
		"• Java",
		"• Python",
		"• GSC",
		"• Bash / Shell / Powershell",
		"• Assembly x86 / x64",
	]
};

const softDevStack: Info = {
	title: "Software Stacks",
	points: [
		"• .NET",
		"• Qt",
		"• Winform & WPF",
		"• DirectX",
		"• Selenium",
	]
};

const levelDesign: Info = {
	title: "Level Design",
	points: [
		"• BSP Blockout & Landscape",
		"• Detail geometry",
		"• Shader / Material creation",
		"• Lighting, FX / SFX placement",
		"• Level optimization & Portaling"
	]
};

const levelDesignEditors: Info = {
	title: "Editors",
	points: [
		"• Unreal Engine 4",
		"• Unity 5",
		"• Radiant / GtkRadiant",
	]
};

const AnimationUp = posed.div({
	enter: { 
		y: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeOut"
		}
	},
	exit: {
		y: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeIn"
		}
	}
});

const AnimationRight = posed.div({
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeOut"
		}
	},
	exit: {
		x: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeIn"
		}
	}
});

const AnimationLeft = posed.div({
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeOut"
		}
	},
	exit: {
		x: "-100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: "easeIn"
		}
	}
});

/**
 * Container to introduce my portfolio and technological skills.
 */
export const IntroSkill: FunctionComponent = (): JSX.Element =>
{
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });

	const gradientColor: IGradientColor[] = [
		{ color: isDarkMode ? "#0e0f14" : "#e5e5e5", colorPercent: "0%" },
		{ color: isDarkMode ? "#181a21" : "#f4f4f4", colorPercent: "100%" }
	];

	/**
	 * Grid containing skills informations.
	 */
	const skillGrid: JSX.Element = (
		<Grid className="skill-grid" container component="section"
			alignItems="center" direction="row" justify="space-around">
			
			{/* Web Development */}
			<article className="info-div">
				<Text component="h2" className='poiret-h2' items={[webDev.title]} />
				<Text component="h4" className='ubuntu-h4' items={webDev.points} />
				<Spacing height='20px' />
				<Text component="h2" className='poiret-h2' items={[webDevStack.title]} />
				<Text component="h4" className='ubuntu-h4' items={webDevStack.points} />
			</article>

			{/* Software Development */} 
			<article className="info-div">
				<Text component="h2" className='poiret-h2' items={[softDev.title]} />
				<Text component="h4" className='ubuntu-h4' items={softDev.points} />
				<Spacing height='20px' />
				<Text component="h2" className='poiret-h2' items={[softDevStack.title]} />
				<Text component="h4" className='ubuntu-h4' items={softDevStack.points} />
			</article>

			{/* Level Design */}
			<article className="info-div">
				<Text component="h2" className='poiret-h2' items={[levelDesign.title]} />
				<Text component="h4" className='ubuntu-h4' items={levelDesign.points} />
				<Spacing height='20px' />
				<Text component="h2" className='poiret-h2' items={[levelDesignEditors.title]} />
				<Text component="h4" className='ubuntu-h4' items={levelDesignEditors.points} />
			</article>

		</Grid>
	);

	return (
		<Grid container component="section" direction="column" justify="center" alignItems="stretch">
			<Element name="intro-section" />

			{/* First Section (About) */}
			<RadialGradient className="intro" component="section" position='ellipse at bottom' colors={gradientColor}>
				<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 20 : 200 }}>
					{({ isVisible }) => (
						<Grid className="intro-grid" container direction="row" justify="center" alignItems="center">
							<AnimationUp className="intro-anim" pose={isVisible ? "enter" : "exit"} 
								key="about-animation">
								<Container component="header" maxWidth="md">
									<Text align="left" color="textPrimary" component="h2" variant="h2"
										className='poiret-h1 noselect' items={[intro.header]} />
									<Divider className="intro-divider" />
									<Text align="left" className="intro-second-text ubuntu-h3" color="textPrimary" 
										component="h3" variant="h3" items={[intro.title]} />
									<Text align="left" color="textPrimary" paragraph component="h4" variant="h4"
										className='ubuntu-h4' items={[intro.desc]} />
								</Container>
							</AnimationUp>
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
							<AnimationLeft pose={isVisible ? "enter" : "exit"} key="about-skill-header-animation">
								<Container component="header" className="skill-container">
									<TrailText align="center" color="textPrimary" component="h2" variant="h2"
										className='poiret-h1 noselect' active={isVisible} items={["Technological Skills"]} />
									<Divider className="skill-divider" />
								</Container>
							</AnimationLeft>
							{isTabletOrMobileDevice ? skillGrid : (
								<AnimationRight pose={isVisible ? "enter" : "exit"} key="about-skill-animation">
									{skillGrid}
								</AnimationRight>
							)}
						</Container>
					)}
				</VisibilitySensor>
			</RadialGradient>
		</Grid>
	);
};

export default memo(IntroSkill);