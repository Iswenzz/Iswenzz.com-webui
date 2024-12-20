"use client";

import { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const FadeIn: FC<HTMLMotionProps<"div">> = props => (
	<motion.div
		initial={{ opacity: 0 }}
		whileInView={{ opacity: 1 }}
		transition={{ duration: 0.5, delay: 0.3 }}
		{...props}
	/>
);

export const SlideIn: FC<HTMLMotionProps<"div">> = props => (
	<motion.div
		initial={{ opacity: 0, y: "100%" }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay: 0.3 }}
		{...props}
	/>
);

export const ScaleUp: FC<HTMLMotionProps<"div">> = props => (
	<motion.div
		initial={{ scale: 1.0 }}
		whileHover={{ scale: 1.1 }}
		transition={{ duration: 0.2 }}
		{...props}
	/>
);
