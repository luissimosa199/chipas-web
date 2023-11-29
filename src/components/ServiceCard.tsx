import { ServiceData } from "@/types";
import React from "react";

const ServiceCard = ({ serviceData }: { serviceData: ServiceData }) => {
  return (
    <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6">
      <div className="py-8 px-12 mb-12 bg-orange-50 border-b border-orange-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">
          {serviceData.icon}
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {serviceData.title}
        </h3>
        <p className="text-gray-500">{serviceData.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
