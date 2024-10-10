"use client";
import React from "react";
import bg from "../../assets/product/balustrade/bg.webp";
import stairImg from "../../assets/product/balustrade/Images/stairsGlass.webp";
import floorImg from "../../assets/product/balustrade/Images/floorGlass.webp";
import houseImg from "../../assets/product/balustrade/Images/building.webp";
import office from "../../assets/product/balustrade/Images/office balcony.webp";
import Balustrade from "../../assets/product/balustrade/main.webp";
import { FadeDown, FadeUp } from "../../components/utility/animation.jsx";
import { motion } from "framer-motion";
import Link from "next/link";
import main2 from "../../assets/product/balustrade/main2.webp";
import Image from "next/image";

// const ImageBox = ({ imageSrc, title }) => (
//   <div className="flex flex-col items-center transition-transform transform hover:scale-105">
//     <figure className="rounded-lg overflow-hidden shadow-lg">
//       <Image
//         decoding="async"
//         src={imageSrc}
//         width={60}
//         height={60}
//         className="object-cover"
//         alt={title}
//       />
//     </figure>
//     <h3 className="text-center mt-2 text-sm font-medium">{title}</h3>
//   </div>
// );

export default function Page() {
  return (
    <section className="relative">
      <div className="relative">
        <Image
          className="h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="U Profile"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <motion.div
          variants={FadeDown(0.001)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4 "
        >
          <h1 className=" text-3xl md:text-[3.125rem] text-white opacity-90 din-semibold mb-6 tracking-tight">
            Stainless Steel Balustrade Systems
          </h1>
          <p className=" text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify raleway mb-12 ">
            "Rajguru Steel Industry offers premium stainless steel balustrade
            railings that combine style and safety, perfect for residential and
            commercial spaces in Mumbai, Delhi, Bangalore, etc."
          </p>
        </motion.div>
      </div>
      <main className="flex justify-center flex-col items-center container mx-auto">
        {/* <p className="text-slate-500 text-xs lg:text-sm text-justify w-[80%] p-4">
        With a focus on innovation and craftsmanship, our railings enhance your space while meeting high safety standards. Enjoy reliable quality and all-India delivery with Rajguru Steel’s trusted solutions.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {[
            {
              img: stairImg,
              alt: "Stairs Image",
              label: "Stairs Railing",
              description:
                "Enhance safety and style with our beautifully designed stairs railings.",
            },
            {
              img: floorImg,
              alt: "Floor Image",
              label: "Floor Railing",
              description:
                "Our floor railings provide both functionality and aesthetics for any space.",
            },
            {
              img: houseImg,
              alt: "House Balcony Image",
              label: "Home Balcony Railing",
              description:
                "Transform your balcony into a stunning outdoor space with our railings.",
            },
            {
              img: office,
              alt: "Office Balcony Image",
              label: "Corporate Balcony Railing",
              description:
                "Elevate your office aesthetics with our modern balcony railings.",
            },
          ].map(({ img, alt, label, description }) => (
            <motion.div
              variants={FadeUp(0.001)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={alt}
              className="relative overflow-hidden group rounded-3xl"
            >
              <Image
                src={img}
                alt={alt}
                className="object-cover h-[20rem] md:w-[17rem] md:h-[20rem] transition-transform duration-300 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-xl din-semibold">{label}</h3>
                <p className="text-sm raleway text-gray-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add button to interact */}

        <section className="wavo-column-gap-default elementor-section elementor-top-section mt-8 overflow-hidden mx-auto">
          <div className="elementor-container flex flex-col md:flex-row">
            <div className="elementor-column md:flex-1"></div>
            <section className="bg-gray-50 py-10">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl din-bold text-center text-[#335c98] mb-8">
                  Balustrade Railing Specifications
                </h2>
                <motion.div
                  variants={FadeUp(0.001)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-5 md:flex-row justify-center mb-6"
                >
                  <Image
                    src={Balustrade}
                    alt="Balustrade Railing"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src={main2}
                    alt="Balustrade Railing"
                    width={500}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>

                <div className="flex justify-center">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Material
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Frame:{" "}
                        </b>{" "}
                        Stainless Steel (Grade 304 or 316)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Infill:{" "}
                        </b>{" "}
                        Tempered Glass (10mm or 12mm thick)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Finish:{" "}
                        </b>{" "}
                        Polished, brushed, or powder-coated
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Dimensions
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Height:{" "}
                        </b>{" "}
                        36 inches (914 mm) standard; custom heights available
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Top Rail Width:{" "}
                        </b>{" "}
                        1.5 inches (38 mm) minimum
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Post Size:
                        </b>{" "}
                        2 inches x 2 inches (50 mm x 50 mm)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Glass Panel Size:{" "}
                        </b>{" "}
                        Typically 3 to 5 feet in width
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Safety Standards
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Load Capacity:{" "}
                        </b>{" "}
                        Must withstand a horizontal load of 200 lbs
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Height Requirements:{" "}
                        </b>{" "}
                        Minimum of 36 inches above walking surface
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Glass Safety:{" "}
                        </b>{" "}
                        Meets safety glazing standards (ASTM C1048)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Design Options
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Post Design:{" "}
                        </b>{" "}
                        Square or round with decorative caps
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Infill Options:{" "}
                        </b>{" "}
                        Glass, horizontal cables, or vertical bars
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Color Options:{" "}
                        </b>{" "}
                        Custom finishes available
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Installation Details
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Mounting:{" "}
                        </b>{" "}
                        Top-mounted or side-mounted options
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Surface Types:{" "}
                        </b>{" "}
                        Suitable for concrete, wood, and metal
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Hardware:{" "}
                        </b>{" "}
                        Stainless steel fasteners and brackets
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Maintenance
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Cleaning:{" "}
                        </b>{" "}
                        Regular cleaning with mild soap and water
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Inspection:{" "}
                        </b>{" "}
                        Periodic integrity checks
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl din-semibold text-[#335c98] mb-4">
                      Applications
                    </h3>
                    <ul className="list-none list-inside  text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Residential:{" "}
                        </b>{" "}
                        Balconies, staircases
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className="text-[#335c98] din-medium text-[1.125rem]">
                          Commercial:{" "}
                        </b>{" "}
                        Office buildings, restaurants
                      </li>
                      <li className=" text-gray-500 nunito">
                        {" "}
                        <b className=" text-[#335c98] din-medium text-[1.125rem]">
                          Public Spaces:{" "}
                        </b>{" "}
                        Parks, community centers
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </section>
  );
}
