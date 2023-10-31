"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { MouseEvent } from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getRecord } from "@/lib/Polybase";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function DataRow() {
  const [option, setOption] = useState("");
  const valueid = React.useRef("");
  const [data, setData] = useState([]);

  async function handleSearch() {
    const datai: any = await getRecord(option, valueid.current);
    setData(datai);
    console.log(datai);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px",
          gap: "20px",
        }}
      >
        <div className="flex flex-col space-y-1.5">
          <Input
            id="name"
            placeholder="Example vitalik.lens"
            onChange={(e) => {
              valueid.current = e.target.value;
              //   console.log(reciverId.current);
            }}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Select
            onValueChange={(e) => {
              setOption(e);
              console.log(e);
            }}
          >
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="sender">Sender</SelectItem>
              <SelectItem value="receiver">Reciver</SelectItem>
              <SelectItem value="txhash">TxHash</SelectItem>
              <SelectItem value="remark">Remark</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col space-y-1.5">
          {" "}
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </div>
      <div
        style={{
          maxWidth: "800px",
        }}
      >
        {" "}
        {data &&
          data.map((item: any, index) => {
            return (
              <div
                id="row"
                className=" w-full h-max p-4 flex justify-between items-center"
              >
                <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
                  <div className=" flex gap-2 items-center  text-muted-foreground">
                    <HiOutlineSwitchHorizontal />
                    <p>Sender</p>
                    <p className=" text-foreground-900">{item.data.sender}</p>

                    <p className="">{item.data.time}</p>
                  </div>
                </div>
                <div id="userColumn" className=" flex gap-2 items-center">
                  <div className=" text-xl text-muted-foreground">
                    <FiArrowDown />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link href={""} passHref>
                      <p>Receiver</p>
                      <p>{item.data.receiver}</p>
                    </Link>
                  </div>
                </div>
                <div id="timeColumn" className="">
                  <div className=" flex gap-2">
                    <p>Remark</p>
                    <p className=" text-muted-foreground">{item.data.remark}</p>
                  </div>
                  <div className=" flex gap-2">
                    <p>FlowRate</p>
                    <p className=" text-muted-foreground">
                      {item.data.flowrate}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default DataRow;
