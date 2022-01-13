import { useMediaQuery } from "@mui/material";

/**
 * Media query to check if we are on a tablet or a mobile device.
 * @returns - Media query result.
 */
const useTabletOrMobile = (): boolean => useMediaQuery("(max-device-width: 1224px)");

export default useTabletOrMobile;
