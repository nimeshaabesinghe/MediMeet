import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import i1 from "../assets/i1.webp";
import i2 from "../assets/i2.webp";
import i3 from "../assets/i3.webp";

const Carousel = () => {
  return (
    <ResponsiveCarousel showThumbs={false} className="w-2/3 h-auto">
      <div>
        <img src={i1} alt="Slide 1" className="rounded" />
      </div>
      <div>
        <img src={i2} alt="Slide 2" className="rounded" />
      </div>
      <div>
        <img src={i1} alt="Slide 3" className="rounded" />
      </div>
    </ResponsiveCarousel>
  );
};

export default Carousel;
