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

	if (queries.mobile && isTabletOrMobile)
		return queries.mobile;
	if (queries.mobile && !queries.desktopAndPortrait && isPortrait)
		return queries.mobile;
	if (queries.desktopAndPortrait && !isTabletOrMobile)
		return queries.desktopAndPortrait;
	if (!queries.desktop)
		throw new Error("No default responsive query were found.");
	return queries.desktop as T;
};

type ResponsiveProps<T> = {
	desktop?: T,
	desktopAndPortrait?: T,
	mobile?: T
};

export default useResponsive;
