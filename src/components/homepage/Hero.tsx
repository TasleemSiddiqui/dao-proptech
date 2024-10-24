import React from "react";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import heroimg from "@/../public/homePage/hero.png";
import img1 from "@/../public/homePage/Verified.svg"
import img2 from "@/../public/homePage/blockchain.svg"
import img3 from "@/../public/homePage/Value-based-Pricing.svg"
import img4 from "@/../public/homePage/Personalized-Plans.svg"

interface Idata {
  img: string | StaticImageData;
  title: string;
  text: string;
}

const content: Idata[] = [
  {
    img: img1,
    title: "Verified Projects",
    text: "Handpicked and institutionally qualified using a 30+ factor scoring matrix",
  },
  {
    img: img2,
    title: "Backed by Blockchain",
    text: "Secure and transparent; making it easier to track and verify your transactions",
  },
  {
    img: img3,
    title: "Value-based Pricing",
    text: "Invest at transparently declared price; there are no hidden charges or hefty premiums",
  },
  {
    img: img4,
    title: "Personalized Plans",
    text: "What's your goal? Profit, Possession, Income or Saving - we've it covered",
  },
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-tr from-blue-800 to-teal-400 h-fit w-full text-white lg:p-7 p-5">
      <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0">
        {/* Left Section */}
        <div className="flex-1 lg:p-22 md:p-24 p-6 space-y-4 text-left">
          <h1 className="scroll-m-20 text-3xl md:text-5xl font-semibold lg:tracking-tight">
            We're Pakistan's 1st digital real estate investment platform
          </h1>
          <h4 className="scroll-m-20 text-lg md:text-2xl  font-medium lg:tracking-tight">
            Start investing flexibly, wherever you are in the world
          </h4>
          <Button className="text-lg py-3 lg:py-7 lg:px-4 mt-5 font-semibold w-fit lg:w-auto lg:text-xl">
            Begin Now
          </Button>
        </div>

        {/* Right Section with Image */}
        <div className="flex-1 p-6 lg:p-12">
          <Image src={heroimg} alt="hero" className="w-full h-auto" />
        </div>
      </div>

      {/* Cards Section */}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[90%] lg:w-[75%] absolute bg-white lg:-bottom-[30%] left-0 right-0 mx-auto text-gray-800 shadow-xl rounded-lg">
          {content.map((item, index) => (
            <div
              key={index}
              className="px-5 py-10 space-y-2 flex flex-col justify-center items-center text-center w-full border group  "
            >
              <Image
                src={item.img}
                alt={item.title}
                height={80}
                width={80}
                className="max-h-[80px] w-auto group-hover:scale-105 duration-200 "
              />
              <h1 className="text-xl lg:text-2xl font-semibold line-clamp-2 group-hover:scale-105 duration-200 ">
                {item.title}
              </h1>
              <p className="text-sm font-medium line-clamp-4 text-gray-500 group-hover:scale-105 duration-200">
                {item.text}
              </p>
            </div>
          ))}
        </div>
     
    </section>
  );
};

export default Hero;
