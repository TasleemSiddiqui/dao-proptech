"use client";
import React, { useState } from "react";
import logo from "@/../public/DAO-PropTech-Primary-logo@2x.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface Inavlinks {
  title: string;
  link: string;
}

const navLinks: Inavlinks[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about-us",
  },
  {
    title: "Project",
    link: "/projects",
  },
  {
    title: "Platforms",
    link: "/platforms",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  // sheet state management
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center lg:px-36 md:px-24 px-14 py-5 ">
      {/* logo */}
      <Image
        src={logo}
        alt="proptech"
        className="md:h-[3rem] h-[2rem] w-auto"
      />
      {/* large screen navigation */}
      <ul className="hidden text-gray-800 lg:flex justify-center items-center gap-x-4 font-semibold text-base tracking-wide font-sans">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}

        <li>
          <Button> Sign up</Button>
        </li>
      </ul>

      {/* mobile navigation */}
      <div className="lg:hidden block">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"right"}>
            <ul className="lg:hidden flex flex-col font-semibold text-base tracking-wide font-sans text-gray-400 text-left space-y-6 py-10">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.link} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}

              <li>
                <Button className="w-full" onClick={() => setOpen(false)}>
                  Sign up
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
