import Card from "@/components/card";
import MaxWidthWrapper from "@/components/mww";
import { cards } from "@/constants";
import React from "react";

const Cards = () => {
  return (
    <section className="pb-24">
      <MaxWidthWrapper className="text-white">
        <h2 className="text-center text-5xl font-poppins font-semibold pt-4 md:pt-0 mb-8">
          What the course includes
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 px-6 gap-x-16 sm:gap-x-32 lg:gap-x-16 gap-y-8">
            {cards.map((card, index) => (
              <Card
                key={index}
                imgsrc={card.img}
                title={card.title}
                description={card.description}
                backContent={card.backContent}
                size={index === 5 ? card.size : undefined}
              />
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cards;
