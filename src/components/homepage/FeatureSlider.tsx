"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadingBar from "./HeadingBar";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface IImages {
  img: string;
  name: string;
}

const imgSlider: IImages[] = [
  { img: "/feature-slider/Br (1).png", name: "feature1" },
  { img: "/feature-slider/Br.png", name: "feature2" },
  { img: "/feature-slider/C-1.png", name: "feature3" },
  { img: "/feature-slider/CA-1.png", name: "feature4" },
  { img: "/feature-slider/D-2.png", name: "feature5" },
  { img: "/feature-slider/F-1.png", name: "feature6" },
  { img: "/feature-slider/T-1.png", name: "feature7" },
];

function FeatureSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    className: "center w-full lg:w-[70%] mx-auto",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    dots: false,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-slate-100 p-10 py-[10%]">
      <HeadingBar title="Features" subTitle="" />
      <div className="slider-container">
        <Slider {...settings}>
          {imgSlider.map((item, index) => (
            <div
              key={index}
              className={`slide ${
                activeIndex === index ? "active" : ""
              } my-[10%] lg:mx-4`}
            >
              <Image
                src={item.img}
                alt={item.name}
                height={200}
                width={200}
                className={`md:max-w-[200px] lg:max-w-[300px] max-w-[100px] object-cover rounded-md transition-transform duration-500 px-2 md:px-6 ${
                  activeIndex === index
                    ? "md:scale-150 scale-125"
                    : "md:scale-100 scale-75"
                }`}
              />
            </div>
          ))}
        </Slider>
        <CustomDots
          activeIndex={activeIndex}
          totalSlides={imgSlider.length}
          onDotClick={setActiveIndex}
        />
      </div>
    </section>
  );
}

const CustomDots = ({
  activeIndex,
  totalSlides,
  onDotClick,
}: {
  activeIndex: number;
  totalSlides: number;
  onDotClick: (index: number) => void;
}) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
         
          onClick={() => onDotClick(index)}
          style={{
            width: "16px",
            height: "16px",
            backgroundColor: activeIndex === index ? "#aefe3a" : "gray",
            borderRadius: "50%",
            border: "solid 1px",
            cursor: "pointer",
            transition: "background-color 0.3s",
            margin: "0 5px",
          }}
        />
      ))}
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500   p-3 rounded-full text-white hover:bg-gray-500/50"
      onClick={onClick}
    >
      <ArrowRight size={16} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 p-3 rounded-full text-white hover:bg-gray-500/50"
      onClick={onClick}
    >
      <ArrowLeft size={16}  />
    </button>
  );
};

export default FeatureSlider;
