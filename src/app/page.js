"use client";
import Image from "next/image";
import main from "./assets/images.jpeg";

export default function Home() {
  return (
    <div className=" flex flex-col">
      <Image
        src={main}
        alt="main"
        className=" absolute h-full w-full top-0 left-0"
      />
      <Image src={main} alt="main" className="  h-full w-full" />
    </div>
  );
  return <></>;
}
