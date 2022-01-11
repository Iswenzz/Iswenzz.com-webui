import React, {forwardRef, Ref} from "react";
import LazyLoad, {LazyLoadProps} from "react-lazyload";

export type LazyImageProps = LazyLoadProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

/**
 * Lazy load component for images.
 */
export const LazyImage = forwardRef<LazyLoad, LazyImageProps>((props: LazyImageProps, ref: Ref<LazyLoad>): JSX.Element =>
{
	const { children, once, height, offset, overflow, resize, scroll, throttle, debounce, placeholder, scrollContainer,
		unmountIfInvisible, preventLoading, classNamePrefix, alt, ...rest } = props;

	return (
		<LazyLoad ref={ref} once={once} height={height} offset={offset} overflow={overflow}>
			<img alt={alt || ""} {...rest} height={height} />
		</LazyLoad>
	);
});

export default LazyImage;
