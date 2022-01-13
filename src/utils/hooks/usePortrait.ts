import { useMediaQuery } from "@mui/material";

/**
 * Media query to check if we use the portrait orientation.
 * @returns - Media query result.
 */
const usePortrait = (): boolean => useMediaQuery("(orientation: portrait)");

export default usePortrait;
