import { useEffect, useRef } from "react";

/**
 * Hook to get the previous value of a variable.
 * @param value - The variable to hook.
 */
export const usePrevious = <T>(value: T): T | undefined =>
{
	const ref = useRef<T>();
	useEffect(() => void (ref.current = value), [value]);
	return ref.current;
};

export default usePrevious;
