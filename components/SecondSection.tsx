import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "./ui/aspect-ratio";
export function SecondSection() {
  return (
    <>
      <div className=" relative z-10 w-full h-[88vh] bg-zinc-950 rounded-t-3xl flex items-center justify-center overflow-hidden">
        <div className=" w-[40%] h-full flex flex-col items-start justify-center px-10">
          <h2 className=" font-display text-[50px] leading-none ginto-md text-blue-200">
            Make your app stream G$ with just 1 lines of code
          </h2>
          <p className=" text-2xl mt-10">
            GoodSpace is a decentralized payment protocol that enables
            developers to build apps that stream G$
          </p>
          <Button
            className=" mt-8 rounded-full bg-white text-black ginto-md"
            size="lg"
            variant="solid"
          >
            GO TO DEVELOPER DOCS
          </Button>
        </div>
        <div className=" relative w-[60%] h-1/2 ">
          <div className=" absolute logo-sec top-20 left-[60%] w-44 h-44 rotate-12">
            <AspectRatio className=" rounded-lg">
              <Image
                src={"/images/logogd.png"}
                alt="ethereum"
                fill
                className=" object-cover object-center rounded-lg select-none pointer-events-none"
                priority
              />
            </AspectRatio>
          </div>
          <div className=" logo absolute left-[20%] w-40 h-40 rotate-[-45deg] bg-white p-4 rounded-lg">
            <AspectRatio className=" rounded-lg ">
              <Image
                src={"/images/superfluid.jpeg"}
                alt="ethereum"
                fill
                className=" object-cover object-center rounded-lg select-none pointer-events-none"
                priority
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </>
  );
}
