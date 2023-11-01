"use client";
import React, { useState, useRef, useEffect } from "react";
import { createNewFlow } from "@/lib/Superfluid";
import {
  CheckChain,
  connectToMetaMask,
  changeEthereumChain,
} from "@/lib/MetaMask";
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
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { chainid } from "@/constant";
import { useSearchParams } from "next/navigation";
type Account = {
  signer: ethers.providers.JsonRpcSigner;
  providers: ethers.providers.JsonRpcProvider;
  address: string;
};

export default function GoodSpace() {
  const searchParams = useSearchParams();
  const [flow, setFlow] = useState("");
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  const [isConnected, setIsConnected] = useState(false);
  const amount = searchParams.get("amount");
  const to = searchParams.get("to");
  const [AccountInfo, setAccountInfo] = useState<Account>();
  const [FlowRate, setFlowRate] = useState("0");
  const Address = useRef("");
  const Remark = useRef("");

  const handleCreate = async () => {
    if (to != undefined && title != undefined) {
      const respons = await createNewFlow(to, flow, title);
    }
  };
  const handleConnect = async () => {
    const network = await CheckChain();

    const user: any = await connectToMetaMask();
    setAccountInfo(user);

    if (network != chainid) {
      await changeEthereumChain();
    }
    setIsConnected(true);
    if (amount != undefined) {
      calculateFlowRate(amount);
    }
  };
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

        setFlow(valueis);
      }
    } else {
      setFlowRate("0");
    }
  }

  useEffect(() => {
    if (amount != undefined) {
      console.log("owfeofojwofowejfjwefoji");
      calculateFlowRate(amount);
    }
  }, [amount]);
  return (
    <main className=" w-full h-[100vh] pt-[10vh] flex justify-center items-center bg-black">
      <div className=" absolute top-0 right-0 self-end w-full h-full z-0 opacity-20 overflow-hidden">
        {/* <SplineViewer
          url="https://prod.spline.design/AocGsG55P2er9U4m/scene.splinecode"
          eventsTarget="global"
        /> */}
        <Image src={"/images/stars.jpg"} alt="bg" fill objectFit="cover" />
      </div>
      <div className="w-full h-[100vh] relative z-0 flex pt-11 gap-11 flex-col px-20 items-center">
        <div className=" w-[45vw]  flex flex-col items-start justify-start gap-4">
          <h1 className=" text-blue-300 text-3xl font-display">
            Remark: {title ? title : ""}
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
            <CardDescription>pay with G$ and make socity good</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name"> Remark For this Stream</Label>
                  {title}
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Flow Rate per month {amount} G$</Label>

                  <Label htmlFor="name">
                    Flow Rate per second : {flow} in wei
                  </Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={handleConnect}>
              {!isConnected ? "Connect" : AccountInfo?.address}
            </Button>
            {isConnected && <Button onClick={handleCreate}>Create Flow</Button>}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
