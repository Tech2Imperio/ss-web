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

const products = [
  {
    id: 1,
    name: "Imperio ACE-50 Base",
    common: "Specifications",
    image: A50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 2,
    name: "Imperio Pro-50 Base",
    common: "Specifications",
    image: L50,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 3,
    name: "Imperio Semi Smart-75 Base",
    common: "Specifications",
    image: semiSmart,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 4,
    name: "Imario Dot-50 Base",
    common: "Specifications",
    image: dot,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 5,
    name: "Imperio LUX-250 Base",
    common: "Specifications",
    image: Lux250,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 6,
    name: "Imperio Sleek-17 Handrail",
    common: "Specifications",
    image: sleek17,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 7,
    name: "Imperio LED-40 Handrail",
    common: "Specifications",
    image: oval60,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
  {
    id: 8,
    name: "Imperio Oval-60 Handrail",
    common: "Specifications",
    image: Led40,
    specs: [
      { title: "Colors", value: "4 colours Available" },
      { title: "Glass Thickness", value: "17 mm to 21 mm" },
      { title: "Frame Material", value: "Aluminium" },
      { title: "Visit Website", value: "<a href='https://imperiorailing.vercel.app/products' target='_blank' rel='noopener noreferrer'>Imperiorailing.com</a>" },
    ],
  },
];

export default function Page() {
  const [expandedProduct, setExpandedProduct] = useState(null);

  const toggleProductSpecs = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

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
      <article className="space-y-12">
      <div className="sample-row py-6 xl:mt-[4rem]">
        <div className="col-12">
          <h2 className="text-[1.40rem] md:text-4xl lg:text-5xl text-slate-500 py-14 flex justify-center poppins-extralight opacity-0 translate-y-4 transition-transform duration-500">
            Modern Minimalist Kitchen Design
          </h2>
          <div className="featured-sample-container mx-auto px-4 md:mx-4 lg:mx-0 mt-4 relative">
            <Image
              className=" border-[1.5rem] mx-auto md:border-[2rem] lg:border-[4rem] border-slate-700  object-cover"
              alt="Modern Minimalist Kitchen Design"
              src={bg}
              layout="responsive"
             
            />
          </div>
        </div>
      </div>
      
      <div className="sample-row thumb-row">
        <div className="col-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mx-auto px-4 md:mx-5 lg:-mt-10 lg:mx-5 xl:mx-[10rem]">
            {[
              {
                src: "/assets/image2-BmqAL6Z0.webp",
                alt: "Modern Minimalist Kitchen Design",
              },
              {
                src: "/assets/image3-BdfUKhI-.webp",
                alt: "Modern Kitchen Renovation",
              },
              {
                src: "/assets/image4-BC6pdbir.webp",
                alt: "Minimalist Kitchen Remodel",
              },
              {
                src: "/assets/image5-3bFxt5TN.webp",
                alt: "Minimalist Dining Room Design",
              },
            ].map((image, index) => (
              <div key={index} className="thumb-container cursor-pointer">
                <Image
                  className="h-[10rem] md:h-[10rem] lg:h-[9rem] lg:w-[22rem] xl:w-full xl:h-full hover:scale-110 hover:translate-y-4 transition-transform duration-700 rounded-3xl object-cover"
                  alt={image.alt}
                  src={image.src}
                  layout="responsive"
                  width={250} // Add actual width of the image
                  height={250} // Add actual height of the image
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="testimonial-row flex justify-center mx-auto md:px-[5rem] lg:px-[10rem] lg:py-28 xl:px-[27rem] xl:py-14">
        <div className="col-12">
          <p className="testimonial text-sm mx-auto px-5 md:text-lg lg:text-xl xl:text-2xl text-slate-700 poppins-thin-italic opacity-1">
            <q>If I could give 6 stars I would! The team at Decorilla is amazing and worked with me to get exactly what I needed for my kitchen renovation.</q>
          </p>
        </div>
      </div> */}

  
    </article>
        <div className="container mx-auto pl-7 md:pl-0 lg:px-14 md:ml-[5.5rem] py-12">
          <h2 className="text-4xl text-primary mb-8 poppins-semibold">Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {products.map((product) => (
              <li
                key={product.id}
                className="bg-white h-auto w-[20rem] rounded-lg relative shadow-md overflow-hidden"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-[20rem] h-[20rem] relative object-cover"
                />
                <div className="flex justify-between items-center p-4">
                  <h3 className="text-xl poppins-medium text-primary">{product.name}</h3>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg poppins-regular text-secondary">{product.common}</h3>
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
                        <li key={index} className="text-sm raleway text-gray-800">
                          <strong>{spec.title}: </strong>
                          <span dangerouslySetInnerHTML={{ __html: spec.value }} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
}
