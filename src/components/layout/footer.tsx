import Image from "next/image";
import React from "react";
import logo from "@/../public/footer-Dao-PropTech-secondary-logo-b@2x.png";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 border-t-2 border-b-2 lg:py-10">
        {/* 1st column */}
        <div className="p-4 space-y-3">
          <Image
            src={logo}
            alt="company name"
            className="lg:h-auto w-full"
          ></Image>
          <p className="text-sm text-muted-foreground leading-6">
            DAO PropTech is a registered company with the Securities and
            Exchange Commission of Pakistan and a certified member of the
            Pakistan Software Houses Association for IT & ITeS (P@SHA).
          </p>
        </div>
        {/* 2nd column */}
        <div className="p-4 space-y-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-sans text-gray-800 ">
            Company
          </h3>
          <ul className="space-y-2 text-primary text-lg tracking-wide font-thin">
            <li>
              <Link href={"/"}>About Us</Link>
            </li>
            <li>
              <Link href={"/"}>Bloc</Link>
            </li>
            <li>
              <Link href={"/"}>Learn</Link>
            </li>
            <li>
              <Link href={"/"}>Bounty Program</Link>
            </li>
          </ul>
        </div>
        {/* 3rd column */}
        <div className="p-4 space-y-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-sans text-gray-800 ">
          Support
          </h3>
          <ul className="space-y-2 text-primary text-lg tracking-wide font-thin">
            <li>
              <Link href={"/"}>Careers</Link>
            </li>
            <li>
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li>
              <Link href={"/"}>FAQ&apos;s</Link>
            </li>
            <li>
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"/"}>Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        {/* 4th column */}
        <div className="p-4 space-y-3">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight font-sans text-gray-800 ">
            Address
          </h3>
          <ul className="space-y-2">
            <li className="flex  text-base   font-semibold wax-w-[300px] ">
            Location:<span className="font-medium tracking-wide  ">17-A Business Bay,Sector F, DHA 1, Islamabad</span>
            </li>
            <li className="flex  text-base   font-semibold ">
            Email:<span className="font-medium tracking-wide  flex-wrap ">info@daoproptech.com</span>
            </li>
            <li className="flex  text-base   font-semibold ">
            Phone:<span className="font-medium tracking-wide  flex-wrap "> +(92) 314 326 7767</span>
            </li>
          </ul>


          {/* socil links */}
          <ul className="flex gap-x-3">
            <li className="bg-gray-100 rounded-full p-2 text-primary w-fit" > <Facebook size={18}/></li>
            <li className="bg-gray-100 rounded-full p-2 text-primary w-fit" > <Instagram size={18}/></li>
            <li className="bg-gray-100 rounded-full p-2 text-primary w-fit" > <Linkedin size={18}/></li>
            <li className="bg-gray-100 rounded-full p-2 text-primary w-fit" > <Twitter size={18}/></li>
            <li className="bg-gray-100 rounded-full p-2 text-primary w-fit" > <Youtube size={18}/></li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center py-10">
        <span className="text-sm md:text-base text-gray-900">
          © 2024 DAO PROPTECH. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
