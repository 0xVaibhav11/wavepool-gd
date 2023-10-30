import { Button } from "@nextui-org/button";
import { Button as SBtn } from "@/components/ui/button";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className=" min-h-screen">
      <Navbar />
      <Header />
    </main>
  );
}
