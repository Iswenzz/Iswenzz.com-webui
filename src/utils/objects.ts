/**
 * Updating objects immutably.
 * @param oldObject - The old object.
 * @param updatedProperties - Updated properties object.
 */
export const updateObject = <T>(oldObject: T, updatedProperties: T): T => ({
	...oldObject,
	...updatedProperties
});

/**
 * Updating partial objects immutably.
 * @param oldObject - The old object.
 * @param updatedProperties - Updated properties object.
 */
export const updateObjectPartial = <T>(oldObject: T, updatedProperties: Partial<T>): T => ({
	...oldObject,
	...updatedProperties
});
