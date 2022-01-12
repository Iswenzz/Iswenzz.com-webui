import { useRef } from "react";

/**
 * Hook to handle pending promises.
 */
const useCancellablePromises = <Result>() =>
{
	const pendingPromises = useRef<CancellablePromise<Result>[]>([]);

	/**
	 * Append a pending promise.
	 * @param promise - The promise.
	 */
	const appendPendingPromise = (promise: CancellablePromise<Result>) =>
		pendingPromises.current = [...pendingPromises.current, promise];

	/**
	 * Remove a pending promise.
	 * @param promise - The promise.
	 */
	const removePendingPromise = (promise: CancellablePromise<Result>) =>
		pendingPromises.current = pendingPromises.current.filter(p => p !== promise);

	/**
	 * Clear all pending promises.
	 */
	const clearPendingPromises = () => pendingPromises.current.map(p => p.cancel());

	return {
		appendPendingPromise,
		removePendingPromise,
		clearPendingPromises,
	};
};

/**
 * Cancel a promise.
 * @param promise - The promise.
 */
export const cancellablePromise = <Result>(promise: Promise<Result>): CancellablePromise<Result> =>
{
	let isCanceled = false;

	const wrappedPromise = new Promise<Result>((resolve, reject) => promise.then(
		value => (isCanceled ? reject({ isCanceled, value }) : resolve(value)),
		error => reject({ isCanceled, error }),
	));

	return {
		promise: wrappedPromise,
		cancel: () => (isCanceled = true),
	};
};

export type CancellablePromise<Result> = {
	promise: Promise<Result>,
	cancel: () => boolean
};

export default useCancellablePromises;
