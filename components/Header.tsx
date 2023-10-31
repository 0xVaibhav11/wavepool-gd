import React from "react";
import { SecondSection } from "./SecondSection";
import Image from "next/image";
import { SplineViewer } from "./Treed";

export function Header() {
  return (
    <div className=" w-full min-h-screen">
      <header className=" relative w-full h-[80vh] px-20 pb-8 flex items-end justify-center bg-black">
        <div className=" absolute top-0 right-0 self-end w-[85vw] h-full z-0 opacity-80 overflow-hidden">
          {/* <Image
            src={"/images/sunny.webp"}
            alt="bg"
            layout="fill"
            objectFit="cover"
          /> */}
          <SplineViewer
            url="https://prod.spline.design/bmRAIQO71E7fzHFX/scene.splinecode"
            eventsTarget="global"
          />
        </div>
        {/* <h1 className=" relative text-9xl font-display leading-none tracking-tighter z-10 text-blue-200">
          Build and Intigrate with GoodDay
        </h1> */}
      </header>
      <SecondSection />
    </div>
  );
}
