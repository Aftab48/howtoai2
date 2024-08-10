"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import MaxWidthWrapper from "@/components/mww";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <MaxWidthWrapper className="relative pb-24 pt-10 text-white flex flex-col justify-center">
        {/* Header and Title Section */}
        <div className="z-30 flex flex-col items-center">
          <h1 className="text-6xl font-extrabold">howtoai</h1>
          <p className="mt-4 text-muted text-xl">
            Taking Creators To Their First <br className="block sm:hidden" />{" "}
            <span className="ml-12 sm:ml-0">$10,000 on YouTube</span>
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full h-[500px] mt-10 z-10 overflow-hidden">
          {/* <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 0.01, ease: "linear" }}
          className="absolute inset-0"
        > */}
          <Image
            src="/img/hero-bg.png"
            alt="heroimg"
            fill
            className="z-5 w-full h-full object-cover"
          />
          {/* </motion.div> */}
          {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/home2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

          {/* Centered Image Over Video */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Image
              src="/img/heroImage.png"
              alt="heroimg"
              width={500}
              height={500}
              className="z-20"
            />
          </div>
        </div>

        {/* Buttons and Additional Content Section */}
        <div className="flex flex-col items-center justify-center z-20 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-20 z-20 mt-10">
            <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
              Learn more
            </Button>
            <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
              Join now
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
