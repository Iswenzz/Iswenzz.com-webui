import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

/**
 * Get a specific value on breakpoint trigger.
 * @param values - The values to return when a breakpoint is triggered.
 * @returns 
 */
const useBreakpoint = <T>(values: BreakpointValues<T>, defaultValue: T): T => 
{
	const theme = useTheme();

	const matches: Record<Breakpoint, boolean> = {
		xs: useMediaQuery(theme.breakpoints.up("xs")),
		sm: useMediaQuery(theme.breakpoints.up("sm")),
		md: useMediaQuery(theme.breakpoints.up("md")),
		lg: useMediaQuery(theme.breakpoints.up("lg")),
		xl: useMediaQuery(theme.breakpoints.up("xl")),
	};
  
	const validBreakpoints: Breakpoint[] = Object.entries(matches)
		.filter(([breakpoint, isMatch]) => Object.keys(values).includes(breakpoint) && isMatch)
		.map(([key]) => key as Breakpoint);
  
	const largestBreakpoint = validBreakpoints.pop();
  
	if (!largestBreakpoint) 
	  	return values["xs"] || defaultValue;
	return values[largestBreakpoint] || defaultValue;
};

export type BreakpointValues<T> = { 
	[key in Breakpoint]?: T
};

export default useBreakpoint;
