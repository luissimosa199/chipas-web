import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white">
      <nav className="main-nav">
        <div className="container flex justify-between xl:max-w-6xl mx-auto px-4">
          <div className="mx-w-10 text-4xl font-bold capitalize text-orange-950 flex items-center">
            <Link href="/">La Estación del Chipa</Link>
          </div>
          <Nav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
