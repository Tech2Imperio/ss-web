// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import wallImg from "../../assets/product/profile/T_profile/wall.webp";
import allFinishes from "../../assets/product/ssdecorativesheet/middle.webp";
// import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
// import invisibleGrill from "../../assets/product/invisiblegrill/square.webp";
import CProfile from "../../assets/RelatedProducts/CProfile.webp";
import bg from "../../assets/product/ssdecorativesheet/bg.webp";
import Umessurement from "../../assets/product/ssdecorativesheet/decorativeSheets.webp";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

// Black finishes
import MirrorImg from "../../assets/product/ssdecorativesheet/finishes/black/mirrorBlack.png";
import HairlineImg from "../../assets/product/ssdecorativesheet/finishes/black/hairlineBlack.png";
import StainImg from "../../assets/product/ssdecorativesheet/finishes/black/stainBlack.png";
import StraightlineImg from "../../assets/product/ssdecorativesheet/finishes/black/straightlineBlack.png";
import MeshImg from "../../assets/product/ssdecorativesheet/finishes/black/meshBlack.png";

//Silver finishes
import MirrorImgS from "../../assets/product/ssdecorativesheet/finishes/silver/mirrorSilver.png";
import HairlineImgS from "../../assets/product/ssdecorativesheet/finishes/silver/hairlineSilver.png";
import StainImgS from "../../assets/product/ssdecorativesheet/finishes/silver/stainSilver.png";
import StraightlineImgS from "../../assets/product/ssdecorativesheet/finishes/silver/straightlineSilver.png";
import MeshImgS from "../../assets/product/ssdecorativesheet/finishes/silver/meshSilver.png";

//Gold finishes
import MirrorImgG from "../../assets/product/ssdecorativesheet/finishes/gold/mirrorGold.png";
import HairlineImgG from "../../assets/product/ssdecorativesheet/finishes/gold/hairlineGold.png";
import StainImgG from "../../assets/product/ssdecorativesheet/finishes/gold/stainGold.png";
import StraightlineImgG from "../../assets/product/ssdecorativesheet/finishes/gold/straightlineGold.png";
import MeshImgG from "../../assets/product/ssdecorativesheet/finishes/gold/meshGold.png";

//RoseGold finishes
import MirrorImgR from "../../assets/product/ssdecorativesheet/finishes/rosegold/mirrorroseGold.png";
import HairlineImgR from "../../assets/product/ssdecorativesheet/finishes/rosegold/hairlineroseGold.png";
import StainImgR from "../../assets/product/ssdecorativesheet/finishes/rosegold/stainroseGold.png";
import StraightlineImgR from "../../assets/product/ssdecorativesheet/finishes/rosegold/straightlineroseGold.png";
import MeshImgR from "../../assets/product/ssdecorativesheet/finishes/rosegold/meshroseGold.png";

//ChampagnU finishes
import MirrorImgC from "../../assets/product/ssdecorativesheet/finishes/champagne/mirrorChampagne.png";
import HairlineImgC from "../../assets/product/ssdecorativesheet/finishes/champagne/hairlineChampagne.png";
import StainImgC from "../../assets/product/ssdecorativesheet/finishes/champagne/stainChampagne.png";
import StraightlineImgC from "../../assets/product/ssdecorativesheet/finishes/champagne/straightlineChampagne.png";
import MeshImgC from "../../assets/product/ssdecorativesheet/finishes/champagne/meshChampagne.png";

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
    { name: "Champagne", hex: "#D4AF37" },
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
      title: "T Profile",
      image: wallImg,
      link: "/products/profile/tProfile",
    },
    {
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
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
    // {
    //   title: "Invisible Grill",
    //   image: invisibleGrill,
    //   link: "/products/ssInvisibleGrill",
    // },
  ];
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // 10% of the card needs to be visible to trigger the animation
  });

  // const { ref: card2Ref, inView: card2InView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // const { ref: card3Ref, inView: card3InView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  return (
    <section className="relative">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="decorative sheet"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center mx-32 pt-14 md:mx-0 md:pt-0 text-[#19355e] text-5xl md:text-[5rem]  poppins-regular">
          Decorative Sheets
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <div className=" flex flex-col justify-center text-justify text-xs md:text-sm text-slate-500 gap-4 nunito p-8">
          <p>
            Discover our exquisite range of high-quality stainless steel
            decorative sheets, designed to bring elegance and durability to your
            interiors. Our corrosion-resistant steel panels are perfect for
            various applications, including: Wall Applications: Transform your
            walls with a sleek, modern look. Backsplashes: Add a stylish and
            easy-to-clean surface in kitchens and bathrooms. Custom Furniture
            Designs: Create unique pieces that stand out. Available in a variety
            of finishes, including brushed and mirrored, our stainless steel
            sheets combine style with functionality. Whether you're looking to
            enhance a residential or commercial space, our decorative steel
            solutions are the perfect choice. Transform your space today with
            our premium stainless steel decorative sheets!
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
                        width={500} // Increased width for better visibility
                        height={400} // Increased height for better visibility
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
                <Link href="/ContactUs">
                  <button className="mt-8 px-6 py-3 bg-[#335c98] nunito text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
                    GET A QUOTE
                  </button>
                </Link>
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
                  10 x 3 x 10 | 10 x 5 x 10 | 10 x 8 x 10
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg bg-gray-700"
                  src={Umessurement}
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
                  What is Stainless Steel Decorative Sheets?
                </h2>
                <p className="text-gray-500 text-xs md:text-[1rem] leading-relaxed nunito">
                  Stainless steel decorative sheets are perfect for both
                  residential and commercial applications. They offer a modern
                  and sophisticated look that can elevate any interior design.
                  Stainless steel decorative sheets are an excellent choice for
                  anyone looking to enhance their space with a combination of
                  style, durability, and ease of maintenance. Whether for a
                  modern kitchen, a stylish office, or custom furniture, these
                  sheets provide a sleek and contemporary solution that meets
                  both aesthetic and practical needs.
                </p>
              </div>
              <div className=" w-[28rem] lg:w-[55%] px-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={allFinishes}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 poppins-regular">
                Properties of Stainless Steel Decorative Sheets
              </h2>
              <p className="text-gray-500 text-xs  md:text-[1rem] leading-relaxed text-justify px-10 nunito">
                Stainless steel decorative sheets are premium panels that serve
                both aesthetic and functional purposes in home and commercial
                environments. Stainless steel decorative sheets are an excellent
                choice for enhancing interiors with a combination of elegance
                and functionality. Their durability, variety of finishes, and
                ease of maintenance make them ideal for both residential and
                commercial applications. Whether you're looking to create a
                stunning accent wall, a stylish kitchen backsplash, or custom
                furniture, these decorative panels offer endless design
                possibilities.
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden md:block">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] poppins-regular">
                    Benefits of Stainless Steel Decorative Sheets
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Stainless steel decorative sheets are highly resistant to
                    corrosion, ensuring long-lasting beauty in kitchens,
                    bathrooms, and other moisture-prone areas.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Designed to withstand wear and tear, these decorative panels
                    are perfect for both residential and commercial spaces,
                    providing a robust solution for high-traffic environments..
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Available in stunning finishes like brushed and mirrored,
                    stainless steel sheets enhance the visual impact of any
                    wall, making them a chic choice for modern interiors..
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Ideal for a range of applications, from accent walls to
                    kitchen backsplashes, stainless steel decorative sheets
                    offer endless design possibilities for any home or business.
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
                Stainless steel is highly resistant to rust and corrosion,
                making these sheets ideal for environments exposed to moisture,
                such as kitchens and bathrooms.
              </li>
              <li className="text-base text-gray-500 poppins-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong> They
                can withstand wear and tear, making them suitable for
                high-traffic areas without showing signs of damage.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                Available in brushed, mirrored, and patterned finishes, these
                sheets can complement various design styles, from modern to
                industrial. They can be cut and shaped to fit specific design
                needs, allowing for unique applications in any space.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">4. Enhanced Safety:</strong>{" "}
                Stainless steel is non-combustible, providing an added layer of
                safety in case of fire. Unlike some other materials, stainless
                steel does not release harmful chemicals, making it a safe
                choice for indoor environments.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main
          ref={card1Ref}
          className={`flex flex-col justify-center text-justify gap-20 translate-y-14 `}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              // ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-100" : "opacity-0"} `}
            >
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
                Stainless steel decorative sheets are widely used in
                architectural and construction projects due to their unique
                combination of aesthetic appeal, durability, and versatility.
                Stainless steel decorative sheets play a vital role in various
                architectural and construction applications, offering a blend of
                beauty, functionality, and sustainability. Their versatility
                allows for creative design solutions in both interior and
                exterior settings, making them a preferred choice for modern
                architecture.
              </p>
            </div>

            {/* Card 2 */}
            <div
              // ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-500" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
                Stainless steel decorative sheets are increasingly popular in
                furniture and shelving design due to their unique properties and
                aesthetic appeal. Stainless steel decorative sheets are an
                excellent choice for furniture and shelving design, offering a
                blend of modern aesthetics, durability, and low maintenance.
                Their versatility allows for a wide range of applications,
                making them suitable for both residential and commercial
                environments. By incorporating stainless steel into furniture
                designs, you can achieve a stylish and functional look that
                stands the test of time.
              </p>
            </div>

            {/* Card 3 */}
            <div
              // ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
               ${card1InView ? "animate-wave delay-700" : "opacity-0"} `}
            >
              <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-500 text-xs md:text-base nunito">
                Stainless steel decorative sheets are widely utilized in the
                automotive and marine industries due to their unique properties
                and advantages. Stainless steel decorative sheets offer numerous
                benefits in the automotive and marine industries, including
                corrosion resistance, durability, and aesthetic appeal. Proper
                maintenance is essential to ensure longevity, and adherence to
                regulations is crucial for safety and environmental compliance.
                By leveraging the advantages of stainless steel, manufacturers
                can create high-quality, attractive products that meet the
                demands of these challenging environments.
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
