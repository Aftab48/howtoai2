import Card from "@/components/card";
import MaxWidthWrapper from "@/components/mww";
import { Button } from "@/components/ui/button";
import { cards, faqData, infoData, testimonials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Graphs from "@/components/Graphs";
import PriceChart1 from "@/components/PriceChart1";
import Pricechart2 from "@/components/Pricechart2";
import TestimonialCard from "@/components/testimonials";
import { Review } from "@/components/reviews";

const page = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="z-[100] sticky backdrop-blur-md h-14 inset-x-0 top-0 w-full transition-all">
        <MaxWidthWrapper>
          <div className="flex h-14 items-center justify-between">
            {/*left*/}
            <div className="grid grid-cols-3 gap-4">
              <Link href="/">
                <FaYoutube className="text-3xl text-white cursor-pointer" />
              </Link>
              <Link href="/">
                <FaXTwitter className="text-3xl text-white cursor-pointer" />
              </Link>
              <Link href="/">
                <FaInstagram className="text-3xl text-white cursor-pointer" />
              </Link>
            </div>

            {/*right*/}
            <div className="grid grid-cols-2 items-end justify-end gap-4">
              <Link href="#FAQ" className="text-md text-white cursor-pointer">
                F&Q
              </Link>
              <Link
                href="#PRICING"
                className="text-md text-white cursor-pointer"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="w-full h-px border-t-2 border-zinc-50" />
        </MaxWidthWrapper>
      </nav>

      {/* Hero */}

      <section className="relative">
        <MaxWidthWrapper className="relative pb-24 pt-10 text-white flex flex-col justify-center">
          {/* Header and Title Section */}
          <div className="z-30 flex flex-col items-center">
            <h1 className="text-6xl font-extrabold">howtoai</h1>
            <p className="mt-4 text-muted text-xl">
              Taking Creators To Their First <br className="block sm:hidden" />{" "}
              <span className="ml-12 sm:ml-0">$10,000 on YouTube</span>
            </p>
          </div>

          {/* Video Section */}
          <div className="relative w-full h-[500px] mt-10 z-10">
            <Image
              src="/img/hero-bg.png"
              alt="heroimg"
              fill
              className="z-5 w-full h-full object-cover"
            />
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/video/home2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}

            {/* Centered Image Over Video */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Image
                src="/img/heroImage.png"
                alt="heroimg"
                width={500}
                height={500}
                className="z-20"
              />
            </div>
          </div>

          {/* Buttons and Additional Content Section */}
          <div className="flex flex-col items-center justify-center z-20 pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-20 z-20 mt-10">
              <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
                Learn more
              </Button>
              <Button className="px-7 w-64 h-14 py-2 mx-2 bg-white text-xl text-black hover:bg-zinc-400 transition duration-150 rounded-2xl">
                Join now
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Statistics */}

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

      {/* Graph */}
      <section className="relative w-full h-screen">
        <MaxWidthWrapper className="relative w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-contain z-0"
              style={{ width: "100vw", height: "100vh" }}
            >
              <source src="/video/graph2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col justify-start items-start space-y-6 p-10 z-10 pt-[10vh] md:pt-[17vh]">
              <span className="text-white text-5xl">3 Spots left</span>
              <Button className="text-white w-64 h-14 text-2xl bg-custom-button-1 hover:bg-blue-700 transition delay-150 rounded-xl">
                Join Now
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Cards */}
      <section className="pb-16">
        <MaxWidthWrapper className="text-white py-16">
          <h2 className="text-center text-5xl font-semibold mb-8">
            What the course includes
          </h2>
          <div className="container mx-auto ">
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 px-6 gap-x-48 gap-y-8">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  imgsrc={card.img}
                  title={card.title}
                  description={card.description}
                  backContent={card.backContent}
                />
              ))}
                
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Framer-Graphs */}
      <section>
        <Graphs />
      </section>

      {/* Pricing */}
      <section className="h-full" id="PRICING">
        <PriceChart1 />
        <Pricechart2 />
      </section>

      {/* Testimonials */}

      <section className="h-full mt-16 text-white">
        {/* <MaxWidthWrapper className="text-center">
          <h2 className="text-white font-medium text-4xl">
            See what others have to say
            <br />
            about our course
          </h2>
          <div className="p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-y-3 gap-x-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  imageSrc={testimonial.img}
                  name={testimonial.name}
                  text={testimonial.description}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-px border-t-2 border-zinc-50" />
        </MaxWidthWrapper> */}
        <Review />
      </section>

      {/* FAQ */}
      <section id="FAQ">
        <MaxWidthWrapper className="p-10 text-white">
          <h2 className="text-4xl font-medium mb-7 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <React.Fragment key={index}>
                <AccordionItem
                  value={`item-${index + 1}`}
                  className="border-x border-y rounded-2xl m-4 px-6"
                >
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent className="border-t border-zinc-600/50 py-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </React.Fragment>
            ))}
          </Accordion>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default page;
