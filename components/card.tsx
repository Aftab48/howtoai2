import Image from "next/image";
import React from "react";

interface CardProps {
  imgsrc: string;
  title: string;
  description: string;
  backContent: string;
}

const Card: React.FC<CardProps> = ({
  imgsrc,
  title,
  description,
  backContent,
}) => {
  return (
    <div className="relative w-full h-full flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front p-10 border-4 border-blue-500 text-center rounded-xl shadow-inBox bg-black">
          <Image
            src={imgsrc}
            alt={title}
            width={75}
            height={75}
            className="mx-auto mb-4"
          />
          {/* <img src={imgsrc} alt={title} className="mx-auto mb-4" /> */}
          <h3 className="text-3xl pt-10">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <div className="flip-card-back p-10 border-4 border-blue-500 text-center rounded-xl shadow-inBox bg-black">
          <h3 className="text-3xl pb-10">{title}</h3>
          <p className="text-gray-400">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
