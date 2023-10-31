"use client";
import { Button } from "@nextui-org/button";
import { Button as SBtn } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";
import { createRecord, getRecordBySender } from "@/lib/Polybase";
import { SplineViewer } from "@/components/Treed";

export default function Home() {
  function handleonclick() {
    createRecord(
      "fwoefwhe",
      "foweofwej",
      "fwohewfe",
      "fwjwefof",
      "fowfewej",
      "woejfowjf"
    );
  }
  function handlelfjowe() {
    getRecordBySender("foweoj");
  }

  // return (
  //   <main className=" w-full min-h-screen bg-black">
  //     <Navbar />
  //     <div className=" w-full h-screen overflow-hidden">
  //       <SplineViewer
  //         url="https://prod.spline.design/bmRAIQO71E7fzHFX/scene.splinecode"
  //         eventsTarget="global"
  //       />
  //     </div>
  //   </main>
  // );

  return (
    <main className=" min-h-screen bg-black">
      <button onClick={handleonclick}>hllo</button>
      <button onClick={handlelfjowe}>hllfsfsfo</button>
      <Navbar />
      <Header />
    </main>
  );
}
