"use client";
import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./BrandSlider";

const HomeBanner = () => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,

    slidesToShow: 8,
    slidesToScroll: 1,
  };
  return (
    <div className="max-width">
      <div className="banner-shadow header-rounded flex gap-3">
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="flex flex-col items-start gap-1">
            <h3 className="text-black text-xl font-extrabold uppercase">
              Lassa ürünlerinde
            </h3>
            <h2 className="text-green text-3xl font-extrabold uppercase">
              sepette 20% indirim
            </h2>
            <p className="text-green font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              iure fugit amet repudiandae suscipit quis corporis voluptates
              porro incidunt. Impedit!
            </p>
          </div>
        </div>
        <img src="/Rectangle 24.png" className="flex-1 w-full header-rounded" />
      </div>
      <div className="banner-slider">
        <Slider {...settings}>
          {Array(20)
            .fill(0)
            .map((item) => (
              <img src="/Rectangle 32.png" alt="" />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeBanner;
