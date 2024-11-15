import React from "react";
import HeroCta from "./HeroCta";

const HeroVideo = () => {
  return (
    <div className="relative w-full h-[800px]">
      {/* Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="w-full h-full object-cover">
        <source 
          src={`${import.meta.env.BASE_URL}images/fr-hero.mp4`} 
          type="video/mp4" 
        />
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-primary opacity-75">
        <HeroCta />
      </div>
    </div>
  );
};

export default HeroVideo;
