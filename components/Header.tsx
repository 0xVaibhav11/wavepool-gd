import React from "react";
import { SecondSection } from "./SecondSection";
import Image from "next/image";

export function Header() {
  return (
    <div className=" w-full min-h-screen">
      <header className=" relative w-full h-[65vh] px-20 pb-8 flex items-end justify-center pr-48">
        <div className=" absolute top-0 right-0 w-full h-[68vh] z-0 opacity-80">
          <Image
            src={"/images/sunny.webp"}
            alt="bg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className=" relative text-9xl font-display leading-none tracking-tighter z-10 text-blue-200">
          Build and Intigrate with GoodDay
        </h1>
      </header>
      <SecondSection />
    </div>
  );
}
