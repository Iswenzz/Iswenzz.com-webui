import { forwardRef, Ref } from "react";
import LazyLoad, { LazyLoadProps } from "react-lazyload";

/**
 * Lazy loaded component for images.
 */
const Image = forwardRef<LazyLoad, ImageProps>((props: ImageProps, ref: Ref<LazyLoad>): JSX.Element =>
{
	const { children, once, height, offset, overflow, resize, scroll, throttle, debounce, placeholder, scrollContainer,
		unmountIfInvisible, preventLoading, classNamePrefix, alt, ...rest } = props;

	return (
		<LazyLoad ref={ref} once={once} height={height} offset={offset} overflow={overflow}>
			<img alt={alt || ""} {...rest} height={height} />
		</LazyLoad>
	);
});

export type ImageProps = LazyLoadProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default Image;
