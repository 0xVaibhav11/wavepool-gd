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

function Yourpage() {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <Card className="w-[350px] ">
        <CardHeader>
          <CardTitle>Create G$ Stream Link</CardTitle>
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
  );
}

export default Yourpage;
