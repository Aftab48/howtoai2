"use client";

import React from "react";
import { motion } from "framer-motion";

const Graphs: React.FC = () => {
  return (
    <section className="h-full">
      <div className="text-center grid grid-cols-1 gap-5">
        <h2 className="text-white text-6xl">If we can do it, so you can</h2>
        <p className="text-blue-500">
          Learn how to make your First $10,000 on YouTube
        </p>
      </div>
      <div className="pt-10 flex overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="grid track grid-cols-3 flex-shrink-0"
        >
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
        </motion.div>

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="grid track grid-cols-3 flex-shrink-0"
        >
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 1"
            className="h-[286px] w-[463px]"
          />
        </motion.div>
      </div>

      <div className="flex overflow-x-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="grid track grid-cols-3 flex-shrink-0"
        >
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
        </motion.div>

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="grid track grid-cols-3 flex-shrink-0"
        >
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
          <img
            src="/img/analytics1.png"
            alt="Analytics 2"
            className="h-[286px] w-[463px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Graphs;
