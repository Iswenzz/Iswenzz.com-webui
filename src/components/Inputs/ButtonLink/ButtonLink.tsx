import { forwardRef } from "react";
import { Button, ButtonProps } from "@mui/material";

/**
 * Forward MUI Button.
 */
const ButtonLink = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
	<Button ref={ref} {...props} />
));

export default ButtonLink;
