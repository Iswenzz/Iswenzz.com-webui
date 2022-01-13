import { FC, memo } from "react";

import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";

import PaperDesktop from "./PaperDesktop/PaperDesktop";
import PaperMobile from "./PaperMobile/PaperMobile";
import "./Paper.scss";

/**
 * Paper card component.
 */
const Paper: FC<PaperProps> = (props) =>
{
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();

	return isTabletOrMobile || isPortrait ? <PaperMobile {...props} /> : <PaperDesktop {...props} />;
};

export type PaperProps = {
	title?: string,
	description?: string | JSX.Element,
	image?: string,
	className?: string,
	previewStyle?: React.CSSProperties,
	paperStyle?: React.CSSProperties
};

export default memo(Paper);
