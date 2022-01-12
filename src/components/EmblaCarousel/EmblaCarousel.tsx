import { useState, useEffect, useCallback, FC, memo, useRef } from "react";
// import EmblaCarouselReact from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import useInterval from "utils/hooks/useInterval";
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons/EmblaCarouselButtons";
import { Grid } from "@material-ui/core";
import "./Embla.scss";

export type EmblaCarouselProps = {
	autoplay: boolean,
	delayLength: number,
	children: any[],
	height?: string,
	width?: string,
	style?: React.CSSProperties
};

export type EmblaCarouselState = {
	prevBtnEnabled: boolean,
	nextBtnEnabled: boolean,
	selectedIndex: number,
	scrollSnaps: number[],
	delay: number,
	isRunning: boolean
};

/**
 * A carousel component that use all JSX children as carousel items.
 * The carousel provides a next/prev arrow and buttons to scroll through the carousel.
 * @param props - EmblaCarouselProps
 */
export const EmblaCarouselComponent: FC<EmblaCarouselProps> = (props: EmblaCarouselProps) => 
{
	const [state, setState] = useState<EmblaCarouselState>({
		prevBtnEnabled: false,
		nextBtnEnabled: false,
		selectedIndex: 0,
		scrollSnaps: [],
		delay: props.delayLength,
		isRunning: props.autoplay
	});
	const embla: any = useRef<EmblaCarouselType>();

	// const setEmbla = useCallback(embla => setState((prevState: EmblaCarouselState) => ({
	// 	...prevState,
	// 	embla: embla
	// })), []);
	const scrollTo = useCallback(index => embla.current.scrollTo(index), [embla]);
	const scrollPrev = useCallback(() => embla.current.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla.current.scrollNext(), [embla]);

	/**
	 * Autoplay function.
	 */
	useInterval(() => 
	{
		if (state.selectedIndex === state.scrollSnaps.length - 1)
			scrollTo(0);
		else
			scrollNext();
	}, state.isRunning ? state.delay : null);

	useEffect(() => 
	{
		const emblaRef = embla.current;
		/**
		 * Carousel select callback.
		 */
		const onSelect = () => 
		{
			setState((prevState: EmblaCarouselState) => ({
				...prevState,
				selectedIndex: embla.current.selectedScrollSnap(),
				prevBtnEnabled: embla.current.canScrollPrev(),
				nextBtnEnabled: embla.current.canScrollNext()
			}));
		};
		if (embla.current) 
		{
			setState((prevState: EmblaCarouselState) => ({
				...prevState,
				scrollSnaps: embla.current.scrollSnapList()
			}));
			embla.current.on("select", onSelect);
			onSelect();
		}
		return () => emblaRef && emblaRef.destroy();
	}, [embla]);

	return (
		<Grid style={props.style} container direction="row" justifyContent="center" alignItems="center"
			component="article">
			<section style={{ width: props.width, height: props.height }} className="embla">
				{/* <EmblaCarouselReact className="embla-viewport" emblaRef={setEmbla} 
					options={{ loop: false, draggable: false }} htmlTagName="section">
					<ul style={{ width: props.width, height: props.height }} 
						className="embla-container">
						{props.children.map((Child, index) => (
							<li className="embla-slide" key={index}>
								{Child}
							</li>
						))}
					</ul>
				</EmblaCarouselReact> */}
				<section className="embla-dots">
					{state.scrollSnaps.map((snap: number, index: number) => (
						<DotButton selected={index === state.selectedIndex} onClick={() => scrollTo(index)} key={index} />
					))}
				</section>
				<PrevButton onClick={scrollPrev} enabled={state.prevBtnEnabled} />
				<NextButton onClick={scrollNext} enabled={state.nextBtnEnabled} />
			</section>
		</Grid>
	);
};

export default memo(EmblaCarouselComponent);
