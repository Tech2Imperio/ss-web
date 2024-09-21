// "use client";
// import React from "react";
// import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
// import VerticalImg from "../../../assets/product/profile/T_profile/Tprofile.webp";

// const page = () => {
//   const data = [
//     {
//       thickness: "0.6~2.0 mm",
//       finishes: "Mirror | Hairline | Bead Blasr % any More",
//       colors: "7 colors",
//       grade: "304",
//       productType: "T Profile",
//       size: "T6 ~ T50 % more",
//       length: "2440mm | 3050mm",
//     },
//   ];
//   return (
//     <section className=" flex flex-col overflow-hidden w-full h-full px-[18rem]">
//       <h1 className=" text-5xl flex justify-center text-center p-10 text-[#29a1d3] arimo">
//         T Profile
//       </h1>
//       <div className=" flex flex-col justify-center text-justify text-xl text-slate-500 gap-4 dm-sans">
//         <p>
//           Explore the versatility of stainless steel T profiles from Rajgure
//           Steel Industries. Our T profiles are available in seven vibrant
//           colors, making them perfect for enhancing your home design. These
//           durable profiles offer exceptional strength and aesthetic appeal,
//           making them ideal for various applications, from structural supports
//           to decorative elements.
//         </p>
//         <p>
//           Using T profiles in your home can transform spaces, providing both
//           functionality and style. Their unique shape allows for easy
//           integration into furniture, shelving, and architectural designs. With
//           the added advantage of corrosion resistance, our stainless steel T
//           profiles ensure longevity, making them a smart choice for any project.
//         </p>
//         <p>
//           Discover how Rajgure Steel Industries can elevate your designs with
//           high-quality T profiles that blend seamlessly with your vision!
//         </p>
//       </div>
//       <div className=" flex justify-center  ">
//         <Image
//           className=" object-cover h-[35rem] w-[45rem]"
//           src={wallImg}
//           alt="T-profile wall design"
//         />
//       </div>
//       <div className=" flex flex-col justify-center">
//         <h2 className=" text-4xl flex justify-center text-center p-4 text-[#e3cca1] arimo">
//           Stainless Steel T Profile Specifications
//         </h2>
//         <table className=" border-collapse w-[100%]">
//           <thead className=" text-[#e3cca1] justify-center text-centre ">
//             <tr className=" bg-[#5e6b92]">
//               <th>Thickness</th>
//               <th>Finishes</th>
//               <th>Colours</th>
//               <th>Grade</th>
//               <th>Product Type</th>
//               <th>Size</th>
//               <th>Length</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index} className=" text-center dm-sans">
//                 <td>{item.thickness}</td>
//                 <td>{item.finishes}</td>
//                 <td>{item.colors}</td>
//                 <td>{item.grade}</td>
//                 <td>{item.productType}</td>
//                 <td>{item.size}</td>
//                 <td>{item.length}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <style jsx>{`
//           th,
//           td {
//             border: 1px solid #ddd;
//             padding: 8px;
//             text-align: centre;
//           }
//         `}</style>
//       </div>
//       <div className=" flex flex-2 justify-center h-full w-full text-justify gap-24 space-y-14">
//         <div className=" flex w-[40vw] align-middle items-center h-auto justify-center">
//         <Image
//           className=" object-contain w-[35rem] h-[35rem]"
//           src={VerticalImg}
//           alt=""
//         />
//         </div>
//         <div className=" flex flex-col w-[40vw] gap-5 justify-around">
//           <div className=" flex flex-col gap-3">
//             <h1 className="  text-3xl text-[#dac092] arimo">
//               What is Stainless Steel T Profile?{" "}
//             </h1>
//             <p className=" text-slate-500 dm-sans text-xl">
//               A Stainless Steel T Profile is a metal profile characterized by a
//               "T"-shaped cross-section, offering superior strength and
//               versatility in construction, architecture, and engineering
//               applications. Its design includes two parallel flanges connected
//               by a vertical web, making it ideal for load-bearing structures and
//               providing excellent resistance to external weather conditions and
//               corrosion. Moreover, these profiles are highly weldable,
//               machinable, and formable, making them easy to work with in diverse
//               construction projects.
//             </p>
//           </div>
//           <div className=" flex flex-col gap-3">
//             <h1 className="  text-3xl text-[#dac092] arimo">
//               Properties of Stainless Steel T Profiles.
//             </h1>
//             <p className=" text-slate-500 dm-sans text-xl">
//               At Rajguru Steel Industry, we manufacture stainless steel T
//               profiles using high-quality austenitic stainless steel, known for
//               its exceptional durability and corrosion resistance. These
//               profiles contain significant levels of chromium and nickel,
//               ensuring protection against rust, while the addition of molybdenum
//               enhances resistance to pitting and crevice corrosion in harsh,
//               chloride-rich environments. Austenitic stainless steel also offers
//               impressive mechanical properties like high tensile and yield
//               strength, making it perfect for both industrial and architectural
//               uses. Our stainless steel T profiles are available in a variety of
//               sizes and thicknesses to accommodate different project
//               requirements.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//       <main className="flex flex-col justify-center text-justify gap-24 translate-y-14 ">
//         {/* <div>
//             <h1 className=" text-2xl text-[#dac092] arimo">Benefits of Stainless Steel T Profiles</h1>
//             <p className=" text-slate-500">
//               <span className=" text-xl text-[#e2be7f] arimo">1. Corrosion Resistance: </span>One of the standout features of
//               stainless steel T profiles is their exceptional resistance to rust
//               and corrosion. This makes them perfect for environments exposed to
//               moisture, chemicals, or the elements, such as coastal areas or
//               industrial applications
//             </p>
//             <p className=" text-slate-500">
//               <span className=" text-xl text-[#e2be7f] arimo">2. Durability: </span>T profiles from Rajguru Steel Industry
//               are known for their long lifespan, often exceeding 100 years in
//               well-maintained structures. The strength of stainless steel ensures
//               a long-lasting and maintenance-free solution for projects that
//               require sturdy structural components.
//             </p>
//             <p className=" text-slate-500">
//               <span className=" text-xl text-[#e2be7f] arimo">3. Aesthetic Appeal: </span>In addition to their structural
//               benefits, stainless steel T profiles add a sleek, modern look to any
//               project. Their elegant finish and minimal maintenance requirements
//               make them a popular choice for both commercial and residential
//               applications.
//             </p>
//             <p className=" text-slate-500">
//               <span className=" text-xl text-[#e2be7f] arimo">4. Versatility: </span> Stainless steel T profiles are used in
//               a wide range of applications, from architectural designs to
//               automotive reinforcement. Their ability to be easily fabricated
//               makes them a go-to material for custom projects.
//             </p>
//           </div> */}
//         <div className="overflow-x-auto my-14">
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr>
//                 <th className="py-4 px-4 text-left text-3xl text-[#dac092] arimo whitespace-nowrap">
//                   Benefits of Stainless Steel T Profiles.{" "}
//                 </th>
//                 {/* <th className="py-2 px-4 text-left text-2xl text-[#dac092] arimo">Description</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="py-4 px-4 text-2xl text-[#e2be7f] arimo whitespace-nowrap">
//                   1. Corrosion Resistance
//                 </td>
//                 <td className="py-4 px-4 text-lg text-slate-500 dm-sans">
//                   One of the standout features of stainless steel T profiles is
//                   their exceptional resistance to rust and corrosion. This makes
//                   them perfect for environments exposed to moisture, chemicals,
//                   or the elements, such as coastal areas or industrial
//                   applications.
//                 </td>
//               </tr>
//               <tr className="border-t">
//                 <td className="p-4 text-2xl text-[#e2be7f] arimo">
//                   2. Durability
//                 </td>
//                 <td className="p-4 text-lg text-slate-500 dm-sans">
//                   T profiles from Rajguru Steel Industry are known for their
//                   long lifespan, often exceeding 100 years in well-maintained
//                   structures. The strength of stainless steel ensures a
//                   long-lasting and maintenance-free solution for projects that
//                   require sturdy structural components.
//                 </td>
//               </tr>
//               <tr className="border-t">
//                 <td className="p-4 text-2xl text-[#e2be7f] arimo">
//                   3. Aesthetic Appeal
//                 </td>
//                 <td className="p-4 text-lg text-slate-500 dm-sans">
//                   In addition to their structural benefits, stainless steel T
//                   profiles add a sleek, modern look to any project. Their
//                   elegant finish and minimal maintenance requirements make them
//                   a popular choice for both commercial and residential
//                   applications.
//                 </td>
//               </tr>
//               <tr className="border-t">
//                 <td className="p-4 text-2xl text-[#e2be7f] arimo">
//                   4. Versatility
//                 </td>
//                 <td className="p-4 text-lg text-slate-500 dm-sans">
//                   Stainless steel T profiles are used in a wide range of
//                   applications, from architectural designs to automotive
//                   reinforcement. Their ability to be easily fabricated makes
//                   them a go-to material for custom projects.
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
//             <h2 className="text-xl font-semibold text-[#dac092] arimo mb-4 text-center">
//               Architectural and Construction Applications.
//             </h2>
//             <p className="text-slate-500 dm-sans">
//               T profiles are widely used in building facades, curtain walls,
//               glass railings, and structural supports. The combination of
//               strength and corrosion resistance ensures durability while
//               maintaining an aesthetically pleasing design.
//             </p>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
//             <h2 className="text-xl font-semibold text-[#dac092] arimo mb-4 text-center">
//               Furniture and Shelving.
//             </h2>
//             <p className="text-slate-500 dm-sans">
//               In interior design, T profiles are employed in furniture,
//               shelving, and display systems. The robust structure of stainless
//               steel ensures the ability to bear heavy loads while providing a
//               sleek, polished look to furniture pieces.
//             </p>
//           </div>

//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
//             <h2 className="text-xl font-semibold text-center text-[#dac092] arimo mb-4">
//               Automotive and Marine Industry.{" "}
//             </h2>
//             <p className="text-slate-500 dm-sans">
//               Stainless steel T profiles are frequently used in car frames,
//               providing essential reinforcement while minimizing weight. In
//               marine applications, their corrosion resistance makes them ideal
//               for use in boat manufacturing, where exposure to saltwater is
//               common.
//             </p>
//           </div>
//         </div>
//       </main>
//       <div className=" translate-y-20 flex flex-row text-2xl text-[#dac092] arimo">
//         <h2>Related Products.</h2>
//         <div className=" flex flex-col">
//           <div className=" border border-black flex flex-col translate-y-12">
//             <Image className=" object-contain h-44 w-44" src={upofile} alt="" />
//           </div>
//           <h3>U Profile</h3>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../../assets/RelatedProducts/fluted.webp";
import customized from "../../../assets/RelatedProducts/customized.webp";
import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
import bg from "../../../assets/product/profile/T_profile/bg.webp";
import { useInView } from "react-intersection-observer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const page = () => {
  const data = [
    {
      thickness: "0.6~2.0 mm",
      finishes: "Mirror | Hairline | Bead Blasr % any More",
      colors: "7 colors",
      grade: "304",
      productType: "T Profile",
      size: "T6 ~ T50 % more",
      length: "2440mm | 3050mm",
    },
  ];
  const relatedProducts = [
    {
      title: "U Profile",
      image: UProfile,
      link: "/products/profile/uProfile",
    },
    {
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
    },
    {
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/flutedPanel",
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
    <section className=" ">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="T Profile"
        />
        <h1 className="absolute inset-0 flex items-center justify-center pt-24 md:pt-0 text-[#335c98] text-5xl md:text-[5rem] font-bold">
          T Profile
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
          <p>
            Explore the versatility of stainless steel T profiles from Rajgure
            Steel Industries. Our T profiles are available in seven vibrant
            colors, making them perfect for enhancing your home design. These
            durable profiles offer exceptional strength and aesthetic appeal,
            making them ideal for various applications, from structural supports
            to decorative elements.
          </p>
          <p>
            Using T profiles in your home can transform spaces, providing both
            functionality and style. Their unique shape allows for easy
            integration into furniture, shelving, and architectural designs.
            With the added advantage of corrosion resistance, our stainless
            steel T profiles ensure longevity, making them a smart choice for
            any project.
          </p>
          {/* <p>
          Discover how Rajgure Steel Industries can elevate your designs with
          high-quality T profiles that blend seamlessly with your vision!
        </p> */}
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-start md:mb-14 lg:mb-0">
            {/* Left: Image */}
            <div className=" md:w-[2rem]lg:w-[50%]">
              <Image
                className="object-cover h-[20rem] w-[25rem] md:h-[25rem] md:w-auto md:pt-28 lg:h-[35rem] lg:w-full lg:pt-0"
                src={wallImg}
                alt="T-profile wall design"
              />
            </div>

            {/* Right: Specification */}
            <div className=" p-4 md:p-0 md:w-[45%] flex flex-col justify-centre">
              <h2 className="text-[25px] text-center p-4 text-[#335c98] montserrat">
                Stainless Steel T Profile Specifications
              </h2>

              <table className="border-collapse w-full">
                <tbody className="text-[#0A2540] text-left">
                  {data.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className="text-left">
                        <th className="align-top border border-[#ddd] p-2">
                          Thickness
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.thickness}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd] p-2">
                          Finishes
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.finishes}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd] p-2">
                          Colours
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.colors}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd] p-2">
                          Grade
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.grade}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd] p-2">
                          Product Type
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.productType}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd] p-2">
                          Size
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.size}
                        </td>
                      </tr>
                      <tr>
                        <th className="align-top border border-[#ddd]  p-2">
                          Length
                        </th>
                        <td className="border border-[#ddd] text-[#0A2540] p-2">
                          {item.length}
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
          {/* Hero Section */}

          {/* What is Section */}
          <div className="w-full py-4 md:py-20 fade-in">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
              <div className="lg:w-1/2 p-6">
                <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 montserrat">
                  What is Stainless Steel T Profile?
                </h2>
                <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed dm-sans">
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
              <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 montserrat">
                Properties of Stainless Steel T Profiles
              </h2>
              <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 dm-sans">
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
        <div className="container mx-auto my-14 hidden md:block">
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white rounded-lg">
              <thead>
                <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
                  <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] montserrat">
                    Benefits of Stainless Steel T Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] montserrat whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 dm-sans">
                    Stainless steel T profiles are highly resistant to rust and
                    corrosion, ideal for environments with exposure to moisture,
                    chemicals, or harsh weather conditions.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 dm-sans">
                    Known for their strength and long lifespan, stainless steel
                    T profiles can last over 100 years, making them a
                    maintenance-free solution for various projects.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 dm-sans">
                    With their sleek, modern look and minimal upkeep, stainless
                    steel T profiles enhance the aesthetics of commercial and
                    residential structures.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 dm-sans">
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
            <h2 className="text-2xl font-semibold text-[#335c98] montserrat mb-4">
              Benefits of Stainless Steel T Profiles
            </h2>
            <ul className="space-y-6 text-justify ">
              <li className="text-base text-gray-500 montserrat">
                <strong className=" text-[#335c98]">
                  1. Corrosion Resistance:
                </strong>{" "}
                Stainless steel T profiles are highly resistant to rust and
                corrosion, ideal for environments with exposure to moisture,
                chemicals, or harsh weather conditions.
              </li>
              <li className="text-base text-gray-500 montserrat">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                Known for their strength and long lifespan, stainless steel T
                profiles can last over 100 years, making them a maintenance-free
                solution for various projects.
              </li>
              <li className="text-base text-gray-500  montserrat">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                With their sleek, modern look and minimal upkeep, stainless
                steel T profiles enhance the aesthetics of commercial and
                residential structures.
              </li>
              <li className="text-base text-gray-500  montserrat">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Whether for architectural designs or automotive reinforcement,
                stainless steel T profiles are easy to fabricate and fit various
                applications.
              </li>
            </ul>
          </div>
        </div>

        {/* example phone colse  */}

        <main className="flex flex-col justify-center text-justify gap-20 translate-y-14 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div
              ref={card1Ref}
              className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 
                ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
            >
              <h2 className="text-xl font-semibold text-[#335c98] montserrat mb-4 text-center">
                Architectural and Construction Applications.
              </h2>
              <p className="text-gray-500 dm-sans">
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
              <h2 className="text-xl font-semibold text-[#335c98] montserrat mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-500 dm-sans">
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
              <h2 className="text-xl font-semibold text-center text-[#335c98] montserrat mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-500 dm-sans">
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
            <h2 className="text-[29px] font-bold text-[#335c98] mb-16 montserrat">
              Related Products
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
