import { Button } from "@nextui-org/button";
import React from "react";
import Card from "./card";
export function SecondSection() {
  return (
    <>
      <div className=" relative z-10 w-full lg:h-[88vh]  bg-blue-900 rounded-t-3xl flex overflow-hidden">
        <div className=" w-[40%] h-full flex flex-col items-start justify-center px-10">
          <h2 className=" font-display text-[50px] leading-none ginto-md text-blue-200">
            Make your app stream G$ with just 5 lines of code
          </h2>
          <p className=" text-2xl  font-display mt-10">
            "Good Days" offers a ready-to-use widget and SDK that seamlessly
            integrates with the Superfluid protocol.
          </p>
          <Button
            className=" mt-8 rounded-full bg-white text-black ginto-md"
            size="lg"
            variant="solid"
          >
            GO TO DEVELOPER DOCS
          </Button>
        </div>
        <div className=" w-[60%] h-full flex flex-row mt-[6rem] justify-center items-start  ">
          <Card />
        </div>
      </div>
    </>
  );
}
