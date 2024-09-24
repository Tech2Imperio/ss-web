// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import wallImg from "../../../assets/product/profile/T_profile/wall.webp";
// // import upofile from "../../../assets/product/profile/U_profile/Uprofile.webp";
// import Tprofile from "../../../assets/product/profile/T_profile/Tprofile.webp";
// import uprofiles from "../../../assets/product/profile/U_profile/uprofiles.webp";
// import LProfile from "../../../assets/RelatedProducts/LProfile.webp";
// import fluted from "../../../assets/RelatedProducts/fluted.webp";
// import customized from "../../../assets/RelatedProducts/customized.webp";
// import CProfile from "../../../assets/RelatedProducts/CProfile.webp";
// import bg from "../../../assets/product/profile/T_profile/bg.webp";
// import { useInView } from "react-intersection-observer";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Link from "next/link";

// const page = () => {
//   const data = [
//     {
//       thickness: "0.6~2.0 mm",
//       finishes: "Mirror | Hairline | Bead Blasr % any More",
//       colors: "7 colors",
//       grade: "304",
//       productType: "T Profile",
//       size: "U6x6x6 to U10x100x10",
//       length: "2440mm | 3050mm",
//     },
//   ];
// const relatedProducts = [
//   {
//     title: "T Profile",
//     image: wallImg,
//     link: "/products/profile/tProfile",
//   },
//   {
//     title: "L Profile",
//     image: LProfile,
//     link: "/products/profile/lProfile",
//   },
//   {
//     title: "Fluted Panel",
//     image: fluted,
//     link: "/products/profile/flutedPanel",
//   },
//   {
//     title: "C Profile",
//     image: CProfile,
//     link: "/products/profile/cProfile",
//   },
//   {
//     title: "Custom Profile",
//     image: customized,
//     link: "/products/profile/customProfile",
//   },
// ];

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
//           alt="U Profile"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center pt-24 md:pt-0 text-[#335c98] text-5xl md:text-[5rem] font-bold">
//           U Profile
//         </h1>
//       </div>

//       <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
//         <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
//           <p>
// Discover the unmatched versatility of stainless steel U profiles
// from Rajgure Steel Industries. Our U profiles, available in seven
// stunning colors, are designed to elevate your home’s aesthetic
// appeal while providing exceptional durability. These robust profiles
// are perfect for a wide range of applications, from structural
// reinforcements to modern decorative accents, effortlessly blending
// functionality with design.
//           </p>
//           <p>
// Incorporating U profiles into your home interior can create visually
// striking spaces with a contemporary edge. Their distinctive U-shape
// facilitates seamless integration into furniture, shelving, and
// architectural elements. Boasting excellent corrosion resistance and
// lasting durability, our stainless steel U profiles are the perfect
// choice for projects where strength, style, and longevity are
// paramount.
//           </p>
//           {/* <p>
//           Discover how Rajgure Steel Industries can elevate your designs with
//           high-quality T profiles that blend seamlessly with your vision!
//         </p> */}
//         </div>
//         <div>
//           <div className="flex flex-col md:flex-row justify-center items-start md:mb-14 lg:mb-0">
//             {/* Left: Image */}
//             <div className=" md:w-[2rem]lg:w-[50%]">
//               <Image
//                 className="object-cover h-[20rem] w-[25rem] md:h-[25rem] md:w-auto md:pt-28 lg:h-[35rem] lg:w-full lg:pt-0"
//                 src={uprofiles}
//                 alt="U-profile"
//               />
//             </div>

//             {/* Right: Specification */}
//             <div className=" p-4  md:w-[45%] flex flex-col justify-centre">
//               <h2 className="text-[25px] text-center p-4 text-[#335c98] montserrat">
//                 Stainless Steel U Profile Specifications
//               </h2>

//               <table className="border-collapse w-full">
//                 <tbody className="text-[#0A2540] text-left">
//                   {data.map((item, index) => (
//                     <React.Fragment key={index}>
//                       <tr className="text-left">
//                         <th className="align-top border border-[#ddd] p-2">
//                           Thickness
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.thickness}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd] p-2">
//                           Finishes
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.finishes}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd] p-2">
//                           Colours
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.colors}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd] p-2">
//                           Grade
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.grade}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd] p-2">
//                           Product Type
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.productType}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd] p-2">
//                           Size
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.size}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="align-top border border-[#ddd]  p-2">
//                           Length
//                         </th>
//                         <td className="border border-[#ddd] text-[#0A2540] p-2">
//                           {item.length}
//                         </td>
//                       </tr>
//                     </React.Fragment>
//                   ))}
//                 </tbody>
//               </table>
//               <h5 className=" text-base text-[#335c98] montserrat p-2  ">
//                 Note : Customization as per size can be done.
//               </h5>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
//           {/* Hero Section */}

//           {/* What is Section */}
//           <div className="w-full py-4 md:py-20 fade-in">
//             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
//               <div className="lg:w-1/2 p-6">
//                 <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 montserrat">
//                   What is Stainless Steel T Profile?
//                 </h2>
//                 <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed dm-sans">
// A Stainless Steel U Profile is a metal profile distinguished
// by its U-shaped cross-section, offering exceptional
// durability, versatility, and strength for various applications
// in construction and interior design. These profiles are highly
// sought after for their sleek aesthetic appeal, corrosion
// resistance, and ability to seamlessly integrate into
// architectural features like shelving, partitioning, and
// structural reinforcements. The stainless steel U profile is a
// popular choice for modern designs, delivering both
// functionality and style in commercial and residential projects
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
//               <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-6 montserrat">
//                 Properties of Stainless Steel T Profiles
//               </h2>
//               <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 dm-sans">
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
//                   <th className="py-6 px-4 text-xl md:text-[29px] text-[#335c98] montserrat">
//                     Benefits of Stainless Steel T Profiles
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] montserrat whitespace-nowrap">
//                     1. Corrosion Resistance
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 dm-sans">
//                     Stainless steel T profiles are highly resistant to rust and
//                     corrosion, ideal for environments with exposure to moisture,
//                     chemicals, or harsh weather conditions.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
//                     2. Durability
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 dm-sans">
//                     Known for their strength and long lifespan, stainless steel
//                     T profiles can last over 100 years, making them a
//                     maintenance-free solution for various projects.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
//                     3. Aesthetic Appeal
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 dm-sans">
//                     With their sleek, modern look and minimal upkeep, stainless
//                     steel T profiles enhance the aesthetics of commercial and
//                     residential structures.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] montserrat whitespace-nowrap">
//                     4. Versatility
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 dm-sans">
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
//             <h2 className="text-2xl font-semibold text-[#335c98] montserrat mb-4">
//               Benefits of Stainless Steel T Profiles
//             </h2>
//             <ul className="space-y-6 text-justify ">
//               <li className="text-base text-gray-500 montserrat">
//                 <strong className=" text-[#335c98]">
//                   1. Corrosion Resistance:
//                 </strong>{" "}
//                 Stainless steel T profiles are highly resistant to rust and
//                 corrosion, ideal for environments with exposure to moisture,
//                 chemicals, or harsh weather conditions.
//               </li>
//               <li className="text-base text-gray-500 montserrat">
//                 <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
//                 Known for their strength and long lifespan, stainless steel T
//                 profiles can last over 100 years, making them a maintenance-free
//                 solution for various projects.
//               </li>
//               <li className="text-base text-gray-500  montserrat">
//                 <strong className=" text-[#335c98]">
//                   3. Aesthetic Appeal:
//                 </strong>{" "}
//                 With their sleek, modern look and minimal upkeep, stainless
//                 steel T profiles enhance the aesthetics of commercial and
//                 residential structures.
//               </li>
//               <li className="text-base text-gray-500  montserrat">
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
//               <h2 className="text-xl font-semibold text-[#335c98] montserrat mb-4 text-center">
//                 Architectural and Construction Applications.
//               </h2>
//               <p className="text-gray-500 dm-sans">
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
//               <h2 className="text-xl font-semibold text-[#335c98] montserrat mb-4 text-center">
//                 Furniture and Shelving.
//               </h2>
//               <p className="text-gray-500 dm-sans">
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
//               <h2 className="text-xl font-semibold text-center text-[#335c98] montserrat mb-4">
//                 Automotive and Marine Industry.
//               </h2>
//               <p className="text-gray-500 dm-sans">
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
//             <h2 className="text-[29px] font-bold text-[#335c98] mb-16 montserrat">
//               Related Products
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

// sing clolour image change code

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
// import Umessurement from "../../../assets/product/profile/U_profile/Umessure.png";
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

//   const relatedProducts = [
//     {
//       title: "T Profile",
//       image: wallImg,
//       link: "/products/profile/tProfile",
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
//           alt="U Profile"
//         />
//         <h1 className="absolute inset-0 flex items-center justify-center pt-24 md:pt-0 text-[#335c98] text-5xl md:text-[5rem] font-bold poppins-regular">
//           U Profile
//         </h1>
//       </div>

//       <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
//         <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
//           <p>
// Discover the unmatched versatility of stainless steel U profiles
// from Rajgure Steel Industries. Our U profiles, available in seven
// stunning colors, are designed to elevate your home’s aesthetic
// appeal while providing exceptional durability. These robust profiles
// are perfect for a wide range of applications, from structural
// reinforcements to modern decorative accents, effortlessly blending
// functionality with design.
//           </p>
//         </div>

//         {/* new model open */}
//         <section className="min-h-screen bg-gray-50 py-10">
//           <div className="container mx-auto px-6 lg:px-20">
//             {/* <h1 className="text-center text-5xl font-bold text-[#335c98] mb-10">T Profile</h1> */}

//             <div className="flex flex-col lg:flex-row items-center justify-between gap-16 py-8">
//               {/* Color Preview Section */}
//               <div className="relative hover:shadow-xl transition-shadow duration-500 ease-in-out">
//                 <Image
//                   className="w-[350px] h-[220px] lg:w-[500px] lg:h-[300px] rounded-2xl shadow-xl transform transition-all duration-700 hover:scale-110 hover:rotate-2"
//                   src={colorImages[selectedColor.name]}
//                   alt={selectedColor.name}
//                   width={500}
//                   height={300}
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                   <h3 className="text-white text-xl font-bold">
//                     Selected: {selectedColor.name}
//                   </h3>
//                 </div>
//               </div>

//               {/* Color Selector */}
//               <div className="flex flex-col items-center text-center lg:text-left">
//                 <h2 className="text-3xl font-bold text-[#335c98] mb-6">
//                   Choose Your Perfect Color
//                 </h2>
//                 <div className="flex flex-wrap justify-center gap-5 mb-6">
//                   {colors.map((color) => (
//                     <div
//                       key={color.name}
//                       onClick={() => setSelectedColor(color)}
//                       className={`cursor-pointer w-14 h-14 rounded-full border-4 transform transition-transform duration-300 ${
//                         selectedColor.name === color.name
//                           ? "border-[#335c98] scale-110"
//                           : "border-gray-300"
//                       }`}
//                       style={{ backgroundColor: color.hex }}
//                     />
//                   ))}
//                 </div>

//                 {/* Details Section */}
//                 <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl bg-white text-left">
//                   <div className="bg-[#335c98] text-white text-center p-4 rounded-t-lg">
//                     <h3 className="text-lg font-semibold">
//                       Selected Color Details
//                     </h3>
//                   </div>
//                   <table className="table-auto w-full text-sm text-left">
//                     <tbody>
//                       <tr>
//                         <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">
//                           Color
//                         </th>
//                         <td className="px-4 py-2">{selectedColor.name}</td>
//                       </tr>
//                       <tr>
//                         <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">
//                           Thickness
//                         </th>
//                         <td className="px-4 py-2">0.6 ~ 2.0 mm</td>
//                       </tr>
//                       <tr>
//                         <th className="px-4 py-2 bg-gray-50 font-medium text-[#335c98]">
//                           Size
//                         </th>
//                         <td className="px-4 py-2">T6 to T50 & more</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="p-4 bg-gray-100 text-gray-600 italic text-center">
//                     Customization for sizes available upon request.
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Finishes and Sizes Section */}
//             <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div className="text-left space-y-6">
//                 <h3 className="text-xl font-semibold text-[#335c98]">
//                   Finishes
//                 </h3>
//                 <p className="text-lg text-gray-600">
//                   Mirror | Hairline | Bead Blast | Straightline
//                 </p>

//                 <h3 className="text-xl font-semibold text-[#335c98]">
//                   Sizes <sub className="text-sm">mm</sub>{" "}
//                   <span className="text-base">- W x H</span>
//                 </h3>
//                 <p className="text-lg text-gray-600">
//                   6 x 6 | 8 x 5 | 10 x 5 | 12 x 5 | 15 x 5 | 18 x 5 | 20 x 5 |
//                   25 x 5
//                 </p>
//               </div>

//               {/* Dimensional Chart */}
//               <div className="relative">
//                 <Image
//                   className="rounded-lg shadow-lg bg-gra"
//                   src={Umessurement}
//                   alt="dimensional chart"
//                   width={450}
//                   height={250}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* new model colse */}

//         <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
//           {/* Hero Section */}

//           {/* What is Section */}
//           <div className="w-full py-4 md:py-20 fade-in">
//             <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center text-justify">
//               <div className="lg:w-1/2 p-6">
//                 <h2 className=" text-xl md:text-[27px]  text-[#335c98] mb-4 poppins-regular">
//                   What is Stainless Steel U Profile?
//                 </h2>
//                 <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
// A Stainless Steel U Profile is a metal profile distinguished
// by its U-shaped cross-section, offering exceptional
// durability, versatility, and strength for various applications
// in construction and interior design. These profiles are highly
// sought after for their sleek aesthetic appeal, corrosion
// resistance, and ability to seamlessly integrate into
// architectural features like shelving, partitioning, and
// structural reinforcements. The stainless steel U profile is a
// popular choice for modern designs, delivering both
// functionality and style in commercial and residential projects
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
//                 Properties of Stainless Steel U Profiles
//               </h2>
//               <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
// Stainless steel U profiles are versatile structural components
// widely used in construction and manufacturing. Known for their
// exceptional strength, corrosion resistance, and durability,
// these profiles are ideal for various applications, including
// framing, supports, and reinforcements. Available in different
// sizes and finishes, stainless steel U profiles offer excellent
// aesthetic appeal and longevity. Their lightweight yet robust
// nature makes them easy to handle and install, ensuring
// efficiency in projects. For optimal performance, choose
// high-quality stainless steel U profiles that meet your specific
// requirements.
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
//                     Benefits of Stainless Steel U Profiles
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     1. Corrosion Resistance
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Stainless steel U profiles excel in resisting rust and
//                     corrosion, making them ideal for outdoor and industrial
//                     applications. This property ensures they maintain structural
//                     integrity and appearance over time, reducing maintenance
//                     costs.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     2. Durability
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Known for their exceptional strength, stainless steel U
//                     profiles can withstand heavy loads and harsh conditions.
//                     Their durability makes them a reliable choice for
//                     construction and manufacturing projects, ensuring
//                     long-lasting performance.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     3. Aesthetic Appeal
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     With a sleek, polished finish, stainless steel U profiles
//                     add a modern and stylish look to any application. Their
//                     aesthetic appeal makes them perfect for both structural and
//                     decorative uses in architectural designs.
//                   </td>
//                 </tr>
//                 <tr className="border-t hover:bg-gray-100 transition-all duration-200">
//                   <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
//                     4. Versatility
//                   </td>
//                   <td className="py-6 px-6 text-base text-gray-500 nunito">
//                     Stainless steel U profiles are incredibly versatile,
//                     suitable for various applications ranging from framing and
//                     supports to machinery components. This adaptability makes
//                     them a popular choice in the steel industry, catering to
//                     diverse project needs.
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
//               Benefits of Stainless Steel U Profiles
//             </h2>
//             <ul className="space-y-6 text-justify ">
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   1. Corrosion Resistance:
//                 </strong>{" "}
//                 Stainless steel U profiles resist rust and corrosion, making
//                 them ideal for outdoor and industrial use while reducing
//                 maintenance costs.
//               </li>
//               <li className="text-base text-gray-500 poppins-regular">
//                 <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
//                 Their exceptional strength allows them to withstand heavy loads
//                 and harsh conditions, ensuring reliable performance in
//                 construction and manufacturing.
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">
//                   3. Aesthetic Appeal:
//                 </strong>{" "}
//                 With a sleek, polished finish, these profiles enhance the look
//                 of any application, suitable for both structural and decorative
//                 purposes..
//               </li>
//               <li className="text-base text-gray-500  poppins-regular">
//                 <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
//                 Stainless steel U profiles are adaptable for various uses, from
//                 framing and supports to machinery components, making them a
//                 favored choice in the steel industry.
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
//                 Stainless steel U profiles are essential in architecture and
//                 construction, offering strength, versatility, and aesthetic
//                 appeal. Ideal for framing and cladding, they provide durable,
//                 corrosion-resistant solutions for outdoor use and enhance modern
//                 designs in residential and commercial projects.
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
//                 Stainless steel U profiles are ideal for furniture and shelving
//                 applications, offering strength and stability for innovative
//                 designs. Their sleek finish adds a modern touch while providing
//                 durable, corrosion-resistant solutions for both residential and
//                 commercial spaces.
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
//                 Stainless steel U profiles are widely used in the automotive and
//                 marine industries for their strength and corrosion resistance.
//                 These profiles provide robust structural support, ensuring
//                 durability and reliability in harsh environments, making them an
//                 ideal choice for vehicles and marine applications.
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
import Umessurement from "../../../assets/product/profile/U_profile/Umessure.png";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

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
      <div className="relative -mt-32">
        <Image
          className=" h-[22rem] md:h-[40rem] w-full object-cover"
          src={bg}
          alt="U Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center pt-24 mt-28 md:pt-0 text-[#19355e] text-5xl md:text-[5rem]  poppins-regular">
          U Profile
        </h1>
      </div>

      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[20rem]">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-base text-slate-500 gap-4 dm-sans p-8">
          <p>
            Discover the unmatched versatility of stainless steel U profiles
            from Rajgure Steel Industries. Our U profiles, available in seven
            stunning colors, are designed to elevate your home’s aesthetic
            appeal while providing exceptional durability. These robust profiles
            are perfect for a wide range of applications, from structural
            reinforcements to modern decorative accents, effortlessly blending
            functionality with design.
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
                  What is Stainless Steel U Profile?
                </h2>
                <p className="text-gray-500 text-sm md:text-[1.10rem] leading-relaxed nunito">
                  A Stainless Steel U Profile is a metal profile distinguished
                  by its U-shaped cross-section, offering exceptional
                  durability, versatility, and strength for various applications
                  in construction and interior design. These profiles are highly
                  sought after for their sleek aesthetic appeal, corrosion
                  resistance, and ability to seamlessly integrate into
                  architectural features like shelving, partitioning, and
                  structural reinforcements. The stainless steel U profile is a
                  popular choice for modern designs, delivering both
                  functionality and style in commercial and residential project
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
                Properties of Stainless Steel U Profiles
              </h2>
              <p className="text-gray-500 text-sm  md:text-[1.10rem] leading-relaxed text-justify px-10 nunito">
                Stainless steel U profiles are versatile structural components
                widely used in construction and manufacturing. Known for their
                exceptional strength, corrosion resistance, and durability,
                these profiles are ideal for various applications, including
                framing, supports, and reinforcements. Available in different
                sizes and finishes, stainless steel U profiles offer excellent
                aesthetic appeal and longevity. Their lightweight yet robust
                nature makes them easy to handle and install, ensuring
                efficiency in projects. For optimal performance, choose
                high-quality stainless steel U profiles that meet your specific
                requirements.
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
                    Benefits of Stainless Steel U Profiles
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-sm md:text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    1. Corrosion Resistance
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Stainless steel U profiles excel in resisting rust and
                    corrosion, making them ideal for outdoor and industrial
                    applications. This property ensures they maintain structural
                    integrity and appearance over time, reducing maintenance
                    costs.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    2. Durability
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Known for their exceptional strength, stainless steel U
                    profiles can withstand heavy loads and harsh conditions.
                    Their durability makes them a reliable choice for
                    construction and manufacturing projects, ensuring
                    long-lasting performance.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    3. Aesthetic Appeal
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    With a sleek, polished finish, stainless steel U profiles
                    add a modern and stylish look to any application. Their
                    aesthetic appeal makes them perfect for both structural and
                    decorative uses in architectural designs.
                  </td>
                </tr>
                <tr className="border-t hover:bg-gray-100 transition-all duration-200">
                  <td className="py-6 px-6 text-2xl text-[#335c98] poppins-regular whitespace-nowrap">
                    4. Versatility
                  </td>
                  <td className="py-6 px-6 text-base text-gray-500 nunito">
                    Stainless steel U profiles are incredibly versatile,
                    suitable for various applications ranging from framing and
                    supports to machinery components. This adaptability makes
                    them a popular choice in the steel industry, catering to
                    diverse project needs.
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
                Stainless steel U profiles resist rust and corrosion, making
                them ideal for outdoor and industrial use while reducing
                maintenance costs.
              </li>
              <li className="text-base text-gray-500 poppins-regular">
                <strong className=" text-[#335c98]">2. Durability:</strong>{" "}
                Their exceptional strength allows them to withstand heavy loads
                and harsh conditions, ensuring reliable performance in
                construction and manufacturing.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">
                  3. Aesthetic Appeal:
                </strong>{" "}
                With a sleek, polished finish, these profiles enhance the look
                of any application, suitable for both structural and decorative
                purposes.
              </li>
              <li className="text-base text-gray-500  poppins-regular">
                <strong className=" text-[#335c98]">4. Versatility:</strong>{" "}
                Stainless steel U profiles are adaptable for various uses, from
                framing and supports to machinery components, making them a
                favored choice in the steel industry.
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
              <h2 className="text-xl font-semibold text-[#335c98] poppins-regular mb-4 text-center">
                Furniture and Shelving.
              </h2>
              <p className="text-gray-500 nunito">
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
              <h2 className="text-xl font-semibold text-center text-[#335c98] poppins-regular mb-4">
                Automotive and Marine Industry.
              </h2>
              <p className="text-gray-500 nunito">
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
