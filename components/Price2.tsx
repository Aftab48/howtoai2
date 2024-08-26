"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "./mww";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";

const Price2 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });

  return (
    <motion.section
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}
      className="h-full py-8 sm:py-16"
    >
      <MaxWidthWrapper className="flex flex-col sm:flex-row items-center justify-center">
        <div className="relative flex items-center justify-between w-full max-w-4xl sm:max-w-6xl p-4 sm:p-10 bg-gradient-to-b rounded-lg sm:rounded-xl shadow-lg">
          <div className="ml-[50px] max-lg:ml-0 mr-auto border border-b rounded-2xl sm:rounded-3xl border-[#000] relative shadow-priceBlack bg-black w-full sm:w-[600px] text-white p-6 sm:p-10">
            <h2 className="font-extrabold text-2xl sm:text-4xl mb-4 sm:mb-6 font-poppins">
              Growth Program
            </h2>
            <p className="text-lg sm:text-xl font-kanit font-normal mb-6 sm:mb-10">
              Our private Discord community that is run by qualified YouTube and
              TikTok mentors that have years of social media experience.
            </p>
            <h3 className="text-xl sm:text-3xl font-kanit font-semibold mb-4 sm:mb-6">
              Inclusions
            </h3>
            <ul className="space-y-2 sm:space-y-4 mt-4 sm:mt-6 text-base sm:text-lg font-normal font-kanit">
              <li>- 5 weekly exclusive events</li>
              <li>- Access to direct communication chat with mentors</li>
              <li>- All howtoai&apos;s digital products & editing packs</li>
              <li>- Pre-made text guides, webinars & walkthroughs</li>
              <li>- Access to private marketplace</li>
              <li>- Access to safe middleman service</li>
            </ul>
            <div className="flex justify-between items-center mt-10">
              <Button
                variant="outline"
                className="bg-gray-300 text-black text-2xl py-8 px-8 rounded-2xl w-3/4 mr-4 font-kanit"
              >
                Join now
              </Button>
              <div className="text-right font-poppins font-medium">
                <h3 className="text-xl sm:text-xl font-bold text-center">
                  $20/week
                </h3>
                <p className="text-md sm:text-md text-center">starting price</p>
              </div>
            </div>
          </div>
          <Image
            src="/img/POSE2.png"
            alt="Mentor"
            width={555}
            height={400}
            className="absolute hidden xl:block lg:right-[5.8rem] bottom-11 object-contain z-10"
          />
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default Price2;
