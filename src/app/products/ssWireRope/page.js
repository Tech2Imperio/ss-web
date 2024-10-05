import React from "react";
import bg from "../../assets/product/sswirerope/bg.webp";
import Image from "next/image";
import outdoorImg from "../../assets/product/sswirerope/product/outdoorrope.webp";

export default function page() {
  return (
    <section className=" relative">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="wire rope Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex flex-col items-start justify-end pl-3 md:justify-center pb-4  md:pt-0 text-[#19355e] text-5xl md:text-[4rem] md:p-4  poppins-bold">
          RAJGURU
          <br />
          <p className=" text-xs w-[20.8rem] md:w-[28rem] nunito pt-2 md:pt-4 ">
            Stainless Steel U Profile offers superior strength and durability,
            making it ideal for a variety of structural applications.
          </p>
        </h1>
      </div>
      <main className="mx-auto container bg-gray-50 shadow-lg">
        <div className=" mx-auto">
          <ul className=" grid grid-cols-2 w-auto justify-center items-center gap-7">
            <li className=" flex justify-center">
              <Image
                className="  rounded-3xl w-[70%] h-[22rem]"
                src={outdoorImg}
                alt="outdoorImg"
              />
            </li>
            <li className=" w-[32rem] flex flex-col gap-4">
              <h2 className=" text-[#335c98] poppins-semibold text-4xl">Stainless Steel Wire Rope for Outdoor Applications</h2>
              <p className=" text-gray-500 nunito text-sm text-justify">
                Experience unparalleled strength and durability with our premium
                stainless steel wire rope, expertly crafted for outdoor use in
                compounds and various rigging applications. Engineered to
                withstand the harshest weather conditions, this
                corrosion-resistant wire rope guarantees long-lasting
                performance and reliability, ensuring your projects remain
                secure and safe. Available in a range of diameters and
                configurations, it is the perfect choice for both professional
                and DIY enthusiasts seeking quality and versatility in their
                outdoor endeavors.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
