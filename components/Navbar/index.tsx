import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full h-20 px-5 md:px-10 flex justify-between items-center">
      <Link href="/">
        <a className="relative w-28 h-16 md:w-40 md:h-20 self-start">
          <Image src="/logo-icon.svg" alt="logo" layout="fill" />
        </a>
      </Link>
      <div className="text-sm md:text-lg text-primary-600 font-medium font-gilory space-x-3 md:space-x-20">
        <Link href="#collection">
          <a className="transition-all duration-500 hover:scale-110 hover:text-primary-500 hover:underline underline-offset-2 ">
            Collection
          </a>
        </Link>
        <Link href="#lookbook">
          <a className="transition-all duration-500 hover:scale-110 hover:text-primary-500 hover:underline underline-offset-2 ">
            Lookbook
          </a>
        </Link>
        <Link href="#collection">
          <a className="transition-all duration-500 hover:scale-110 hover:text-primary-500 hover:underline underline-offset-2 ">
            About
          </a>
        </Link>
      </div>
    </div>
  );
}
