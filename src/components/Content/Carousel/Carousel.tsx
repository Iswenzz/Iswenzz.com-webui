import { useCallback, FC, memo, ReactElement, CSSProperties, useState, useEffect } from "react";
import { useInterval } from "react-use";
import { Grid } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { DotButton, PrevButton, NextButton } from "./CarouselButtons/CarouselButtons";

import scss from "./Carousel.module.scss";

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

	const loopDelay: Nullable<number> = loop ? (delay || 2000) : null;

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
	}, loopDelay);

	return (
		<Grid style={style} container justifyContent="center" alignItems="center" component="article">
			<section style={{ width, height }} className={scss.carousel}>
				<section className={scss.viewport} ref={emblaRef}>
					<ul style={{ width, height }} className={scss.container}>
						{children.map((child, index) => (
							<li className={scss.slide} key={index}>
								{child}
							</li>
						))}
					</ul>
				</section>
				<section className={scss.dots}>
					{scrollSnaps.map((_, index) => (
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
