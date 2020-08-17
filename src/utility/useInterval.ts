import { useEffect, useRef } from "react";

/**
 * Interval react hook.
 * @param callback - Function to call.
 * @param delay - Interval delay.
 */
export const useInterval = (callback: () => any, delay: number | null): void =>
{
  	const savedCallback = useRef<any>();

	useEffect(() => 
	{
		savedCallback.current = callback;
	});

	useEffect(() => 
	{
		/**
		 * Interval tick callback.
		 */
		const tick = (): void =>
		{
			if (savedCallback !== undefined)
				savedCallback.current();
		};
		if (delay !== null) 
		{
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
};

export default useInterval;