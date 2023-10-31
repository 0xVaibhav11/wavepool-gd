"use client";

import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";

export default function Home() {
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
      <Navbar />
      <Header />
    </main>
  );
}
