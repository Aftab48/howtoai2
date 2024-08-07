import Card from "@/components/card";
import MaxWidthWrapper from "@/components/mww";
import { Button } from "@/components/ui/button";
import { cards, infoData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="z-[100] sticky backdrop-blur-md h-14 inset-x-0 top-0 w-full transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between">
            {/*left*/}
            <div className="grid grid-cols-3 gap-4">
              <Link href="/">
                <FaYoutube className="text-3xl text-white cursor-pointer" />
              </Link>
              <Link href="/">
                <FaXTwitter className="text-3xl text-white cursor-pointer" />
              </Link>
              <Link href="/">
                <FaInstagram className="text-3xl text-white cursor-pointer" />
              </Link>
            </div>

            {/*right*/}
            <div className="grid grid-cols-2 items-end justify-end gap-4">
              <Link href="/" className="text-md text-white cursor-pointer">
                F&Q
              </Link>
              <Link href="/" className="text-md text-white cursor-pointer">
                Pricing
              </Link>
            </div>
          </div>
          <div className="w-full h-px border-t-2 border-zinc-50" />
        </MaxWidthWrapper>
      </nav>

      {/* Hero */}

      <section className="relative">
        <MaxWidthWrapper className="relative z-30 pb-24 pt-10 text-white flex flex-col justify-center">
          <div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-extrabold">howtoai</h1>
              <p className="mt-4 text-muted text-xl">
                Taking Creators To Their First $10,000 on YouTube
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/img/heroImage.png"
                alt="heroimg"
                width={500}
                height={500}
              />
              <div className="grid grid-cols-2 text-center space-x-10">
                <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
                  Learn more
                </Button>
                <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
                  Join now
                </Button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-6 left-0 z-10 w-full h-full object-cover"
        >
          <source src="/video/home2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Statistics */}

      <section className="relative">
        <MaxWidthWrapper className="relative pb-24 pt-10 text-white flex flex-col justify-center z-30">
          <div className="pl-16 px-16">
            <div className="flex justify-center items-center text-white py-12">
              {infoData.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="text-center space-x-4 px-4">
                    <p className="text-4xl lg:text-6xl font-bold">
                      {item.value}
                      {index === 1 && (
                        <span className="text-2xl font-light text-muted">
                          hrs
                        </span>
                      )}
                    </p>
                    <p className="mt-2 font-semibold text-xl">{item.label}</p>
                  </div>
                  {index < infoData.length - 1 && (
                    <div className="h-40 border-l-2 border-blue-500 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Graph */}
      <section className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/video/graph2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <MaxWidthWrapper className="relative z-10">
          <div className="absolute top-0 left-0 p-10 flex flex-col space-y-6">
            <span className="text-white text-5xl">3 Spots left</span>
            <Button className="text-white w-64 h-14 text-2xl bg-custom-button-1 hover:bg-blue-700 transition delay-150 rounded-xl">
              Join Now
            </Button>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Cards */}
      <section>
        <MaxWidthWrapper className="text-white py-16">
          <h2 className="text-center text-5xl font-semibold mb-8">
            What the course includes
          </h2>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 px-6 gap-20">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  imgsrc={card.img}
                  title={card.title}
                  description={card.description}
                  backContent={card.backContent}
                />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default page;
