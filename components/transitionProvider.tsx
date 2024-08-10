"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TransitionProviderProps {
  children: ReactNode;
}

const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const text = "Welcome to howtoai";

  return (
    <AnimatePresence mode="wait">
      <div key={text} className="bg-gradient-to-b w-full h-full">
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-4xl md:text-6xl lg:text-8xl cursor-default z-50 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {text}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
