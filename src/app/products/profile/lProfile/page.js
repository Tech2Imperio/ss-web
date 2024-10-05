// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import TProfile from "../../../assets/product/profile/T_profile/wall.webp";
import fluted from "../../../assets/RelatedProducts/fluted.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
import bg from "../../../assets/product/profile/T_profile/bg.webp";
import messurement from "../../../assets/product/profile/L_profile/messurement.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Black finishes
import MirrorImg from "../../../assets/product/profile/L_profile/finishes/black/mirrorBlack.png";
import HairlineImg from "../../../assets/product/profile/L_profile/finishes/black/hairlineBlack.png";
import StainImg from "../../../assets/product/profile/L_profile/finishes/black/stainBlack.png";
import StraightlineImg from "../../../assets/product/profile/L_profile/finishes/black/straightlineBlack.png";
import MeshImg from "../../../assets/product/profile/L_profile/finishes/black/meshBlack.png";

//Silver finishes
import MirrorImgS from "../../../assets/product/profile/L_profile/finishes/silver/mirrorSilver.png";
import HairlineImgS from "../../../assets/product/profile/L_profile/finishes/silver/hairlineSilver.png";
import StainImgS from "../../../assets/product/profile/L_profile/finishes/silver/stainSilver.png";
import StraightlineImgS from "../../../assets/product/profile/L_profile/finishes/silver/straightlineSilver.png";
import MeshImgS from "../../../assets/product/profile/L_profile/finishes/silver/meshSilver.png";

//Gold finishes
import MirrorImgG from "../../../assets/product/profile/L_profile/finishes/gold/mirrorGold.png";
import HairlineImgG from "../../../assets/product/profile/L_profile/finishes/gold/hairlineGold.png";
import StainImgG from "../../../assets/product/profile/L_profile/finishes/gold/stainGold.png";
import StraightlineImgG from "../../../assets/product/profile/L_profile/finishes/gold/straightlineGold.png";
import MeshImgG from "../../../assets/product/profile/L_profile/finishes/gold/meshGold.png";

//RoseGold finishes
import MirrorImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/mirrorroseGold.png";
import HairlineImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/hairlineroseGold.png";
import StainImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/stainroseGold.png";
import StraightlineImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/straightlineroseGold.png";
import MeshImgR from "../../../assets/product/profile/L_profile/finishes/rosegold/meshroseGold.png";

//champgane finishes
import MirrorImgC from "../../../assets/product/profile/L_profile/finishes/champagne/mirrorChampagne.png";
import HairlineImgC from "../../../assets/product/profile/L_profile/finishes/champagne/hairlineChampagne.png";
import StainImgC from "../../../assets/product/profile/L_profile/finishes/champagne/stainChampagne.png";
import StraightlineImgC from "../../../assets/product/profile/L_profile/finishes/champagne/straightlineChampagne.png";
import MeshImgC from "../../../assets/product/profile/L_profile/finishes/champagne/meshChampagne.png";

const page = () => {
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
    // Add more colors with their respective finish images
  };

  const relatedProducts = [
    {
      title: "U Profile",
      image: UProfile,
      link: "/products/profile/uProfile",
    },
    {
      title: "T Profile",
      image: TProfile,
      link: "/products/profile/tProfile",
    },
    {
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/ssFlutedPanelProfile",
    },
    {
      title: "C Profile",
      image: CProfile,
      link: "/products/profile/cProfile",
    },
    {
      title: "Custom Profile",
      image: customized,
      link: "/products/profile/customProfile",
    },
  ];

  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // 10% of the card needs to be visible to trigger the animation
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
    <section className=" relative ">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[40rem] w-full object-cover"
          src={bg}
          alt="L Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex flex-col items-start justify-end pl-3 md:justify-center pb-4  md:pt-0 text-[#19355e] text-5xl md:text-[4rem] md:p-4  poppins-bold">
          RAJGURU<br/>
          <p className=" text-xs w-[20.8rem] md:w-[28rem] nunito pt-2 md:pt-4 ">Stainless Steel L Profile offers superior strength and durability, making it ideal for a variety of structural applications.</p>
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden mx-auto container">
        <div className=" flex justify-center ">
          <p className="text-slate-500 text-xs lg:text-sm text-justify w-[80%] p-4">
            Rajgure Steel Industries offers a versatile range of stainless steel
            L profiles that are not only functional but also enhance the
            aesthetic appeal of spaces. Corner Protection Profiles made from
            premium stainless steel which will raise your spaces effortlessly.
            Crafted for durability and style, these profiles and trims provide
            seamless defense against daily wear. Uncover the elegance of our
            L Corner Protection Profiles, where functionality meets
            aesthetics perfectly. Redefine your corners with our premium
            solutions, ensuring long-lasting protection while adding a touch of
            sophistication to your surroundings. Choose quality, choose style –
            opt for your corner protection solutions to transform your space
            effortlessly.
          </p>
        </div>

        {/* new model open */}
        <section className="min-h-screen bg-gray-50 py-10">
          <div className="container mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start">
                <h2 className="text-3xl poppins-regular text-[#335c98] mb-6">
                  Available Finishes
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
                  {finishes.map((finish) => (
                    <div key={finish.name} className="relative">
                      <Image
                        className="rounded-lg shadow-md transition-transform duration-500 ease-in-out transform hover:scale-105"
                        src={finishImages[selectedColor.name][finish.name]} // Dynamic image for each finish based on the selected color
                        alt={`${finish.name} - ${selectedColor.name}`}
                        width={250} // Increased width for better visibility
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
                <h2 className="text-2xl lg:text-4xl poppins-regular text-transparent bg-clip-text bg-gradient-to-r from-[#335c98] to-[#6a8bb1]">
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
                    <h3 className="text-xl  tracking-wider poppins-regular">
                      Specifications
                    </h3>
                  </div>
                  <div className="p-6 space-y-4 bg-white/80 rounded-b-2xl shadow-inner">
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] nunito">
                        Selected Color
                      </span>
                      <span className="text-gray-700 nunito">
                        {selectedColor.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] nunito">Thickness</span>
                      <span className="text-gray-700 nunito">0.6 ~ 2.0 mm</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#335c98] nunito">Size</span>
                      <span className="text-gray-700 nunito">
                        T6 to T50 & more
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button with Neomorphism Style */}
                <button className="mt-8 px-6 py-3 bg-[#335c98] text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
                    GATE A QOUATE
                  </button>
              </div>
            </div>

            {/* Finishes and Sizes Section */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="text-left space-y-6">
                <h3 className="text-xl poppins-regular text-[#335c98]">
                  Finishes
                </h3>
                <p className="text-lg text-gray-500 nunito">
                  Mirror | Hairline | Mesh | Straightline | Stain
                </p>

                <h3 className="text-xl poppins-regular text-[#335c98]">
                  Sizes <sub className="text-sm">mm</sub>{" "}
                  <span className="text-base">- W x H</span>
                </h3>
                <p className="text-lg text-gray-500 nunito">
                  10 x 10 | 12 x 12 | 15 x 15 | 20 x 20 | 25 x 25 | 30 x 30
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg bg-gray-700"
                  src={messurement}
                  alt="dimensional chart"
                  width={450}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new model colse */}

        <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 poppins-regular">
                  What is Stainless Steel T Profile?
                </h2>
                <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
                  A Stainless Steel T Profile is a metal profile characterized
                  by a "T"-shaped cross-section, offering superior strength and
                  versatility in construction and architecture.
                </p>
              </div>
              <div className=" w-[28rem] lg:w-[55%] px-14">
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
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 poppins-regular">
                Properties of Stainless Steel T Profiles
              </h2>
              <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
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
        <div className="container mx-auto my-14 hidden md:block p-4">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] poppins-regular">
                    Benefits of Stainless Steel T Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Stainless steel T profiles are highly resistant to rust and
                    corrosion, ideal for environments with exposure to moisture,
                    chemicals, or harsh weather conditions.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Known for their strength and long lifespan, stainless steel
                    T profiles can last over 100 years, making them a
                    maintenance-free solution for various projects.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    With their sleek, modern look and minimal upkeep, stainless
                    steel T profiles enhance the aesthetics of commercial and
                    residential structures.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
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
        <div className="container mx-auto my-14 md:hidden">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#335c98] poppins-regular mb-4">
              Benefits of Stainless Steel T Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-500 poppins-regular">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                Stainless steel T profiles are highly resistant to rust and
                corrosion, ideal for environments with exposure to moisture,
                chemicals, or harsh weather conditions.
              </li>
              <li className="text-base text-gray-500 poppins-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                Known for their strength and long lifespan, stainless steel T
                profiles can last over 100 years, making them a maintenance-free
                solution for various projects.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                With their sleek, modern look and minimal upkeep, stainless
                steel T profiles enhance the aesthetics of commercial and
                residential structures.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Whether for architectural designs or automotive reinforcement,
                stainless steel T profiles are easy to fabricate and fit various
                applications.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main className="flex flex-col justify-center text-justify gap-20 m-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
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
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
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
              <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
                Stainless steel T profiles are frequently used in car frames,
                providing essential reinforcement while minimizing weight. In
                marine applications, their corrosion resistance makes them ideal
                for use in boat manufacturing, where exposure to saltwater is
                common.
              </p>
            </div>
          </div>
        </main>
        <div className="w-full py-20 fade-in mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[29px] font-bold text-[#335c98] mb-16 poppins-regular">
              Other Products
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
              spaceBetween={15}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: { slidesPerView: -1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {relatedProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center cursor-pointer">
                    <Link href={product.link} passHref>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={220}
                        height={250}
                        className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
                      />
                      <h3 className="mt-4 text-xl font-semibold text-[#335c98] arimo">
                        {product.title}
                      </h3>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
