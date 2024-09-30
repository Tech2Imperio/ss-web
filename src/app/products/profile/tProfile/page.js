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

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// // import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
// import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
// import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
// import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
// import fluted from "../../../assets/RelatedProducts/fluted.webp";
// import customized from "../../../assets/RelatedProducts/customized.webp";
// import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
// import bg from "../../../assets/product/profile/T_profile/bg.webp";
// import messurement from "../../../assets/product/profile/T_profile/TENG.png"
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Link from "next/link";
// import silverImg from "../../../assets/product/profile/T_profile/colourImg/TMEMSILVER.png";
// import CHAMPAIGN from "../../../assets/product/profile/T_profile/colourImg/CHAMPAIGNETMEM.png";
// import rosegoldImg from "../../../assets/product/profile/T_profile/colourImg/ROSEGOLDTMEMBER.png";
// import blackdImg from "../../../assets/product/profile/T_profile/colourImg/BLACKTMEM.png";
// import bronzeImg from "../../../assets/product/profile/T_profile/colourImg/BRONZETMEM.png";
// import goldImg from "../../../assets/product/profile/T_profile/colourImg/TMEMGOLD.png";
// import blueImg from "../../../assets/product/profile/T_profile/colourImg/TMEMBLUE.png";

// const page = () => {
//   const colorImages = {
//     Silver: silverImg,
//     Champagne: CHAMPAIGN,
//     Black: blackdImg,
//     RoseGold: rosegoldImg,
//     Gold: goldImg,
//     Bronze: bronzeImg,
//     Blue: blueImg,
//   };

//   // Debugging log
//   console.log("colorImages:", colorImages);

//   const colors = Object.keys(colorImages).map((name) => ({
//     name,
//     hex: {
//       Silver: "#C0C0C0",
//       Champagne: "#b9aa1c",
//       Black: "#000000",
//       Gold: "#F5BD02",
//       RoseGold: "#B76E79",
//       Bronze: "#CD7F32",
//       Blue: "#0D304f",
//       thickness: "0.6~2.0 mm",
//       size: "T6 ~ T50 % more",
//     }[name],
//   }));

//   const [selectedColor, setSelectedColor] = useState(colors[0]);
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
//   const relatedProducts = [
//     {
//       title: "U Profile",
//       image: UProfile,
//       link: "/products/profile/uProfile",
//     },
//     {
//       title: "L Profile",
//       image: LProfile,
//       link: "/products/profile/lProfile",
//     },
//     {
//       title: "Fluted Panel",
//       image: fluted,
//       link: "/products/profile/flutedPanel",
//     },
//     {
//       title: "C Profile",
//       image: CProfile,
//       link: "/products/profile/cProfile",
//     },
//     {
//       title: "Custom Profile",
//       image: customized,
//       link: "/products/profile/customProfile",
//     },
//   ];

//   const { ref: card1Ref, inView: card1InView } = useInView({
//     triggerOnce: true, // Animates only once
//     threshold: 0.1, // 10% of the card needs to be visible to trigger the animation
//   });

//   const { ref: card2Ref, inView: card2InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const { ref: card3Ref, inView: card3InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section className=" ">
//       <div className="relative">
//         <Image
//           className=" h-[22rem] md:h-[30rem] w-full object-cover"
//           src={bg}
//           alt="T Profile"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center pt-24 md:pt-0 text-[#335c98] text-5xl md:text-[5rem] font-bold poppins-regular">
//           T Profile
//         </h1>
//       </div>

//       <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
//         {/* <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
//           <p>
//             Explore the versatility of stainless steel T profiles from Rajgure
//             Steel Industries. Our T profiles are available in seven vibrant
//             colors, making them perfect for enhancing your home design. These
//             durable profiles offer exceptional strength and aesthetic appeal,
//             making them ideal for various applications, from structural supports
//             to decorative elements.
//           </p>
//           <p>
//             Using T profiles in your home can transform spaces, providing both
//             functionality and style. Their unique shape allows for easy
//             integration into furniture, shelving, and architectural designs.
//             With the added advantage of corrosion resistance, our stainless
//             steel T profiles ensure longevity, making them a smart choice for
//             any project.
//           </p>
//           <p>
//           Discover how Rajgure Steel Industries can elevate your designs with
//           high-quality T profiles that blend seamlessly with your vision!
//         </p>
//         </div> */}

//         {/* new model open */}
//         <div className="flex flex-row justify-center items-center gap-28">
//           {/* Left Side: Image */}
//           <div className=" pt-14">
//             <Image
//               className="h-[20rem] w-[30rem] border rounded-3xl "
//               src={colorImages[selectedColor.name]}
//               alt={selectedColor.name}
//               width={300} // Explicit width
//               height={300} // Explicit height
//             />
//           </div>

//           {/* Right Side: Color Selector */}
//           <div className="flex flex-col items-center">
//             <h1 className=" text-2xl text-[#335c98] poppins-regular">
//               Select a Color
//             </h1>
//             <div className="flex justify-center mb-[20px] space-x-4">
//               {colors.map((color) => (
//                 <div
//                   key={color.name}
//                   onClick={() => setSelectedColor(color)}
//                   style={{
//                     backgroundColor: color.hex,
//                     borderRadius: "50%",
//                     width: "30px",
//                     height: "30px",
//                     cursor: "pointer",
//                     border:
//                       selectedColor.name === color.name
//                         ? "2px solid black"
//                         : "none",
//                   }}
//                 />
//               ))}
//             </div>
//             {/* <p className="text-center text-xl text-[#335c98] poppins-regular">
//               Selected Color: {selectedColor.name}
//             </p> */}
//             <div className="flex flex-col m-4">
//               <table className="border-collapse w-full">
//                 <tbody>
//                   <tr className="border">
//                     <th className="text-left p-2 border text-[#335c98] nunito">Selected Color</th>
//                     <td className="text-centre p-2 border poppins-regular">{selectedColor.name}</td>
//                   </tr>
//                   <tr className="border">
//                     <th className="text-left p-2 border text-[#335c98] nunito">Thickness</th>
//                     <td className="text-centre p-2 border poppins-regular">0.6 ~ 2.0 mm</td>
//                   </tr>
//                   <tr className="border">
//                     <th className="text-left p-2 border text-[#335c98] nunito">Size</th>
//                     <td className="text-centre p-2 border poppins-regular">T6 to T50 & more</td>
//                   </tr>
//                 </tbody>
//               </table>
//               <h5 className=" text-base text-[#335c98] montserrat p-2  ">
//                 Note : Customization as per size can be done.
//               </h5>
//             </div>
//           </div>
//         </div>
//         <div className=" flex gap-[10rem]">
//         <div className=" flex flex-col justify-center text-justify">
//           <h3 className=" text-2xl poppins-regular text-[#335c98]">Finishes</h3>
//           <p className=" text-lg text-gray-500 pb-4">Mirror | Hairline | Bead Blast | Straightline</p>
//           <h3 className=" text-2xl poppins-regular text-[#335c98]">Sizes <sub className=" text-sm">(mm)</sub> <span className=" text-base">- (W x H)</span></h3>
//           <p className=" text-lg text-gray-500 pb-4">6 x 6 | 8 x 5 | 10 x 5 | 12 x 5 | 15 x 5 | 18 x 5 | 20 x 5 | 25 x 5</p>
//         </div>
//         <Image className=" bg-gray-500 h-[16rem] w-[28rem] ml-14 mb-14" src={messurement} alt="dimantial"/>
//         </div>

//         {/* new model colse */}

//         <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
//           {/* Hero Section */}

//           {/* What is Section */}
//           <div className="w-full py-4 md:py-20 fade-in">
//             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
//               <div className="lg:w-1/2 p-6">
//                 <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 poppins-regular">
//                   What is Stainless Steel T Profile?
//                 </h2>
//                 <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
//                   A Stainless Steel T Profile is a metal profile characterized
//                   by a "T"-shaped cross-section, offering superior strength and
//                   versatility in construction and architecture.
//                 </p>
//               </div>
//               <div className=" w-[28rem] lg:w-[55%] px-14">
//                 <Image
//                   className="rounded-lg  transition-transform duration-300 hover:scale-105"
//                   src={Tprofile}
//                   alt="Stainless Steel T Profile"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Properties Section */}
//           <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
//             <div className="max-w-6xl mx-auto text-center">
//               <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 poppins-regular">
//                 Properties of Stainless Steel T Profiles
//               </h2>
//               <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
//                 At Rajguru Steel Industry, we manufacture stainless steel T
//                 profiles using high-quality austenitic stainless steel, known
//                 for its exceptional durability and corrosion resistance. These
//                 profiles contain significant levels of chromium and nickel,
//                 ensuring protection against rust, while the addition of
//                 molybdenum enhances resistance to pitting and crevice corrosion
//                 in harsh, chloride-rich environments. Austenitic stainless steel
//                 also offers impressive mechanical properties like high tensile
//                 and yield strength, making it perfect for both industrial and
//                 architectural uses. Our stainless steel T profiles are available
//                 in a variety of sizes and thicknesses to accommodate different
//                 project requirements
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* example */}
//         <div className="container mx-auto my-14 hidden md:block">
//           <div className="overflow-x-auto shadow-lg rounded-lg">
//             <table className="min-w-full bg-white rounded-lg">
//               <thead>
//                 <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
//                   <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] poppins-regular">
//                     Benefits of Stainless Steel T Profiles
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     1. Corrosion Resistance
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Stainless steel T profiles are highly resistant to rust and
//                     corrosion, ideal for environments with exposure to moisture,
//                     chemicals, or harsh weather conditions.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     2. Durability
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Known for their strength and long lifespan, stainless steel
//                     T profiles can last over 100 years, making them a
//                     maintenance-free solution for various projects.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     3. Aesthetic Appeal
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     With their sleek, modern look and minimal upkeep, stainless
//                     steel T profiles enhance the aesthetics of commercial and
//                     residential structures.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     4. Versatility
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Whether for architectural designs or automotive
//                     reinforcement, stainless steel T profiles are easy to
//                     fabricate and fit various applications.
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* example */}
//         {/* example phone */}
//         <div className="container mx-auto my-14 md:hidden">
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-[#335c98] poppins-regular mb-4">
//               Benefits of Stainless Steel T Profiles
//             </h2>
//             <ul className="space-y-6 text-justify ">
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   1. Corrosion Resistance:
//                 </strong>{" "}
//                 Stainless steel T profiles are highly resistant to rust and
//                 corrosion, ideal for environments with exposure to moisture,
//                 chemicals, or harsh weather conditions.
//               </li>
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
//                 Known for their strength and long lifespan, stainless steel T
//                 profiles can last over 100 years, making them a maintenance-free
//                 solution for various projects.
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   3. Aesthetic Appeal:
//                 </strong>{" "}
//                 With their sleek, modern look and minimal upkeep, stainless
//                 steel T profiles enhance the aesthetics of commercial and
//                 residential structures.
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
//                 Whether for architectural designs or automotive reinforcement,
//                 stainless steel T profiles are easy to fabricate and fit various
//                 applications.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* example phone colse  */}

//         <main className="flex flex-col justify-center text-justify gap-20 translate-y-14 ">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <div
//               ref={card1Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
//                 Architectural and Construction Applications.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 T profiles are widely used in building facades, curtain walls,
//                 glass railings, and structural supports. The combination of
//                 strength and corrosion resistance ensures durability while
//                 maintaining an aesthetically pleasing design.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div
//               ref={card2Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card2InView ? "animate-wave delay-200" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
//                 Furniture and Shelving.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 In interior design, T profiles are employed in furniture,
//                 shelving, and display systems. The robust structure of stainless
//                 steel ensures the ability to bear heavy loads while providing a
//                 sleek, polished look to furniture pieces.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div
//               ref={card3Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card3InView ? "animate-wave delay-300" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
//                 Automotive and Marine Industry.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 Stainless steel T profiles are frequently used in car frames,
//                 providing essential reinforcement while minimizing weight. In
//                 marine applications, their corrosion resistance makes them ideal
//                 for use in boat manufacturing, where exposure to saltwater is
//                 common.
//               </p>
//             </div>
//           </div>
//         </main>
//         <div className="w-full py-20 fade-in mt-20">
//           <div className="max-w-6xl mx-auto text-center">
//             <h2 className="text-[29px] font-bold text-[#335c98] mb-16 poppins-regular">
//               Other Products
//             </h2>
//             <Swiper
//               modules={[Navigation, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
//               spaceBetween={15}
//               slidesPerView={1}
//               navigation
//               scrollbar={{ draggable: true }}
//               breakpoints={{
//                 640: { slidesPerView: -1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {relatedProducts.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <Link href={product.link} passHref>
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         width={220}
//                         height={250}
//                         className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
//                       />
//                       <h3 className="mt-4 text-xl font-semibold text-[#335c98] arimo">
//                         {product.title}
//                       </h3>
//                     </Link>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

// THIS CODE SHOWING SINGLE IMAGE BUT CLICK COLOUR CHANGE COLOUR IMAGE

// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// // import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
// import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
// import UProfile from "../../../assets/RelatedProducts/UProfile.webp";
// import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
// import fluted from "../../../assets/RelatedProducts/fluted.webp";
// import customized from "../../../assets/RelatedProducts/customized.webp";
// import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
// import bg from "../../../assets/product/profile/T_profile/bg.webp";
// import messurement from "../../../assets/product/profile/T_profile/TENG.png"
// import { useInView } from "react-intersection-observer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Link from "next/link";
// import silverImg from "../../../assets/product/profile/T_profile/colourImg/TMEMSILVER.png";
// import CHAMPAIGN from "../../../assets/product/profile/T_profile/colourImg/CHAMPAIGNETMEM.png";
// import rosegoldImg from "../../../assets/product/profile/T_profile/colourImg/ROSEGOLDTMEMBER.png";
// import blackdImg from "../../../assets/product/profile/T_profile/colourImg/BLACKTMEM.png";
// import bronzeImg from "../../../assets/product/profile/T_profile/colourImg/BRONZETMEM.png";
// import goldImg from "../../../assets/product/profile/T_profile/colourImg/TMEMGOLD.png";
// // import blueImg from "../../../assets/product/profile/T_profile/colourImg/TMEMBLUE.png";

// const colorImages = {
//   Silver: silverImg,
//   Champagne: CHAMPAIGN,
//   Black: blackdImg,
//   RoseGold: rosegoldImg,
//   Gold: goldImg,
//   Bronze: bronzeImg,
//   // Blue: blueImg,
// };

// // Preload Images to enhance performance
// const preloadImages = (images) => {
//   Object.values(images).forEach((src) => {
//     const img = new Image();
//     img.src = src;
//   });
// };

// const page = () => {
//   const colorImages = {
//     Silver: silverImg,
//     Champagne: CHAMPAIGN,
//     Black: blackdImg,
//     RoseGold: rosegoldImg,
//     Gold: goldImg,
//     Bronze: bronzeImg,
//     // Blue: blueImg,
//   };

//   const colors = [
//     { name: "Silver", hex: "#C0C0C0" },
//     { name: "Champagne", hex: "#b9aa1c" },
//     { name: "Black", hex: "#000000" },
//     { name: "RoseGold", hex: "#B76E79" },
//     { name: "Gold", hex: "#F5BD02" },
//     { name: "Bronze", hex: "#CD7F32" },
//     // { name: "Blue", hex: "#0D304f" },
//   ];

//   const [selectedColor, setSelectedColor] = useState(colors[0]);

//   // Preload images
//   const preloadImages = (images) => {
//     Object.values(images).forEach((src) => {
//       const img = new window.Image();
//       img.src = src;
//     });
//   };

//   useEffect(() => {
//     preloadImages(colorImages);
//   }, []);

//    const relatedProducts = [
//     {
//       title: "U Profile",
//       image: UProfile,
//       link: "/products/profile/uProfile",
//     },
//     {
//       title: "L Profile",
//       image: LProfile,
//       link: "/products/profile/lProfile",
//     },
//     {
//       title: "Fluted Panel",
//       image: fluted,
//       link: "/products/profile/flutedPanel",
//     },
//     {
//       title: "C Profile",
//       image: CProfile,
//       link: "/products/profile/cProfile",
//     },
//     {
//       title: "Custom Profile",
//       image: customized,
//       link: "/products/profile/customProfile",
//     },
//   ];

//   const { ref: card1Ref, inView: card1InView } = useInView({
//     triggerOnce: true, // Animates only once
//     threshold: 0.1, // 10% of the card needs to be visible to trigger the animation
//   });

//   const { ref: card2Ref, inView: card2InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const { ref: card3Ref, inView: card3InView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section className=" ">
//       <div className="relative">
//         <Image
//           className=" h-[22rem] md:h-[30rem] w-full object-cover"
//           src={bg}
//           alt="T Profile"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center pt-24 md:pt-0 text-[#335c98] text-5xl md:text-[5rem] font-bold poppins-regular">
//           T Profile
//         </h1>
//       </div>

//       <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
//         <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
//           <p>
//             Explore the versatility of stainless steel T profiles from Rajgure
//             Steel Industries. Our T profiles are available in seven vibrant
//             colors, making them perfect for enhancing your home design. These
//             durable profiles offer exceptional strength and aesthetic appeal,
//             making them ideal for various applications, from structural supports
//             to decorative elements.
//           </p>
//         </div>

//         {/* new model open */}
//         <section className="min-h-screen bg-gray-50 py-10">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

//         <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-8">
//   {/* Color Preview Section */}
//   <div className="relative hover:shadow-xl transition-shadow duration-500 ease-in-out">
//     <Image
//       className="w-[350px] h-[220px] lg:w-[500px] lg:h-[300px] rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-110 hover:rotate-2"
//       src={colorImages[selectedColor.name]}
//       alt={selectedColor.name}
//       width={500}
//       height={300}
//     />
//     <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//       <h3 className="text-white text-xl font-bold">Selected: {selectedColor.name}</h3>
//     </div>
//   </div>

//   {/* Color Selector */}
//   <div className="flex flex-col items-center text-center lg:text-left">
//     <h2 className="text-3xl font-bold text-[#335c98] mb-6">Choose Your Perfect Color</h2>
//     <div className="flex flex-wrap justify-center gap-5 mb-6">
//       {colors.map((color) => (
//         <div
//           key={color.name}
//           onClick={() => setSelectedColor(color)}
//           className={`cursor-pointer w-14 h-14 rounded-full border-4 transform transition-transform duration-300 ${
//             selectedColor.name === color.name
//               ? "border-[#335c98] scale-110"
//               : "border-gray-300"
//           }`}
//           style={{ backgroundColor: color.hex }}
//         />
//       ))}
//     </div>

//     {/* Details Section */}
//     <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl bg-white text-left">
//       <div className="bg-[#335c98] text-white text-center p-4 rounded-t-lg">
//         <h3 className="text-lg font-semibold">Selected Color Details</h3>
//       </div>
//       <table className="table-auto w-full text-sm text-left">
//         <tbody>
//           <tr>
//             <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">Color</th>
//             <td className="px-4 py-2">{selectedColor.name}</td>
//           </tr>
//           <tr>
//             <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">Thickness</th>
//             <td className="px-4 py-2">0.6 ~ 2.0 mm</td>
//           </tr>
//           <tr>
//             <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">Size</th>
//             <td className="px-4 py-2">T6 to T50 & more</td>
//           </tr>
//         </tbody>
//       </table>
//       <div className="p-4 bg-gray-100 text-gray-600 italic text-center">
//         Customization for sizes available upon request.
//       </div>
//     </div>
//   </div>
// </div>

//         {/* Finishes and Sizes Section */}
//         <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="text-left space-y-6">
//             <h3 className="text-xl font-semibold text-[#335c98]">Finishes</h3>
//             <p className="text-lg text-gray-600">Mirror | Hairline | Bead Blast | Straightline</p>

//             <h3 className="text-xl font-semibold text-[#335c98]">Sizes <sub className="text-sm">mm</sub> <span className="text-base">- W x H</span></h3>
//             <p className="text-lg text-gray-600">6 x 6 | 8 x 5 | 10 x 5 | 12 x 5 | 15 x 5 | 18 x 5 | 20 x 5 | 25 x 5</p>
//           </div>

//           {/* Dimensional Chart */}
//           <div className="relative">
//             <Image className="rounded-lg shadow-lg bg-gra" src={messurement} alt="dimensional chart" width={450} height={250} />
//           </div>
//         </div>
//       </div>
//     </section>
//         {/* new model colse */}

//         <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
//           {/* Hero Section */}

//           {/* What is Section */}
//           <div className="w-full py-4 md:py-20 fade-in">
//             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
//               <div className="lg:w-1/2 p-6">
//                 <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 poppins-regular">
//                   What is Stainless Steel T Profile?
//                 </h2>
//                 <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
//                   A Stainless Steel T Profile is a metal profile characterized
//                   by a "T"-shaped cross-section, offering superior strength and
//                   versatility in construction and architecture.
//                 </p>
//               </div>
//               <div className=" w-[28rem] lg:w-[55%] px-14">
//                 <Image
//                   className="rounded-lg  transition-transform duration-300 hover:scale-105"
//                   src={Tprofile}
//                   alt="Stainless Steel T Profile"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Properties Section */}
//           <div className="w-full bg-[#f7f7f7] py-20 h-auto fade-in">
//             <div className="max-w-6xl mx-auto text-center">
//               <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 poppins-regular">
//                 Properties of Stainless Steel T Profiles
//               </h2>
//               <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
//                 At Rajguru Steel Industry, we manufacture stainless steel T
//                 profiles using high-quality austenitic stainless steel, known
//                 for its exceptional durability and corrosion resistance. These
//                 profiles contain significant levels of chromium and nickel,
//                 ensuring protection against rust, while the addition of
//                 molybdenum enhances resistance to pitting and crevice corrosion
//                 in harsh, chloride-rich environments. Austenitic stainless steel
//                 also offers impressive mechanical properties like high tensile
//                 and yield strength, making it perfect for both industrial and
//                 architectural uses. Our stainless steel T profiles are available
//                 in a variety of sizes and thicknesses to accommodate different
//                 project requirements
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* example */}
//         <div className="container mx-auto my-14 hidden md:block">
//           <div className="overflow-x-auto shadow-lg rounded-lg">
//             <table className="min-w-full bg-white rounded-lg">
//               <thead>
//                 <tr className="border-b-2 border-[#335c98] whitespace-nowrap">
//                   <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] poppins-regular">
//                     Benefits of Stainless Steel T Profiles
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     1. Corrosion Resistance
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Stainless steel T profiles are highly resistant to rust and
//                     corrosion, ideal for environments with exposure to moisture,
//                     chemicals, or harsh weather conditions.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     2. Durability
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Known for their strength and long lifespan, stainless steel
//                     T profiles can last over 100 years, making them a
//                     maintenance-free solution for various projects.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     3. Aesthetic Appeal
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     With their sleek, modern look and minimal upkeep, stainless
//                     steel T profiles enhance the aesthetics of commercial and
//                     residential structures.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     4. Versatility
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Whether for architectural designs or automotive
//                     reinforcement, stainless steel T profiles are easy to
//                     fabricate and fit various applications.
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* example */}
//         {/* example phone */}
//         <div className="container mx-auto my-14 md:hidden">
//           <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold text-[#335c98] poppins-regular mb-4">
//               Benefits of Stainless Steel T Profiles
//             </h2>
//             <ul className="space-y-6 text-justify ">
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   1. Corrosion Resistance:
//                 </strong>{" "}
//                 Stainless steel T profiles are highly resistant to rust and
//                 corrosion, ideal for environments with exposure to moisture,
//                 chemicals, or harsh weather conditions.
//               </li>
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
//                 Known for their strength and long lifespan, stainless steel T
//                 profiles can last over 100 years, making them a maintenance-free
//                 solution for various projects.
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   3. Aesthetic Appeal:
//                 </strong>{" "}
//                 With their sleek, modern look and minimal upkeep, stainless
//                 steel T profiles enhance the aesthetics of commercial and
//                 residential structures.
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
//                 Whether for architectural designs or automotive reinforcement,
//                 stainless steel T profiles are easy to fabricate and fit various
//                 applications.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* example phone colse  */}

//         <main className="flex flex-col justify-center text-justify gap-20 translate-y-14 ">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {/* Card 1 */}
//             <div
//               ref={card1Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card1InView ? "animate-wave delay-100" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
//                 Architectural and Construction Applications.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 T profiles are widely used in building facades, curtain walls,
//                 glass railings, and structural supports. The combination of
//                 strength and corrosion resistance ensures durability while
//                 maintaining an aesthetically pleasing design.
//               </p>
//             </div>

//             {/* Card 2 */}
//             <div
//               ref={card2Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card2InView ? "animate-wave delay-200" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
//                 Furniture and Shelving.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 In interior design, T profiles are employed in furniture,
//                 shelving, and display systems. The robust structure of stainless
//                 steel ensures the ability to bear heavy loads while providing a
//                 sleek, polished look to furniture pieces.
//               </p>
//             </div>

//             {/* Card 3 */}
//             <div
//               ref={card3Ref}
//               className={`bg-white shadow-md rounded-lg p-6 border border-gray-200
//                 ${card3InView ? "animate-wave delay-300" : "opacity-0"}`}
//             >
//               <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
//                 Automotive and Marine Industry.
//               </h2>
//               <p className="text-gray-500 nunito">
//                 Stainless steel T profiles are frequently used in car frames,
//                 providing essential reinforcement while minimizing weight. In
//                 marine applications, their corrosion resistance makes them ideal
//                 for use in boat manufacturing, where exposure to saltwater is
//                 common.
//               </p>
//             </div>
//           </div>
//         </main>
//         <div className="w-full py-20 fade-in mt-20">
//           <div className="max-w-6xl mx-auto text-center">
//             <h2 className="text-[29px] font-bold text-[#335c98] mb-16 poppins-regular">
//               Other Products
//             </h2>
//             <Swiper
//               modules={[Navigation, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
//               spaceBetween={15}
//               slidesPerView={1}
//               navigation
//               scrollbar={{ draggable: true }}
//               breakpoints={{
//                 640: { slidesPerView: -1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {relatedProducts.map((product, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="flex flex-col items-center cursor-pointer">
//                     <Link href={product.link} passHref>
//                       <Image
//                         src={product.image}
//                         alt={product.title}
//                         width={220}
//                         height={250}
//                         className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
//                       />
//                       <h3 className="mt-4 text-xl font-semibold text-[#335c98] arimo">
//                         {product.title}
//                       </h3>
//                     </Link>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;

// THIS CODE IS ALL FINISHES STRUCTURE

"use client";
import React, { useState, useEffect } from "react";
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
import messurement from "../../../assets/product/profile/T_profile/TENG.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

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
    <section className=" relative ">
      <div className="relative">
        <Image
          className=" h-[22rem] md:h-[40rem] w-full object-cover"
          src={bg}
          alt="T Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-14  md:pt-0 text-[#19355e] text-5xl md:text-[5rem]  poppins-regular">
          T Profile
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
          <p>
            Discover the wide range of stainless steel T profiles offered by
            Rajgure Steel Industries. Our T profiles are offered in vibrant
            seven different colors best suited to satisfy your home decor wish.
            The profiles being durable and strong can be used for structural
            support and decoration.
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
                  6 x 6 | 8 x 5 | 10 x 5 | 12 x 5 | 15 x 5 | 18 x 5 | 20 x 5 |
                  25 x 5
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
        <div className="container mx-auto my-14 hidden md:block">
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

        <main className="flex flex-col justify-center text-justify gap-20 translate-y-14 ">
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
              <p className="text-gray-500 nunito">
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
              <p className="text-gray-500 nunito">
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
              <p className="text-gray-500 nunito">
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
