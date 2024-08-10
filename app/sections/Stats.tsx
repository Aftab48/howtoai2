import MaxWidthWrapper from "@/components/mww";
import { infoData } from "@/constants";
import React from "react";

const Stats = () => {
  return (
    <section className="relative">
      <MaxWidthWrapper className="relative pb-5 sm:pb-10 pt-2 sm:pt-5 md:pt-10 text-white flex flex-col justify-center z-30">
        <div className="px-16">
          <div className="flex flex-col md:space-x-10 lg:space-x-20 sm:flex-row justify-center items-center text-white py-12">
            {infoData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-center space-x-4 px-4">
                  <p className="text-4xl lg:text-6xl font-bold">
                    {item.value}
                    {index === 1 && (
                      <span className="text-2xl font-light text-muted">
                        hrs
                      </span>
                    )}
                  </p>
                  <p className="mt-2 font-semibold text-xl">{item.label}</p>
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
