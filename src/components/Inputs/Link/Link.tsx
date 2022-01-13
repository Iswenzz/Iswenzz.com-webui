import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import useDoubleClick from "utils/hooks/useDoubleClick";

/**
 * React Router DOM Link wrapper.
 * @param props
 * @constructor
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) =>
{
	const { className, children, to, tag: Tag = "a",
		onDoubleClick, onClick, redirectOnDoubleClick, ...rest } = props;
	const navigate = useNavigate();

	const onLinkClick = (event: React.MouseEvent): void =>
	{
		event.stopPropagation();
		if (redirectOnDoubleClick && onDoubleClick)
			onDoubleClick(event);
		else if (onClick)
			onClick(event);
		navigate(to);
	};

	const [onClickHook, onDoubleClickHook] = useDoubleClick(
		redirectOnDoubleClick ? onClick : onLinkClick,
		redirectOnDoubleClick ? onLinkClick : onDoubleClick
	);

	return (
		<Tag ref={ref} className={`link ${className}`} {...rest}
			onClick={onClickHook} onDoubleClick={onDoubleClickHook}>
			{children}
		</Tag>
	);
});

export type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
	to: string,
	tag?: React.ElementType,
	onClick?: (event?: React.MouseEvent) => void,
	onDoubleClick?: (event?: React.MouseEvent) => void,
	redirectOnDoubleClick?: boolean
};

export default Link;
