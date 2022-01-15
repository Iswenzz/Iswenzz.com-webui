import { forwardRef } from "react";

/**
 * Forward ref component.
 */
const Forward = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ children, ...rest }, ref) => (
	<div {...rest} ref={ref}>{children}</div>
));

export default Forward;
