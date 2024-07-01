import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Container, Divider, Grid, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import classNames from "classnames";
import { Spacing, Text, TrailText, animationLeft, animationRight } from "@izui/react/types";

import { AboutInfo } from "../Intro/Intro";
import aboutJson from "../About.json";
import scss from "./Skills.module.scss";

export const about: AboutInfo = aboutJson;

/**
 * Technological skills.
 */
const Skills: FC = () => {
	const { theme } = useTheme();
	const [ref, inView] = useInView();
	const [web, software, level, webStacks, softwareStacks, editors] = about.skills;

	return (
		<Grid
			className={classNames(scss.skills, scss[theme])}
			component="section"
			justifyContent="center"
			alignItems="center"
		>
			<Container ref={ref}>
				<motion.div
					variants={animationLeft()}
					initial="exit"
					animate={inView ? "enter" : "exit"}
				>
					<Container component="header" className={scss.container}>
						<TrailText
							align="center"
							color="textPrimary"
							component="h2"
							variant="h2"
							className="poiret-big noselect"
							visible={inView}
						>
							TECHNO_SKILLS
						</TrailText>
						<Divider className={scss.divider} />
					</Container>
				</motion.div>
				<motion.div
					variants={animationRight()}
					initial="exit"
					animate={inView ? "enter" : "exit"}
				>
					<Grid
						className={scss.grid}
						container
						component="section"
						justifyContent="space-around"
					>
						<article className={scss.article}>
							<Text component="h2" className="poiret-h2">
								{web.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{web.points}
							</Text>
							<Spacing height="20px" />
							<Text component="h2" className="poiret-h2">
								{webStacks.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{webStacks.points}
							</Text>
						</article>
						<article className={scss.article}>
							<Text component="h2" className="poiret-h2">
								{software.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{software.points}
							</Text>
							<Spacing height="20px" />
							<Text component="h2" className="poiret-h2">
								{softwareStacks.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{softwareStacks.points}
							</Text>
						</article>
						<article className={scss.article}>
							<Text component="h2" className="poiret-h2">
								{level.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{level.points}
							</Text>
							<Spacing height="20px" />
							<Text component="h2" className="poiret-h2">
								{editors.title}
							</Text>
							<Text component="h4" className="ubuntu-h4">
								{editors.points}
							</Text>
						</article>
					</Grid>
				</motion.div>
			</Container>
		</Grid>
	);
};

export default Skills;
