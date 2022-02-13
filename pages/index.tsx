/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { CollectionCard, Footer, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <div className="font-apparel scroll-smooth">
      <Head>
        <title className="font-apparel">FOR.</title>
        <meta
          name="description"
          content="The Present Is Female: The Designers Behind a Fashion Revolution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-h-screen h-screen relative overflow-hidden">
        <Navbar />
        <div className="w-full h-full flex justify-center md:justify-start items-center">
          <p className="absolute top-1/4 mt-20 md:mt-0 md:-ml-32 text-[120px] md:text-[300px] text-primary-500 opacity-20 md:-rotate-90">
            2021
          </p>
        </div>
        <div className="mt-20 absolute inset-0 w-full flex flex-col md:flex-row items-center md:items-start">
          <div className="w-full md:5/6 h-full inline-flex md:flex-col justify-center md:justify-start items-start md:items-center leading-none">
            <div className="md:ml-10 mt-20 relative text-center">
              <p className="absolute left-[15%] text-2xl md:text-7xl text-primary-600 font-extrabold">
                FOR.
              </p>
              <p className="absolute md:top-10 left-1/3 text-4xl md:text-[123px] text-primary-100">
                every
              </p>
              <p className="absolute left-10 bottom-0 uppercase text-lg text-primary-600">
                Latest Collection
              </p>
              <p className="py-3 md:py-10 text-8xl md:text-[264px] text-primary-500 ">
                Woman
              </p>
            </div>
            <div className="absolute w-full h-1/2 md:w-1/2 md:h-3/4 bottom-0 md:left-1/4 z-50">
              <div className="relative w-full h-full ">
                <Image
                  src="/images/hero.png"
                  alt="hero"
                  layout="fill"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/6 md:py-10 md:pr-10 md:h-full hidden md:inline-flex md:flex-col items-center justify-between">
            <div className="relative w-20 h-20 md:w-40 md:h-40 duration-300 animate-spin">
              <Image src="/svgs/badge.svg" alt="badge" layout="fill" />
            </div>
            <div className="flex justify-center items-center">
              <div className="relative w-20 h-20 md:w-40 md:h-40">
                <Image
                  src="/images/shutterstock_-1.png"
                  alt="video"
                  layout="fill"
                />
              </div>

              <p className="text-xs md:text-base md:absolute right-0 -rotate-90">
                Watch video
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* belt */}
      <div className="w-full p-3 md:p-5 bg-primary-500 overflow-x-auto no-scrollbar whitespace-nowrap ">
        <div className="scroll-text space-x-3">
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
          <div className="inline-flex items-center space-x-3">
            <Image src="/images/elipse.png" width={20} height={20} alt="star" />
            <p className="text-white text-base md:text-xl uppercase">
              The Present Is Female: The Designers Behind a Fashion Revolution
            </p>
          </div>
        </div>
      </div>

      {/* Craftmanship */}
      <div
        className="h-[1100px] md:h-[2200px] w-full bg-center bg-cover relative"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div className="absolute inset-0 bg-primary-300 opacity-50" />
        <div className="relative md:w-2/3 h-screen md:h-[200vh] px-5 md:px-20 flex flex-col justify-center">
          <div className="inline-flex items-center text-xs space-x-3">
            <div className="w-5 h-5 bg-primary-500" />
            <p className="">CRAFTSMANSHIP</p>
          </div>
          <p className="px-5 md:px-10 text-5xl md:text-[120px] text-primary-600 leading-none">
            Real women fashion state, insidious whispering of male
          </p>
          <div className="mt-10 md:px-10 w-full text-primary-600 flex flex-col md:flex-row justify-center items-stretch space-y-5 md:space-y-0">
            <div className="md:w-1/2 px-3 md:px-10 text-right space-y-5 md:space-y-10 border-r-2 border-primary-600">
              <p className="font-gilory">
                Still, what we never reckoned with then was the notion that the
                achievement of women designers today would amount to a reshaping
                of the industry—not by fitting in with male-led corporate rules
                but by steadily ignoring them, trusting their own instincts,
                living how they wish, and opening wide the creative space for a
                whole generation to thrive.
              </p>
              <button className="p-3 border-2 border-primary-600 hover:border-primary-500 text-primary-600 hover:text-primary-500 hover:scale-110 transition-all duration-500 font-medium">
                Discover me
              </button>
            </div>
            <div className="md:w-1/2 px-3 md:px-10">
              <p className="text-2xl font-apparelDisplayIt font-light">
                They're defying the norm and redefining what it means to be
                beautiful.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute md:-bottom-[20%] py-10 px-5 md:px-40 w-full flex flex-col items-center justify-center md:space-y-10">
          <div className="self-start inline-flex items-center text-xs space-x-3">
            <div className="w-5 h-5 bg-primary-500" />
            <p className="">Blog Article</p>
          </div>
          <div className="leading-none z-30">
            <p className="absolute text-[100px] md:text-[300px] text-primary-600">
              Big
            </p>

            <p className="px-10 pt-20 md:px-28 md:pt-56 text-[100px] md:text-[300px] text-primary-500">
              beauty
            </p>
          </div>
          <div className="hiddenmd:block absolute h-1/2 w-full md:w-1/2 -bottom-80 md:bottom-40 z-0">
            <div className="relative w-full h-full ">
              <Image
                src="/images/shutterstock_1749300266.png"
                alt="hero"
                layout="fill"
                className=""
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-end text-primary-600 space-y-5 md:space-y-0 z-30">
            <div className="md:w-1/2 flex  justify-end px-3 md:px-10 text-right border-r-2 border-r-primary-500">
              <div className="w-full md:w-2/3 pt-5 pb-10 md:pt-10 md:pb-20 space-y-5 md:space-y-40 ">
                <p className="text-2xl font-apparelDisplayIt font-light">
                  Why Does the Beauty Industry Ignore Curvy Models?
                </p>
                <button className="px-5 py-3 border-2 border-primary-600 hover:border-primary-500 text-primary-600 hover:text-primary-500 hover:scale-110 transition-all duration-500 font-medium">
                  Discover me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:px-10">
              <p className="font-gilory ">
                People often cite the 1950s as a time when curviness was in, but
                that’s not entirely true,” said Elizabeth Wissinger, author of
                “This Year’s Model” and a professor of fashion studies at the
                City University of New York’s Graduate Center. “Yes, curvy
                bodies were popular, but the people had those achievable,
                accessible physiques, represented by movie stars like Marilyn
                Monroe. Fashion was still very separate and models were thin.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-screen md:h-[50vh] bg-primary-200 flex justify-center" />

      {/* Quote */}
      <div className="w-full relative px-5 py-10 md:py-20 bg-primary-500 flex flex-col justify-center items-center text-primary-100 text-2xl md:text-4xl space-y-5 overflow-hidden">
        <img
          src="/svgs/elipse.svg"
          alt=""
          className="absolute -right-1/4 md:-right-[13%] bottom-[70%] md:bottom-1/2 w-1/2 md:w-1/4"
        />
        <div className="md:w-1/2 text-center">
          <p>
            I think there is beauty in everything. What 'normal' people perceive
            as ugly, I can usually see something of beauty in it.
          </p>
        </div>
        <p className="text-xs md:text-base">Alexander McQueen; designer</p>
        <p className="text-8xl md:text-[200px]">''</p>
        <img
          src="/svgs/elipse.svg"
          alt=""
          className="absolute -left-1/4 md:-left-[15%] top-[65%] md:top-1/2 w-1/2 md:w-1/3"
        />
      </div>

      {/* Lookbook */}
      <div
        className="w-full px-5 md:px-10 py-20 bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/shutterstock_1749300194.png')",
        }}
      >
        <div
          id="lookbook"
          className="w-full flex justify-end text-xl text-primary-600"
        >
          <div className="px-5 inline-flex flex-col items-end md:items-start border-r-2 md:border-r-0 md:border-l-2 border-primary-500">
            <div className="relative w-20 h-20 md:w-40 md:h-40">
              <Image src="/svgs/badge.svg" alt="badge" layout="fill" />
            </div>
            <div className="w-1/2 text-right md:text-left">
              <p>
                Woman inspired and drove our designers when creating this
                collection
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center space-y-20 md:space-y-40">
          <div className="md:mt-20 relative text-center leading-none">
            <p className="absolute top-0 left-0 text-[100px] md:text-[300px] text-primary-500">
              Look
            </p>
            <p className="px-14 md:px-40 pt-20 md:pt-60 text-[100px] md:text-[300px] text-primary-600">
              Book
            </p>
            <div className="inline-flex items-end space-x-1">
              <img src="/logo.svg" alt="" className="w-28 md:w-40" />
              <p className="text-2xl md:text-4xl text-primary-600 font-medium">
                you darling
              </p>
            </div>
          </div>
          <button className="p-3 border-2 border-primary-600 hover:border-primary-500 hover:text-primary-500 hover:scale-110 transition-all duration-500 font-medium">
            Check out our Lookbook
          </button>
        </div>
      </div>

      {/* Couture */}
      <div className="w-full relative px-5 py-20 bg-primary-200 flex flex-col justify-center space-y-10">
        <div className="w-full absolute -top-[7%] left-0 flex justify-center">
          <div className="w-full md:w-1/2 inline-flex items-end space-x-5">
            <div className="w-1/2 md:w-2/3">
              <p className="text-xl text-right md:text-2xl font-apparelDiplay">
                Peter Do Announces His First New York Fashion Week Runway Show
              </p>
            </div>
            <div className="w-1/2 md:w-1/3">
              <div className="relative w-full h-[120px] md:h-[200px]">
                <Image
                  src="/images/shutterstock_1749300299.png"
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="collection"
          className="w-full h-full inline-flex flex-col justify-center md:justify-start items-start md:items-center leading-none space-y-5"
        >
          <div className="md:mt-20 relative text-center">
            <p className="absolute left-5 md:left-10 text-2xl md:text-7xl text-primary-600 font-extrabold">
              FOR.
            </p>
            <p className="absolute top-2 md:top-10 left-[23%] md:left-1/4 text-4xl md:text-[123px] text-primary-100">
              future
            </p>
            <p className="absolute right-10 bottom-0 uppercase text-lg text-primary-600">
              Latest Collection
            </p>
            <p className="py-3 md:py-10 text-8xl md:text-[264px] text-primary-500 ">
              Couture
            </p>
          </div>
          <div className="md:w-1/2 text-primary-600 text-2xl md:text-3xl font-apparelDiplay">
            <p>
              With the young leading the charge against giant corporations, the
              appeal of small labels with big visions will only grow.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center ">
          <div className="relative w-full h-[350px] md:w-[1250px] md:h-[700px] spac-10">
            <div className="absolute top-0 right-0">
              <CollectionCard
                image="/images/shutterstock_1855048699.png"
                year="2022"
              />
            </div>
            <div className="absolute bottom-[50px] left-1/4 md:bottom-[100px] md:left-[450px]">
              <CollectionCard
                image="/images/shutterstock_1749300191.png"
                year="2021"
              />
            </div>
            <div className="absolute bottom-0 left-0">
              <CollectionCard
                image="/images/shutterstock_-1.png"
                year="2020"
                first
              />
            </div>
            <button className="absolute bottom-0 right-0 py-2 px-3 md:p-3 border-2 border-primary-600 hover:border-primary-500 text-primary-600 hover:text-primary-500 text-xs md:text-lg hover:scale-110 transition-all duration-500 font-medium">
              Browse collection
            </button>
          </div>
        </div>
      </div>

      {/* Blog Article */}
      <div className="w-full px-5 py-10 md:py-20 bg-primary-500 flex flex-col justify-center items-center text-primary-100 text-base md:text-2xl space-y-5">
        <img src="/svgs/badgePrimary.svg" alt="badge" />
        <div className="md:w-1/2 text-center uppercase">
          <p>
            Shapes traded between slouchy and blouson and utterly sleek, with
            one of the collection’s standout garments, pairs of sheer-ish nylon
            cargo pants, finding a middle ground between the two.
          </p>
        </div>
        <Link href="#discover">
          <a className="uppercase underline underline-offset-2 transition-all duration-500 hover:scale-110 hover:text-primary-200">
            Discover
          </a>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
