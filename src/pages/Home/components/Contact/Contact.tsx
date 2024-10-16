import { FC, useRef } from "react";
import { Grid, Container, useTheme } from "@mui/material";
import { TrailText, animationScaleFadeDown, useThemeMode } from "@izui/react";
import white from "@izui/assets/images/background/white.jpg";
import { motion, useInView } from "framer-motion";
import classNames from "classnames";

import ishalgen from "assets/images/aion/ishalgen2.jpg";
import { Parallax } from "components";

import ContactForm from "./ContactForm/ContactForm";
import scss from "./Contact.module.scss";

/**
 * Contact container to send an email.
 */
const Contact: FC = () => {
	const { theme } = useTheme();
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref);

	const { parallaxImage } = useThemeMode({
		parallaxImage: [ishalgen, white]
	});

	return (
		<>
			<Parallax className={scss.contactParallax} speed={-12} image={parallaxImage}>
				<TrailText
					className={classNames(scss.contactTypo, "poiret-big", "bold", "noselect")}
					color="textPrimary"
					align="center"
					variant="h2"
					component="h2"
				>
					CONTACT_HEADER
				</TrailText>
			</Parallax>
			<Grid
				id="contact"
				className={classNames(scss.contact, scss[theme])}
				component="section"
			>
				<Container ref={ref}>
					<motion.div
						initial="exit"
						animate={inView ? "enter" : "exit"}
						variants={animationScaleFadeDown()}
					>
						<ContactForm />
					</motion.div>
				</Container>
			</Grid>
		</>
	);
};

export default Contact;
