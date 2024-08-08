import React from "react";
import MaxWidthWrapper from "./mww";
import Image from "next/image";

const PriceChart1 = () => {
  return (
    <section className="h-full py-16 ">
      <MaxWidthWrapper className="flex items-center justify-center">
        <div className="relative flex items-center justify-between w-full max-w-6xl p-10 bg-gradient-to-b rounded-xl shadow-lg">
          <Image
            src="/img/POSE3.png"
            alt="Mentor"
            width={700}
            height={500}
            className="absolute left-0 hidden md:block bottom-4 object-contain scale-x-[-1] z-10"
          />
          <div className=" ml-auto border border-b rounded-3xl border-[#38B6FF] lg:ml-[30rem] relative shadow-price bg-black w-[600px] text-white p-10">
            <h2 className="font-bold text-4xl mb-6">Full Mentorship Program</h2>
            <p className="text-xl mb-10">
              Join our 1:1 mentorship to transform your YouTube and TikTok.
              Learn from experts and get a content team, winning strategies, and
              ready-to-go channels.
            </p>
            <h3 className="text-3xl font-semibold mb-6">Inclusions</h3>
            <ul className="space-y-4 mb-10">
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
              <button className="bg-gray-300 text-black text-xl py-3 px-8 rounded-lg">
                Coming soon
              </button>
              <div className="text-right">
                <h3 className="text-2xl font-bold">$2999/3</h3>
                <p className="text-xl">month</p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default PriceChart1;
