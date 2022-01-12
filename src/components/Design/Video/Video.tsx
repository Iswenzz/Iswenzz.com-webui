import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Video component.
 */
const Video: FC<VideoProps> = ({ sources, clip, ...rest }) => (
	<video style={{maskImage: `url(${clip})`, WebkitMaskImage: `url(${clip})`}} {...rest}>
		{sources.map(source => (
			<source key={uuidv4()} src={source.src} type={source.type} />
		))}
	</video>
);

export type VideoSource = {
	src: string,
	type: string
};

export type VideoProps = React.HTMLProps<HTMLVideoElement> & {
	sources: VideoSource[]
	clip?: string
};

export default Video;
