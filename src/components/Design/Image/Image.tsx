import { FC } from "react";
import LazyLoad, { LazyLoadProps } from "react-lazyload";

/**
 * Lazy loaded component for images.
 */
const Image: FC<ImageProps> = ({ children, once, height, offset, overflow, alt = "", ...rest }) => (
	<LazyLoad once={once} height={height} offset={offset} overflow={overflow}>
		<img alt={alt} {...rest} height={height} />
	</LazyLoad>
);

export type ImageProps = LazyLoadProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export default Image;
