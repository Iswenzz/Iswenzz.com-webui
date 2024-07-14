import { FC, memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Divider, Container, Grid, useTheme } from "@mui/material";
import { Element, Carousel, Text, animationScaleFadeUp, useResponsive } from "@izui/react";
import classNames from "classnames";

import Level, { LevelSource } from "./components/Level/Level";
import levelProjectsJson from "./Levels.json";
import scss from "./Levels.module.scss";

const levels: LevelSource[] = levelProjectsJson;

/**
 * Embla carousel container with all level design flip cards.
 */
const Levels: FC = () => {
	const { theme } = useTheme();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const height = useResponsive({
		desktop: "700px",
		mobile: "400px"
	});

	return (
		<section>
			<Grid
				ref={ref}
				component="section"
				justifyContent="center"
				alignItems="center"
				className={classNames(scss.gradient, scss[theme])}
			>
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
						<Divider className={scss.divider} />
					</motion.div>
					<Element name="level-design" />
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
		</section>
	);
};

export default memo(Levels);
