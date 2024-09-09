import MaxWidthWrapper from "@/components/mww";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants";

const FAQ = () => {
  // Split the faqData into two arrays
  const firstHalf = faqData.slice(0, 4);
  const secondHalf = faqData.slice(4, 8);

  return (
    <div id="FAQ">
      <MaxWidthWrapper className="p-10 text-white">
        <h2 className="text-4xl font-medium mb-7 text-center font-poppins">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row">
          <Accordion type="single" collapsible className="md:w-1/2 px-auto">
            {firstHalf.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-x border-y rounded-2xl m-4 px-6"
              >
                <AccordionTrigger className="font-kanit font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="border-t font-kanit font-normal border-zinc-600/50 py-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="single" collapsible className="md:w-1/2 px-auto">
            {secondHalf.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 5}`}
                className="border-x border-y rounded-2xl m-4 px-6"
              >
                <AccordionTrigger className="font-kanit font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="border-t font-kanit font-normal border-zinc-600/50 py-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;
