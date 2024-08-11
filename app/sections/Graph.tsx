import MaxWidthWrapper from "@/components/mww";
import { Button } from "@/components/ui/button";
import React from "react";

const Graph = () => {
  return (
    <section className="relative w-full h-screen">
      <MaxWidthWrapper className="relative w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          {/* Video Background with Blur at the Bottom */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-contain z-0"
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
          <div className="absolute inset-0 flex flex-col justify-start items-start space-y-6 p-10 z-10 pt-[10vh] md:pt-[17vh]">
            <span className="text-white text-5xl">3 Spots left</span>
            <Button className="text-white w-64 h-14 text-2xl bg-custom-button-1 hover:bg-blue-700 transition delay-150 rounded-xl">
              Join Now
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Graph;
