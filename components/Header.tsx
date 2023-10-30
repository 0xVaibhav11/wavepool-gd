import React from "react";
import { SecondSection } from "./SecondSection";

export function Header() {
  return (
    <div className=" w-full min-h-screen bg-yellow-300">
      <header className=" w-full h-[65vh] px-20 pb-8 flex items-end justify-center pr-48">
        <h1 className=" text-9xl font-display leading-none tracking-tighter">
          Build and Intigrate with GoodDay
        </h1>
      </header>
      <SecondSection />
    </div>
  );
}
