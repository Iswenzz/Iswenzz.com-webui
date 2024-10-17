import { FC, useRef } from "react";
import { Container, Divider, Grid } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { Spacing, Text, TrailText, animationLeft, animationRight } from "@izui/react";

import { Parallax } from "components";

import { AboutInfo } from "../Intro/Intro";
import aboutJson from "../About.json";
import scss from "./Skills.module.scss";

export const about: AboutInfo = aboutJson;

/**
 * Technological skills.
 */
const Skills: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);
	const [web, software, level, webStacks, softwareStacks, editors] = about.skills;

	return (
		<Grid
			className={scss.skills}
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
			<Parallax spacingTop="50px" />
		</Grid>
	);
};

export default Skills;
