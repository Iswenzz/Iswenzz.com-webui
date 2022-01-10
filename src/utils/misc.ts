/**
 * Async delay.
 * @param ms - Delay time in millisec.
 */
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
