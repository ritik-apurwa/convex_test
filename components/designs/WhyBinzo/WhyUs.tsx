import React from "react";
import { BannerCard, WhyCard } from "../BannerDesignCard/BDCard";
import {
  whyUsLanguage,
  whyUsNoBot,
  whyUsSecure,
  whyUsSupport,
} from "@/public/freepikImages";

const WhyUs = () => {
  return (
    <section className={`my-4 relative  `}>
      <div className="relative">
        <BannerCard title="Why winzo" />
      </div>

      <div className="grid py-4 max-w-7xl mx-auto grid-cols-4">
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

export default WhyUs;
