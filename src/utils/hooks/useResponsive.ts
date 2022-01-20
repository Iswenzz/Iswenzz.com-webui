import usePortrait from "./usePortrait";
import useTabletOrMobile from "./useTabletOrMobile";

/**
 * Get value coresponding to the current media query.
 * @param queries - The value to get on its media query.
 * @returns
 */
const useResponsive = <T>(queries: ResponsiveProps<T>): T =>
{
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();

	if (isTabletOrMobile || isPortrait)
	{
		if (queries.tablet) return queries.tablet;
		if (queries.mobile) return queries.mobile;
	}
	return queries.desktop;
};

type ResponsiveProps<T> = {
	desktop: T,
	tablet?: T,
	mobile?: T
};

export default useResponsive;
