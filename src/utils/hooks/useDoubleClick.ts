import React, { MouseEvent } from "react";

import { delay } from "utils/misc";
import useCancellablePromises, { cancellablePromise } from "./useCancellablePromises";

/**
 * Hook to handle double click with event prevention.
 * @param onClick - The click callaback.
 * @param onDoubleClick - The double click callback.
 */
const useDoubleClick = (onClick?: Callback, onDoubleClick?: Callback) =>
{
	const cancellable = useCancellablePromises();

	/**
	 * Handle single click.
	 */
	const handleClick = async (event: MouseEvent) =>
	{
		cancellable.clearPendingPromises();
		const waitForClick = cancellablePromise(delay(300));
		cancellable.appendPendingPromise(waitForClick);

		try
		{
			await waitForClick.promise;
			cancellable.removePendingPromise(waitForClick);
			if (onClick) 
				onClick(event);
		}
		catch (errorInfo: any)
		{
			cancellable.removePendingPromise(waitForClick);
			if (!errorInfo.isCanceled)
				throw errorInfo.error;
		}
	};

	/**
	 * Handle double click.
	 */
	const handleDoubleClick = (event: MouseEvent) =>
	{
		cancellable.clearPendingPromises();
		if (onDoubleClick)
			onDoubleClick(event);
	};

	return [handleClick, handleDoubleClick];
};

type ClickCallback = (event?: React.MouseEvent) => void;
type ClickCallbackHandler =  React.MouseEventHandler | undefined;
type Callback = ClickCallback | ClickCallbackHandler;

export default useDoubleClick;
