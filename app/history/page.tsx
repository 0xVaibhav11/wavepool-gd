import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { MouseEvent } from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";

export function DataRow() {
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">0xa34bjd4j4ndj4gf6...a3b4</p>
          <p className="">2s ago</p>
        </div>
      </div>
      <div id="userColumn" className=" flex gap-2 items-center">
        <div className=" text-xl text-muted-foreground">
          <FiArrowDown />
        </div>
        <div className="flex flex-col gap-1">
          <Link href={""} passHref>
            <p>0xa34bjd4j4ndj4gf6..a24f</p>
          </Link>
          <Badge className="flex gap-1">
            <RiFileList3Fill />
            name tade name tade
          </Badge>
        </div>
      </div>
      <div id="timeColumn" className="">
        <div className=" flex gap-2">
          <p>Block</p>
          <p className=" text-muted-foreground">22346</p>
        </div>
        <div className=" flex gap-2">
          <p>Fees</p>
          <p className=" text-muted-foreground">99.999ETH</p>
        </div>
      </div>
    </div>
  );
}
