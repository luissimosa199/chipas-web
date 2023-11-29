import { PhotoData, RefData } from "@/types";
import Image from "next/image";
import React from "react";

const PhotoCard = ({ data }: { data: RefData | PhotoData }) => {
  const isRefData = (data: RefData | PhotoData): data is RefData => {
    return (data as RefData).text !== undefined;
  };

  return (
    <figure className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-[450px] group wow fadeInUp">
      <div className="relative overflow-hidden cursor-pointer mb-6">
        <span className="bg-gray-200 w-full h-[350px] block">
          <Image
            width={450}
            height={350}
            className="block w-full h-auto transform duration-500 hover:scale-125"
            src={data.src}
            alt={data.id}
          />
        </span>
        {isRefData(data) && (
          <div className="absolute inset-x-0 bottom-0 h-10 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-orange-900 text-center">
            <h3 className="text-base leading-normal font-semibold text-white">
              &ldquo;{data.text}&rdquo;
            </h3>
          </div>
        )}
      </div>
    </figure>
  );
};

export default PhotoCard;
