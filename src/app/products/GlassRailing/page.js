// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { FadeDown } from "../../components/utility/animation.jsx";
// import { motion } from "framer-motion";
// import bg from "../../assets/product/glassrailingSystems/bg.webp";
// import A50 from "../../assets/product/glassrailingSystems/products/IMPERIO-A50-BLACK.webp";
// import L50 from "../../assets/product/glassrailingSystems/products/blackPro.webp";
// import semiSmart from "../../assets/product/glassrailingSystems/products/IMPERIO-D75-BLACK.webp";
// import dot from "../../assets/product/glassrailingSystems/products/IMPERIO-Dot-Black.webp";
// import Lux250 from "../../assets/product/glassrailingSystems/products/IMPERIO-T200-BLACK.webp";
// import sleek17 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH.webp";
// import Led40 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-7.webp";
// import oval60 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-4.webp";
// import buildingImg from "../../assets/product/glassrailingSystems/gallery/building.webp";
// import penthuseImg from "../../assets/product/glassrailingSystems/gallery/penthouse.webp";
// import stairsImg from "../../assets/product/glassrailingSystems/gallery/stairs.webp";
// import balconyImg from "../../assets/product/glassrailingSystems/gallery/balcony.webp";

// const products = [
//   {
//     id: 1,
//     name: "Imperio",
//     model: "ACE-50 Base",
//     common: "Specifications",
//     image: A50,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Imperio",
//     model: "Pro-50 Base",
//     common: "Specifications",
//     image: L50,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Imperio",
//     model: "Semi Smart-75 Base",
//     common: "Specifications",
//     image: semiSmart,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Imario",
//     model: "Dot-50 Base",
//     common: "Specifications",
//     image: dot,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Imperio",
//     model: "LUX-250 Base",
//     common: "Specifications",
//     image: Lux250,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "Imperio",
//     model: "Sleek-17 Handrail",
//     common: "Specifications",
//     image: sleek17,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 7,
//     name: "Imperio",
//     model: " LED-40 Handrail",
//     common: "Specifications",
//     image: oval60,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Imperio",
//     model: "Oval-60 Handrail",
//     common: "Specifications",
//     image: Led40,
//     specs: [
//       { title: "Colors", value: "4 colours Available" },
//       { title: "Glass Thickness", value: "17 mm to 21 mm" },
//       { title: "Frame Material", value: "Aluminium" },
//       {
//         title: "Visit Website",
//         value:
//           "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
//       },
//     ],
//   },
// ];

// const faqs = [
//   {
//     question: "What materials are used for glass railings?",
//     answer:
//       "Glass railings are typically made from tempered glass and aluminum or stainless steel for the frames, ensuring durability and safety.",
//   },
//   {
//     question: "Are glass railings safe for children?",
//     answer:
//       "Yes, glass railings are safe for children when installed properly. They provide a clear barrier that prevents falls while maintaining visibility.",
//   },
//   {
//     question: "How do I clean glass railings?",
//     answer:
//       "Cleaning glass railings is easy. Use a soft cloth and a mild glass cleaner to remove smudges and dirt without scratching the surface.",
//   },
//   {
//     question: "Can glass railings withstand harsh weather?",
//     answer:
//       "Yes, tempered glass is designed to withstand harsh weather conditions, making it suitable for both indoor and outdoor applications.",
//   },
//   {
//     question: "Do glass railings require a lot of maintenance?",
//     answer:
//       "No, glass railings are low maintenance. Regular cleaning is all that's needed to keep them looking great.",
//   },
// ];

// const features = [
//   {
//     title: "Elegant Design",
//     description:
//       "Elevate your home with our elegant glass railing systems, expertly crafted to complement contemporary architecture. These sleek and stylish railings enhance safety and durability, offering peace of mind while improving your property’s aesthetic appeal. Perfect for balconies, staircases, and patios, our diverse range of glass railing variants provides unobstructed views and allows natural light to flow freely. Choose from frameless and semi-frameless options tailored to your design preferences. Transform your living spaces with our premium glass railings that blend modern sophistication with practical functionality. Experience the ideal combination of beauty and safety, making our high-quality glass railing solutions the perfect addition to your home.",
//   },
//   {
//     title: "Unobstructed Views",
//     description:
//       "Experience the beauty of unobstructed views with our premium glass railing systems, designed to seamlessly integrate with your home’s architecture. Our sleek and stylish railings provide a perfect balance of safety and elegance, allowing natural light to flood your space while maintaining an open and airy feel. Ideal for balconies, staircases, and patios, our glass railings create a stunning visual impact without compromising on security. Choose from a variety of styles, including frameless and semi-frameless options, to suit your unique design preferences. With our high-quality glass railing solutions, you can enjoy breathtaking views while ensuring the safety of your loved ones. Transform your living spaces into a modern oasis with our elegant glass railings, where beauty meets functionality. Elevate your home’s aesthetic and enjoy the freedom of unobstructed views today!",
//   },
//   {
//     title: "Easy Installation",
//     description:
//       "Transform your space effortlessly with our easy installation glass railing systems, designed for both DIY enthusiasts and professionals. Featuring straightforward instructions and all necessary hardware, these railings allow for a quick and hassle-free setup, perfect for enhancing your balcony, staircase, or patio. Enjoy a sleek, modern look without extensive renovations, while our customizable options enable you to tailor the design to your unique style. With robust safety features and durable materials, our railings provide both peace of mind and aesthetic appeal, making them the ideal choice for any home improvement project. Elevate your space today with our innovative glass railing solutions!",
//   },
//   {
//     title: "Weather Resistance",
//     description:
//       "Protect your outdoor spaces with our weather-resistant glass railing systems, expertly designed to maintain beauty and safety year-round. Crafted from high-quality materials, these railings withstand rain, snow, and intense sunlight, resisting corrosion, fading, and damage from harsh weather conditions. For those seeking reliable solutions, our durable outdoor railings ensure both elegance and functionality in any climate, handling air pressure and wind loads with ease. Search for weatherproof glass railings or all-weather glass railing systems to find the perfect fit for your home. Our low-maintenance railings enhance your property’s aesthetic appeal while providing long-lasting safety and security. Invest in our weather-resistant glass railings and enjoy peace of mind, knowing your investment is safeguarded against the elements. Transform your outdoor spaces into a year-round haven with railings that seamlessly combine style, resilience, and superior structural integrity!",
//   },
//   {
//     title: "Customizable Options",
//     description:
//       "Discover the beauty of our customizable glass railing systems, designed to fit your unique style and needs. With a variety of options, including frameless glass railings, semi-frameless designs, and color finishes, you can create the perfect look for your space. Our modern customizable glass railings allow you to choose from various styles, heights, and accessories to enhance your balcony, staircase, or patio. Search for tailored glass railings or personalized glass designs to find solutions that reflect your aesthetic preferences. Each railing system is crafted with durability in mind, ensuring they stand the test of time while maintaining their elegance. Elevate your property’s appeal with our versatile and stylish glass railing solutions. Transform your home with custom glass railings that perfectly blend functionality and design, making your outdoor and indoor spaces truly unique!",
//   },
// ];

// export default function Page() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [expandedProduct, setExpandedProduct] = useState(null);

//   const toggleProductSpecs = (productId) => {
//     setExpandedProduct(expandedProduct === productId ? null : productId);
//   };

//   const [expandedIndex, setExpandedIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   const [selectedImage, setSelectedImage] = useState(bg); // Initialize with the main image

//   const images = [
//     {
//       src: buildingImg,
//       alt: "Modern Minimalist Kitchen Design",
//     },
//     {
//       src: penthuseImg,
//       alt: "Modern Kitchen Renovation",
//     },
//     {
//       src: stairsImg,
//       alt: "Minimalist Kitchen Remodel",
//     },
//     {
//       src: balconyImg,
//       alt: "Minimalist Dining Room Design",
//     },
//   ];

//   return (
//     <section className="relative">
//       <div className="relative h-[25rem] md:h-[30rem] w-full">
//         <Image
//           className="h-full w-full object-cover"
//           src={bg}
//           alt="Glass Railing Systems"
//           layout="fill"
//           priority
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-45" />
//         <motion.div
// variants={FadeDown(0.01)}
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true }}
//           className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4"
//         >
//           <h1 className="text-3xl md:text-5xl text-white opacity-90 din-semibold mb-6 tracking-tight">
//             Glass Railing Systems
//           </h1>
//           <p className="text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify mb-12 din-light">
//             "Enhance your space with our sleek seamless glass railing systems,
//             perfect for home balconies. These stylish railings provide safety
//             and unobstructed views, ideal for both residential and commercial
//             settings. Upgrade your decor with our elegant glass railing
//             solutions!"
//           </p>
//         </motion.div>
//       </div>
//       <main className="flex flex-col overflow-hidden mx-auto container">
//         <article className="container mx-auto">
//           <div className="py-6 xl:mt-[4rem]">
//             <div className="col-12 flex justify-center mx-auto p-2 md:p-0">
//               <div className="relative  h-52 w-80 md:h-[35rem] md:w-[45rem] xl:w-[62rem]">
//                 <Image
//                   className="border-[1.5rem] mx-auto md:border-[2rem] lg:border-[3rem] border-slate-700 object-cover"
//                   alt="Sea view "
//                   src={selectedImage}
//                   layout="fill" // Use layout fill for responsive height
//                   objectFit="cover" // Ensures the image covers the box
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="thumb-row">
//             <div className="col-12">
//               <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto p-4 md:p-0 gap-4 md:ml-3 lg:ml-40 md:mx-[22rem]">
//                 {images.map((image, index) => (
//                   <div key={index} className="thumb-container cursor-pointer">
//                     <Image
//                       className=" h-[9rem] w-[10rem] mx-auto md:h-[200px] md:w-[200px] md:translate-x-28 hover:scale-105 hover:translate-y-4 transition-transform duration-700 rounded-3xl object-cover"
//                       alt={image.alt}
//                       src={image.src}
//                       // Adjust the height as needed
//                       onClick={() => setSelectedImage(image.src)}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </article>
//         <div className="container mx-auto pl-7 md:pl-0 lg:px-14 ml-4 md:ml-10 lg:ml-4 xl:ml-[5.5rem] py-12 overflow-hidden">
//           <h2 className="text-4xl text-primary mb-8 din-semibold">Products</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative ">
//             {products.map((product) => (
//               <li
//                 key={product.id}
//                 className="bg-white h-full w-[18rem] rounded-lg relative shadow-md overflow-hidden"
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   className="w-[18rem] h-[15rem] relative object-cover"
//                 />
//                 <div className="flex justify-between items-center pl-2">
//                   <h3 className="text-base din-regular text-primary">
//                     {product.name}
//                   </h3>
//                   <h3 className="text-xs din-regular text-primary pr-2">
//                     {product.model}
//                   </h3>
//                 </div>

//                 <div className="pl-2">
//                   <div className="flex justify-between items-center mb-4 ">
//                     <h3 className="text-lg din-regular text-secondary">
//                       {product.common}
//                     </h3>
//                     <button
//                       onClick={() => toggleProductSpecs(product.id)}
//                       aria-expanded={expandedProduct === product.id}
//                       aria-controls={`specs-${product.id}`}
//                       className="text-2xl pr-4 font-bold focus:outline-none transition-colors duration-200 hover:text-primary"
//                     >
//                       {expandedProduct === product.id ? "-" : "+"}
//                     </button>
//                   </div>
//                   {expandedProduct === product.id && (
//                     <ul id={`specs-${product.id}`} className="mt-2 space-y-1">
//                       {product.specs.map((spec, index) => (
//                         <li
//                           key={index}
//                           className="text-sm raleway text-gray-800"
//                         >
//                           <strong className=" din-semibold text-primary">
//                             {spec.title}:{" "}
//                           </strong>
//                           <span
//                             dangerouslySetInnerHTML={{ __html: spec.value }}
//                           />
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* feature open */}
//         <section className="container mx-auto py-12 px-4 lg:px-14 overflow-hidden">
//           <h2 className="text-3xl md:text-4xl  din-semibold text-primary text-center mb-8">
//             Features of Glass Railing Systems
//           </h2>

//           <div className="flex flex-col lg:grid lg:grid-cols-5 justify-center items-center mb-6 space-y-4 lg:space-y-0">
//             {/* Feature Buttons */}
//             <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4 w-full md:w-[55%] lg:col-span-5">
//               {features.map((feature, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`py-2 px-2 md:px-4 md:py-2 rounded-lg transition-transform duration-300 din-regular hover:scale-105 outline-none w-full md:w-auto text-center ${
//                     activeIndex === index
//                       ? "bg-[#335c98] text-white"
//                       : "bg-gray-300 text-gray-800"
//                   }`}
//                 >
//                   {feature.title}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Feature Description */}
//           <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300">
//             <h3 className="text-base md:text-2xl din-semibold text-primary">
//               {features[activeIndex].title}
//             </h3>
//             <p className="text-xs md:text-base mt-4 text-secondary din-regular">
//               {features[activeIndex].description}
//             </p>
//           </div>
//         </section>

//         {/* feature close */}

// {/* FAQ open */}
// <section className="container mx-auto py-12 p-4 lg:p-24 overflow-hidden">
//   <h2 className="text-4xl din-semibold text-primary text-center mb-8">
//     Frequently Asked Questions
//   </h2>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {faqs.map((faq, index) => (
//       <div key={index} className="bg-white shadow-lg rounded-lg p-6">
//         <button
//           onClick={() => toggleFAQ(index)}
//           className="flex justify-between items-center w-full text-left din-regular text-primary  focus:outline-none"
//         >
//           <span>{faq.question}</span>
//           <span className="text-lg">
//             {expandedIndex === index ? "-" : "+"}
//           </span>
//         </button>
//         {expandedIndex === index && (
//           <div className="mt-4 text-secondary raleway">
//             <p>{faq.answer}</p>
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </section>
// {/* FAQ close */}
//       </main>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FadeLeft, FadeRight } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import Link from "next/link";

// Assuming these imports are available in your project
import bg from "../../assets/product/glassrailingSystems/bg.webp";
import A50 from "../../assets/product/glassrailingSystems/products/IMPERIO-A50-BLACK.webp";
import L50 from "../../assets/product/glassrailingSystems/products/blackPro.webp";
import semiSmart from "../../assets/product/glassrailingSystems/products/IMPERIO-D75-BLACK.webp";
import dot from "../../assets/product/glassrailingSystems/products/IMPERIO-Dot-Black.webp";
import Lux250 from "../../assets/product/glassrailingSystems/products/IMPERIO-T200-BLACK.webp";
import sleek17 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH.webp";
import Led40 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-7.webp";
import oval60 from "../../assets/product/glassrailingSystems/products/handrail/BLACK-FINISH-4.webp";
import buildingImg from "../../assets/product/glassrailingSystems/gallery/building.webp";
import penthuseImg from "../../assets/product/glassrailingSystems/gallery/penthouse.webp";
import stairsImg from "../../assets/product/glassrailingSystems/gallery/stairs.webp";
// import balconyImg from "../../assets/product/glassrailingSystems/gallery/balcony.webp";

const products = [
  {
    id: 1,
    name: "Imperio",
    model: "ACE-50 Base",
    common: "Specifications",
    image: A50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 2,
    name: "Imperio",
    model: "Pro-50 Base",
    common: "Specifications",
    image: L50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 3,
    name: "Imperio",
    model: "Semi Smart-75 Base",
    common: "Specifications",
    image: semiSmart,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 4,
    name: "Imperio",
    model: "Dot-50 Base",
    common: "Specifications",
    image: dot,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 5,
    name: "Imperio",
    model: "LUX-250 Base",
    common: "Specifications",
    image: Lux250,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 6,
    name: "Imperio",
    model: "Sleek-17 Handrail",
    common: "Specifications",
    image: sleek17,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 7,
    name: "Imperio",
    model: " LED-40 Handrail",
    common: "Specifications",
    image: oval60,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
  {
    id: 8,
    name: "Imperio",
    model: "Oval-60 Handrail",
    common: "Specifications",
    image: Led40,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      {
        title: "Visit Website",
        value:
          "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>",
      },
    ],
  },
];

const faqData = [
  {
    question: "What materials are used for glass railings?",
    answer:
      "Glass railings are typically made from tempered glass and aluminum or stainless steel for the frames, ensuring durability and safety.",
  },
  {
    question: "Are glass railings safe for children?",
    answer:
      "Yes, glass railings are safe for children when installed properly. They provide a clear barrier that prevents falls while maintaining visibility.",
  },
  {
    question: "How do I clean glass railings?",
    answer:
      "Cleaning glass railings is easy. Use a soft cloth and a mild glass cleaner to remove smudges and dirt without scratching the surface.",
  },
  {
    question: "Can glass railings withstand harsh weather?",
    answer:
      "Yes, tempered glass is designed to withstand harsh weather conditions, making it suitable for both indoor and outdoor applications.",
  },
  {
    question: "Do glass railings require a lot of maintenance?",
    answer:
      "No, glass railings are low maintenance. Regular cleaning is all that's needed to keep them looking great.",
  },
];

const features = [
  {
    title: "Elegant Design",
    description:
      "Elevate your home with our elegant glass railing systems, expertly crafted to complement contemporary architecture. These sleek and stylish railings enhance safety and durability, offering peace of mind while improving your property's aesthetic appeal.",
  },
  {
    title: "Unobstructed Views",
    description:
      "Experience the beauty of unobstructed views with our premium glass railing systems, designed to seamlessly integrate with your home's architecture. Our sleek and stylish railings provide a perfect balance of safety and elegance, allowing natural light to flood your space while maintaining an open and airy feel.",
  },
  {
    title: "Easy Installation",
    description:
      "Transform your space effortlessly with our easy installation glass railing systems, designed for both DIY enthusiasts and professionals. Featuring straightforward instructions and all necessary hardware, these railings allow for a quick and hassle-free setup.",
  },
  {
    title: "Weather Resistance",
    description:
      "Protect your outdoor spaces with our weather-resistant glass railing systems, expertly designed to maintain beauty and safety year-round. Crafted from high-quality materials, these railings withstand rain, snow, and intense sunlight, resisting corrosion, fading, and damage from harsh weather conditions.",
  },
  {
    title: "Customizable Options",
    description:
      "Discover the beauty of our customizable glass railing systems, designed to fit your unique style and needs. With a variety of options, including frameless glass railings, semi-frameless designs, and color finishes, you can create the perfect look for your space.",
  },
];

const heroSlides = [
  {
    image: penthuseImg,
    title: "Elegant Glass Railings",
    description:
      "Elevate your decor with our modern glass railings, combining style and safety for a sleek, decorative touch in any design.",
  },
  {
    image: buildingImg,
    title: "Durable Glass Railing Systems",
    description:
      "Explore our durable glass railing systems, designed to elevate your outdoor spaces while providing unobstructed views and maximum safety.",
  },
  {
    image: stairsImg,
    title: "Customizable Designs",
    description:
      "Create your perfect look with our customizable glass railings, featuring modern designs that enhance any space while ensuring safety and style.",
  },
];

export default function Component() {
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const toggleProductSpecs = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [expandedFaq, setExpandedFaq] = useState(0);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className=" min-h-screen">
      {/* Hero Section with Carousel */}
      {/* <section className="relative  bg-gray-800 h-[40rem] overflow-hidden">
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
              layout="fill"
              objectFit="cover"
              className="opacity-50"
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
              className="container mx-auto px-4 h-full flex items-center"
            >
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="w-1/2 pr-14"
              >
                <h1 className="text-5xl din-semibold text-white mb-4">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl din-regular text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
              <motion.div
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="w-1/2"
              >
                <div className="relative w-full h-[32rem] flex mt-14 ml-24">
                  <Image
                    src={heroSlides[nextSlide].image}
                    alt={heroSlides[nextSlide].title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section> */}
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
        layout="fill"
        objectFit="cover"
        className="opacity-50"
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
        className="container mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0"
      >
        {/* Left Side Text */}
        <motion.div
          variants={FadeRight(0.3)}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center items-start p-4  md:pr-14"
        >
          <h1 className=" text-3xl md:text-5xl din-semibold text-white mb-2 md:mb-4  ">
            {heroSlides[currentSlide].title}
          </h1>
          <p className=" text-[1rem] text-justify md:text-xl din-regular text-gray-200">
            {heroSlides[currentSlide].description}
          </p>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          variants={FadeLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="relative h-[20rem] w-full  md:w-full  md:h-[32rem] flex  md:mt-24 ml-0 md:ml-24"
        >
          <Image
            src={heroSlides[nextSlide].image}
            alt={heroSlides[nextSlide].title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>


      <main className=" container overflow-hidden mx-auto">
        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className=" text-3xl md:text-5xl din-semibold text-primary mb-8 text-center">
              Our Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 rounded-lg p-6 shadow-md flex justify-between flex-col flex-grow"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <div className="text-center">
                    <h3 className="text-xl din-medium text-primary">
                      {product.name}
                    </h3>
                    <p className="text-secondary text-sm">{product.model}</p>
                  </div>
                  <div className="mt-4">
                    <div className="flex  justify-between items-center">
                      <span className=" din-medium text-primary">
                        {product.common}
                      </span>
                      <button
                        onClick={() => toggleProductSpecs(product.id)}
                        className="text-primary focus:outline-none"
                      >
                        {expandedProduct === product.id ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </button>
                    </div>
                    <AnimatePresence>
                      {expandedProduct === product.id && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.5 }}
                          className="mt-2 space-y-2"
                        >
                          {product.specs.map((spec, index) => (
                            <li key={index} className="text-sm">
                              <strong className=" din-semibold text-primary">
                                {spec.title}:
                              </strong>{" "}
                              <span
                                dangerouslySetInnerHTML={{ __html: spec.value }}
                              />
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center ">
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

        {/* Features Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl din-semibold text-primary mb-8 text-center">
              Glass Railing Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group"
                >
                  <h3 className="text-xl din-semibold text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-secondary">{feature.description}</p>
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-[#335c98] shadow-xl transform -translate-x-full transition-transform duration-700 ease-in-out group-hover:translate-x-0"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="py-16 px-4 "
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl din-semibold mb-8 text-center text-primary">
              Frequently Asked Questions
            </h2>
            <motion.div className="space-y-4 ">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <motion.button
                    className="w-full text-left p-4 focus:outline-none"
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? index : index)
                    }
                  >
                    <div className="flex justify-between items-center">
                      <span className="din-semibold text-primary">
                        {faq.question}
                      </span>
                      <motion.span
                        animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown />
                      </motion.span>
                    </div>
                  </motion.button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFaq === index ? "auto" : 0,
                      opacity: expandedFaq === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-gray-50 din-regular text-sm text-secondary">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
