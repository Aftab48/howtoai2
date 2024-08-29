"use client";

import MaxWidthWrapper from "@/components/mww";
import { infoData } from "@/constants";
import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="relative" id="STATS">
      <MaxWidthWrapper className="relative pb-0 sm:pt-5 md:pt-10 text-white flex flex-col justify-center z-30 max-w-screen-xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{ duration: 2 }}
          className="px-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between text-white py-12 font-poppins">
            {infoData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center px-1 xl:px-4">
                  <p className="text-4xl font lg:text-7xl font-semibold flex items-center">
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={3}
                      decimals={0}
                    />
                    {index === 1 && (
                      <span className="text-xl lg:text-3xl pt-[12px] lg:pt-[30px] pl-1 font-medium">
                        hrs
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-2xl">{item.label}</p>
                </div>
                {index < infoData.length - 1 && (
                  <div className="flex justify-center items-center">
                    <div className="h-40 hidden sm:block border-l-2 border-blue-500 mx-4" />
                    <div className="w-40 block sm:hidden border-t-2 border-blue-500 my-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Stats;
