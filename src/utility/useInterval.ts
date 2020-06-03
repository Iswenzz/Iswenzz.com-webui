import { useEffect, useRef } from "react";

/**
 * Interval react hook.
 * @param callback - Function to call.
 * @param delay - Interval delay.
 */
export default function useInterval(callback: () => any, delay: number | null) 
{
  	const savedCallback = useRef<any>();

	useEffect(() => 
	{
		savedCallback.current = callback;
	});

	useEffect(() => 
	{
		function tick() 
		{
			if (savedCallback !== undefined)
				savedCallback.current();
		}
		if (delay !== null) 
		{
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
