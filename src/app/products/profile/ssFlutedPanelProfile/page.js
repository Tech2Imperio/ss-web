// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import flutedImg from "../../../assets/product/profile/flutedPanel/flutedImg.webp";
import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import TProfile from "../../../assets/product/profile/T_profile/wall.webp";
import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
import bg from "../../../assets/product/profile/flutedPanel/bg.webp";
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
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
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

//   const { ref: card2Ref, inView: card2InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const { ref: card3Ref, inView: card3InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

  return (
    <section className=" relative ">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[40rem] w-full object-cover"
          src={bg}
          alt="T Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-14  md:pt-0 text-[#335c98] text-5xl md:text-[5rem]  poppins-regular">
          SS Fluted Panel
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
          <p>
            Let Rajguru Steel Industry provide you with elegant decor of fluted
            stainless steel panels for your home. This can enhance your decor
            ideas for the wall in a modern way by the mix of strength and
            elegance. With assorted finishes and colors to choose from, easily
            create stunning interiors with great options for any space.
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
                {/* <button className="mt-8 px-6 py-3 bg-[#335c98] text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
    Order now!
  </button> */}
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
                  What is Stainless Steel Fluted Panel Profile?
                </h2>
                <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
                  It is a modern feature wall panels function to enhance walls
                  in both residential and commercial spaces. With their vertical
                  grooves adding texture and depth to the look, these panels
                  stand self-characterized with prowess in contemporary touches.
                  Discover our range of styles for elevating interiors,
                  possessing both hardiness and elegance.
                </p>
              </div>
              <div className=" w-[28rem] lg:w-[55%] px-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={flutedImg}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:whitespace-normal md:text-[27px]  text-[#335c98] mb-6 poppins-regular">
                Properties of Stainless Steel Fluted Panel Profiles
              </h2>
              <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
                A stainless steel fluted panel is extremely strong and resistant
                to corrosion while requiring little maintenance; thus, it is the
                ideal material for residential or commercial use. Its unique
                shape offers texture and visual interest to any decor wall, and
                acts like a beautiful focal point to showcase modern interior
                designs. Available in a wide variety of finishes and colors,
                these chic panels would provide an astonishing look that
                elevates your space while providing beauty for a long time.
                Consider stainless steel fluted panels for a touch of timeless
                elegance in a contemporary way! Give your interiors a stylish
                makeover effortlessly with this décor solution!
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
                    Benefits of Stainless Steel Fluted Panel Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Stainless steel fluted panel profiles offer great
                    versatility with maximum corrosion resistance ensuring their
                    usage for many years in a wide variety of environments, from
                    kitchens to outdoors. Their strong build gives them
                    durability and a modern look, which make them ideal for
                    functional and aesthetic purposes alike.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    These panels are designed to stand up to heavy wear, making
                    for a robust and reliable solution for both residential and
                    commercial applications. Their strength allows them to look
                    good and remain structurally intact, making them
                    particularly effective in high-traffic areas or more rugged
                    applications.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    heir unique fluted shape helps create a stunning feature on
                    any interior or exterior wall, bringing a contemporary look
                    and feel to any project. The way these panels catch and
                    reflect light has a truly impressive impact, making the
                    patterns and colours all the more interesting. It's a
                    high-end surface with a unique twist which is perfect for
                    use behind furniture or artwork.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    stainless steel fluted panels supply unlimited uses for
                    equally business and household settings, perfect for a
                    design-forward wall creation. Whether utilized for
                    commercial landscapes like dining places and places of
                    business or for in-home makes use of, these panels
                    conveniently incorporate inside of almost any style,
                    simultaneously offering improved usability and Visual
                    attraction.
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
                Stainless steel fluted panels offer universal corrosion
                resistance to ensure longer lasting effects in any type of
                ambient, be it a kitchen or outdoor construction. They provide
                greater modern usage and with slick aesthetics lending to almost
                any functional and decorative assignment
              </li>
              <li className="text-base text-gray-500 poppins-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                These panels provide a durable solution against the rigors of a
                residential and commercial environment; strong enough to remain
                looking good and stable for use within the high-traffic and
                raucous environments, they honor the mettle of their use.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                Their novel fluted design creates a dazzling feature on any wall
                and is intriguingly modern for both straightforward interiors
                and exteriors. These panels pick up and reflect the light in
                just the right way to enhance patterns and colors-perfect for
                high-end surfaces behind pieces of furniture or works of art.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Stainless steel rippled panels provide virtually endless
                applications in the commercial and residential spatial
                functions, making them particularly well-suited for
                design-leading wall creations. In restaurants, offices, and
                homes, panels shine by fitting perfectly within styles, while
                augmenting the usability and aesthetic performance.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main 
        ref={card1Ref}
        className="flex flex-col justify-center text-justify gap-20 translate-y-14 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
            //   ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-500 nunito">
                Stainless steel fluted panels are ideal for architectural and
                construction applications, providing a sleek and modern solution
                for interior wall design. These panels enhance aesthetic appeal
                while offering durability and corrosion resistance, making them
                perfect for both residential and commercial spaces. Elevate your
                project with stylish stainless steel fluted panels that
                transform ordinary walls into stunning decorative features.
              </p>
            </div>

            {/* Card 2 */}
            <div
            //   ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-200" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-500 nunito">
                Stainless steel fluted panels are an excellent choice for
                furniture and shelving, adding a contemporary touch to interior
                wall design. Their unique texture and sleek finish enhance the
                aesthetic appeal of cabinets, bookshelves, and display units.
                Use these stylish steel panels to create eye-catching decorative
                features that elevate your space while ensuring durability and
                functionality.
              </p>
            </div>

            {/* Card 3 */}
            <div
            //   ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-300" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-500 nunito">
                Stainless steel fluted panels are increasingly utilized in the
                automotive and marine industry, offering a stylish and durable
                solution for interior wall design. Their corrosion-resistant
                properties make them ideal for high-moisture environments,
                enhancing both functionality and aesthetics. Upgrade your
                vehicle or boat with these sleek steel panels to create a
                modern, decorative finish that stands the test of time.
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
