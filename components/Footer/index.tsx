import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div
      className="w-full  bg-cover bg-center text-primary-600 text-xl"
      style={{ backgroundImage: "url('/images/shutterstock_1749300191.png')" }}
    >
      <div className="py-5 md:py-10 px-5 md:px-40 w-full h-full flex flex-col items-center md:space-y-20">
        <div className="relative w-3/4 h-[50vh]">
          <Image src="/logo.svg" alt="logo" layout="fill" />
          <div className="absolute bottom-1/4 left-20 inline-flex items-center text-xs space-x-3">
            <div className="w-5 h-5 bg-primary-500" />
            <p className="">CRAFTSMANSHIP</p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items- space-y-3 md:space-y-0">
          <div className="md:w-3/4">
            <div className="w-full md:w-1/2 inline-flex flex-col divide-y-2 divide-primary-500">
              <div>
                <p className="text-xl md:text-3xl font-apparelDiplay">
                  Want to be the first to know?
                </p>
                <p className="text-xl md:text-3xl font-apparel">
                  Follow us on social:
                </p>
              </div>
              <div className="pt-5 md:py-10 inline-flex space-x-5 md:space-x-10">
                <a href="#instagram" className="hover:text">
                  Instagram
                </a>
                <a href="#pinterest">Pinterest</a>
                <a href="#facebook">Facebook</a>
              </div>
            </div>
          </div>
          <div className="md:w-1/4 h-full inline-flex flex-col justify-start items-stretch">
            <div className="inline-flex flex-col">
              <Link href="#faq">
                <a>FAQ</a>
              </Link>
              <Link href="#shipping">
                <a>Shipping</a>
              </Link>
              <Link href="#returnAndRefundPolicy">
                <a>Return and Refund Policy</a>
              </Link>
              <Link href="#">
                <a>Contact Us</a>
              </Link>
            </div>
            <div className="">
              <p>&copy; 2021 FOR.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
