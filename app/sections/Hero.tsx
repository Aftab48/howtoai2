"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../../components/ui/button";
import MaxWidthWrapper from "../../components/mww";
import { motion } from "framer-motion";
import scrollToSection from "@/components/scroll";
import { TextEffect } from "@/components/ui/TextEffect";

const Hero = () => {
  return (
    <section className="relative">
      <MaxWidthWrapper className="relative pb-2 pt-10 text-white flex flex-col justify-center">
        {/* Header and Title Section */}
        <div className="z-30 flex flex-col items-center">
          <TextEffect
            per="char"
            as="h1"
            preset="slide"
            className="text-6xl font-poppins font-extrabold"
          >
            howtoai
          </TextEffect>
          {/* <h1 className="text-6xl font-extrabold">howtoai</h1> */}
          <p className="font-kanit mt-4 text-semibold text-xl">
            Taking creators to their first <br className="block sm:hidden" />{" "}
            <span className="ml-12 sm:ml-0">$10,000 on YouTube</span>
          </p>
        </div>

        <div className="relative w-full h-[550px] z-10 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{
              opacity: 1,
              boxShadow: "0px 0px 0px rgba(0, 0, 255, 0)",
            }}
            animate={{
              opacity: [1, 0.5, 1],
              boxShadow: [
                "0px 0px 0px rgba(0, 0, 255, 0)",
                "0px 0px 48px rgba(0, 0, 255, 1)",
                "0px 0px 0px rgba(0, 0, 255, 0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/img/bg-test3.png"
              alt="heroimg-bg"
              fill
              className="z-5 w-full h-full object-cover"
              quality={100}
              priority
            />

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
            </div>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none z-20">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-30">
            <Image
              src="/img/heroImage.png"
              alt="heroimg"
              width={500}
              height={500}
              className="z-20"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center z-20 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-20 z-20 mt-4">
            <Button
              variant="ghost"
              className="font-kanit px-7 w-64 h-14 py-2 mx-2 bg-white text-2xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl"
              onClick={() => scrollToSection("STATS")}
            >
              Learn more
            </Button>
            <Button
              variant="ghost"
              className="font-kanit px-7 w-64 h-14 py-2 mx-2 bg-white text-2xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl"
              onClick={() => scrollToSection("PRICING")}
            >
              Join now
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
