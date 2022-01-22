import { SyntheticEvent } from "react";

/**
 * Stop propagation.
 * @param e - The event.
 * @returns
 */
export const stopPropagation = <T>(e: SyntheticEvent<T>) => e.stopPropagation();

/**
 * Prevent default.
 * @param e - The event.
 * @returns
 */
export const preventDefault = <T>(e: SyntheticEvent<T>) => e.preventDefault();
