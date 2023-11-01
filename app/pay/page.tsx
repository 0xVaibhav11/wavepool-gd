"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@nextui-org/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { chainid } from "@/constant";
import { ethers } from "ethers";
import { getGraph } from "@/lib/NextId";
import {
  createNewFlow,
  deleteExistingFlow,
  GetFlow,
  UpdateFlow,
} from "@/lib/Superfluid";
import {
  CheckChain,
  changeEthereumChain,
  connectToMetaMask,
} from "@/lib/MetaMask";
import Image from "next/image";

type Account = {
  signer: ethers.providers.JsonRpcSigner;
  providers: ethers.providers.JsonRpcProvider;
  address: string;
};

// Main function
const GooDay = () => {
  //  states of function
  const [Succflag, setSuccflag] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [AccountInfo, setAccountInfo] = useState<Account>();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [PayAdd, setPayAdd] = useState("");
  const [updateFlag, setUpadateFlag] = useState(false);
  const [flowR, setFlowR] = useState("0");

  const [flowRateFlag, setFlowRateFlag] = useState(false);
  // input variables
  const reciverId = useRef("");
  const remark = useRef("");
  const [FlowRate, setFlowRate] = useState("");

  const handleConnect = async () => {
    const network = await CheckChain();

    const user: any = await connectToMetaMask();
    setAccountInfo(user);

    if (network != chainid) {
      await changeEthereumChain();
    }
    setIsConnected(true);
  };

  const hadnleDelete = async () => {
    setSuccflag(true);
    const respons = await deleteExistingFlow(PayAdd, remark.current);
    setSuccflag(false);
  };
  const hadnleUpdate = async () => {
    setSuccflag(true);
    const respons = await UpdateFlow(PayAdd, FlowRate, remark.current);
    setSuccflag(false);
  };
  useEffect(() => {
    handleConnect();
  }, [isConnected]);

  const handleCheck = async () => {
    try {
      if (reciverId.current == "") {
        alert("pelase enter revicer address or id ");
        console.log("RHOW");
        return;
      } else if (selectedOption == "") {
        // console.log(selectedOption);
        console.log("RHOW");
        alert("please enter  plateform id ");
        return;
      } else if (FlowRate == "") {
        alert("please Enter flow Rate");
        console.log("RHOW");
        return;
      } else if (selectedOption == "eao") {
        if (reciverId.current.length != 42) {
          alert("please enter correct address");
          console.log("RHOW");
        } else {
          setPayAdd(reciverId.current);
          const check: any = await GetFlow(reciverId.current);
          console.log(check.flowRate);
          console.log("RHOW");
          setSuccflag(false);
          setFlowRateFlag(true);

          if (check.flowRate === "0") {
            setUpadateFlag(false);
            setFlowRateFlag(true);
            console.log("RHOW");
            return;
          } else {
            setFlowR(check.flowRate);
            setUpadateFlag(true);
            console.log("RHOW");
            setFlowRateFlag(true);
          }
        }
      } else {
        console.log("jsfojo");
        const reciver = await getGraph(selectedOption, reciverId.current);
        setPayAdd(reciver);
        console.log(reciver);
        const check: any = await GetFlow(reciver);
        console.log(reciver);
        console.log(check);
        setSuccflag(false);
        if (check.flowRate === "0") {
          setUpadateFlag(false);
          setFlowRateFlag(true);
          return;
        } else {
          setFlowR(check.flowRate);
          setUpadateFlag(true);
          setFlowRateFlag(true);
        }
      }
    } catch (e) {
      console.log(e);
      alert("please enter Correct platform and id ");
    }
  };

  const handleCreateflow = async () => {
    setSuccflag(true);
    const respons = await createNewFlow(PayAdd, FlowRate, remark.current);
    setSuccflag(false);
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
      <div className="w-full h-[100vh] relative z-10 flex justify-center items-center">
        <Card className="w-[40vw]">
          <CardHeader className="relative">
            <CardTitle>
              <p className=" text-blue-300 text-2xl font-display">
                Good day G$
              </p>
            </CardTitle>
            <CardDescription>
              <p className=" mb-2">STREM G$ TO ANY ONE</p>

              {isConnected && (
                <div>
                  Connected to:{" "}
                  {`${AccountInfo?.address.slice(
                    0,
                    8
                  )}...${AccountInfo?.address.slice(
                    AccountInfo.address.length - 4,
                    AccountInfo.address.length
                  )}`}
                </div>
              )}
            </CardDescription>
            <div className=" absolute top-4 right-4">
              <Button
                size="lg"
                className=" bg-zinc-800 text-blue-300 ginto-md"
                isDisabled={isConnected}
                onClick={() => {
                  handleConnect();
                }}
              >
                {isConnected ? "Connected" : "Connect"}
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Reciver</Label>
                  <Input
                    id="name"
                    placeholder="Example vitalik.lens"
                    onChange={(e) => {
                      reciverId.current = e.target.value;
                      //   console.log(reciverId.current);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Select Platefrom</Label>
                  <Select
                    onValueChange={(e) => {
                      setSelectedOption(e);
                      console.log(e);
                    }}
                  >
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="lens">Lens</SelectItem>
                      <SelectItem value="eao">Address</SelectItem>
                      <SelectItem value="dotbit">DotBit</SelectItem>
                      <SelectItem value="ens">ENS</SelectItem>
                      <SelectItem value="farcaster">Farcaster</SelectItem>
                    </SelectContent>
                  </Select>
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
            <div className="flex flex-col space-y-1.5 mt-10">
              <Label htmlFor="name">Please Enter Reamrk</Label>
              <Input
                id="name"
                placeholder="Ex:- Home rent for Octuber"
                onChange={(e) => {
                  remark.current = e.target.value;
                  //   console.log(reciverId.current);
                }}
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            {!flowRateFlag ? (
              <Button
                variant="bordered"
                isLoading={Succflag}
                onClick={() => {
                  setSuccflag(true);
                  handleCheck();
                }}
              >
                Check Availiblity
              </Button>
            ) : (
              <>
                {!updateFlag ? (
                  <div>
                    <div className=" mb-2">
                      You dont have any running stream please create one
                    </div>
                    <Button
                      className="track"
                      isLoading={Succflag}
                      onClick={() => {
                        handleCreateflow();
                      }}
                      type="button"
                    >
                      Create New Flow
                    </Button>
                  </div>
                ) : (
                  <>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div
                        style={{
                          paddingTop: "5px",
                        }}
                      >
                        You already have a flow of flowRate : {flowR}
                      </div>
                      <Button
                        className="track"
                        isLoading={Succflag}
                        onClick={() => {
                          hadnleDelete();
                        }}
                        type="button"
                      >
                        Delete FLow
                      </Button>
                      <Button
                        className="track"
                        isLoading={Succflag}
                        onClick={() => {
                          hadnleUpdate();
                        }}
                        type="button"
                      >
                        Update Flow
                      </Button>
                    </div>
                  </>
                )}
              </>
            )}
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

///css for this page
export default GooDay;
