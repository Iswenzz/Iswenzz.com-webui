import { FC, memo } from "react";

/**
 * Tab panel component.
 */
const TabPanel: FC<TabPanelProps> = ({ children, value, index, style, width = "100%", ...rest }) => (
	<article role="tabpanel" hidden={value !== index} {...rest} style={{ ...style, width }}>
		{value === index && children}
	</article>
);

export type TabPanelProps = React.HTMLProps<HTMLDivElement> & {
	index: number | string;
	value: number | string;
};

export default memo(TabPanel);
