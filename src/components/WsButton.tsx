import Link from "next/link";
import React from "react";
import WsLogo from "./WsLogo";

const WsButton = ({ tlf }: { tlf: string | number }) => {
  return (
    <div className="flex justify-center z-40 drop-shadow-xl rounded-full w-6 h-6 items-center fixed bottom-12 right-8 scale-150 hover:opacity-75 transition-all ">
      <Link
        href={`https://api.whatsapp.com/send?phone=549${tlf}`}
        target="_blank"
      >
        <WsLogo />
      </Link>
    </div>
  );
};

export default WsButton;
