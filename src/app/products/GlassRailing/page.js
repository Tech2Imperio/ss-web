// "use client";
// import React from "react";
// import { FadeDown } from "../../components/utility/animation.jsx";
// import { motion } from "framer-motion";
// import bg from "../../assets/product/glassrailingSystems/bg.webp";
// import Image from "next/image";

// export default function page() {
//   return (
//     <section className=" relative">
//       <div className="relative h-[25rem] md:h-[30rem] w-full">
//         <Image
//           className="h-full w-full object-cover"
//           src={bg}
//           alt="Wire Rope Profile"
//           layout="fill"
//           priority
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-45" />
//         <motion.div
// variants={FadeDown(0.01)}
// initial="hidden"
// whileInView="visible"
// viewport={{ once: true }}
//           className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4 "
//         >
//           <h1 className=" text-3xl md:text-5xl text-white opacity-90 poppins-semibold mb-6 tracking-tight">
//             Glass Railing Systems
//           </h1>
//           <p className=" text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify raleway mb-12 ">
//             "Transform your bathroom with a sleek glass partition that combines
//             elegance with functionality. Our high-quality glass partitions
//             provide a modern, spacious feel while ensuring privacy and easy
//             maintenance. Enhance your bathroom's aesthetics with a solution
//             that’s both stylish and durable."
//           </p>
//         </motion.div>
//       </div>

//       <main className="flex flex-col overflow-hidden mx-auto container">
//         <div className="container mx-auto px-6 lg:px-64">
//           <h2 className=" text-4xl text-primary ">Products</h2>
//           <ul className=" grid grid-cols-4">
//             <li>
//               <Image src="" alt="">

//               </Image>
//             </li>

//             <li><Image src="" alt="">

//               </Image>
//             </li>

//             <li>
//               <Image src="" alt="">

//               </Image>
//             </li>

//             <li>
//               <Image src="" alt="">

//               </Image>
//             </li>

//             <li>
//               <Image src="" alt="">

//               </Image>
//             </li>

//             <li>
//               <Image src="" alt="">

//               </Image>
//             </li>
//           </ul>
//         </div>
//       </main>
//     </section>
//   );
// }

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

// const products = [
//   {
//     id: 1,
//     name: "Imperio ACE-50 Base",
//     common: "Specifications",
//     image: A50,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//       ,
//     ],
//   },
//   {
//     id: 2,
//     name: "Imperio Pro-50 Base",
//     common: "Specifications",
//     image: L50,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
//   {
//     id: 3,
//     name: "Imperio Semi Smart-75 Base",
//     common: "Specifications",
//     image: semiSmart,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//       ,
//     ],
//   },
//   {
//     id: 4,
//     name: "Imario Dot-50 Base",
//     common: "Specifications",
//     image: dot,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
//   {
//     id: 5,
//     name: "Imperio LUX-250 Base",
//     common: "Specifications",
//     image: Lux250,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
//   {
//     id: 6,
//     name: "Imperio Sleek-17 Handrail",
//     common: "Specifications",
//     image: sleek17,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
//   {
//     id: 7,
//     name: "Imperio LED-40 Handrail",
//     common: "Specifications",
//     image: oval60,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
//   {
//     id: 8,
//     name: "Imperio Oval-60 Handrail",
//     common: "Specifications",
//     image: Led40,
//     specs: [
//       "Colors: 4 colours Available",
//       "Glass Thickness: 17 mm to 21 mm",
//       "Frame Material: Aluminium",
//       "Click to visit: https://imperiorailing.vercel.app/products ",
//     ],
//   },
// ];

// export default function Page() {
//   const [expandedProduct, setExpandedProduct] = useState(null);

//   const toggleProductSpecs = (productId) => {
//     setExpandedProduct(expandedProduct === productId ? null : productId);
//   };

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
//            variants={FadeDown(0.01)}
//            initial="hidden"
//            whileInView="visible"
//            viewport={{ once: true }}
//         className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4">
//           <h1 className="text-3xl md:text-5xl text-white opacity-90 font-semibold mb-6 tracking-tight">
//             Glass Railing Systems
//           </h1>
//           <p className="text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify mb-12">
//             "Transform your space with our sleek glass railing systems that
//             combine elegance with functionality. Our high-quality glass railings
//             provide a modern, spacious feel while ensuring safety and easy
//             maintenance. Enhance your property's aesthetics with a solution
//             that's both stylish and durable."
//           </p>
//         </motion.div>
//       </div>

//       <main className="flex flex-col overflow-hidden mx-auto container">
//         <div className="container mx-auto pl-7 md:pl-0 lg:px-8 py-12">
//           <h2 className="text-4xl text-primary mb-8">Products</h2>
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
//             {products.map((product) => (
//               <li
//                 key={product.id}
//                 className="bg-white h-auto w-[20rem] rounded-lg relative shadow-md overflow-hidden"
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   className="w-[20rem] h-[20rem] relative object-cover"
//                 />
//                 <div className="flex justify-between items-center p-4">
//                   <h3 className="text-xl poppins-medium text-primary">
//                     {product.name}
//                   </h3>
//                 </div>

//                 <div className="p-4">
//                   <div className="flex justify-between items-center mb-2">
//                     <h3 className="text-lg poppins-regular text-secondary">
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
//                         <li key={index} className="text-sm raleway text-gray-800">
//                            {spec}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </main>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FadeDown } from "../../components/utility/animation.jsx";
import { motion } from "framer-motion";
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
import balconyImg from "../../assets/product/glassrailingSystems/gallery/balcony.webp";

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
    name: "Imario",
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

const faqs = [
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
      "Elevate your home with our elegant glass railing systems, expertly crafted to complement contemporary architecture. These sleek and stylish railings enhance safety and durability, offering peace of mind while improving your property’s aesthetic appeal. Perfect for balconies, staircases, and patios, our diverse range of glass railing variants provides unobstructed views and allows natural light to flow freely. Choose from frameless and semi-frameless options tailored to your design preferences. Transform your living spaces with our premium glass railings that blend modern sophistication with practical functionality. Experience the ideal combination of beauty and safety, making our high-quality glass railing solutions the perfect addition to your home.",
  },
  {
    title: "Unobstructed Views",
    description:
      "Experience the beauty of unobstructed views with our premium glass railing systems, designed to seamlessly integrate with your home’s architecture. Our sleek and stylish railings provide a perfect balance of safety and elegance, allowing natural light to flood your space while maintaining an open and airy feel. Ideal for balconies, staircases, and patios, our glass railings create a stunning visual impact without compromising on security. Choose from a variety of styles, including frameless and semi-frameless options, to suit your unique design preferences. With our high-quality glass railing solutions, you can enjoy breathtaking views while ensuring the safety of your loved ones. Transform your living spaces into a modern oasis with our elegant glass railings, where beauty meets functionality. Elevate your home’s aesthetic and enjoy the freedom of unobstructed views today!",
  },
  {
    title: "Easy Installation",
    description:
      "Transform your space effortlessly with our easy installation glass railing systems, designed for both DIY enthusiasts and professionals. Featuring straightforward instructions and all necessary hardware, these railings allow for a quick and hassle-free setup, perfect for enhancing your balcony, staircase, or patio. Enjoy a sleek, modern look without extensive renovations, while our customizable options enable you to tailor the design to your unique style. With robust safety features and durable materials, our railings provide both peace of mind and aesthetic appeal, making them the ideal choice for any home improvement project. Elevate your space today with our innovative glass railing solutions!",
  },
  {
    title: "Weather Resistance",
    description:
      "Protect your outdoor spaces with our weather-resistant glass railing systems, expertly designed to maintain beauty and safety year-round. Crafted from high-quality materials, these railings withstand rain, snow, and intense sunlight, resisting corrosion, fading, and damage from harsh weather conditions. For those seeking reliable solutions, our durable outdoor railings ensure both elegance and functionality in any climate, handling air pressure and wind loads with ease. Search for weatherproof glass railings or all-weather glass railing systems to find the perfect fit for your home. Our low-maintenance railings enhance your property’s aesthetic appeal while providing long-lasting safety and security. Invest in our weather-resistant glass railings and enjoy peace of mind, knowing your investment is safeguarded against the elements. Transform your outdoor spaces into a year-round haven with railings that seamlessly combine style, resilience, and superior structural integrity!",
  },
  {
    title: "Customizable Options",
    description:
      "Discover the beauty of our customizable glass railing systems, designed to fit your unique style and needs. With a variety of options, including frameless glass railings, semi-frameless designs, and color finishes, you can create the perfect look for your space. Our modern customizable glass railings allow you to choose from various styles, heights, and accessories to enhance your balcony, staircase, or patio. Search for tailored glass railings or personalized glass designs to find solutions that reflect your aesthetic preferences. Each railing system is crafted with durability in mind, ensuring they stand the test of time while maintaining their elegance. Elevate your property’s appeal with our versatile and stylish glass railing solutions. Transform your home with custom glass railings that perfectly blend functionality and design, making your outdoor and indoor spaces truly unique!",
  },
];

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProductSpecs = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [selectedImage, setSelectedImage] = useState(bg); // Initialize with the main image

  const images = [
    {
      src: buildingImg,
      alt: "Modern Minimalist Kitchen Design",
    },
    {
      src: penthuseImg,
      alt: "Modern Kitchen Renovation",
    },
    {
      src: stairsImg,
      alt: "Minimalist Kitchen Remodel",
    },
    {
      src: balconyImg,
      alt: "Minimalist Dining Room Design",
    },
  ];

  return (
    <section className="relative">
      <div className="relative h-[25rem] md:h-[30rem] w-full">
        <Image
          className="h-full w-full object-cover"
          src={bg}
          alt="Glass Railing Systems"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-45" />
        <motion.div
          variants={FadeDown(0.01)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4"
        >
          <h1 className="text-3xl md:text-5xl text-white opacity-90 font-semibold mb-6 tracking-tight">
            Glass Railing Systems
          </h1>
          <p className="text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify mb-12">
            "Enhance your space with our sleek seamless glass railing systems,
            perfect for home balconies. These stylish railings provide safety
            and unobstructed views, ideal for both residential and commercial
            settings. Upgrade your decor with our elegant glass railing
            solutions!"
          </p>
        </motion.div>
      </div>
      <main className="flex flex-col overflow-hidden mx-auto container">
        <article className="container mx-auto">
          <div className="py-6 xl:mt-[4rem]">
            <div className="col-12 flex justify-center mx-auto p-2 md:p-0">
              <div className="relative  h-52 w-80 md:h-[35rem] md:w-[45rem] xl:w-[62rem]">
                <Image
                  className="border-[1.5rem] mx-auto md:border-[2rem] lg:border-[3rem] border-slate-700 object-cover"
                  alt="Sea view "
                  src={selectedImage}
                  layout="fill" // Use layout fill for responsive height
                  objectFit="cover" // Ensures the image covers the box
                />
              </div>
            </div>
          </div>

          <div className="thumb-row">
            <div className="col-12">
              <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center mx-auto p-4 md:p-0 gap-4 md:ml-3 lg:ml-40 md:mx-[22rem]">
                {images.map((image, index) => (
                  <div key={index} className="thumb-container cursor-pointer">
                    <Image
                      className=" h-[9rem] w-[10rem] mx-auto md:h-[200px] md:w-[200px] md:translate-x-28 hover:scale-105 hover:translate-y-4 transition-transform duration-700 rounded-3xl object-cover"
                      alt={image.alt}
                      src={image.src}
                      // Adjust the height as needed
                      onClick={() => setSelectedImage(image.src)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        <div className="container mx-auto pl-7 md:pl-0 lg:px-14 ml-4 md:ml-10 lg:ml-4 xl:ml-[5.5rem] py-12 overflow-hidden">
          <h2 className="text-4xl text-primary mb-8 poppins-semibold">
            Products
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative ">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white h-full w-[18rem] rounded-lg relative shadow-md overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-[18rem] h-[15rem] relative object-cover"
                />
                <div className="flex justify-between items-center pl-2">
                  <h3 className="text-base poppins-medium text-primary">
                    {product.name}
                  </h3>
                  <h3 className="text-xs poppins-regular text-primary pr-2">
                    {product.model}
                  </h3>
                </div>

                <div className="pl-2">
                  <div className="flex justify-between items-center mb-4 ">
                    <h3 className="text-lg poppins-regular text-secondary">
                      {product.common}
                    </h3>
                    <button
                      onClick={() => toggleProductSpecs(product.id)}
                      aria-expanded={expandedProduct === product.id}
                      aria-controls={`specs-${product.id}`}
                      className="text-2xl pr-4 font-bold focus:outline-none transition-colors duration-200 hover:text-primary"
                    >
                      {expandedProduct === product.id ? "-" : "+"}
                    </button>
                  </div>
                  {expandedProduct === product.id && (
                    <ul id={`specs-${product.id}`} className="mt-2 space-y-1">
                      {product.specs.map((spec, index) => (
                        <li
                          key={index}
                          className="text-sm raleway text-gray-800"
                        >
                          <strong className=" poppins-rehular text-primary">
                            {spec.title}:{" "}
                          </strong>
                          <span
                            dangerouslySetInnerHTML={{ __html: spec.value }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* feature open */}
        <section className="container mx-auto py-12 px-4 lg:px-14 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold poppins-semibold text-primary text-center mb-8">
            Features of Glass Railing Systems
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-5 justify-center items-center mb-6 space-y-4 lg:space-y-0">
            {/* Feature Buttons */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4 w-full md:w-[55%] lg:col-span-5">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`py-2 px-2 md:px-4 md:py-2 rounded-lg transition-transform duration-300 poppins-regular hover:scale-105 outline-none w-full md:w-auto text-center ${
                    activeIndex === index
                      ? "bg-[#335c98] text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {feature.title}
                </button>
              ))}
            </div>
          </div>

          {/* Feature Description */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-all duration-300">
            <h3 className="text-base md:text-2xl font-medium poppins-regular text-primary">
              {features[activeIndex].title}
            </h3>
            <p className="text-xs md:text-base mt-4 text-secondary raleway">
              {features[activeIndex].description}
            </p>
          </div>
        </section>

        {/* feature close */}

        {/* FAQ open */}
        <section className="container mx-auto py-12 p-4 lg:p-24 overflow-hidden">
          <h2 className="text-4xl din-normal-font text-primary text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left poppins-regular text-primary  focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-lg">
                    {expandedIndex === index ? "-" : "+"}
                  </span>
                </button>
                {expandedIndex === index && (
                  <div className="mt-4 text-secondary raleway">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        {/* FAQ close */}
      </main>
    </section>
  );
}
