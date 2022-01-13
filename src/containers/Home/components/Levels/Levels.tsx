import { FC, useState, memo } from "react";
import VisibilitySensor from "react-visibility-sensor";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { Element } from "react-scroll";
import {motion, Variants} from "framer-motion";
import { Divider, Container, Grid, useTheme } from "@mui/material";

import { Gradient, GradientProps, Carousel, Text } from "Components";
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
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	const { isDarkTheme } = useTheme();

	const config: GradientProps = isDarkTheme ? {
		gradientPosition: `${isTabletOrMobile ? "circle" : "ellipse"} at bottom`, 
		colors: [
			{ color: "#001C51", colorPercent: "0%" },
			{ color: "#090A0A", colorPercent: "50%" }
		]
	} : {
		gradientPosition: "circle at bottom", 
		colors: [
			{ color: "#f69100", colorPercent: "0%" },
			{ color: "#f4f4f4", colorPercent: "50%" }
		]
	};

	return (
		<VisibilitySensor partialVisibility offset={{ bottom: isTabletOrMobile ? 100 : 400 }}>
			{({ isVisible }) => (
				<section className="levels">
					<Element name="level-design-section" />
					<Gradient component="section" config={config} className="levels-gradient-grid">
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
									<Carousel buttonSize={55} width="100%" delay={10000}
										height={isPortrait ? "500px" : isTabletOrMobile ? "350px" : "700px" }>
										{levels.map((level: LevelProject) => (
											<Level key={level.name} levels={levels} currentLevel={level} />
										))}
									</Carousel>
								</motion.div>
							</Container>
						</Grid>
					</Gradient>	
				</section>
			)}
		</VisibilitySensor>
	);
};

export default memo(Levels);
