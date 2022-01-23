import { FC, memo } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Grid, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import classNames from "classnames";

import { Parallax, TrailText } from "components";
import { animationScaleFadeDown } from "utils/animate";
import useThemeMode from "utils/hooks/useThemeMode";
import flowers from "assets/images/index/55.jpg";
import forest from "assets/images/index/t1.jpg";

import ContactForm from "./ContactForm/ContactForm";
import scss from "./Contact.module.scss";

/**
 * Contact container to send an email.
 */
export const Contact: FC = (): JSX.Element =>
{
	const { theme } = useTheme();
	const [ref, inView] = useInView();

	const { parallaxImage } = useThemeMode({
		parallaxImage: [flowers, forest]
	});

	return (
		<>
			<Parallax className={scss.contactParallax} speed={-12} image={parallaxImage}>
				<TrailText className={classNames(scss.contactTypo, "poiret-h1", "bold", "noselect")}
					align="center" variant="h2" component="h2">
					CONTACT_HEADER
				</TrailText>
			</Parallax>
			<Element name="contact-section" />
			<Grid className={classNames(scss.contact, scss[theme])} component="section">
				<Container ref={ref}>
					<motion.div initial={"exit"} animate={inView ? "enter" : "exit"} variants={animationScaleFadeDown()}>
						<ContactForm />
					</motion.div>
				</Container>
			</Grid>
		</>
	);
};

export default memo(Contact);
