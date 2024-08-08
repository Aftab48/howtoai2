import React from "react";
import MaxWidthWrapper from "./mww";
import Image from "next/image";

const PriceChart1 = () => {
  return (
    <section className="h-full py-16">
      <MaxWidthWrapper className="relative flex items-center justify-center">
        <div className="relative flex items-center justify-between w-full max-w-6xl bg-gradient-to-b rounded-xl shadow-lg">
          <div className="mr-auto border border-b rounded-3xl border-[#38B6FF] relative shadow-priceBlack lg:left-24 bg-black w-[600px] text-white p-10">
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
              <button className="bg-gray-300 text-black text-xl py-3 px-8 rounded-lg">
                Join now
              </button>
              <div className="text-right">
                <h3 className="text-2xl font-bold">$20/week</h3>
                <p className="text-xl">starting price</p>
              </div>
            </div>
          </div>
          <Image
            src="/img/POSE2.png"
            alt="Mentor"
            width={600}
            height={500}
            className="absolute hidden md:block lg:right-[4.3rem] bottom-4 object-contain z-10"
          />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PriceChart1;
