"use client";

import MaxWidthWrapper from "@/components/mww";
import scrollToSection from "@/components/scroll";
import { Button } from "@/components/ui/button";
import React from "react";

const Graph = () => {
  return (
    <section className="relative w-full h-[66.5vh] md:h-[68.5vh] xl:h-screen">
      <MaxWidthWrapper className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Video Background with Enhanced Blur and Fade */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="relative top-0 left-0 w-full h-full object-contain z-0"
            style={{
              width: "100vw",
              height: "100vh",
              filter: "blur(0px)",
              maskImage:
                "linear-gradient(to bottom, rgba(0, 163, 255, 1) 90%, rgba(0, 163, 255, 0.5) 95%, rgba(0, 163, 255, 0.1) 98%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 163, 255, 1) 90%, rgba(0, 163, 255, 0.5) 95%, rgba(0, 163, 255, 0.1) 98%, transparent 100%)",
            }}
          >
            <source src="/video/graph2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Content Overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-start items-start space-y-6 p-10 z-10 pt-[10vh] md:pt-[26vh]
          xl:pt-[17vh]"
          >
            <span className="text-white text-5xl">3 Spots left</span>
            <Button
              variant="outline"
              onClick={() => scrollToSection("PRICING")}
              className="text-white w-64 h-14 text-2xl bg-custom-button-1 hover:bg-blue-700 transition delay-150 rounded-xl"
            >
              Join Now
            </Button>
          </div>

          {/* Enhanced Side Fades */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
          </div>

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black to-transparent z-10 sm:h-16 md:h-28"></div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Graph;
