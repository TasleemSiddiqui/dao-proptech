"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React, { useEffect, useState } from "react";
interface Idata {
  img: string | StaticImageData;
  title: string;
  text: string;
}

const content: Idata[] = [
  {
    img: "/platforms/1_Transparent.svg",
    title: "We are transparent",
    text: "Make an informed investment decision by looking at all the projects details transparently, be it project costs, expected gains or legal affairs",
  },
  {
    img: "/platforms/1_Futuristic.svg",
    title: "We are futuristic",
    text: "Buy and sell area to and from other investors or projects directly, your personal dashboard allows you to keep track of your transactions",
  },
  {
    img: "/platforms/1_Inclusive.svg",
    title: "We are inclusive",
    text: "90% of our population cannot invest in real estate due to inaccessibility, illiquidity and over-the-top valuations - that's where we come in!",
  },
  {
    img: "/platforms/1_Secure.svg",
    title: "We are secure",
    text: "Real estate has long been the world,s go-to investment avenue, and now backed by Blockchain, it gives you additional peace of mind",
  },
];

const Platform = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 2));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-tr from-blue-800 to-teal-400 h-fit w-full text-white lg:p-7 p-5">
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-5 lg:space-y-0">
          {/* Left Section */}
          <div className="flex-1 lg:p-22 md:p-24 p-6 space-y-4 text-left">
            <h1 className="scroll-m-20 text-3xl md:text-5xl font-semibold lg:tracking-tight">
              Investing in real estate has never been easier
            </h1>
            <h4 className="scroll-m-20 text-lg md:text-2xl  font-medium lg:tracking-tight">
              Our platform empowers you to earn financial freedom through real
              estate
            </h4>
            <Button className="text-lg py-3 lg:py-7 lg:px-4 mt-5 font-semibold w-fit lg:w-auto lg:text-xl">
              Register Now
            </Button>
          </div>

          {/* Right Section with Image */}
          <div className="flex-1 p-6 lg:p-12">
            <Image
              src={"/platforms/footer-Dao-PropTech-secondary-logo-b@2x.png"}
              height={800}
              width={500}
              alt="hero"
              className="w-auto max-h-[500px]"
            />
          </div>
        </div>

        {/* Cards Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[90%] lg:w-[75%] absolute bg-white lg:-bottom-[40%] left-0 right-0 mx-auto text-gray-800 shadow-xl rounded-lg">
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
      <div className="h-[70rem] md:h-[30rem] lg:h-[15rem] w-full"></div>
      {/* section 2nd */}
      <div className="flex lg:flex-row flex-col-reverse bg-slate-50 py-[10%]">
        <div className="flex-1 pl-[5%]">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            We have a unique cost-based pricing and construction rounds
            methodology
          </h1>
          <Progress value={value} />
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-gray-700 ">
            Our project pricing mechanism divides each project's construction
            process into multiple development rounds. Each round has
            construction-related milestones and a price that reflects the
            construction stage. To give you surety and to keep the project
            sponsors/developers accountable, new development rounds are not
            initiated until the previous round's milestones are achieved.
            <br />
            <br />
            Your investment grows as a project progresses through various
            development stages. This ensures your returns are always maximised.
          </p>
        </div>
        <div className="flex-1 pl-[5%]">
          <Image
            src={"/platforms/DAO-mobile-dashboard.png"}
            alt=""
            height={800}
            width={800}
            className="w-auto max-h-[800px] object-cover"
          />
        </div>
      </div>
      {/* section 3rd */}
      <div className="flex lg:flex-row flex-col-reverse py-[10%]">
        <div className="flex-1  flex justify-center items-center">
          <Image
            src={"/platforms/scientific-pricing-1.png"}
            alt=""
            height={800}
            width={800}
            className="w-auto max-h-[800px] object-cover"
          />
        </div>
        <div className="flex-1 pl-[5%] ">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
            Our platform gives you access to institutionally qualified real
            estate investment opportunities
          </h1>
          <Progress value={value} />
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-gray-700 ">
            For all the projects on our platform, we openly share the round-wise
            past, current, and expected prices. In addition, our projects are
            handpicked, data-backed and use-case driven, meaning that your
            investment is safe, viable and profitable.
            <br />
            <br />
            By giving you 100% transparency, whether you are looking for passive
            income, capital gains, or long-term value creation, you are now in
            complete control.
          </p>
        </div>
      </div>
      <div className=" flex flex-col  justify-center items-center h-fit  md:h-[50vh] text-center  bg-gradient-to-tr from-blue-800 to-teal-400  w-full text-white lg:p-7 p-5">
        <h1 className="text-2xl md:text-5xl font-semibold text-white ">
          Invest Smartly
        </h1>
        <p className="text-base md:text-xl text-white font-normal max-w-2xl  md:mt-5">
          Sign up today and experience the DAO PropTech's platform; your real
          estate wealth partner
        </p>
        <Button className="text-lg  font-semibold mt-4 hover:bg-white hover:text-black p-5">
          {" "}
          CREATE A FREE ACCOUNT
        </Button>
      </div>
    </>
  );
};

export default Platform;
