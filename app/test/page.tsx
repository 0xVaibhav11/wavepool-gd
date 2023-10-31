"use client";
import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
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

type Account = {
  signer: ethers.providers.JsonRpcSigner;
  providers: ethers.providers.JsonRpcProvider;
  address: string;
};

// Main function
const GooDay = () => {
  //  states of function

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [AccountInfo, setAccountInfo] = useState<Account>();
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [PayAdd, setPayAdd] = useState("");
  const [updateFlag, setUpadateFlag] = useState(false);
  const [flowR, setFlowR] = useState("");
  const [flowRateFlag, setFlowRateFlag] = useState(false);
  // input variables
  const reciverId = useRef("");
  const FlowRate = useRef("");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleConnect = async () => {
    const network = await CheckChain();

    const user: any = await connectToMetaMask();
    setAccountInfo(user);

    if (network != chainid) {
      await changeEthereumChain();
    }
    setIsConnected(true);
  };

  const handleCheck = async () => {
    try {
      if (reciverId.current == "") {
        alert("pelase enter revicer address or id ");
        return;
      } else if (selectedOption == "") {
        // console.log(selectedOption);
        alert("please enter  plateform id ");
        return;
      } else if (FlowRate.current == "") {
        alert("please Enter flow Rate");
        return;
      } else if (selectedOption == "eao") {
        if (reciverId.current.length != 42) {
          alert("please enter correct address");
        } else {
          setPayAdd(reciverId.current);
          const check: any = await GetFlow(reciverId.current);
          //       console.log(check.flowRate);

          setFlowRateFlag(true);

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
      } else {
        const reciver = await getGraph(selectedOption, reciverId.current);
        setPayAdd(reciver);
        const check: any = await GetFlow(reciver);
        //        console.log(check.flowRate);
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
      //  console.log(e);
      alert("please enter Correct platform and id ");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "50px",
      }}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Good day G$</CardTitle>
          <CardDescription>
            STREM G$ TO ANY ONE{" "}
            {isConnected ? (
              <div>{`${AccountInfo?.address.slice(
                0,
                4
              )}...${AccountInfo?.address.slice(
                AccountInfo.address.length - 4,
                AccountInfo.address.length
              )}`}</div>
            ) : (
              <Button
                onClick={() => {
                  handleConnect();
                }}
              >
                Connect
              </Button>
            )}
          </CardDescription>
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
                    FlowRate.current = e.target.value;
                    //   console.log(reciverId.current);
                  }}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {!flowRateFlag ? (
            <Button
              variant="outline"
              onClick={() => {
                handleCheck();
              }}
            >
              Check Availiblity
            </Button>
          ) : (
            <>
              {!updateFlag ? (
                <>
                  <div>You don't have any running stream please create one</div>
                  <Button
                    className="track"
                    onClick={() => {
                      createNewFlow(PayAdd, FlowRate.current);
                    }}
                    type="button"
                  >
                    Create New Flow
                  </Button>
                </>
              ) : (
                <div style={{ display: "flex" }}>
                  <div>You already have a flow of flowRate : {flowR}</div>
                  <Button
                    className="track"
                    onClick={() => {
                      deleteExistingFlow(PayAdd);
                    }}
                    type="button"
                  >
                    Delete FLow
                  </Button>
                  <Button
                    className="track"
                    onClick={() => {
                      UpdateFlow(PayAdd, FlowRate.current);
                    }}
                    type="button"
                  >
                    Update Flow
                  </Button>
                </div>
              )}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

///css for this page
export default GooDay;
