import { CSSProperties, FC } from "react";
import { Container, Grid, Typography, GridProps } from "@mui/material";
import { motion, MotionProps } from "framer-motion";
import classNames from "classnames";

import scss from "./Jumbotron.module.scss";

/**
 * Jumbotron component.
 * @constructor
 */
const Jumbotron: FC<JumbotronProps> = ({ className, children, backgroundImage, title, style,
	description, titleClassName, descriptionClassName, justifyContent = "center",
	direction = "column", alignItems = "flex-start", variants, initial, animate, exit
}) => (
	<article className={classNames(scss.jumbotron, className)}
		style={{ ...style, backgroundImage: `url(${backgroundImage})` }}>
		<Container maxWidth={"lg"}>
			<Grid container component={"ul"} direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
				<motion.li custom={0} variants={variants} initial={initial} animate={animate} exit={exit}>
					<Typography className={titleClassName} variant={"h3"} component={"h3"}>
						{title}
					</Typography>
				</motion.li>
				<motion.li custom={0.5} variants={variants} initial={initial} animate={animate} exit={exit}>
					<section className={scss.description}>
						<Typography className={descriptionClassName} variant={"subtitle1"} paragraph>
							{description}
						</Typography>
					</section>
				</motion.li>
				<motion.li custom={1} variants={variants} initial={initial} animate={animate} exit={exit}>
					<section>
						{children}
					</section>
				</motion.li>
			</Grid>
		</Container>
	</article>
);

export type JumbotronProps = MotionProps & Partial<GridProps> & {
	className?: string,
	title: string,
	description: string,
	backgroundImage?: string,
	titleClassName?: string,
	descriptionClassName?: string,
	style?: CSSProperties
};

export default Jumbotron;
