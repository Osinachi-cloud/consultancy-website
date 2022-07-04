import React from "react";
import ReactCaroussel from "react-caroussel";
import "react-caroussel/dist/index.css";
import CarouselCard from "./CarouselCard";
import "./style.css";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <h1 className="blog-title">Blog</h1>

        <ReactCaroussel
          slidesToShow={2}
          slidesToScroll={1}
          // infinite={true}
          // autoplay={true}
          speed={2}
          display={{
            dots: true,
            arrows: true,
          }}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <CarouselCard key={index} index={index} />
            ))}
        </ReactCaroussel>
      </div>
    </>
  );
};

export default Slider;
