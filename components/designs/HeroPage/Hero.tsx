import React from "react";
import CustomBtn from "../CustomButton/CustomBtn";

const Hero = () => {
  return (
    <section>
      <div className="min-h-[60vh] ">
        <div className="h-[60vh] font-bold text-center relative  items-center flex  justify-center">
          <div>HERO iMAGE</div>

          <div className="absolute bottom-0 w-full h-20">
            <CustomBtn title="Downlaod the game" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
