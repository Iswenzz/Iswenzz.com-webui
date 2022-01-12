import { FC, useState, memo } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useMediaQuery } from "react-responsive";
import { Element } from "react-scroll";
import {motion, Variants} from "framer-motion";
import { Divider, Container, Grid } from "@material-ui/core";

import { RadialGradient, GradiantProps, EmblaCarousel, Text } from "Components";
import Level, { LevelProject } from "Home/components/Level/Level";

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
export const Levels: FC = () =>
{
	const [levels] = useState<LevelProject[]>(require("./Levels.json"));
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
	const isDarkMode = true;

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
									<EmblaCarousel buttonSize={55} width="100%" delay={10000}
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
