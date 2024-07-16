import {
  topgamessvg,
  topgamessvg2,
  whyUsLanguage,
} from "@/public/freepikImages";
import Image from "next/image";
import React from "react";
import { BannerCard } from "../BannerDesignCard/BDCard";

const TopGamesCarousel = () => {
  return (
    <section className=" w-full min-w-fit px-6 my-10">
      <div>
        <Image src={whyUsLanguage} height={100} width={100} alt="image" />
      </div>
      <div className="text-center py-1">
        <h1> title</h1>
      </div>
    </section>
  );
};
//   add bg of this then make a carousel with two arrow buttons

const TopGames = () => {
  return (
    <section>
      <div className="relative">
        <BannerCard title="Top Mobile Games" />
      </div>

      <div className="no-scrollbar pl-20 flex flex-row overflow-x-auto max-w-7xl mx-auto">
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
        <TopGamesCarousel />
      </div>
    </section>
  );
};

export default TopGames;
