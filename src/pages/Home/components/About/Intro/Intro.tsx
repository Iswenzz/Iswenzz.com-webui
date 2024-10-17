import { FC, useRef } from "react";
import { Container, Divider, Grid } from "@mui/material";
import { Text, animationUp } from "@izui/react";
import { motion, useInView } from "framer-motion";
import classNames from "classnames";

import { Parallax } from "components";

import aboutJson from "../About.json";
import scss from "./Intro.module.scss";

export const about: AboutInfo = aboutJson;

/**
 * Portfolio introduction.
 */
const Intro: FC = () => {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	return (
		<Grid
			className={scss.intro}
			component="section"
			justifyContent="center"
			alignItems="center"
		>
			<Grid className={scss.grid} container justifyContent="center" alignItems="center">
				<motion.div
					ref={ref}
					variants={animationUp()}
					initial="exit"
					animate={inView ? "enter" : "exit"}
				>
					<Container component="header" maxWidth="md">
						<Text
							align="left"
							color="textPrimary"
							component="h2"
							variant="h2"
							className="poiret-big noselect"
						>
							{about.header}
						</Text>
						<Divider className={scss.divider} />
						<Text
							align="left"
							color="textPrimary"
							component="h3"
							variant="h3"
							className={classNames(scss.secondText, "ubuntu-h3")}
						>
							{about.title}
						</Text>
						<Text
							align="left"
							color="textPrimary"
							paragraph
							component="h4"
							variant="h4"
							className="ubuntu-h4"
						>
							{about.description}
						</Text>
					</Container>
				</motion.div>
			</Grid>
			<Parallax spacingTop="50px" />
		</Grid>
	);
};

export type AboutInfo = {
	header: string;
	title: string;
	description: string;
	skills: Skill[];
};

type Skill = {
	title: string;
	points: string[];
};

export default Intro;
