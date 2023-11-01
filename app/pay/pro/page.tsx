"use client";
import React, { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ethers } from "ethers";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function GoodSpace() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const amount = searchParams.get("amount");
  const to = searchParams.get("to");

  const [FlowRate, setFlowRate] = useState("0");
  const Address = useRef("");
  const Remark = useRef("");
  function calculateFlowRate(amountInEther: string) {
    if (amountInEther != "") {
      if (
        typeof Number(amountInEther) !== "number" ||
        isNaN(Number(amountInEther)) === true
      ) {
        console.log(typeof Number(amountInEther));
        alert("You can only calculate a flowRate based on a number");
        return;
      } else if (typeof Number(amountInEther) === "number") {
        const monthlyAmount: any = ethers.utils.parseEther(
          amountInEther.toString()
        );
        const calculatedFlowRate = Math.floor(
          monthlyAmount / 3600 / 24 / (365 / 12)
        );
        console.log(calculatedFlowRate);
        const valueis: string = String(calculatedFlowRate);

        setFlowRate(valueis);
      }
    } else {
      setFlowRate("0");
    }
  }
  return (
    <main className=" w-full h-[100vh] flex justify-center items-center bg-black">
      <div className=" absolute top-0 right-0 self-end w-full h-full z-0 opacity-20 overflow-hidden">
        {/* <SplineViewer
          url="https://prod.spline.design/AocGsG55P2er9U4m/scene.splinecode"
          eventsTarget="global"
        /> */}
        <Image src={"/images/stars.jpg"} alt="bg" fill objectFit="cover" />
      </div>
      <div className="w-full h-[100vh] relative z-0 flex justify-between px-20 items-center">
        <div className=" w-[45vw] min-h-[60vh] flex flex-col items-start justify-start gap-4">
          <h1 className=" text-blue-300 text-3xl font-display">
            {title ? title : ""}
          </h1>

          <p>{desc ? desc : " "}</p>
        </div>
        <Card className="w-[40vw] ">
          <CardHeader>
            <CardTitle>
              <p className=" text-blue-300 text-2xl font-display">
                Create G$ Stream Link
              </p>
            </CardTitle>
            <CardDescription>
              Make your payment page with one click
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">your address</Label>
                  <Input
                    id="name"
                    placeholder="Ex - 0x...."
                    onChange={(e) => {
                      Address.current = e.target.value;
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Enter Remark</Label>
                  <Input
                    id="name"
                    placeholder="ex This month Payment"
                    onChange={(e) => {
                      Remark.current = e.target.value;
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Flow Rate per month</Label>
                  <Input
                    id="name"
                    placeholder="Example 100 G$"
                    onChange={(e) => {
                      calculateFlowRate(e.target.value);
                      //   console.log(reciverId.current);
                    }}
                  />
                  <Label htmlFor="name">
                    Flow Rate per second : {FlowRate} in wei
                  </Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Copy link</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
