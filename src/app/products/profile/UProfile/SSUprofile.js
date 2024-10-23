"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
import upofile from "../../../assets/product/profile/U_profile/Uprofilem.webp";
import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../../assets/RelatedProducts/fluted.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import SSbalustrade from "../../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../../../assets/RelatedProducts/invisibleGril.webp";
import DecorativeSheet from "../../../assets/RelatedProducts/decorativesheet.webp";
import queuemanager from "../../../assets/RelatedProducts/queuemanager.webp";
import Umessurement from "../../../assets/product/profile/U_profile/Umessure.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import {
  FadeUp,
  FadeRight,
  FadeLeft,
} from "../../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import LivingImg from "../../../assets/product/profile/U_profile/slider/Img.webp";
import HallImg from "../../../assets/product/profile/U_profile/slider/Img1.webp";
import bedroom from "../../../assets/product/profile/U_profile/slider/Img2.webp";

// Black finishes
import MirrorImg from "../../../assets/product/profile/U_profile/finishes/black/mirrorBlack.png";
import HairlineImg from "../../../assets/product/profile/U_profile/finishes/black/hairlineBlack.png";
import StainImg from "../../../assets/product/profile/U_profile/finishes/black/stainBlack.png";
import StraightlineImg from "../../../assets/product/profile/U_profile/finishes/black/straightlineBlack.png";
import MeshImg from "../../../assets/product/profile/U_profile/finishes/black/meshBlack.png";

//Silver finishes
import MirrorImgS from "../../../assets/product/profile/U_profile/finishes/silver/mirrorSilver.png";
import HairlineImgS from "../../../assets/product/profile/U_profile/finishes/silver/hairlineSilver.png";
import StainImgS from "../../../assets/product/profile/U_profile/finishes/silver/stainSilver.png";
import StraightlineImgS from "../../../assets/product/profile/U_profile/finishes/silver/straightlineSilver.png";
import MeshImgS from "../../../assets/product/profile/U_profile/finishes/silver/meshSilver.png";

//Gold finishes
import MirrorImgG from "../../../assets/product/profile/U_profile/finishes/gold/mirrorGold.png";
import HairlineImgG from "../../../assets/product/profile/U_profile/finishes/gold/hairlineGold.png";
import StainImgG from "../../../assets/product/profile/U_profile/finishes/gold/stainGold.png";
import StraightlineImgG from "../../../assets/product/profile/U_profile/finishes/gold/straightlineGold.png";
import MeshImgG from "../../../assets/product/profile/U_profile/finishes/gold/meshGold.png";

//RoseGold finishes
import MirrorImgR from "../../../assets/product/profile/U_profile/finishes/rosegold/mirrorroseGold.png";
import HairlineImgR from "../../../assets/product/profile/U_profile/finishes/rosegold/hairlineroseGold.png";
import StainImgR from "../../../assets/product/profile/U_profile/finishes/rosegold/stainroseGold.png";
import StraightlineImgR from "../../../assets/product/profile/U_profile/finishes/rosegold/straightlineroseGold.png";
import MeshImgR from "../../../assets/product/profile/U_profile/finishes/rosegold/meshroseGold.png";

//ChampagnU finishes
import MirrorImgC from "../../../assets/product/profile/U_profile/finishes/champagne/mirrorChampagne.png";
import HairlineImgC from "../../../assets/product/profile/U_profile/finishes/champagne/hairlineChampagne.png";
import StainImgC from "../../../assets/product/profile/U_profile/finishes/champagne/stainChampagne.png";
import StraightlineImgC from "../../../assets/product/profile/U_profile/finishes/champagne/straightlineChampagne.png";
import MeshImgC from "../../../assets/product/profile/U_profile/finishes/champagne/meshChampagne.png";

const heroSlides = [
  {
    image: LivingImg,
    title: "Transform Your Space with Stainless Steel U Profiles",
    description:
      "Elevate your interior design with innovative stainless steel U profile wall designs. These sleek profiles add a contemporary touch, perfect for both residential and commercial spaces.",
  },
  {
    image: HallImg,
    title: "Versatile Stainless Steel U Profile Wall Panels",
    description:
      " Stainless steel U profile wall panels offer a modern, versatile solution for unique wall decor in both home and commercial spaces. Elevate your design with these striking, innovative panels.",
  },
  {
    image: bedroom,
    title: "Stainless Steel U Profile Accents for Modern Interiors",
    description:
      "Elevate your decor with elegant stainless steel U profile accents that add luxury and style to any space.",
  },
];
const SSUprofile = () => {
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
      title: "T Profile",
      image: wallImg,
      link: "/products/profile/TProfile",
    },
    {
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/LProfile",
    },
    {
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/SSFlutedPanelProfile",
    },
    {
      title: "SS Balustrade",
      image: SSbalustrade,
      link: "/products/BalustradeSystem",
    },
    {
      title: "Invisible Grill",
      image: invisibleGril,
      link: "/products/ssInvisibleGrill",
    },
    {
      title: "Decorative Sheet",
      image: DecorativeSheet,
      link: "/products/ssDecorativeSheet",
    },
    {
      title: "Queue Manager",
      image: queuemanager,
      link: "/products/ssQueueManager",
    },
    {
      title: "Custom Profile",
      image: customized,
      link: "/products/profile/ssCustomProfile",
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

  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" relative">
      <section className="relative bg-gray-800 h-[40rem] overflow-hidden">
        <AnimatePresence initial={true}>
          <motion.div
            key={`bg-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].image}
              alt="Background"
              className="opacity-50 h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full">
          <AnimatePresence initial={true}>
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[92rem] mx-auto px-4 h-full flex flex-col md:flex-row justify-center items-center mt-4 gap-10"
            >
              {/* Left Side Text */}
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center items-start max-w-sm lg:max-w-full xl:max-w-2xl"
              >
                <h1 className=" text-3xl md:text-5xl din-semibold text-white mb-2 md:mb-4  ">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className=" text-[1rem]  text-justify md:text-xl din-regular text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>

              {/* Right Side Image */}
              <motion.div
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="relative h-[17rem] w-full  lg:w-[60%]  md:h-[28rem] flex"
              >
                <Image
                  src={heroSlides[nextSlide].image}
                  alt={heroSlides[nextSlide].title}
                  className="rounded-lg shadow-xl h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <div className=" flex flex-col overflow-hidden mx-auto container">
        {/* new model open */}
        <section className="min-h-screen bg-gray-50 py-10 mt-8">
          <div className="container mx-auto px-6 lg:px-20">
            {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 ">
              {/* Finishes Section */}
              <div className="flex flex-col items-center lg:items-start xl:px-14">
                <h2 className="text-3xl din-semibold text-[#335c98] mb-6">
                  Available Finishes
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 xl:gap-6">
                  {finishes.map((finish) => (
                    <motion.div
                      variants={FadeUp(0.01)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      key={finish.name}
                      className="relative"
                    >
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
                    </motion.div>
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
                  10 x 3 x 10 | 10 x 5 x 10 | 10 x 8 x 10
                </p>
              </div>

              {/* Dimensional Chart */}
              <div className="relative">
                <Image
                  className="rounded-lg shadow-lg md:ml-40 lg:ml-0 xl:ml-40 bg-gray-700"
                  src={Umessurement}
                  alt="dimensional chart"
                  width={350}
                  height={250}
                />
              </div>
            </div>
          </div>
        </section>
        {/* new model colse */}

        <div className="flex flex-col items-center w-full bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20  text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 din-semibold">
                  What is Stainless Steel U Profile?
                </h2>
                <p className="text-gray-600 text-xs md:text-[1.10rem] leading-relaxed din-regular">
                  A stainless steel U profile is a type of structural component
                  characterized by its U-shaped cross-section. These profiles
                  are made from stainless steel, which provides them with
                  exceptional strength, durability, and resistance to corrosion.
                  They are widely used in various industries, including
                  construction, manufacturing, and furniture design. The U
                  profile has a distinct U shape, which allows it to provide
                  structural support and stability in various applications. Made
                  from stainless steel, these profiles benefit from the
                  material's inherent properties, such as resistance to rust,
                  corrosion, and staining. Stainless steel U profiles come in a
                  variety of sizes and thicknesses, allowing for customization
                  based on specific project requirements.
                </p>
              </div>
              <div className=" w-[21rem] md:w-[38rem] lg:w-[50%] md:pl-14">
                <Image
                  className="rounded-lg  transition-transform duration-300 hover:scale-105"
                  src={upofile}
                  alt="Stainless Steel T Profile"
                />
              </div>
            </div>
          </div>

          {/* Properties Section */}
          <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 din-semibold">
                Properties of Stainless Steel U Profiles
              </h2>
              <p className="text-gray-600 text-xs  md:text-[1.10rem] leading-relaxed text-justify px-10 din-regular">
                Stainless steel U profiles are widely recognized for their
                unique properties that make them suitable for various
                applications in construction, manufacturing, and design. The
                sleek and polished finish of stainless steel U profiles enhances
                the visual appeal of structures and products. They are often
                used in architectural designs where aesthetics are a priority.
                Stainless steel is a recyclable material, contributing to
                sustainable building practices. Using stainless steel U profiles
                can help reduce the environmental impact of construction
                projects.
              </p>
            </div>
          </div>
        </div>
        {/* example */}
        <div className="container mx-auto my-14 hidden xl:block p-4 px-14">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] din-semibold">
                    Benefits of Stainless Steel U Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    The presence of chromium in stainless steel forms a
                    protective oxide layer on the surface, preventing rust and
                    corrosion. This property is particularly beneficial in
                    environments exposed to moisture, chemicals, or harsh
                    weather conditions. Due to their corrosion resistance,
                    stainless steel U profiles have a long service life,
                    reducing the need for frequent replacements or maintenance.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Stainless steel U profiles are known for their exceptional
                    strength while remaining relatively lightweight. This
                    characteristic allows them to support significant loads
                    without adding excessive weight to structures. These
                    profiles can withstand impacts and stresses, making them
                    suitable for demanding applications.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    The sleek and polished finish of stainless steel U profiles
                    enhances the visual appeal of structures and products. They
                    are often used in architectural designs where aesthetics are
                    a priority. Available in different surface finishes (e.g.
                    stain, mirror, mesh, hairline or strai ghline), these
                    profiles can be customized to match specific design
                    requirements.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] din-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-600 din-regular">
                    Providing support in buildings, bridges, and other
                    structures. Framing: Used in the construction of walls,
                    roofs, and other architectural elements. Employed in
                    furniture design and architectural features for aesthetic
                    purposes.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* example */}
        {/* example phone */}
        <div className="container mx-auto my-14 xl:hidden">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl text-[#335c98] din-semibold mb-4">
              Benefits of Stainless Steel U Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-600 din-regular">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                One of the standout features of stainless steel is its
                resistance to corrosion. This property ensures that U profiles
                maintain their integrity and appearance even in harsh
                environments, such as coastal areas or industrial settings.
              </li>
              <li className="text-base text-gray-600 din-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                These profiles offer excellent strength-to-weight ratios,
                providing structural stability without adding excessive weight.
                This makes them ideal for supporting structures and frames.
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                Stainless steel U profiles can enhance the visual appeal of
                structures. Their sleek and modern look makes them a preferred
                choice for architectural applications where design is as
                important as functionality
              </li>
              <li className="text-base text-gray-600  din-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                These profiles can be customized in various sizes and alloys,
                allowing for flexibility in design and application. They are
                used in construction, manufacturing, and even decorative
                applications.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main className="flex flex-col justify-center text-justify gap-20 m-4  px-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl text-[#335c98] din-semibold mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-600 din-regular">
                Stainless steel U profiles are essential in architecture and
                construction, offering strength, versatility, and aesthetic
                appeal. Ideal for framing and cladding, they provide durable,
                corrosion-resistant solutions for outdoor use and enhance modern
                designs in residential and commercial projects.
              </p>
            </div>

            {/* Card 2 */}
            <div
              ref={card2Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card2InView ? "animate-wave delay-200" : "opacity-0"}`}
            >
              <h2 className="text-xl text-[#335c98] din-semibold mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-600 din-regular">
                Stainless steel U profiles are ideal for furniture and shelving
                applications, offering strength and stability for innovative
                designs. Their sleek finish adds a modern touch while providing
                durable, corrosion-resistant solutions for both residential and
                commercial spaces.
              </p>
            </div>

            {/* Card 3 */}
            <div
              ref={card3Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card3InView ? "animate-wave delay-300" : "opacity-0"}`}
            >
              <h2 className="text-xl  text-center text-[#335c98] din-semibold mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-600 din-regular">
                Stainless steel U profiles are widely used in the automotive and
                marine industries for their strength and corrosion resistance.
                These profiles provide robust structural support, ensuring
                durability and reliability in harsh environments, making them an
                ideal choice for vehicles and marine applications.
              </p>
            </div>
          </div>
        </main>
        <div className="w-full py-20 fade-in mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[35px]  text-[#335c98] mb-16 din-semibold">
              Other Products
            </h2>
            <Swiper
              modules={[Autoplay, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
              spaceBetween={15}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
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
                        width={150}
                        height={150}
                        className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
                      />
                      <h3 className="mt-4 text-xl text-[#335c98] din-regular ">
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

export default SSUprofile;
