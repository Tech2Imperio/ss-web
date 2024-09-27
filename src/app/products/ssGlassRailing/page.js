import React from "react";
import Image from "next/image";
import bg from "../../assets/product/glassrailing/bg.png";

export default function page() {
  return (
    <section className=" relative">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[40rem] w-full object-cover"
          src={bg}
          alt="T Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-24 mt-28 md:pt-0 text-[#19355e] text-5xl md:text-[5rem]  poppins-regular">
          Glass Railings
        </h1>
      </div>
      <main className=" overflow-hidden w-full h-full xl:px-[20rem]">f</main>
    </section>
  );
}
