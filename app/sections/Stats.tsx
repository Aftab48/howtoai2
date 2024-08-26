import MaxWidthWrapper from "@/components/mww";
import { infoData } from "@/constants";
import React from "react";

const Stats = () => {
  return (
    <section className="relative" id="STATS">
      <MaxWidthWrapper className="relative pb-0 sm:pt-5 md:pt-10 text-white flex flex-col justify-center z-30 max-w-screen-xl">
        <div className="px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white py-12 font-poppins">
            {infoData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center px-1 xl:px-4">
                  <p className="text-4xl font lg:text-7xl font-semibold flex items-center">
                    {item.value}
                    {index === 1 && (
                      <span className="text-xl lg:text-3xl pt-[30px] pl-1 font-medium">
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
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Stats;
