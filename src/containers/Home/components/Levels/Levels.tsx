import { FC, memo } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { Divider, Container, Grid, useTheme } from "@mui/material";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { Carousel, Text, animationScaleFadeUp, useResponsive } from "@izui/react";

import Level, { LevelSource } from "./Level/Level";
import levelProjectsJson from "./Levels.json";
import scss from "./Levels.module.scss";

const levels: LevelSource[] = levelProjectsJson;

/**
 * Embla carousel container with all level design flip cards.
 */
export const Levels: FC = () =>
{
	const { theme } = useTheme();
	const [ref, inView] = useInView();

	const height = useResponsive({
		desktop: "700px",
		mobile: "400px"
	});

	return (
		<section>
			<Grid ref={ref} component="section" justifyContent={"center"} alignItems="center"
				className={classNames(scss.gradient, scss[theme])}>
				<Container component="header" className={scss.container}>
					<motion.div variants={animationScaleFadeUp()} initial={"exit"} animate={inView ? "enter" : "exit"}>
						<Text align="center" color="textPrimary" component="h2" variant="h2" className="poiret-h1 noselect">
							LEVEL_DESIGN
						</Text>
						<Divider className={scss.divider} />
					</motion.div>
					<Element name="level-design-section" />
				</Container>
				<motion.article variants={animationScaleFadeUp()} initial={"exit"} animate={inView ? "enter" : "exit"}>
					<Carousel buttonSize={55} width="100%" height={height}>
						{levels.map((level: LevelSource) => (
							<Level key={level.name} level={level} />
						))}
					</Carousel>
				</motion.article>
			</Grid>
		</section>
	);
};

export default memo(Levels);
