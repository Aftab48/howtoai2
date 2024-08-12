import MaxWidthWrapper from "@/components/mww";
import { infoData } from "@/constants";
import React from "react";

const Stats = () => {
  return (
    <section className="relative">
      <MaxWidthWrapper className="relative pb-5 sm:pb-10 pt-2 sm:pt-5 md:pt-10 text-white flex flex-col justify-center z-30">
        <div className="px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between text-white py-12">
            {infoData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex flex-col items-center text-center px-4 ${
                    index === 0 ? "flex-shrink-0" : "flex-grow"
                  }`}
                >
                  <p className="text-4xl font lg:text-8xl font-semibold flex items-center">
                    {item.value}
                    {index === 1 && (
                      <span className="text-xl lg:text-3xl pl-1 font-medium ">
                        hrs
                      </span>
                    )}
                    {index === 2 && (
                      <span className="text-3xl lg:text-6xl pl-1 font-medium ">
                        +
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-2xl">{item.label}</p>
                </div>
                {index < infoData.length - 1 && (
                  <>
                    <div className="h-40 hidden sm:block border-l-2 border-blue-500 mx-4" />
                    <div className="w-40 block sm:hidden border-t-2 border-blue-500 my-4" />
                  </>
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
