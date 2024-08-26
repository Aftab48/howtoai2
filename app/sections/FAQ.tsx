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
  return (
    <div id="FAQ">
      <MaxWidthWrapper className="p-10 text-white">
        <h2 className="text-4xl font-medium mb-7 text-center font-poppins">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="px-auto w-full">
          {faqData.map((item, index) => (
            <React.Fragment key={index}>
              <AccordionItem
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
            </React.Fragment>
          ))}
        </Accordion>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQ;
