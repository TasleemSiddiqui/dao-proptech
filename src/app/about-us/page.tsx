import HeadingBar from "@/components/homepage/HeadingBar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LinkedinIcon } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface Iteam {
  name: string;
  designation: string;
  img: string | StaticImageData;
  link: string;
}

// Sample array of objects based on the Iteam interface
const teamMembers: Iteam[] = [
  {
    name: "Alice Johnson",
    designation: "Software Engineer",
    img: "/about/team/abdullah-khan-150x150.png", // Replace with actual image path or StaticImageData
    link: "https://example.com/alice",
  },
  {
    name: "Bob Smith",
    designation: "Product Manager",
    img: "/about/team/abid-arshad-150x150.jpg",
    link: "https://example.com/bob",
  },
  {
    name: "Charlie Brown",
    designation: "UX Designer",
    img: "/about/team/haseeb-mirza-150x150.jpg",
    link: "https://example.com/charlie",
  },
  {
    name: "Diana Prince",
    designation: "Data Scientist",
    img: "/about/team/hassan-150x150.jpeg",
    link: "https://example.com/diana",
  },
  {
    name: "Ethan Hunt",
    designation: "DevOps Engineer",
    img: "/about/team/jawad-nayyar-150x150.jpg",
    link: "https://example.com/ethan",
  },
  {
    name: "Fiona Green",
    designation: "Marketing Specialist",
    img: "/about/team/muneeb-khan-150x150.png",
    link: "https://example.com/fiona",
  },
  {
    name: "George Miller",
    designation: "Content Writer",
    img: "/about/team/MYC-1.png",
    link: "https://example.com/george",
  },
  {
    name: "Hannah Lee",
    designation: "QA Engineer",
    img: "/about/team/owais-barlas-150x150.jpg",
    link: "https://example.com/hannah",
  },
  {
    name: "Ian Wright",
    designation: "System Analyst",
    img: "/about/team/umer-taj-150x150.jpg",
    link: "https://example.com/ian",
  },
];

const story: string[] = [
  "Our journey began with a shared passion for revolutionizing the real estate industry in Pakistan. We believe that financial freedom through real estate ownership and investments should be accessible to all, and that transparency and trust are key pillars for achieving this goal.",
  "The vision for DAO PropTech came into being in August 2019. We envisioned a future where modern technology could harness the true power of the entire real estate ecosystem, connecting investors and developers in a seamless, decentralized system.",
  "Set out to disrupt the traditional real estate engine, the first transaction on DAO PropTech's model was recorded in April 2020, marking a milestone in our journey and ushering a new era of empowerment for the masses.",
  "Join us as we continue on this exciting journey toward financial liberty for all.",
];

const AboutUs = () => {
  return (
    <section className="space-y-4">
      {/* page heading */}
      <div className=" flex flex-col  justify-center items-center h-fit  md:h-[50vh] text-center  bg-gradient-to-tr from-blue-800 to-teal-400  w-full text-white lg:p-7 p-10">
        <h1 className="text-2xl font-extrabold md:text-5xl lg:font-bold text-white ">
          About DAO Proptech
        </h1>
        <p className="text-base md:text-xl text-white font-normal max-w-2xl line-clamp-3  md:mt-5">
          In 2020, DAO PropTech was founded with the simple mission of making
          everyone a part of a fair and inclusive real estate ecosystem
        </p>
      </div>
      {/* Story Section */}
      <div className="w-full h-auto px-[10%] py-[5%] ">
        <h1 className="text-gray-700 font-extrabold md:text-4xl text-2xl lg:mb-8 mb-4">
          Our Story
        </h1>
        <ul>
          {story.map((item, index) => (
            <li
              key={index}
              className="text-gray-500  text-base font-sans tracking-normal py-2"
            >
              {item}{" "}
            </li>
          ))}
        </ul>
        <div className="flex lg:flex-row flex-col justify-between items-center mt-6 ">
          <Card className="flex-1 shadow-none border-none">
            <CardHeader>
              <Image
                src={"/about/Mission.svg"}
                alt={"Our vision"}
                height={100}
                width={100}
                className={`object-cover p-2`}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-4xl font-bold">Our Vision</CardTitle>
              <CardDescription className="text-lg">
                We envision a world where real estate is not booked by the
                select few, but the masses in general.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="flex-1 shadow-none border-none">
            <CardHeader>
              <Image
                src={"/about/Vission.svg"}
                alt={"Our vision"}
                height={100}
                width={100}
                className={`object-cover p-2`}
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-4xl font-bold">Our Mission</CardTitle>
              <CardDescription className="text-lg">
                To democratize real estate and create a safe and reliable space
                for you to invest your hard-earned money.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team  */}
      <div className="bg-slate-100 py-[10%]">
        <HeadingBar
          title={"Meet the team"}
          subTitle={
            "A team of young, passionate and highly skilled professionals with a collective experience of over 100 years"
          }
        />

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 px-[10%] py-5">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`flex flex-col py-[5%] justify-center bg-white items-center text-center shadow-2xl border-none `}
            >
              <CardHeader>
                <Image
                  src={member.img}
                  alt={member.name}
                  height={150}
                  width={150}
                  className="object-cover p-2"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl font-medium text-gray-800">
                  {member.name}
                </CardTitle>
                <CardDescription className="font-semibold text-gray-400 text-sm">
                  {member.designation}
                </CardDescription>
                <div className="p-3 bg-slate-200 h-fit w-fit mx-auto hover:bg-slate-100 text-gray-800">
                  <Link href={member.link}>
                    <LinkedinIcon size={16} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* about footer */}
      <div className=" flex flex-col  justify-center items-center h-fit  md:h-[50vh] text-center  bg-gradient-to-tr from-blue-800 to-teal-400  w-full text-white lg:p-7 p-5">
        <h1 className="text-2xl md:text-5xl font-semibold text-white ">
          Get on the property ladder today
        </h1>
        <p className="text-base md:text-xl text-white font-normal max-w-2xl  md:mt-5">
          Contact us to begin your journey
        </p>
        <Button className="text-lg  font-semibold mt-4 hover:bg-white hover:text-black p-5">
          {" "}
          Contact us
        </Button>
      </div>
    </section>
  );
};

export default AboutUs;
