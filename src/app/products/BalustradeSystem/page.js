"use client";
import React from "react";
import bg from "../../assets/product/balustrade/bg.webp";
import stairImg from "../../assets/product/balustrade/Images/stairsGlass.webp";
import floorImg from "../../assets/product/balustrade/Images/floorGlass.webp";
import houseImg from "../../assets/product/balustrade/Images/building.webp";
import office from "../../assets/product/balustrade/Images/office balcony.webp";
import Balustrade from "../../assets/product/balustrade/main.webp";
import Link from "next/link";

// application production
// import Residential from "../../assets/product/balustrade/applicationProduction/co-working.webp";
// import Bungalows from "../../assets/product/balustrade/applicationProduction/bungalow.webp";
// import Offices from "../../assets/product/balustrade/applicationProduction/office-building.webp";
// import Restaurants from "../../assets/product/balustrade/applicationProduction/restaurant.webp";
// import Staircase from "../../assets/product/balustrade/applicationProduction/stairs.webp";
// import Balcony from "../../assets/product/balustrade/applicationProduction/antique-balcony.webp";
// import Terrace from "../../assets/product/balustrade/applicationProduction/terrace.webp";
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
        <h1 className="absolute inset-0 flex flex-col items-start justify-end pl-3 md:justify-center pb-4 md:pt-0 text-[#335c98] text-5xl md:text-[4rem] md:p-4 poppins-bold">
          RAJGURU
          <br />
          <p className="text-xs w-[18rem] md:w-[70rem] nunito pt-2 md:pt-4 text-gray-300">
            Sleek and durable, stainless steel balustrade railing blends modern
            aesthetics with lasting strength, ideal for both indoor and outdoor
            spaces. Its minimalist design ensures safety and stability while
            enhancing balconies, staircases, and terraces in contemporary
            settings..
          </p>
        </h1>
      </div>
      <main className="flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <p className="flex flex-col justify-center text-justify text-xs md:text-sm text-gray-500 gap-4 nunito p-4">
          Rajguru Steel Industry offers premium stainless steel balustrade
          railings, expertly designed for both aesthetics and safety. Our
          durable stainless steel and glass combinations provide a modern look,
          perfect for residential and commercial spaces in Mumbai, Delhi,
          Bangalore, and across India. Enjoy reliable quality and all-India
          delivery service with Rajguru Steel's trusted solutions for your
          railing needs. If you are looking for stylish and safe railing
          solutions, Rajguru Steel Industry could be an excellent choice. With a
          focus on innovation and craftsmanship, we ensure that our railings not
          only enhance your space but also meet the highest safety standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-4 h-full w-full my-auto mx-auto md:mb-14 relative ">
          <div className="relative flex-grow hover:scale-105 transition-transform duration-700 md:h-[32rem] lg:h-[24.5rem]">
            <Image
              src={stairImg}
              alt="Stairs Image"
              className="object-cover h-[20rem] w-[21rem] mx-auto  md:h-[32rem] md:w-[22rem] md:mx-4 lg:mx-0 lg:h-[25rem] lg:w-full rounded-3xl"
            />
            <p className="absolute inset-0 flex items-end justify-center">
              <span className="bg-slate-50 nunito text-base text-[#335c98] rounded-md w-32 flex justify-center h-8 items-center">
                Stairs Railing
              </span>
            </p>
          </div>
          <div className="relative flex-grow hover:scale-105 transition-transform duration-700 md:h-[32rem] lg:h-[24.5rem]">
            <Image
              src={floorImg}
              alt="Floor Image"
              className="object-cover h-[20rem] w-[21rem] mx-auto  md:h-[32rem] md:w-[22rem] md:mx-4 lg:mx-0 lg:h-[25rem] lg:w-full rounded-3xl"
            />
            <p className="absolute inset-0 flex items-end justify-center">
              <span className="bg-slate-50 nunito text-base text-[#335c98] rounded-md w-32 flex justify-center h-8 items-center">
                Floor Railing
              </span>
            </p>
          </div>
          <div className="relative flex-grow hover:scale-105 transition-transform duration-700 md:h-[32rem] lg:h-[24.5rem]">
            <Image
              src={houseImg}
              alt="House Balcony Image"
              className="object-cover h-[20rem] w-[21rem] mx-auto  md:h-[32rem] md:w-[22rem] md:mx-4 lg:mx-0 lg:h-[25rem] lg:w-full rounded-3xl"
            />
            <p className="absolute inset-0 flex items-end justify-center">
              <span className="bg-slate-50 nunito text-base text-[#335c98] rounded-md w-[12rem] flex justify-center h-8 items-center">
                Home Balcony Railing
              </span>
            </p>
          </div>
          <div className="relative flex-grow hover:scale-105 transition-transform duration-700 md:h-[32rem] lg:h-[24.5rem]">
            <Image
              src={office}
              alt="Office Balcony Image"
              className="object-cover  h-[20rem] w-[21rem] mx-auto  md:h-[32rem] md:w-[22rem] md:mx-4 lg:mx-0 lg:h-[25rem] lg:w-full rounded-3xl"
            />
            <p className="absolute inset-0 flex items-end justify-center">
              <span className="bg-slate-50 nunito text-base text-[#335c98] rounded-md w-[12rem] flex justify-center h-8 items-center">
                Corporate Balcony Railing
              </span>
            </p>
          </div>
        </div>
        {/* Add button to interact */}
      
        <section className="wavo-column-gap-default elementor-section elementor-top-section mt-8 overflow-hidden">
          <div className="elementor-container flex flex-col md:flex-row">
            <div className="elementor-column md:flex-1"></div>
            <section className="bg-gray-50 py-10">
              <div className="container mx-auto px-6">
                <h2 className="text-3xl poppins-bold text-center text-[#335c98] mb-8">
                  Balustrade Railing Specifications
                </h2>
                <div className="flex justify-center mb-6">
                  <Image
                    src={Balustrade}
                    alt="Balustrade Railing"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Material
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Frame:{" "}
                        </b>{" "}
                        Stainless Steel (Grade 304 or 316)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Infill:{" "}
                        </b>{" "}
                        Tempered Glass (10mm or 12mm thick)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Finish:{" "}
                        </b>{" "}
                        Polished, brushed, or powder-coated
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Dimensions
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Height:{" "}
                        </b>{" "}
                        36 inches (914 mm) standard; custom heights available
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Top Rail Width:{" "}
                        </b>{" "}
                        1.5 inches (38 mm) minimum
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Post Size:
                        </b>{" "}
                        2 inches x 2 inches (50 mm x 50 mm)
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Glass Panel Size:{" "}
                        </b>{" "}
                        Typically 3 to 5 feet in width
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Safety Standards
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Load Capacity:{" "}
                        </b>{" "}
                        Must withstand a horizontal load of 200 lbs
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Height Requirements:{" "}
                        </b>{" "}
                        Minimum of 36 inches above walking surface
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Glass Safety:{" "}
                        </b>{" "}
                        Meets safety glazing standards (ASTM C1048)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Design Options
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Post Design:{" "}
                        </b>{" "}
                        Square or round with decorative caps
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Infill Options:{" "}
                        </b>{" "}
                        Glass, horizontal cables, or vertical bars
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Color Options:{" "}
                        </b>{" "}
                        Custom finishes available
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Installation Details
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Mounting:{" "}
                        </b>{" "}
                        Top-mounted or side-mounted options
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Surface Types:{" "}
                        </b>{" "}
                        Suitable for concrete, wood, and metal
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Hardware:{" "}
                        </b>{" "}
                        Stainless steel fasteners and brackets
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Maintenance
                    </h3>
                    <ul className="list-none list-inside text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Cleaning:{" "}
                        </b>{" "}
                        Regular cleaning with mild soap and water
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Inspection:{" "}
                        </b>{" "}
                        Periodic integrity checks
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl poppins-semibold text-[#335c98] mb-4">
                      Applications
                    </h3>
                    <ul className="list-none list-inside  text-gray-700">
                      <li className=" text-gray-500 nunito">
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
                          Residential:{" "}
                        </b>{" "}
                        Balconies, staircases
                      </li>
                      <li className=" text-gray-500 nunito">
                        <b className="text-[#335c98] poppins-medium text-[1.125rem]">
                          Commercial:{" "}
                        </b>{" "}
                        Office buildings, restaurants
                      </li>
                      <li className=" text-gray-500 nunito">
                        {" "}
                        <b className=" text-[#335c98] poppins-medium text-[1.125rem]">
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
