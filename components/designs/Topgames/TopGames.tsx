import { topgamessvg, topgamessvg2 } from "@/public/freepikImages";
import Image from "next/image";
import React from "react";
//   add bg of this then make a carousel with two arrow buttons

const TopGames = () => {
  return (
    <section>
      <div className="min-w-[1000px] ">
        <Image src={topgamessvg2} height={50} width={50} alt="games svg" />
      </div>
    </section>
  );
};

export default TopGames;
