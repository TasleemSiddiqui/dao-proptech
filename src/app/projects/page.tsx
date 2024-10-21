import { projectThumbnail } from "@/components/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <section className="space-y-4">
      {/* page heading */}
      <div className=" flex flex-col  justify-center items-center h-fit  md:h-[50vh] text-center  bg-gradient-to-tr from-blue-800 to-teal-400  w-full text-white lg:p-7 p-10">
        <h1 className="text-2xl font-extrabold md:text-5xl lg:font-bold text-white ">
          Projects on our Platform
        </h1>
        <p className="text-base md:text-xl text-white font-normal max-w-2xl line-clamp-3  md:mt-5">
          Giving you the trust you need to own your share of premium real
          estate.
        </p>
      </div>
      {/* projects section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 px-[8%] gap-10 md:gap-5  ">
        {
          /* project card */
          projectThumbnail.map((item) => (
          
              <Card key={item.id} className=" shadow-xl cursor-pointe lg:hover:scale-105 duration-500 ">
                  
                <CardHeader className="relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    height={250}
                    width={400}
                    className="object-cover w-full "
                  />
                  <div className=" bg-white rounded-md absolute -bottom-2 left-2">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      height={70}
                      width={70}
                      className="object-cover h-12 w-auto  "
                    />
                  </div>
                </CardHeader>
                <CardContent className="px-5  ">
                  <CardTitle className="md:text-2xl text-xl font-normal">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-500 ">
                    {item.projectType}
                    <br />

                    {item.address}

                    <br />
                    <br />

                    {item.description}
                  </CardDescription>
                  <div className="flex  justify-around md:items-center">
                    <div className="space-y-1 text-center flex flex-col justify-center items-center">
                      <Image
                        src={"/project/area.svg"}
                        alt={""}
                        height={70}
                        width={70}
                        className="object-cover md:h-[70px] h-[40px] w-auto"
                      />
                      <h1 className="text-xs md:text-base text-gray-500">
                        Total Area
                      </h1>
                      <span className="text-sm md:text-lg md:font-semibold text-gray-700">
                        {item.totalArea}
                      </span>
                    </div>
                    <div className="space-y-1 text-center flex flex-col justify-center items-center">
                      <Image
                        src={"/project/Growth.svg"}
                        alt={""}
                        height={70}
                        width={70}
                        className="object-cover md:h-[70px] h-[40px] w-auto"
                      />
                      <h1 className="text-xs md:text-base text-gray-500">
                        Developmental Round
                      </h1>
                      <span className="text-sm md:text-lg md:font-semibold text-gray-700">
                        {item.developmentalRound}
                      </span>
                    </div>
                    <div className="space-y-1 text-center flex flex-col justify-center items-center">
                      <Image
                        src={"/project/completion-time.svg"}
                        alt={""}
                        height={70}
                        width={70}
                        className="object-cover md:h-[70px] h-[40px] w-auto"
                      />
                      <h1 className="text-xs text-gray-500">EXP. Completion</h1>
                      <span className="text-sm md:text-lg md:font-semibold text-gray-700">
                        {item.expCompletion}
                      </span>
                    </div>
                  </div>
                  <Button className="font-semibold mt-6">
                    <Link href={item.slug}>View Project</Link>
                  </Button>
                </CardContent>
              
              </Card>
           
          ))
        }
      </div>

      {/* about footer */}
      <div className=" flex flex-col  justify-center items-center h-fit  md:h-[50vh] text-center  bg-gradient-to-tr from-blue-800 to-teal-400  w-full text-white lg:p-7 p-5">
        <h1 className="text-2xl md:text-5xl font-semibold text-white max-w-lg ">
          Start your journey to property ownership
        </h1>
        <p className="text-base md:text-xl text-white font-normal max-w-2xl  md:mt-5">
          It's only a few clicks away
        </p>
        <Button className="text-lg  font-semibold mt-4 hover:bg-white hover:text-black p-5">
          {" "}
          GET A CALL BACK
        </Button>
      </div>
    </section>
  );
};

export default Project;
