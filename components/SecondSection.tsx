import { Button } from "@nextui-org/button";
import React from "react";
export function SecondSection() {
  return (
    <>
      <div className=" w-full h-[88vh] bg-blue-400 rounded-t-3xl flex overflow-hidden">
        <div className=" w-[40%] h-full flex flex-col items-start justify-center px-10">
          {/* <h1>Make your app social with 5 lines of code</h1> */}
          <h2 className=" font-display text-[50px] leading-none ginto-md">
            Make your app stream G$ with just 5 lines of code
          </h2>
          <p className=" text-2xl mt-10">
            Lens Protocol simplifies building social applications by providing
            an easy-to-use social layer for web3 with just 5 lines of code. The
            Lens SDK provides everything necessary to get started.
          </p>
          <Button
            className=" mt-8 rounded-full bg-white text-black ginto-md"
            size="lg"
            variant="solid"
          >
            GO TO DEVELOPER DOCS
          </Button>
        </div>
        <div className=" w-[60%] h-full"></div>
      </div>
    </>
  );
}
