import AboutUs from "@/components/designs/AboutUs/AboutUs";
import { carouselData } from "@/components/designs/CarouselCard.tsx/CarouselData";
import EmblaCarouselFade from "@/components/designs/CarouselCard.tsx/EmblaCarouselFade";
import FAQ from "@/components/designs/FAQ/FAQ";
import Footer from "@/components/designs/Footer/Footer";
import Hero from "@/components/designs/HeroPage/Hero";
import HowToInstall from "@/components/designs/HowToInstall/HowToInstall";
import TopGames from "@/components/designs/Topgames/TopGames";
import WhyUs from "@/components/designs/WhyBinzo/WhyUs";
import WinzoWinner from "@/components/designs/WinzoWinners/WinzoWinner";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-y-2">
      <Hero />

      {/* <EmblaCarouselFade slides={carouselData} options={{ loop: true }} /> */}

      <WhyUs />
      <TopGames />
      <WinzoWinner />
      <HowToInstall />
      <AboutUs />
      <HowToInstall />
      <FAQ />
      <Footer />
    </section>
  );
};

export default page;
