import { useMediaQuery } from "@material-ui/core";
/**
 * Accepts width as a string and checks if that width matches the max-width of css.
 * @param width Key received from the query parameter
 * pass width lesser than 1
 */
const useDevice = (width: string): boolean => {
    const isPhone = useMediaQuery(`(max-width:${width}px)`);
    return isPhone;
};

export default useDevice;
