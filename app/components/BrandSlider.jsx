"use client";
import React from "react";
import Slider from "react-slick";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-right" onClick={onClick}>
      {" "}
      <div className="">
        <svg
          width="35"
          height="35"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="35"
            cy="35"
            r="33.5"
            transform="rotate(-180 35 35)"
            stroke-width="3"
          />{" "}
        </svg>{" "}
        <svg
          width="12"
          height="29"
          viewBox="0 0 36 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="center"
        >
          <path
            d="M34.762 15.3311L21.876 28.2168C21.6074 28.4854 21.243 28.6364 20.863 28.6364C20.4831 28.6364 20.1187 28.4854 19.8501 28.2168C19.5814 27.9481 19.4305 27.5838 19.4305 27.2038C19.4305 26.8239 19.5814 26.4595 19.8501 26.1909L30.293 15.7499H2.25001C1.87028 15.7499 1.5061 15.5991 1.23759 15.3306C0.969085 15.0621 0.818237 14.6979 0.818237 14.3182C0.818237 13.9385 0.969085 13.5743 1.23759 13.3058C1.5061 13.0373 1.87028 12.8864 2.25001 12.8864H30.293L19.8501 2.44549C19.5814 2.17684 19.4305 1.81247 19.4305 1.43253C19.4305 1.0526 19.5814 0.688232 19.8501 0.41958C20.1187 0.150927 20.4831 0 20.863 0C21.243 0 21.6074 0.150927 21.876 0.41958L34.762 13.3052C34.8951 13.4382 35.0007 13.5961 35.0727 13.7699C35.1448 13.9437 35.1819 14.13 35.1819 14.3182C35.1819 14.5063 35.1448 14.6926 35.0727 14.8665C35.0007 15.0403 34.8951 15.1982 34.762 15.3311Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="slick-left" onClick={onClick}>
      {" "}
      <div className="">
        <svg
          width="35"
          height="35"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="35"
            cy="35"
            r="33.5"
            transform="rotate(-180 35 35)"
            stroke-width="3"
          />{" "}
        </svg>{" "}
        <svg
          width="12"
          height="29"
          viewBox="0 0 36 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="center"
        >
          <path
            d="M34.762 15.3311L21.876 28.2168C21.6074 28.4854 21.243 28.6364 20.863 28.6364C20.4831 28.6364 20.1187 28.4854 19.8501 28.2168C19.5814 27.9481 19.4305 27.5838 19.4305 27.2038C19.4305 26.8239 19.5814 26.4595 19.8501 26.1909L30.293 15.7499H2.25001C1.87028 15.7499 1.5061 15.5991 1.23759 15.3306C0.969085 15.0621 0.818237 14.6979 0.818237 14.3182C0.818237 13.9385 0.969085 13.5743 1.23759 13.3058C1.5061 13.0373 1.87028 12.8864 2.25001 12.8864H30.293L19.8501 2.44549C19.5814 2.17684 19.4305 1.81247 19.4305 1.43253C19.4305 1.0526 19.5814 0.688232 19.8501 0.41958C20.1187 0.150927 20.4831 0 20.863 0C21.243 0 21.6074 0.150927 21.876 0.41958L34.762 13.3052C34.8951 13.4382 35.0007 13.5961 35.0727 13.7699C35.1448 13.9437 35.1819 14.13 35.1819 14.3182C35.1819 14.5063 35.1448 14.6926 35.0727 14.8665C35.0007 15.0403 34.8951 15.1982 34.762 15.3311Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}

const BrandSlider = () => {
  var settings = {
    className: "slider variable-width",
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    centerMode: true,
    slidesToShow: 12,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="brands mx-auto slick-container max-width pt-auto">
      <Slider {...settings}>
        {Array(20)
          .fill(0)
          .map((item) => (
            <div className="p-1">
              <div
                className=" h-[80px] rounded-full flex items-center justify-center bg-white border border-green mr-2"
                style={{ width: 80 }}
              >
                <img src="/Rectangle 13.png" alt="" />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default BrandSlider;
