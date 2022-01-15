import { FC, memo } from "react";

import useResponsive from "utils/hooks/useResponsive";

import PaperDesktop from "./PaperDesktop/PaperDesktop";
import PaperMobile from "./PaperMobile/PaperMobile";

/**
 * Paper card component.
 */
const Paper: FC<PaperProps> = (props) => useResponsive({
	desktop: <PaperDesktop {...props} />,
	mobile: <PaperMobile {...props} />
});

export type PaperProps = {
	title?: string,
	description?: string | JSX.Element,
	image?: string,
	className?: string,
	previewStyle?: React.CSSProperties,
	style?: React.CSSProperties
};

export default memo(Paper);
