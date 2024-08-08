"use client";

import React from "react";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./mww";
import Image from "next/image";

const Graphs: React.FC = () => {
  return (
    <section className="h-full relative">
      <MaxWidthWrapper>
        <div className="text-center grid grid-cols-1 gap-5">
          <h2 className="text-white text-6xl">If we can do it, so you can</h2>
          <p className="text-blue-500">
            Learn how to make your First $10,000 on YouTube
          </p>
        </div>
        <div className="pt-10 flex overflow-x-hidden relative">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="grid track grid-cols-3 flex-shrink-0"
          >
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
          </motion.div>

          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="grid track grid-cols-3 flex-shrink-0"
          >
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
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
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="grid track grid-cols-3 flex-shrink-0"
          >
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
          </motion.div>

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="grid track grid-cols-3 flex-shrink-0"
          >
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
            <Image
              src="/img/analytics1.png"
              alt="Analytics 1"
              height={286}
              width={463}
            />
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

export default Graphs;
