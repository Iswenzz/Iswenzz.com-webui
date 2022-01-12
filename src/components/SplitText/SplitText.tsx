import {FC, useMemo} from "react";
import { motion } from "framer-motion";

export type SplitTextProps = {
	children: string
};

/**
 * Split text animation.
 * @param props
 * @constructor
 */
export const SplitText: FC<SplitTextProps> = (props: SplitTextProps): JSX.Element =>
{
	const words = useMemo(() =>
	{
		return props.children.split(" ").join("\u00A0").split("");
	}, [props.children]);
	
	return (
		<>
			{words.map((c, i) => (
				<div key={props.children + i} style={{ display: "inline-block" }}>
					<motion.div
						initial={{ y: "100%", opacity: 0 }}
						animate="visible"
						variants={{
							visible: i => ({
								y: 0,
								opacity: 1,
								transition: {
									delay: i * 0.05
								}
							})
						}}
						style={{ display: "inline-block", willChange: "transform" }}
						custom={i}
					>
						{c}
					</motion.div>
				</div>
			))}
		</>
	);
};

export default SplitText;
