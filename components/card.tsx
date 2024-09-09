"use client";

import {
  useAnimation,
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface CardProps {
  imgsrc: string;
  title: string;
  description: string;
  backContent: string;
  size?: number;
}

const Card: React.FC<CardProps> = ({
  imgsrc,
  title,
  description,
  backContent,
  size = 42,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isPortrait, setIsPortrait] = useState<boolean>(false);

  const updateOrientation = () => {
    setIsPortrait(window.innerHeight > window.innerWidth);
  };

  useEffect(() => {
    updateOrientation();

    window.addEventListener("resize", updateOrientation);

    return () => {
      window.removeEventListener("resize", updateOrientation);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isPortrait ? ["0.2 0.8", "0.4 1"] : ["0.1 0.9", "0.5 1"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isPortrait) {
      if (latest > 0.2) {
        controls.start("hidden");
      } else {
        controls.start("visible");
      }
    } else {
      if (latest > 0.1) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }
  });

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      className="relative flip-card w-[260px] h-[220px] sm:w-[300px] sm:h-[260px] px-6 sm:px-0 will-change-transform"
    >
      <div className="flip-card-inner w-full h-full">
        <div className="flip-card-front w-full h-full p-6 border-4 border-[#0E6287] text-center rounded-xl shadow-inBox bg-black">
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0">
              <Image
                src={imgsrc}
                alt={title}
                width={size}
                height={size}
                className="mx-auto"
              />
            </div>
            <div className="flex-grow flex flex-col justify-center pt-6">
              <h3 className="text-3xl font-medium font-poppins">{title}</h3>
              <p className="text-gray-400 pt-2">{description}</p>
            </div>
          </div>
        </div>
        <div className="flip-card-back w-full h-full p-6 border-4 border-[#0E6287] text-center rounded-xl bg-[#0E6287] flex items-center justify-center">
          <p className="text-2xl text-zinc-50 font-kanit font-normal">
            {backContent}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
