"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MaxWidthWrapper from "@/components/mww";

const FramerGraphs: React.FC = () => {
  return (
    <section className="h-full relative">
      <MaxWidthWrapper>
        <div className="text-center grid grid-cols-1 gap-5">
          <h2 className="text-white text-6xl font-poppins font-semibold">
            If we can do it, so can you
          </h2>
          <p className="text-white text-xl font-kanit font-medium">
            Learn how to make your first $10,000 on YouTube
          </p>
        </div>
        <div className="pt-10 flex overflow-x-hidden relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap"
          >
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/analytics1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g2.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap"
          >
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g5.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/analytics1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>

        <div className="flex overflow-x-hidden relative">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap"
          >
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g2.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g5.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap"
          >
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/analytics1.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g2.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
            <div className="w-[463px] h-[286px] flex items-center justify-center overflow-hidden">
              <Image
                src="/graph2/g5.png"
                alt="Analytics 1"
                width={463}
                height={286}
                className="image-contain"
              />
            </div>
          </motion.div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default FramerGraphs;
