"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Price1 = () => {
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
      <div className="flex flex-row items-center justify-center">
        <div className="relative flex items-center justify-between w-full p-4 sm:p-10 bg-gradient-to-b rounded-lg sm:rounded-xl shadow-lg">
          <Image
            src="/img/POSE3.png"
            alt="Mentor"
            width={666}
            height={400}
            className="absolute left-[-85px] hidden xl:block bottom-4 object-contain scale-x-[-1] z-10"
          />

          <div className="ml-auto border border-b rounded-2xl sm:rounded-3xl border-[#38B6FF] relative shadow-price bg-black w-full max-w-[1100px] text-white p-6 sm:p-10">
            <h2 className="font-black font-poppins text-2xl sm:text-4xl mb-4 sm:mb-6">
              Full Mentorship Program
            </h2>
            <p className="text-lg sm:text-xl font-kanit font-normal mb-6 sm:mb-10">
              Join our 1:1 mentorship to transform your YouTube and TikTok.
              Learn from experts and get a content team, winning strategies, and
              ready-to-go channels.
            </p>
            <h3 className="text-xl sm:text-3xl font-kanit font-semibold mb-4 sm:mb-6">
              Inclusions
            </h3>
            <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-10 text-base sm:text-lg font-normal font-kanit">
              <li>– Weekly private call with mentor</li>
              <li>– Fully personalized growth plan</li>
              <li>– Growth Program access & priority services</li>
              <li>
                – Complete channel audit, content breakdown, SEO strategy,
                branding and funneling optimization
              </li>
              <li>– Aged / monetized YouTube or TikTok account and more</li>
            </ul>
            <div className="flex justify-between items-center mt-10">
              <Button
                variant="outline"
                className="bg-gray-300 text-black text-2xl py-8 px-8 rounded-2xl w-3/4 mr-4 font-kanit"
              >
                Coming Soon
              </Button>
              <div className="text-right font-poppins font-medium">
                <h3 className="text-xl sm:text-4xl font-bold text-center">
                  $2999/3
                </h3>
                <p className="text-md sm:text-2xl text-center">month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Price1;
