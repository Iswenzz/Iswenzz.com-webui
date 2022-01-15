import { ReactElement } from "react";

import usePortrait from "./usePortrait";
import useTabletOrMobile from "./useTabletOrMobile";

/**
 * Render components on certain media query.
 * @param components - The components to render on certain media query.
 * @returns 
 */
const useResponsiveComponent = (components: ResponsiveComponentProps): JSX.Element | null => 
{
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();

	if (isTabletOrMobile || isPortrait)
	{
		if (components.tablet) return components.tablet;
		if (components.mobile) return components.mobile;
	}
	return components.desktop || null;
};

type ResponsiveComponentProps = {
	desktop?: ReactElement,
	tablet?: ReactElement,
	mobile?: ReactElement
};

export default useResponsiveComponent;
