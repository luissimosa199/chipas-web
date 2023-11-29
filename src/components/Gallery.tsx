import React from "react";
import PhotoCard from "./PhotoCard";

const photosData = [
  {
    id: "prod-1",
    src: "/assets/prod1.jpeg",
  },
  {
    id: "prod-2",
    src: "/assets/prod2.jpeg",
  },
  {
    id: "prod-3",
    src: "/assets/prod3.jpeg",
  },
];

const Gallery = () => {
  return (
    <div
      id="refs"
      className="section relative z-0 py-12 md:py-16 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Alimento sano entre amigos
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            La mejor compañera del mate.
          </p>
        </header>
      </div>

      <div className="flex flex-wrap flex-row justify-center">
        {photosData.map((e) => {
          return (
            <PhotoCard
              key={e.id}
              data={e}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
