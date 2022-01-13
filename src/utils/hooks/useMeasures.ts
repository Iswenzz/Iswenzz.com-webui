import { useEffect, useRef, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

/**
 * Measure hook called on resize.
 */
export const useMeasures = <T extends HTMLElement>(): MeasuresResult<T> =>
{
	const ref = useRef<T>(null);
	const [bounds, set] = useState<MeasuresBound>({ left: 0, top: 0, width: 0, height: 0 });
	const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));

	useEffect(() =>
	{
		if (ref.current)
			ro.observe(ref.current);
		return () => ro.disconnect();
	}, [ro]);

	return [{ ref }, bounds];
};

type MeasuresResult<T> = [{ ref: React.RefObject<T> }, Partial<DOMRectReadOnly>];

export type MeasuresBound = Partial<DOMRectReadOnly>;

export default useMeasures;
