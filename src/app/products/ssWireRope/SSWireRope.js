"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight } from "../../components/utility/animation.jsx";

import outdoorImg from "../../assets/product/ssWireRope/product/outdoorrope.webp";
import StairImg from "../../assets/product/ssWireRope/product/stairs.webp";
import BalconyImg from "../../assets/product/ssWireRope/product/outdorSSrailing.webp";
import hangingHook from "../../assets/product/ssWireRope/accessoris/hangingHook.webp";
import cableWire from "../../assets/product/ssWireRope/accessoris/WireRope.webp";
import thimble from "../../assets/product/ssWireRope/accessoris/thimble.webp";

import LivingImg from "../../assets/product/ssWireRope/slider/Img1.webp";
import HallImg from "../../assets/product/ssWireRope/slider/Img2.webp";
import bedroom from "../../assets/product/ssWireRope/slider/Img3.webp";
import BalconyImage1 from "../../assets/product/ssWireRope/images/balcony.webp";
import BalconyImage2 from "../../assets/product/ssWireRope/images/tearace.webp";
import terace from "../../assets/product/ssWireRope/images/balcony1.webp";

import Banner from "@/app/components/Banner";
import MainSwiper from "@/app/components/MainSwiper";

const heroSlides = [
  {
    image: LivingImg,
    title: "The Perfect Choice for Balcony Safety",
    description:
      "Enhance your balcony safety with durable stainless steel wire rope, offering strong support and stylish protection without obstructing views.",
  },
  {
    image: HallImg,
    title: "Upgrade Your Balcony with High-Quality Stainless Steel Wire Rope",
    description:
      "Transform your balcony with premium stainless steel wire rope, ensuring robust safety and a sleek, modern look for your outdoor space.",
  },
  {
    image: bedroom,
    title: "Durable Stainless Steel Wire Rope for Stylish Balcony Railings",
    description:
      "Choose durable stainless steel wire rope for your balcony railings, providing reliable safety and a contemporary design that complements any home.",
  },
];

export default function SSWireRope() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [outdoorImg, StairImg, BalconyImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative  w-screen">
      {/* Hero Section */}

      <Banner slides={heroSlides} />
      <main className=" mx-auto max-w-[90rem]">
        {/* Product Overview with Image Slider */}
        <section className=" bg-white container mx-auto pt-8 md:p-28">
          <div className=" px-6">
            {/* <h2 className="text-4xl pt-10 din-semibold text-[#335c98] mb-12 md:mb-16 md:pt-0 text-center">
              Wire Rope
            </h2> */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-28">
              <motion.div
                variants={FadeRight(0.01)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-[39%] relative"
              >
                <div className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Product Image ${currentImageIndex + 1}`}
                    className="transition-opacity duration-500 h-full w-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div
                variants={FadeLeft(0.01)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <h3 className="text-4xl din-semibold text-[#335c98] mb-4">
                  Premium Stainless Steel Wire Rope
                </h3>
                <p className="text-secondary mb-8 text-sm leading-relaxed din-regular text-justify">
                  Experience unparalleled strength and durability with our
                  premium stainless steel wire rope. Expertly crafted for
                  outdoor use in compounds and various rigging applications, our
                  wire rope sets the industry standard for quality and
                  reliability.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 strok" />
                    Superior corrosion resistance
                  </li>
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500" />
                    Effortless installation and maintenance
                  </li>
                  <li className="flex items-center text-[1.15rem] din-regular text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 " />
                    Versatile sizing and configurations
                  </li>
                </ul>
                <div className=" flex justify-start mt-4">
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Applications & Use Cases Section */}
        <section className=" bg-gray-100 p-20 container mx-auto">
          <div className=" max-w-[85rem] mx-auto ">
            <h2 className=" text-3xl md:text-5xl din-semibold text-[#335c98] mb-10 md:mb-16 text-center">
              Applications & Use Cases
            </h2>
            <div className=" mx-auto flex flex-col items-center lg:flex-row justify-center gap-6">
              {[
                {
                  title: "Outdoor Structures",
                  image: BalconyImage1,
                  description:
                    "Enhance the strength and aesthetics of outdoor installations.",
                },
                {
                  title: "Terrace ",
                  image: BalconyImage2,
                  description:
                    "Create secure and stylish railings for terrace.",
                },
                {
                  title: "Balcony Railings",
                  image: terace,
                  description:
                    "Ensure safety with elegant balcony railing solutions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl h-[18rem] w-[20rem] md:h-[24rem] md:w-[30rem] lg:h-[24rem] lg:w-[25rem] shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-4"
                >
                  <div className="relative h-44 md:h-60 ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 absolute bg-white h-[7rem] md:h-[9rem] w-[20rem] md:w-[30rem] lg:w-[25rem] rounded-b-3xl">
                    <h3 className="text-2xl din-regular text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 din-regular text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-24 bg-white mx-auto container overflow-hidden">
          <div className=" mx-auto">
            <h2 className="text-5xl din-semibold text-[#335c98] mb-16 text-center">
              Accessories
            </h2>
            <div className=" grid grid-rows-1 md:grid-cols-2 md:m-2 md:gap-14 gap-4 lg:grid-cols-2 lg:m-14 xl:grid-cols-3 justify-center xl:gap-14 xl:px-14">
              {[
                {
                  title: "Turnbuckles",
                  image: hangingHook,
                  description:
                    "Turnbuckles & rigging screws are used in lifting, tensioning and staying systems to make adjustment to the length of the systems.",
                  specs: [
                    "Material: Stainless Steel",
                    "Size: Various",
                    "Load Capacity: Up to 2000 lbs",
                    "GrillDesign:	Modern",
                    "WireDiameter:	3 mm",
                    "SurfaceFinish:	Polished",
                    "WireSpacing:	2,3,4",
                    "Color:	Silver",
                    "Feature:	Rust Proof",
                    "Turnbuckle hook",
                  ],
                },
                {
                  title: "Wire Rope",
                  image: cableWire,
                  description:
                    "This Wire Rope Cable is made of stainless steel, more corrosion resistance, oxidation resistance and durable. It can be used for both outdoor and indoor. The plastic covered stainless steel string is great for hoisting, lifting, binding, chain, grinder, agriculture, and industrial applications etc.",
                  specs: [
                    "Material: Stainless Steel",
                    "Length: 10M / 32.8ft",
                    "Cable Diameter: 5mm / 0.2",
                  ],
                },
                {
                  title: "Thimbles",
                  image: thimble,
                  description:
                    "Enhance the safety and durability of your rigging with our high-quality stainless steel thimble, designed to prevent rope wear and ensure secure connections. Perfect for marine, outdoor, and industrial applications, this corrosion-resistant thimble guarantees long-lasting performance.",
                  specs: [
                    "Material: Stainless Steel",
                    "Shape: Heart-shaped",
                    "Compatibility: Various rope sizes",
                    "Diameter: 5-10 mm",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl h-auto w-auto md:h-[40rem] md:w-[24rem] shadow-md  transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-[10rem] md:h-[10rem] w-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-contain h-44 w-44"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl din-regular text-[#335c98] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 din-regular text-xs md:text-base mb-4">
                      {item.description}
                    </p>
                    <h4 className=" din-medium text-[#335c98] mb-2">
                      Specifications:
                    </h4>
                    <ul className="list-decimal list-inside text-sm text-secondary grid grid-cols-1 gap-2 ">
                      {item.specs.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                    {/* <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium transition duration-300">
                      Learn More
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maintenance Tips Section */}
        <section className="py-24 bg-gray-100 container mx-auto xl:px-14">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl din-semibold text-primary mb-16 text-center">
              Maintenance Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
              {[
                {
                  title: "Regular Inspections",
                  description:
                    "Regular inspections of your stainless steel wire rope are vital for maintaining its integrity and safety, allowing you to detect wear, fraying, and corrosion early. This proactive approach is crucial for mission-critical applications, ensuring reliable performance under pressure. Investing in routine evaluations maximizes the lifespan of your wire rope and upholds the highest safety standards.",
                },
                {
                  title: "Proper Lubrication",
                  description:
                    "Regularly apply a high-quality, corrosion-resistant lubricant to reduce friction, prevent wear, and protect the rope from environmental elements. Choose a lubricant specifically designed for stainless steel, ensuring even application along the full length of the rope to coat all strands effectively.",
                },
                {
                  title: "Cleaning and Storage",
                  description:
                    "Keep your stainless steel wire ropes clean by removing dirt, debris, and contaminants with a soft-bristled brush or mild detergent solution. When not in use, store the ropes in a dry, well-ventilated area, away from direct sunlight, to prevent accelerated wear and tear from environmental factors.",
                },
                {
                  title: "Upgrade When Necessary",
                  description:
                    "If your current ropes show signs of excessive wear or damage, consider investing in higher-quality stainless steel wire ropes. Upgrading to more durable, corrosion-resistant options can reduce the need for frequent replacements and enhance the safety and reliability of your operations.",
                },
              ].map((tip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-2xl din-medium text-primary mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-secondary din-regular leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="pt-8  text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="  text-xl md:text-5xl din-semibold text-primary mb-8">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-base text-center text-secondary din-regular mb-12 max-w-3xl mx-auto">
              Discover the unmatched strength and versatility of Rajguru
              Stainless Steel Wire Rope. Let us help you bring your vision to
              life.
            </p>
            <div className=" flex justify-center">
              <Link href="/ContactUs">
                <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#1d1d1d] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                  {/* Colored background */}
                  <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                  {/* Top-left to bottom-right diagonal animation */}
                  <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                    <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  </span>

                  {/* Button text */}
                  <span className="relative z-10 group-hover:text-black transition-colors duration-700 ease-in-out raleway">
                    GET A QUOTE
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* call action close */}

        {/* swiper */}
        <MainSwiper />
        {/* swiper close */}
      </main>
    </main>
  );
}
