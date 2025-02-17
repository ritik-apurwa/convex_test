import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image, { StaticImageData } from "next/image";
import { usePrevNextButtons } from "../CarouselCard.tsx/EmblaCarouselButton";
import { hti1, hti2, hti3, hti4, hti5 } from "@/public/freepikImages";

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
          {HowToInstall.map((item, index) => (
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

interface HowToInstall {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  description: string;
}

interface CarouselItemProps {
  item: HowToInstall;
}

const HowToInstall: HowToInstall[] = [
  {
    id: 1,
    imageUrl: hti1,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 2,
    imageUrl: hti2,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 3,
    imageUrl: hti3,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 4,
    imageUrl: hti4,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
  {
    id: 5,
    imageUrl: hti5,
    title: "step-1",
    description: "click 'download' button in the popup below to continue   ",
  },
];

const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <section className="min-h-[60vh] w-full flex flex-row">
      <div>
        <Image src={item.imageUrl} height={400} width={500} alt={item.title} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <hr className="h-2 bg-white" />
        <p>{item.description}</p>
        <hr className="h-2 bg-white" />
      </div>
    </section>
  );
};

export default WinnersCarouselCard;
