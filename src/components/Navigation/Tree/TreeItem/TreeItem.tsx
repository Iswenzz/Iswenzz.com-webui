import { CSSProperties, FC, memo, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useMeasure, usePrevious } from "react-use";

import { CloseSquare , MinusSquare , PlusSquare } from "../TreeIcons/TreeIcons";

import scss from "./TreeItem.module.scss";

/**
 * Represent an item or a list in a Tree component.
 */
const TreeItem: FC<TreeProps> = ({ children, name, style, defaultOpen = false }) =>
{
	const [isOpen, setOpen] = useState(defaultOpen);
	const previous = usePrevious(isOpen);

	const [ref, { height: viewHeight }] = useMeasure<HTMLDivElement>();
	const { height, opacity, transform } = useSpring({
		from: {
			height: 0,
			opacity: 0,
			transform: "translate3d(20px,0,0)" },
		to: {
			height: isOpen ? viewHeight : 0,
			opacity: isOpen ? 1 : 0,
			transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
		}
	});

	const Icon = children ? (isOpen ? MinusSquare : PlusSquare) : CloseSquare;
	const Frame = children ? animated.ul : animated.li;

	const iconOpacity = children ? 1 : 0.3;
	const contentHeight = isOpen && previous === isOpen ? "auto" : height;

	return (
		<Frame className={scss.item}>
			<Icon className={scss.icon} style={{ opacity: iconOpacity }} onClick={() => setOpen(!isOpen)} />
			<span className={scss.title} style={style}>{name}</span>
			<animated.div className={scss.content} style={{ opacity: opacity, height: contentHeight }}>
				<animated.div ref={ref} style={{ transform }} children={children} />
			</animated.div>
		</Frame>
	);
};

export type TreeProps = {
	name: string | React.ReactNode,
	style?: CSSProperties,
	defaultOpen?: boolean,
	children?: React.ReactNode[] | React.ReactNode
};

export default memo(TreeItem);
