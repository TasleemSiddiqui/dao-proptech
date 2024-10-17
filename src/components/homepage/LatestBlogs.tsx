import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HeadingBar from "./HeadingBar";

interface Iblog {
  Img: string | StaticImageData;
  title: string;
  date: String;
}

const blogs: Iblog[] = [
  {
    Img: "/blogImage/Real-Estate-Insights-Navigate-Opportunities-with-daoproptechcom-400x250.jpg",
    title: "Real Estate Insights: Navigate Opportunities with daoproptech.com",
    date: "Sep 1, 2022",
  },
  {
    Img: "/blogImage/Real-Estate-is-an-economys-backbone-400x250.jpg",
    title:
      "Revolutionizing Real Estate: Step into a World of Virtual Possibilities!",
    date: "Aug 7, 2023",
  },
  {
    Img: "/blogImage/Use-of-AR-VR-400x250.jpg",
    title: "Real Estate and Economy: Exploring the Integral Relationship",
    date: "Jul 21, 2023",
  },
];

const LatestBlogs = () => {
  return (
    <section className="lg:my-10 my-5 mt-6 py-[10%]">
        <HeadingBar title="Latest Blogs" subTitle=""/>
      <div className="grid grid-cols-1 md:mx-[20%] lg:grid-cols-3 gap-10 mx-[10%] lg:mx-[10%]">
        {blogs.map((item, index) => (
          <Card className=" shadow-xl cursor-pointer">
            <CardHeader>
              <Image
                src={item.Img}
                alt={item.title}
                height={250}
                width={400}
                className="object-cover w-full "
              />
            </CardHeader>
            <CardContent className="px-5">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogs;
