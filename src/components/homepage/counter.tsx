"use client";
import React, { useState, useEffect } from "react";
import { Progress } from "../ui/progress";






const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
    className="w-full h-auto md:space-y-5 md:p-10 p-5 mt-10"
      style={{
        backgroundImage: 'url("/vecteezy_world-map_36643287.svg")', 
        backgroundSize: "contain",  
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
       
      }}
    >
      <div className="flex flex-col justify-center bg-white items-center w-full bg-opacity-75 p-8 rounded-lg">
        <h1 className="scroll-m-20 text-4xl max-w-xl text-center mx-auto font-bold tracking-tight lg:text-5xl text-gray-800">
          Join the thousands of people paving their way to financial freedom
        </h1>
        <Progress value={value} />
        <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground w-full md:w-[70%] lg:max-w-[35%] text-center font-normal tracking-wide">
          Empowered by data insights, cutting-edge technology, and a digital platform, take control of your investment needs
        </p>
      </div>
      <div className="flex justify-around items-center">
        <div className="flex flex-col justify-between items-center text-center">
            <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
            38,032
            </h1>
            <p className="lg:text-xl text-base text-gray-500 ">
            Platfrom Users

            </p>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
            <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
            918,719
            </h1>
            <p className="lg:text-xl text-base text-gray-500 ">
            No. of sq. ft. sold to date

            </p>
        </div>
        <div className="flex flex-col justify-between items-center text-center">
            <h1 className="text-3xl lg:text-5xl text-primary font-semibold">
            3,602
            </h1>
            <p className="lg:text-xl text-base text-gray-500 ">
            Transactions
            </p>
        </div>

      </div>
    </section>
  );
};

export default Counter;
