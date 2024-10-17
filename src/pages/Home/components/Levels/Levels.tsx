import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Divider, Container, Grid } from "@mui/material";
import { Carousel, Text, animationScaleFadeUp, useResponsive } from "@izui/react";

import Level, { LevelSource } from "./components/Level/Level";
import levelProjectsJson from "./Levels.json";
import scss from "./Levels.module.scss";

const levels: LevelSource[] = levelProjectsJson;

/**
 * Embla carousel container with all level design flip cards.
 */
const Levels: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const height = useResponsive({
		desktop: "700px",
		mobile: "400px"
	});

	return (
		<Grid ref={ref} className={scss.gradient} component="section">
			<Container component="header" className={scss.container}>
				<motion.div
					variants={animationScaleFadeUp()}
					initial="exit"
					animate={inView ? "enter" : "exit"}
				>
					<Text
						align="center"
						color="textPrimary"
						component="h2"
						variant="h2"
						className="poiret-big noselect"
					>
						LEVEL_DESIGN
					</Text>
					<Divider id="level-design" className={scss.divider} />
				</motion.div>
			</Container>
			<motion.article
				variants={animationScaleFadeUp()}
				initial="exit"
				animate={inView ? "enter" : "exit"}
			>
				<Carousel buttonSize={55} width="100%" height={height}>
					{levels.map((level: LevelSource) => (
						<Level key={level.name} level={level} />
					))}
				</Carousel>
			</motion.article>
		</Grid>
	);
};

export default Levels;
