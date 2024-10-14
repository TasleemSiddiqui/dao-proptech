'use client'
import React, { useState, useEffect } from "react";
import { Progress } from "../ui/progress";

const HeadingBar = ({
  title,
  subTitle,
  style,
}: {
  title: string;
  subTitle: string;
  style?: string;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => (prevValue === 100 ? 0 : prevValue + 1));
    }, 100);

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className={`flex flex-col justify-center items-center w-full ${style} `}>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-gray-800">
        {title}
      </h1>
      <Progress value={value} />
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-lg text-muted-foreground  w-full md:w-[70%] lg:max-w-[35%] text-center font-normal tracking-wide">
        {subTitle}
      </p>
    </section>
  );
};

export default HeadingBar;
