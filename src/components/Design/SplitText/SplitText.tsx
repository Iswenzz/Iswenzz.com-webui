import {FC, useMemo} from "react";
import { motion } from "framer-motion";

import style from "./SplitText.module.scss";

/**
 * Split text animation.
 */
const SplitText: FC<SplitTextProps> = ({ children }) =>
{
	const words = useMemo(() => 
		children.split(" ").join("\u00A0").split(""), [children]);
	
	const initial = { y: "100%", opacity: 0 };
	const variants = {
		visible: (index: number) => ({
			y: 0,
			opacity: 1,
			transition: {
				delay: index * 0.05
			}
		})
	};

	return (
		<>
			{words.map((word, index) => (
				<div key={children + index} className={style.word}>
					<motion.div
						className={style.wordMotion}
						initial={initial}
						animate="visible"
						variants={variants}
						custom={index}
					>
						{word}
					</motion.div>
				</div>
			))}
		</>
	);
};

type SplitTextProps = {
	children: string
};

export default SplitText;
