import React from "react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const CtaButton = () => {
  return (
    <a
      className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-orange-900 border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
      target="_blank"
      href="#"
    >
      <ShoppingCartIcon />
      <span className="ml-2 text-lg">Pedir Ahora</span>
    </a>
  );
};

export default CtaButton;
