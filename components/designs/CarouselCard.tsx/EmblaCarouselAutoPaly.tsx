import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import { carouselData, MockCarouselItem } from "./CarouselData";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselButton";

type PropType = {
  options?: EmblaOptionsType;
};

const WinnersCarouselCard: React.FC<PropType> = (props) => {
  const { options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false }),
  ]);

  const [isPlaying, setIsPlaying] = useState(false);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;
      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;
      resetOrStop();
      callback();
    },
    [emblaApi]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla max-w-96 h-fit ">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselData.map((item, index) => (
            <div className="embla__slide border-2" key={index}>
              <CarouselItem item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>
        <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? "Stop" : "Start"}
        </button>
      </div> */}
    </div>
  );
};

interface CarouselItemProps {
  item: MockCarouselItem;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <section className=" w-full mx-auto flex  ">
      <div className="h-48 bg-white   flex flex-col  p-4">
        <div className="flex flex-row gap-x-4 ">
          <div className="min-w-20 max-w-20 max-h-20 rounded-full">
            <Image
              src={item.imageUrl}
              height={500}
              width={500}
              alt={item.title}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className=" items-start flex flex-col h-20 justify-center text-start ">
            <h1> {item.title}</h1>
            <p className="text-orange-500 font-bold"> Won 2Lakh ruppes</p>
          </div>
        </div>
        <div className="text-gray-400">{item.description}</div>
      </div>
    </section>
  );
};

export default WinnersCarouselCard;
