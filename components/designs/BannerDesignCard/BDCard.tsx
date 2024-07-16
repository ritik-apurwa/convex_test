import {
  bannerSvg,
  whyUsLanguage,
  whyUsNoBot,
  whyUsSecure,
  whyUsSupport,
} from "@/public/freepikImages";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Play } from "next/font/google";

const PlayFont = Play({ subsets: ["latin"], weight: ["400", "700"] });

interface WhyCard {
  title: string;
  description: string;
  image: StaticImageData;
}

export const WhyCard = ({ description, image, title }: WhyCard) => {
  return (
    <section className=" w-full items-center justify-center py-2 flex flex-col">
      <div className="size-16  p-1">
        <Image src={image} height={1200} width={1200} alt={title} />
      </div>
      <p className="text-xs text-center w-16 h-fit">
        <span className="italic font-bold"> {title}</span> <br /> {description}
      </p>
    </section>
  );
};

export const BannerCard = ({ title }: { title?: string }) => {
  return (
    <section className=" w-full flex justify-center items-center h-full  ">
      <div className="w-full h-full flex justify-center items-center flex-col relative">
        <Image src={bannerSvg} height={1200} width={1200} alt="banner" />
      </div>
      <div className="absolute w-full  mt-4  flex justify-center items-center   inset-0">
        <h1 className="italic font-bold text-2xl">{title}</h1>
      </div>
    </section>
  );
};

export const BDCard = () => {
  return (
    <section className={`my-4 relative ${PlayFont.className} `}>
      <div className="relative">
        <BannerCard title="Why winzo" />
      </div>

      <div className="grid py-4 grid-cols-4">
        <WhyCard image={whyUsNoBot} title="No Bot" description="Certified" />
        <WhyCard image={whyUsSecure} title="100%" description=" secure" />
        <WhyCard image={whyUsLanguage} title="6+" description=" Languages" />
        <WhyCard image={whyUsSupport} title="24x7" description=" Support" />
      </div>

      <div className="relative">
        <BannerCard />
      </div>
    </section>
  );
};


