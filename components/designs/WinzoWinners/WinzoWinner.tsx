import React from "react";
import WinnersCarousel from "./WinnersCarousel";
import CustomerReviews from "./CustomerReviews";
import { BannerCard } from "../BannerDesignCard/BDCard";

const WinzoWinner = () => {
  return (
    <div className="flex flex-col bg-sky-100">
      <div className="relative">
        <BannerCard title="Winzo Winnter" />
      </div>
      <div className="flex flex-col max-w-7xl mx-auto lg:flex-row">
        <WinnersCarousel />
        <CustomerReviews />
      </div>
    </div>
  );
};

export default WinzoWinner;
