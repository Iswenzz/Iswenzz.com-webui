import { useMediaQuery } from "react-responsive";

/**
 * Media query to check if we are on a tablet or a mobile device.
 * @returns - Media query result.
 */
const useTabletOrMobile = (): boolean => useMediaQuery({ query: "(max-device-width: 1224px)" });

export default useTabletOrMobile;
