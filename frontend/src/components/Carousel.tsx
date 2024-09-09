import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import i1 from "../assets/images (5).jpeg";
import i2 from "../assets/images (6).jpeg";
import i3 from "../assets/images (7).jpeg";

const Carousel = () => {
  return (
    <ResponsiveCarousel className="rounded">
      <div>
        <img src={i1} alt="Slide 1" className="rounded" />
      </div>
      <div>
        <img src={i2} alt="Slide 2" className="rounded" />
      </div>
      <div>
        <img src={i3} alt="Slide 3" className="rounded" />
      </div>
    </ResponsiveCarousel>
  );
};

export default Carousel;
