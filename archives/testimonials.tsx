import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  text: string;
}

const TestimonialCard = ({ imageSrc, name, text }: TestimonialCardProps) => {
  return (
    <div className="rounded-xl p-4 shadow-test bg-[#222222]">
      <div className="flex items-center mb-4">
        <Image
          src={imageSrc}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
        />
        <h4 className="text-lg text-[#FFFFFF] font-semibold">{name}</h4>
      </div>
      <p className="text-white font-semibold">{text}</p>
    </div>
  );
};

export default TestimonialCard;
