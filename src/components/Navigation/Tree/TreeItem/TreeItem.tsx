import { CSSProperties, FC, memo, useState } from "react";
import {useSpring, animated} from "react-spring";

import usePrevious from "utils/hooks/usePrevious";
import useMeasures from "utils/hooks/useMeasures";

import { CloseSquare , MinusSquare , PlusSquare } from "../TreeIcons/TreeIcons";
import "./TreeItem.scss";

/**
 * Represent an item or a list in a Tree component.
 */
const TreeItem: FC<TreeProps> = ({ children, name, style, defaultOpen = false }) =>
{
	const [isOpen, setOpen] = useState(defaultOpen);
	const previous = usePrevious(isOpen);

	const [bind, { height: viewHeight }] = useMeasures<HTMLDivElement>();
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

	return (
		<Frame className={"treeitem"}>
			<Icon className={"treeitem-icon"} style={{ opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
			<span className={"treeitem-title"} style={style}>{name}</span>
			<animated.div className={"treeitem-content"} 
				style={{ opacity: opacity, height: isOpen && previous === isOpen ? "auto" : height }}>
				<animated.div style={{ transform }} {...bind} children={children} />
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
