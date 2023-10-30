import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" absolute top-4 w-full h-[8vh] flex items-center justify-center z-50">
      <div className=" w-[60%] h-full bg-blue-900 rounded-full flex items-center justify-between px-2">
        {/* logo------ */}
        <div className=" w-fit flex items-center gap-1">
          <div className=" relative w-12 h-12">
            <Image
              src={"/images/sun.png"}
              alt="logo"
              width={48}
              height={48}
              objectFit="contain"
            />
          </div>
          <div className=" font-display text-blue-200 leading-none text-xl flex flex-col items-start justify-center">
            <p>GoodDay</p>
            <p>Stream</p>
          </div>
        </div>
        {/* logo--------- */}
        {/* navlinks------ */}
        <div className=" flex items-center justify-center gap-6 text-base ginto-md text-blue-200 leading-none">
          <p>Home</p>
          <Link href={"/test"}>Test</Link>
        </div>
        {/* navlinks--------- */}
        {/* CTA------ */}
        <Button
          className=" text-sm rounded-full bg-white text-blue-950 ginto-md"
          size="lg"
          variant="solid"
        >
          DEVELOPER DOCS
        </Button>
        {/* CTA--------- */}
      </div>
    </div>
  );
}
