import { FC, memo } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Divider, Grid, useTheme } from "@mui/material";
import { Text, animationUp } from "@izui/react";
import { motion } from "framer-motion";
import classNames from "classnames";

import aboutJson from "../About.json";
import scss from "./Intro.module.scss";

export const about: AboutInfo = aboutJson;

/**
 * Portfolio introduction.
 */
const Intro: FC = () =>
{
	const { theme } = useTheme();
	const [ref, inView] = useInView();

	return (
		<Grid className={classNames(scss.intro, scss[theme])} component="section"
			justifyContent="center" alignItems="center">
			<Grid className={scss.grid} container justifyContent="center" alignItems="center">
				<motion.div ref={ref} variants={animationUp} initial="exit" animate={inView ? "enter" : "exit"}>
					<Container component="header" maxWidth="md">
						<Text align="left" color="textPrimary" component="h2" variant="h2"
							className="poiret-big noselect">
							{about.header}
						</Text>
						<Divider className={scss.divider} />
						<Text align="left" color="textPrimary" component="h3" variant="h3"
							className={classNames(scss.secondText, "ubuntu-h3")}>
							{about.title}
						</Text>
						<Text align="left" color="textPrimary" paragraph component="h4" variant="h4" className="ubuntu-h4">
							{about.description}
						</Text>
					</Container>
				</motion.div>
			</Grid>
		</Grid>
	);
};

export type AboutInfo = {
	header: string,
	title: string,
	description: string,
	skills: Skill[]
};

type Skill = {
	title: string,
	points: string[]
};

export default memo(Intro);
