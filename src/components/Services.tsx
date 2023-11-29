import React from "react";
import ServiceCard from "./ServiceCard";
import MotoIcon from "./MotoIcon";
import BoxIcon from "./BoxIcon";
import ClockIcon from "./ClockIcon";

const servicesData = [
  {
    id: "service-1",
    icon: <MotoIcon />,
    title: "Envío a domicilio",
    text: "Te las enviamos a casa en un conveniente empaque para que lleguen seguras",
  },
  {
    id: "service-2",
    icon: <BoxIcon />,
    title: "Grandes y pequeñas cantidades",
    text: "Nos adaptamos a tus necesidades",
  },
  {
    id: "service-3",
    icon: <ClockIcon />,
    title: "Disponibles 24/7",
    text: "Puedes hacer tu pedido con nuestro asistente en cualquier momento",
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nuestras Chipas
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Siempre frescas y listas para enviar
          </p>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {servicesData.map((e) => {
            return (
              <ServiceCard
                key={e.id}
                serviceData={e}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
