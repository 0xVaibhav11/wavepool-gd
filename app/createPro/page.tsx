"use client";
import React, { useState, useRef, use, useEffect } from "react";

import { Button } from "@nextui-org/button";
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
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

function Yourpage() {
  const [isComplete, setIsComplete] = useState(false);
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    if (amount !== "" && title !== "" && desc !== "" && to !== "") {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [to, amount, title, desc]);

  return (
    <main className=" w-full h-[100vh] mt-[10vh] flex justify-center items-center bg-black">
      <div className=" absolute top-0 right-0 self-end w-full h-full z-0 opacity-20 overflow-hidden">
        {/* <SplineViewer
          url="https://prod.spline.design/AocGsG55P2er9U4m/scene.splinecode"
          eventsTarget="global"
        /> */}
        <Image src={"/images/stars.jpg"} alt="bg" fill objectFit="cover" />
      </div>
      <div className="w-full h-[100vh] relative z-10 flex justify-center items-center">
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
                  <Label htmlFor="to">your address</Label>
                  <Input
                    id="to"
                    placeholder="eg: 0x000000...0000"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Enter Title</Label>
                  <Input
                    id="title"
                    placeholder="eg: This month Payment"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="desc">Enter description</Label>
                  <Textarea
                    id="desc"
                    placeholder="Type your message here."
                    onChange={(e) => {
                      setDesc(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Enter amount in G$</Label>
                  <Input
                    id="name"
                    placeholder="eg: 100"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <Link
            href={
              isComplete
                ? `/pay/pro?to=${to}&amount=${amount}&title=${title}&desc=${desc}`
                : ""
            }
          >
            <Button
              isDisabled={!isComplete}
              size="lg"
              className=" m-5"
              variant="solid"
            >
              Preview
            </Button>
          </Link>
        </Card>
      </div>
    </main>
  );
}

export default Yourpage;
