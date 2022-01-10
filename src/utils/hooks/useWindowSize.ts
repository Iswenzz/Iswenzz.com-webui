import { useLayoutEffect, useState } from "react";

/**
 * Window resize event react hook.
 */
const useWindowSize = (): number[] =>
{
	const [size, setSize] = useState<number[]>([0, 0]);

	useLayoutEffect(() => 
	{
		/**
		 * Update size state callback.
		 */
		const updateSize = (): void =>
		{
			setSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener("resize", updateSize);
		updateSize();

		return () => window.removeEventListener("resize", updateSize);
	}, []);
  	return size;
};

export default useWindowSize;