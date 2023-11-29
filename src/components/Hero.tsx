import React from "react";
import CtaButton from "./CtaButton";
import Video from "./Video";
import { cookies } from "next/headers";

const Hero = () => {
  const useCookie = cookies();
  const cookie = useCookie.get("user_agent_id");
  const userAgentCookie = cookie?.value;

  return (
    <div
      id="hero"
      className="section relative z-0 py-28 md:pt-32 md:pb-20 bg-orange-50"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-col gap-4 -mx-4 justify-center">
          <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
            <div className="bg-gray-200 w-full h-fit mx-autosm:w-[484px] sm:h-[848px]">
              <Video userAgentCookie={userAgentCookie} />
            </div>
          </div>

          <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <div className="mb-12">
                <h1 className="text-4xl text-center leading-normal text-orange-950 font-bold mb-4">
                  Las mejores chipas de Corrientes
                </h1>
                <p className="text-gray-500 text-center leading-relaxed font-light text-xl mx-auto pb-2">
                  Hechas con amor y dedicación para satisfacer a los mejores
                  paladares
                </p>
              </div>
              <div className="flex justify-center">
                <CtaButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
