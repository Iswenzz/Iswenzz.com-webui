import React, { useState, useEffect, useCallback, FC, memo } from "react";
import EmblaCarouselReact from "embla-carousel-react";
import EmblaCarousel from "embla-carousel";
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
	embla: ReturnType<typeof EmblaCarousel> | null,
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
		embla: null,
		prevBtnEnabled: false,
		nextBtnEnabled: false,
		selectedIndex: 0,
		scrollSnaps: [],
		delay: props.delayLength,
		isRunning: props.autoplay
	});

	const setEmbla = useCallback(embla => setState((prevState: EmblaCarouselState) => ({
		...prevState,
		embla: embla
	})), []);
	const scrollTo = useCallback(index => state.embla?.scrollTo(index), [state.embla]);
	const scrollPrev = useCallback(() => state.embla?.scrollPrev(), [state.embla]);
	const scrollNext = useCallback(() => state.embla?.scrollNext(), [state.embla]);

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
		/**
		 * Carousel select callback.
		 */
		const onSelect = () => 
		{
			setState((prevState: EmblaCarouselState) => ({
				...prevState,
				selectedIndex: state.embla!.selectedScrollSnap(),
				prevBtnEnabled: state.embla!.canScrollPrev(),
				nextBtnEnabled: state.embla!.canScrollNext()
			}));
		};
		if (state.embla) 
		{
			setState((prevState: EmblaCarouselState) => ({
				...prevState,
				scrollSnaps: state.embla!.scrollSnapList()
			}));
			state.embla.on("select", onSelect);
			onSelect();
		}
		return () => state.embla! && state.embla!.destroy();
	}, [state.embla]);

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
