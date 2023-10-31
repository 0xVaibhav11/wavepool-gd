"use client";
import { Button } from "@nextui-org/button";
import { Button as SBtn } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";
import { createRecord, getRecordBySender } from "@/lib/Polybase";

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
  return (
    <main className=" min-h-screen">
      <button onClick={handleonclick}>hllo</button>
      <button onClick={handlelfjowe}>hllfsfsfo</button>
      <Navbar />
      <Header />
    </main>
  );
}
