import React, {FunctionComponent, useMemo, useState} from "react";
import { motion } from "framer-motion";

export type SplitTextProps = {
	children: string
};

/**
 * Split text animation.
 * @param props
 * @constructor
 */
export const SplitText: FunctionComponent<SplitTextProps> = (props: SplitTextProps): JSX.Element =>
{
	let words = useMemo(() =>
	{
		return props.children.split(" ").join("\u00A0").split("");
	}, [props.children]);
	
	return (
		<>
			{words.map((c, i) => (
				<div key={props.children + i} style={{ display: "inline-block" }}>
					<motion.div
						initial={{ y: "100%" }}
						animate="visible"
						variants={{
							visible: i => ({
								y: 0,
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