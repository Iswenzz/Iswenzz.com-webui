import { CSSProperties, FC } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { GridDirection, GridItemsAlignment, GridJustification } from "@material-ui/core/Grid/Grid";
import { motion, MotionProps } from "framer-motion";

import "./Jumbotron.scss";

/**
 * Jumbotron component.
 * @constructor
 */
const Jumbotron: FC<JumbotronProps> = ({ className, children, backgroundImage, title, style,
	description, titleClassName, descriptionClassName, justify = "center", 
	direction = "column", alignItems = "flex-start", ...rest 
}) => (
	<article className={`jumbotron ${className}`} style={{ ...style, backgroundImage: `url(${backgroundImage})` }}>
		<Container maxWidth={"lg"}>
			<Grid container component={"ul"} direction={direction} justify={justify} alignItems={alignItems}>
				<motion.li custom={0} {...rest}>
					<Typography className={titleClassName} variant={"h3"} component={"h3"}>
						{title}
					</Typography>
				</motion.li>
				<motion.li custom={0.5} {...rest}>
					<section className={"jumbotron-desc"}>
						<Typography className={descriptionClassName} variant={"subtitle1"} component={"p"} paragraph>
							{description}
						</Typography>
					</section>
				</motion.li>
				<motion.li custom={1} {...rest}>
					<section>
						{children}
					</section>
				</motion.li>
			</Grid>
		</Container>
	</article>
);

export type JumbotronProps = MotionProps & {
	title: string,
	description: string,
	backgroundImage?: string,
	direction?: GridDirection,
	justify?: GridJustification,
	alignItems?: GridItemsAlignment,
	className?: string,
	titleClassName?: string,
	descriptionClassName?: string,
	style?: CSSProperties
};

export default Jumbotron;
