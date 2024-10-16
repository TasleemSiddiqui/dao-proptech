'use client'
import React, { useEffect, useState } from "react";
import HeadingBar from "./HeadingBar";
import { StaticImageData } from "next/image";
import Image from "next/image";
// import img1 from "@/../public/homePage/journey_signup-b.svg";
// import img2 from "@/public/homePage/journey_invest-b.svg";
// import img3 from "@/public/homePage/journey_track-b.svg";
import mockup from "@/../public/homePage/Mobile-Mock-Up-1.jpg"
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

interface Idata {
  img: string | StaticImageData;
  title: string;
  text: string;
}

const content: Idata[] = [
  {
    img:"/homePage/journey_signup-b.svg",
    title: "Sign Up",
    text: "Explore real estate projects that meet your investment criteria",
  },
  {
    img:"/homePage/journey_invest-b.svg",
    title: "Invest",
    text: "Build your real estate portfolio from a low initial investment and keep accumulating",
  },
  {
    img:"/homePage/journey_track-b.svg",
    title: "Check Progress",
    text: "Keep a track of your investments through your personal dashboard",
  },
];

const Investment = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 2));
      }, 100);
  
      return () => clearInterval(interval); 
    }, []);


  return (
    <section className="px-[10%] py-[5%]">
      <HeadingBar
        title={`What's in it for you?`}
        subTitle={`We enable real estate investments for everyone - Browse all qualified projects in one place`}
        // style={`lg:mt-[20%]`}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-5  ">
        {content.map((item, index) => (
          <div
            key={index}
            className="px-5 py-10 space-y-4 flex flex-col justify-center items-center text-center  bg-gray-100 shadow-lg lg:hover:shadow-2xl duration-300 lg:hover:-translate-y-3 rounded-xl  "
          >
            <Image
              src={item.img}
              alt={item.title}
              height={250}
              width={250}
              className="max-h-[250px] w-auto  "
            />
            <h1 className="text-xl lg:text-2xl font-semibold line-clamp-2 ">
              {item.title}
            </h1>
            <p className="text-base font-medium line-clamp-4 text-gray-500 ">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row mt-20">
        <div className="flex-1">
          <span className="font-semibold text-base text-primary">
            {" "}
            WHY DAO PropTech?
          </span>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            The innovative way for
            <strong> everyone </strong>to profit from real estate investments
          </h1>
          <Progress value={value}/>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-gray-700 font-semibold">
            Using the power of technology to provide diversified property
            options for everyone
          </p>
          <div className="grid grid-cols-2">
          <ul className="my-6 ml-6  list-disc text-lg [&>li]:mt-2 text-gray-700">
            <li>Award-winning Platform</li>
            <li>100% secure</li>
            <li>Data-driven project selection</li>
            <li>Easier liquidity</li>
           
          </ul>
          <ul className="my-6 ml-6  list-disc text-lg [&>li]:mt-2 text-gray-700">
        
            <li>No middle-man</li>
            <li>Flexible payment options</li>
            <li>Indicative future pricing</li>
            <li>Digital portfolio management</li>
          </ul>
          </div>
        
          <Button className="px-10 py-6 font-semibold text-lg">Explore</Button>
        </div>
        <div className="flex-1 flex justify-center items-center w-full">
            <Image src={mockup} alt="mockup"/>
        </div>
      </div>
    </section>
  );
};

export default Investment;
