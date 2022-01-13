import { useCallback, FC, memo, ReactElement, CSSProperties, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import useInterval from "utils/hooks/useInterval";
import { DotButton, PrevButton, NextButton } from "./CarouselButtons/CarouselButtons";

import "./Carousel.scss";

/**
 * A carousel component that use all children as carousel items.
 * The carousel provides a next/prev arrow and buttons to scroll through the carousel.
 * @param props - EmblaCarouselProps
 */
const Carousel: FC<CarouselProps> = ({ 
	options, loop, delay, children, height, width, buttonSize, style 
}) => 
{
	const [emblaRef, emblaApi] = useEmblaCarousel({ ...options, loop: false });

	const [prevBtnEnabled, setPrevBtnEnabled] = useState<boolean>(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState<boolean>(false);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	/**
	 * Scroll to a specific index.
	 */
	const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

	/**
	 * Scroll to the prev element.
	 */
	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);

	/**
	 * Scroll to the next element.
	 */
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	/**
	 * On element select/changes.
	 */
	const onSelect = useCallback(() => 
	{
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setPrevBtnEnabled(emblaApi.canScrollPrev());
		setNextBtnEnabled(emblaApi.canScrollNext());
	}, [emblaApi, setSelectedIndex]);
	
	/**
	 * Set scroll snaps on changes.
	 */
	useEffect(() => 
	{
		if (!emblaApi) return;
		onSelect();

		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on("select", onSelect);
	}, [emblaApi, setScrollSnaps, onSelect]);
	

	/**
	 * Carousel loop.
	 */
	useInterval(() => 
	{
		if (!emblaApi?.canScrollNext())
			scrollTo(0);
		else
			scrollNext();
	}, loop ? (delay || 2000) : null);

	return (
		<Grid style={style} container direction="row" justifyContent="center" alignItems="center" component="article">
			<section style={{ width, height }} className="carousel">
				<section className="carousel-viewport" ref={emblaRef}>
					<ul style={{ width, height }} className="carousel-container">
						{children.map((child, index) => (
							<li className="carousel-slide" key={index}>
								{child}
							</li>
						))}
					</ul>
				</section>
				<section className="carousel-dots">
					{scrollSnaps.map((_: number, index: number) => (
						<DotButton 
							key={index} 
							size={buttonSize}
							selected={index === selectedIndex} 
							onClick={() => scrollTo(index)} 
						/>
					))}
				</section>
				<PrevButton onClick={scrollPrev} size={buttonSize} disabled={!prevBtnEnabled} />
				<NextButton onClick={scrollNext} size={buttonSize} disabled={!nextBtnEnabled} />
			</section>
		</Grid>
	);
};

export type CarouselProps = {
	children: ReactElement[],
	options?: EmblaOptionsType,
	loop?: boolean,
	delay?: number,
	height?: string,
	width?: string,
	buttonSize?: number,
	style?: CSSProperties
};

export default memo(Carousel);
