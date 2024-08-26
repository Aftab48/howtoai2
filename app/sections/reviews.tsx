"use client";

import React, { useRef, useEffect } from "react";
import MaxWidthWrapper from "@/components/mww";
import { motion, useScroll, useAnimation } from "framer-motion";
import Image from "next/image";

const Review = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest > 0.1) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    });
  }, [scrollYProgress, controls]);

  const parentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="h-full mt-16 text-white">
      <MaxWidthWrapper className="text-center">
        <h2 className="text-white text-6xl p-6 font-poppins font-medium">
          See What Others have to say
          <br />
          <span>about our course</span>
        </h2>
        <motion.div
          ref={ref}
          style={{
            opacity: scrollYProgress,
          }}
          variants={parentVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-x-6 p-10"
        >
          <motion.div
            variants={childVariants}
            className="grid-s-f p-4 pb-0 sm:p-0 md:p-4 md:pb-0 lg:p-0 gap-6"
          >
            <div className="rounded-xl p-4 shadow-test bg-[#222222]">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Risky"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Risky
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                I joined the growth program about 1month ago, and already have
                seen crazy results, I'm in the process of expanding on my
                Instagram account, which I never would've even known could have
                made money without @Mason | Chief Mentor 's help. And I'm gonna
                hit 10k in less than 7 days from now due to the kindness &
                helpfulness of our mentors. W program join up right now
              </p>
            </div>
            <div className="rounded-xl mb-0 sm:mb-4 md:mb-0 shadow-test p-4 bg-[#222222]">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Jfobusiness"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Jfobusiness
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                THEY ARE HELPFUL AF BIG AHH VOUCH THEY ANSWER EACH AND EVERY
                SINGLE ONE OF MY QUESTIONS AND THEY NEVER EVER LEAVE ME HANGING
                FOR ANY QUESTIONS
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="grid-f-f p-4 pb-0 sm:p-0 md:p-4 md:pb-0 lg:p-0 gap-6"
          >
            <div className="rounded-xl shadow-test p-4 bg-[#222222]">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Joe"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Joeyshortform
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                This is the best course I've joined and for the value they
                provide in upgrade I have been in for a week and learning daily
                mentors to help you out with any questions you have
              </p>
            </div>
            <div className="rounded-xl mb-0 sm:mb-4 md:mb-0 shadow-test p-4 bg-[#222222]">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Jbuk"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />

                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Jbuk
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                One week ago I was making an absolute 0 with my 40k Instagram
                account until I got into one of the weekly calls in and I showed
                my account to @Leo | howtoai and @Mason | Chief Mentor, they
                both recommended how should I monetize my account, and in 3 DAYS
                I've made almost 400$, with like 5 vids
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={childVariants}
            className="grid-s-f p-4 sm:p-0 md:p-4 md:pb-0 lg:p-0 gap-6"
          >
            <div className="rounded-xl shadow-test bg-[#222222] p-4">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Is069"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />

                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Is069
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                @Leo | howtoai and the mentors guide you step by step how to get
                guaranteed success across social media. The first account I
                started has grown to 19,500 followers with nearly a million
                likes in just under 45 days. Using the skills and guides in the
                discord I’ve now started a new account on Instagram that's grown
                to 2.5k followers in 6 days. The growth program is a game
                changer
              </p>
            </div>
            <div className="rounded-xl shadow-test p-4 bg-[#222222]">
              <div className="flex items-center mb-4">
                <Image
                  src="/img/Ellipse1.png"
                  alt="Malik1960"
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />

                <h4 className="text-lg text-[#FFFFFF] font-kanit font-semibold">
                  Malik1960
                </h4>
              </div>
              <p className="text-white font-kanit font-light">
                Only big W's for mentors and mods in this community. Honestly
                helps a whole lot! They guide you step by step on how to become
                really successful in the program
              </p>
            </div>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Review;
