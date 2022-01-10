/**
 * Updating objects immutably.
 * @param oldObject - The old object.
 * @param updatedProperties - Updated properties object.
 */
export const updateObject = <T, U>(oldObject: T, updatedProperties: U): T => ({
	...oldObject,
	...updatedProperties
});

/**
 * Updating partial objects immutably.
 * @param oldObject - The old object.
 * @param updatedProperties - Updated properties object.
 */
export const updateObjectPartial = <T, U>(oldObject: T, updatedProperties: Partial<U>): T => ({
	...oldObject,
	...updatedProperties
});
