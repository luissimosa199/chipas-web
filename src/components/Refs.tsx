import React from "react";
import PhotoCard from "./PhotoCard";

const refsData = [
  {
    id: "ref-1",
    src: "/assets/ref1.jpeg",
    text: "Riquísimo",
  },
  {
    id: "ref-2",
    src: "/assets/ref2.jpeg",
    text: "Enloquecidos por las chipas",
  },
  {
    id: "ref-3",
    src: "/assets/ref3.jpeg",
    text: "Una locura",
  },
  {
    id: "ref-4",
    src: "/assets/ref4.jpeg",
    text: "Manjar",
  },
  {
    id: "ref-5",
    src: "/assets/ref5.jpeg",
    text: "Los amamos",
  },
  {
    id: "ref-6",
    src: "/assets/ref6.jpeg",
    text: "Super recomendable",
  },
  {
    id: "ref-7",
    src: "/assets/ref7.jpeg",
    text: "Son una bomba",
  },
];

const Refs = () => {
  return (
    <div
      id="refs"
      className="section relative z-0 py-12 md:py-16 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nuestros clientes
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Delciosas chipas, felices todos.
          </p>
        </header>
      </div>

      <div className="flex flex-wrap flex-row justify-center">
        {refsData.map((e) => {
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

export default Refs;
