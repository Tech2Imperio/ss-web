"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
import messurement from "../../../assets/product/profile/T_profile/TENG.png";
import LivingImg from "../../../assets/product/profile/T_profile/slider/Img1.webp";
import HallImg from "../../../assets/product/profile/T_profile/slider/Img2.webp";
import bedroom from "../../../assets/product/profile/T_profile/slider/Img3.webp";

// Black finishes
import MirrorImg from "../../../assets/product/profile/T_profile/finishes/black/mirrorBlack.png";
import HairlineImg from "../../../assets/product/profile/T_profile/finishes/black/hairlineBlack.png";
import StainImg from "../../../assets/product/profile/T_profile/finishes/black/stainBlack.png";
import StraightlineImg from "../../../assets/product/profile/T_profile/finishes/black/straightlineBlack.png";
import MeshImg from "../../../assets/product/profile/T_profile/finishes/black/meshBlack.png";

//Silver finishes
import MirrorImgS from "../../../assets/product/profile/T_profile/finishes/silver/mirrorSilver.png";
import HairlineImgS from "../../../assets/product/profile/T_profile/finishes/silver/hairlineSilver.png";
import StainImgS from "../../../assets/product/profile/T_profile/finishes/silver/stainSilver.png";
import StraightlineImgS from "../../../assets/product/profile/T_profile/finishes/silver/straightlineSilver.png";
import MeshImgS from "../../../assets/product/profile/T_profile/finishes/silver/meshSilver.png";

//Gold finishes
import MirrorImgG from "../../../assets/product/profile/T_profile/finishes/gold/mirrorGold.png";
import HairlineImgG from "../../../assets/product/profile/T_profile/finishes/gold/hairlineGold.png";
import StainImgG from "../../../assets/product/profile/T_profile/finishes/gold/stainGold.png";
import StraightlineImgG from "../../../assets/product/profile/T_profile/finishes/gold/straightlineGold.png";
import MeshImgG from "../../../assets/product/profile/T_profile/finishes/gold/meshGold.png";

//RoseGold finishes
import MirrorImgR from "../../../assets/product/profile/T_profile/finishes/rosegold/mirrorroseGold.png";
import HairlineImgR from "../../../assets/product/profile/T_profile/finishes/rosegold/hairlineroseGold.png";
import StainImgR from "../../../assets/product/profile/T_profile/finishes/rosegold/stainroseGold.png";
import StraightlineImgR from "../../../assets/product/profile/T_profile/finishes/rosegold/straightlineroseGold.png";
import MeshImgR from "../../../assets/product/profile/T_profile/finishes/rosegold/meshroseGold.png";

//RoseGold finishes
import MirrorImgC from "../../../assets/product/profile/T_profile/finishes/champagne/mirrorChampagne.png";
import HairlineImgC from "../../../assets/product/profile/T_profile/finishes/champagne/hairlineChampagne.png";
import StainImgC from "../../../assets/product/profile/T_profile/finishes/champagne/stainChampagne.png";
import StraightlineImgC from "../../../assets/product/profile/T_profile/finishes/champagne/straightlineChampagne.png";
import MeshImgC from "../../../assets/product/profile/T_profile/finishes/champagne/meshChampagne.png";

import Banner from "../../../components/Banner";
import MainSwiper from "@/app/components/MainSwiper";

const heroSlides = [
  {
    image: LivingImg,
    title: "Stainless Steel T Profiles Elevate Your Home",
    description:
      "Transform your space with sleek stainless steel T profiles. Create stunning accent walls and enhance your home's modern aesthetic.",
  },
  {
    image: HallImg,
    title: "Versatile Wall Designs with T Profiles",
    description:
      "Discover stainless steel T profiles for innovative wall design. Their sleek lines and geometric patterns add a contemporary touch to any interior.",
  },
  {
    image: bedroom,
    title: "T Profiles: The Future of Interior Design",
    description:
      "Stay ahead of the trend with stainless steel T profiles, a cutting-edge solution for modern decor. These durable, stylish profiles add sophistication and elevate your living space.",
  },
];

const SSTprofile = () => {
  const finishes = [
    { name: "Mirror" },
    { name: "Hairline" },
    { name: "Stain" },
    { name: "Straightline" },
    { name: "Mesh" },
  ];

  // Array of colors and hex values
  const colors = [
    { name: "Black", hex: "#000000" },
    { name: "Silver", hex: "#D5D5D7" },
    { name: "Gold", hex: "#E5B80B" },
    { name: "RoseGold", hex: "#DEA193" },
    { name: "Champagne", hex: "#837033" },
    // Add more colors if needed
  ];

  // Default selected color
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Object containing image paths for each color's finishes
  const finishImages = {
    Black: {
      Mirror: MirrorImg,
      Hairline: HairlineImg,
      Stain: StainImg,
      Straightline: StraightlineImg,
      Mesh: MeshImg,
    },
    Silver: {
      Mirror: MirrorImgS,
      Hairline: HairlineImgS,
      Stain: StainImgS,
      Straightline: StraightlineImgS,
      Mesh: MeshImgS,
    },
    Gold: {
      Mirror: MirrorImgG,
      Hairline: HairlineImgG,
      Stain: StainImgG,
      Straightline: StraightlineImgG,
      Mesh: MeshImgG,
    },
    RoseGold: {
      Mirror: MirrorImgR,
      Hairline: HairlineImgR,
      Stain: StainImgR,
      Straightline: StraightlineImgR,
      Mesh: MeshImgR,
    },
    Champagne: {
      Mirror: MirrorImgC,
      Hairline: HairlineImgC,
      Stain: StainImgC,
      Straightline: StraightlineImgC,
      Mesh: MeshImgC,
    },
  };

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <main className=" relative ">
      <Banner slides={heroSlides} />
      <div className=" flex flex-col overflow-hidden mx-auto max-w-[90rem]">
        {/* new model open */}
        <section className=" bg-gray-50 py-10">
          <div className="container mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 xl:px-14">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
                  Available Finishes
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 xl:gap-6 ">
                  {finishes.map((finish) => (
                    <div key={finish.name} className="relative">
                      <Image
                        className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
                        src={finishImages[selectedColor.name][finish.name]} // Dynamic image for each finish based on the selected color
                        alt={`${finish.name} - ${selectedColor.name}`}
                        width={200} // Increased width for better visibility
                        height={200} // Increased height for better visibility
                      />
                      {/* Finish Name below the image */}
                      <div className="text-center mt-2">
                        <h3 className="text-gray-700 font-semibold">
                          {finish.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Preview Section */}
              <div className="flex flex-col items-center lg:items-center lg:mt-52 space-y-14">
                {/* Title with Gradient */}
                <h2 className="text-2xl lg:text-4xl din-semibold text-primary">
                  Select a Color
                </h2>

                {/* Color Selection with Glow Effect */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-3xl">
                  {colors.map((color) => (
                    <div
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`cursor-pointer w-12 h-12 rounded-full border-4 transition-all duration-300 transform ${
                        selectedColor.name === color.name
                          ? "border-[#335c98] scale-125 ring-4 ring-[#8ba4d5] shadow-xl"
                          : "border-gray-300"
                      } hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-[#8ba4d5]`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>

                {/* Color Details with Glassmorphism Effect */}
                <div className="w-full max-w-md rounded-2xl backdrop-blur-lg bg-white/30 p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                  <div className="bg-gradient-to-r from-[#335c98] to-[#4b6fa6] text-white text-center py-4 rounded-t-2xl">
                    <h3 className="text-xl  tracking-wider din-regular">
                      Specifications
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 bg-white/80 rounded-b-2xl shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">
                        Selected Color
                      </span>
                      <span className="text-gray-700 din-regular">
                        {selectedColor.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">
                        Thickness
                      </span>
                      <span className="text-gray-700 din-regular">
                        0.6 ~ 2.0 mm
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] din-regular">Size</span>
                      <span className="text-gray-700 din-regular">
                        T6 to T50 & more
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button with Neomorphism Style */}
                <Link href="/ContactUs">
                  <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                    {/* Colored background */}
                    <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                    {/* Top-left to bottom-right diagonal animation */}
                    <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                      <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                      <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    </span>

                    {/* Button text */}
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                      GET A QUOTE
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            {/* Finishes and Sizes Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:px-14">
              <div className="text-left space-y-6">
                <h3 className="text-xl din-semibold text-[#335c98]">
                  Finishes
                </h3>
                <p className="text-lg text-gray-600 din-regular">
                  Mirror | Hairline | Mesh | Straightline | Stain
                </p>

                <h3 className="text-xl din-semibold text-[#335c98]">
                  Sizes <sub className="text-sm">mm</sub>{" "}
                  <span className="text-base">- W x H</span>
                </h3>
                <p className="text-lg text-gray-600 din-regular">
                  6 x 6 | 8 x 5 | 10 x 5 | 12 x 5 | 15 x 5 | 18 x 5 | 20 x 5 |
                  25 x 5
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg md:ml-40 lg:ml-0 xl:ml-40 bg-gray-700"
                  src={messurement}
                  alt="dimensional chart"
                  width={350}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new model colse */}

        <div className="flex flex-col items-center w-full  bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 din-semibold">
                  What is Stainless Steel T Profile?
                </h2>
                <p className="text-gray-600 text-xs md:text-[1rem] leading-relaxed din-regular">
                  A Stainless Steel T Profile is a metal profile with a
                  distinctive "T"-shaped cross-section, known for its
                  exceptional strength and versatility in construction and
                  architecture. Renowned for their corrosion resistance, these
                  profiles are ideal for both indoor and outdoor applications.
                  Their robust design allows for effective load-bearing
                  capabilities, making them suitable for support beams,
                  frameworks, and decorative elements. With a sleek appearance,
                  stainless steel T profiles enhance modern aesthetics and are
                  popular in commercial wall design and interior architecture.
                  Easy to fabricate and install, they combine functionality with
                  style, making them essential in contemporary building
                  projects.
                </p>
              </div>
              <div className=" w-[21rem] md:w-[38rem] lg:w-[50%] md:pl-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={Tprofile}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 din-semibold">
                Properties of Stainless Steel T Profiles
              </h2>
              <p className="text-gray-600 text-xs  md:text-[1rem] leading-relaxed text-justify px-10 din-regular">
                At Rajguru Steel Industry, we manufacture stainless steel T
                profiles using high-quality austenitic stainless steel, known
                for its exceptional durability and corrosion resistance. These
                profiles contain significant levels of chromium and nickel,
                ensuring protection against rust, while the addition of
                molybdenum enhances resistance to pitting and crevice corrosion
                in harsh, chloride-rich environments. Austenitic stainless steel
                also offers impressive mechanical properties like high tensile
                and yield strength, making it perfect for both industrial and
                architectural uses. Our stainless steel T profiles are available
                in a variety of sizes and thicknesses to accommodate different
                project requirements
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden xl:block  px-14">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] din-semibold">
                    Benefits of Stainless Steel T Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 din-regular">
                    Stainless steel T profiles are highly resistant to rust and
                    corrosion, ideal for environments with exposure to moisture,
                    chemicals, or harsh weather conditions.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 din-regular">
                    Known for their strength and long lifespan, stainless steel
                    T profiles can last over 100 years, making them a
                    maintenance-free solution for various projects.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 din-regular">
                    With their sleek, modern look and minimal upkeep, stainless
                    steel T profiles enhance the aesthetics of commercial and
                    residential structures.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 din-regular">
                    Whether for architectural designs or automotive
                    reinforcement, stainless steel T profiles are easy to
                    fabricate and fit various applications.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* example */}
        {/* example phone */}
        <div className="container mx-auto my-14 xl:hidden ">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl text-[#335c98] din-semibold mb-4">
              Benefits of Stainless Steel T Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-5600 din-regular">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                Stainless steel T profiles are highly resistant to rust and
                corrosion, ideal for environments with exposure to moisture,
                chemicals, or harsh weather conditions.
              </li>
              <li className="text-base text-gray-600 din-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                Known for their strength and long lifespan, stainless steel T
                profiles can last over 100 years, making them a maintenance-free
                solution for various projects.
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                With their sleek, modern look and minimal upkeep, stainless
                steel T profiles enhance the aesthetics of commercial and
                residential structures.
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Whether for architectural designs or automotive reinforcement,
                stainless steel T profiles are easy to fabricate and fit various
                applications.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main className="flex flex-col justify-center text-justify gap-20 px-4  xl:px-14 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl  text-[#335c98] din-semibold mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                T profiles are widely used in building facades, curtain walls,
                glass railings, and structural supports. The combination of
                strength and corrosion resistance ensures durability while
                maintaining an aesthetically pleasing design.
              </p>
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card2InView ? "animate-wave delay-200" : "opacity-0"}`}
            >
              <h2 className="text-xl  text-[#335c98] din-semibold mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                In interior design, T profiles are employed in furniture,
                shelving, and display systems. The robust structure of stainless
                steel ensures the ability to bear heavy loads while providing a
                sleek, polished look to furniture pieces.
              </p>
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card3InView ? "animate-wave delay-300" : "opacity-0"}`}
            >
              <h2 className="text-xl text-center text-[#335c98] din-semibold mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-600 text-xs md:text-base din-regular">
                Stainless steel T profiles are frequently used in car frames,
                providing essential reinforcement while minimizing weight. In
                marine applications, their corrosion resistance makes them ideal
                for use in boat manufacturing, where exposure to saltwater is
                common.
              </p>
            </div>
          </div>
        </main>
        <MainSwiper />
      </div>
    </main>
  );
};

export default SSTprofile;
