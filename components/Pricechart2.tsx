"use client";

import React, { useRef } from "react";
import MaxWidthWrapper from "./mww";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { Button } from "./ui/button";

const PriceChart1 = () => {
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
      className="h-full py-16 "
    >
      <MaxWidthWrapper className="flex items-center justify-center">
        <div className="relative flex items-center justify-between w-full max-w-6xl p-10 bg-gradient-to-b rounded-xl shadow-lg">
          <div className="mr-auto border border-b rounded-3xl border-[#000] relative shadow-priceBlack lg:left-24 bg-black w-[600px] text-white p-10">
            <h2 className="font-bold text-4xl mb-6">Growth Program</h2>
            <p className="text-xl mb-10">
              Our private Discord community that is run by qualified YouTube and
              TikTok mentors that have years of social media experience.
            </p>
            <h3 className="text-3xl font-semibold mb-6">Inclusions</h3>
            <ul className="space-y-4 mt-6">
              <li>- 5 weekly exclusive events</li>
              <li>- Access to direct communication chat with mentors</li>
              <li>- All howtoai&apos;s digital products & editing packs</li>
              <li>- Pre-made text guides, webinars & walkthroughs</li>
              <li>- Access to private marketplace</li>
              <li>- Access to safe middleman service</li>
            </ul>
            <div className="flex justify-between items-center mt-10">
              <Button className="bg-gray-300 text-black text-xl py-8 px-8 rounded-2xl w-full mr-4">
                Join now
              </Button>
              <div className="text-right">
                <h3 className="text-2xl font-bold">$20/week</h3>
                <p className="text-lg">starting price</p>
              </div>
            </div>
          </div>
          <Image
            src="/img/POSE2.png"
            alt="Mentor"
            width={600}
            height={500}
            className="absolute hidden xl:block lg:right-[1.8rem] bottom-4 object-contain z-10"
          />
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default PriceChart1;
