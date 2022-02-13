/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import PropTypes, { InferProps } from "prop-types";

function CollectionCard({
  image,
  first,
  year,
}: InferProps<typeof CollectionCard.propTypes>) {
  return (
    <div className="w-[200px] h-[250px] md:w-[350px] md:h-[500px] pl-5 md:pl-10 bg-primary-100 shadow-2xl shadow-black flex-col leading-none transition-all duration-500 hover:scale-110 overflow-x-hidden">
      <div
        className="w-full  relative ml-5 md:ml-10 h-[90%] bg-cover bg-center"
        style={{ backgroundImage: "url(' " + image + " ')" }}
      >
        <p
          className={`${
            !first && "opacity-50"
          } absolute top-10 md:top-40 -left-1/3 md:-left-1/2 text-5xl md:text-[123px] -rotate-90 text-primary-500`}
        >
          {year}
        </p>
        {first && (
          <div className="absolute -left-[10%] md:-left-[20%] bottom-0 text-primary-600">
            <p className="text-[10px] md:text-base">Check out our</p>
            <p className="text-lg md:text-5xl">Collection</p>
          </div>
        )}
      </div>
      {first && (
        <div className="w-full px-10 h-[10%] flex justify-end items-center ">
          <button className="transition-all duration-500 hover:scale-125">
            <img src="/svgs/arrow.svg" alt="arrow" className="w-10 md:w-20" />
          </button>
        </div>
      )}
    </div>
  );
}

CollectionCard.propTypes = {
  first: PropTypes.bool,
  image: PropTypes.string.isRequired,
  year: PropTypes.string,
};

export default CollectionCard;
