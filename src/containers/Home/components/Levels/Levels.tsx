import React, { FC, useState, memo } from "react";
import RadialGradient, { GradiantProps } from "Components/RadialGradient/RadialGradient";
import { Divider, Container, Grid } from "@material-ui/core";
import EmblaCarousel from "Components/EmblaCarousel/EmblaCarousel";
import Level, { LevelProject } from "Home/components/Level/Level";
import {motion, Variants} from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { Element } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { AppState } from "App";
import Text from "Components/Text/Text";
import "./Levels.scss";

const animation: Variants = {
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
		scale: 0.4,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

/**
 * Embla carousel container with all level design flip cards.
 */
export const Levels: FC = (): JSX.Element =>
{
	const [levels,] = useState<LevelProject[]>(require("./Levels.json"));
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	const config: GradiantProps = isDarkMode ? {
		position: `${isTabletOrMobileDevice ? "circle" : "ellipse"} at bottom`, 
		colors: [
			{ color: "#001C51", colorPercent: "0%" },
			{ color: "#090A0A", colorPercent: "50%" }
		]
	} : {
		position: "circle at bottom", 
		colors: [
			{ color: "#f69100", colorPercent: "0%" },
			{ color: "#f4f4f4", colorPercent: "50%" }
		]
	};

	return (
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobileDevice ? 100 : 400 }}>
			{({ isVisible }) => (
				<section className="levels">
					<Element name="level-design-section" />
					<RadialGradient component="section" config={config} className="levels-gradient-grid">
						<Grid container direction="column" justifyContent="center" alignItems="center">
							<Container component="header" className="levels-container">
								<motion.div variants={animation} initial={"exit"} animate={isVisible ? "enter" : "exit"}>
									<Text i18n align="center" color="textPrimary" component="h2" variant="h2"
										className="poiret-h1 noselect" items={["LEVEL_DESIGN"]} />
									<Divider className="levels-divider" />
								</motion.div>
							</Container>
							<Container className="levels-carousel-container" component="article">
								<motion.div variants={animation} initial={"exit"} animate={isVisible ? "enter" : "exit"}>
									<EmblaCarousel width='100%' delayLength={10000} autoplay={false}
										height={isPortrait ? "500px" : isTabletOrMobileDevice ? "350px" : "700px" }>
										{levels.map((level: LevelProject) => (
											<Level key={level.name} levels={levels} currentLevel={level} />
										))}
									</EmblaCarousel>
								</motion.div>
							</Container>
						</Grid>
					</RadialGradient>	
				</section>
			)}
		</VisibilitySensor>
	);
};

export default memo(Levels);