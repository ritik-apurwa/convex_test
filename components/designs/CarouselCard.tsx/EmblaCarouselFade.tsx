"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Fade from "embla-carousel-fade";

interface CarouselItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
}

type PropType = {
  slides: CarouselItem[];
  options?: EmblaOptionsType;
};

const EmblaCarouselFade: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const onPrevButtonClick = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const onNextButtonClick = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const onDotButtonClick = useCallback(
    (index: number) => scrollTo(index),
    [scrollTo]
  );

  return (
    <div className="relative  max-w-96 sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-7xl  my-6 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div className="embla__slide flex-[0_0_100%]" key={slide.id}>
              {/* Carousel Card Fade Images div and Dots   */}
              <div className="relative h-fit py-6">
                <div className=" h-auto max-h-96 min-h-96 overflow-hidden  w-full my-4 flex items-center justify-center">
                  <Image
                    className="object-cover object-center "
                    src={slide.imageUrl}
                    alt={slide.title}
                    width={400}
                    height={500}
                  />
                </div>
                <div className="embla__dots absolute bottom-0.5 flex items-center justify-center w-full">
                 <div className="flex flex-row space-x-2 ">
                 {scrollSnaps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => onDotButtonClick(index)}
                      className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        index === selectedIndex
                          ? "bg-indigo-600"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                 </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 lg:mt-8">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                  {slide.title}
                </h3>
                <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-500">
                  {slide.description}
                </p>
                <span className="mt-2 inline-block text-lg md:text-xl lg:text-2xl font-semibold text-indigo-600">
                  {slide.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-4 flex  justify-between items-center">
        {/* Carousel fade Button  */}

        <div className="embla__buttons  lg:flex hidden  space-x-2">
          <button
            className="embla__button p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            className="embla__button p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/*  Carousel Item Dots  */}
      </div>
    </div>
  );
};

export default EmblaCarouselFade;
