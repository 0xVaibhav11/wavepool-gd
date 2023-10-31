import React from "react";
import { SecondSection } from "./SecondSection";
import Image from "next/image";
import { SplineViewer } from "./Treed";

export function Header() {
  return (
    <div className=" w-full min-h-screen">
      <header className=" relative w-full h-[80vh] px-20 pb-8 flex items-center justify-start bg-black">
        <div className=" absolute top-0 right-0 self-end w-full h-full z-0 opacity-80 overflow-hidden">
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
        <div className=" w-[40vw]">
          <h1 className=" relative text-7xl font-display leading-none tracking-tighter z-10 text-blue-200">
            Pay and Intigrate with Good Space
          </h1>
        </div>
      </header>
      <SecondSection />
    </div>
  );
}
