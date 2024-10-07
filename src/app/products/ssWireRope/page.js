// import React from "react";
// import Image from "next/image";
// import bg from "../../assets/product/sswirerope/bg.webp";
// import outdoorImg from "../../assets/product/sswirerope/product/outdoorrope.webp";
// import StairImg from "../../assets/product/sswirerope/product/stairs.webp";
// import BalconyImg from "../../assets/product/sswirerope/product/ssrailing.jpg";
// // import accessory1 from "../../assets/product/accessories/accessory1.webp"; // Replace with actual paths
// // import accessory2 from "../../assets/product/accessories/accessory2.webp"; // Replace with actual paths
// // import accessory3 from "../../assets/product/accessories/accessory3.webp"; // Replace with actual paths

// export default function Page() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative h-[30rem] w-full">
//         <Image
//           className="h-[30rem] w-full object-cover"
//           src={bg}
//           alt="Wire Rope Profile"
//           layout="fill"
//         />
//         <div className="absolute inset-0 bg-black opacity-40" />
//         <h1 className="absolute inset-0 flex flex-col items-start justify-center pl-5 md:pl-10 text-white text-5xl md:text-[5rem] font-extrabold">
//           RAJGURU
//           <span className="text-xs md:text-lg pt-2">
//             Stainless Steel U Profile for Structural Excellence
//           </span>
//         </h1>
//       </section>

//       {/* Product Overview with Carousel */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto flex flex-col items-center">
//           <h2 className="text-4xl font-bold mb-6">Product Overview</h2>
//           <div className="relative w-full max-w-xl">
//             <Image
//               src={outdoorImg}
//               alt="Outdoor Applications"
//               className="rounded-lg shadow-xl"
//               width={800}
//               height={400}
//             />
//             {/* Add more images in a carousel as needed */}
//           </div>
//           <p className="text-gray-700 text-center mt-4 max-w-2xl">
//             Experience unparalleled strength and durability with our premium stainless steel wire rope, expertly crafted for outdoor use in compounds and various rigging applications.
//           </p>
//         </div>
//       </section>

//       {/* Applications & Use Cases Section */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-center text-4xl font-bold mb-8">Applications & Use Cases</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src={outdoorImg}
//               alt="Outdoor Applications"
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Outdoor Structures</h3>
//             <p className="text-gray-600">Perfect for supporting various outdoor installations, ensuring strength and stability.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src={StairImg}
//               alt="Stair Applications"
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Staircases</h3>
//             <p className="text-gray-600">Ideal for creating secure railings and stair supports that last.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src={BalconyImg}
//               alt="Balcony Applications"
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Balcony Railings</h3>
//             <p className="text-gray-600">Ensures safety while adding a stylish look to your balconies.</p>
//           </div>
//         </div>
//       </section>

//       {/* Accessories Section */}
//       <section className="py-16 bg-gray-50">
//         <h2 className="text-center text-4xl font-bold mb-8">Related Accessories</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src=""
//               alt=""
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Accessory 1</h3>
//             <p className="text-gray-600">Description of accessory 1.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src=""
//               alt=""
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Accessory 2</h3>
//             <p className="text-gray-600">Description of accessory 2.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
//             <Image
//               src=""
//               alt=""
//               className="rounded-lg mb-4"
//               width={300}
//               height={200}
//             />
//             <h3 className="text-xl font-semibold">Accessory 3</h3>
//             <p className="text-gray-600">Description of accessory 3.</p>
//           </div>
//         </div>
//       </section>

//       {/* Maintenance Tips Section */}
//       <section className="py-16 bg-white">
//         <h2 className="text-center text-4xl font-bold mb-8">Maintenance Tips</h2>
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Regular Inspections</h3>
//             <p className="text-gray-600">
//               Check for wear and tear regularly to ensure safety and longevity.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Clean the Rope</h3>
//             <p className="text-gray-600">
//               Clean the stainless steel wire rope periodically to prevent corrosion.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Lubrication</h3>
//             <p className="text-gray-600">
//               Apply a suitable lubricant to maintain flexibility and protect against rust.
//             </p>
//           </div>
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-4">Proper Storage</h3>
//             <p className="text-gray-600">
//               Store the wire rope in a dry place to avoid exposure to moisture.
//             </p>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import bg from "../../assets/product/sswirerope/bg.webp";
import outdoorImg from "../../assets/product/sswirerope/product/outdoorrope.webp";
import StairImg from "../../assets/product/sswirerope/product/stairs.webp";
import BalconyImg from "../../assets/product/sswirerope/product/ssrailing.jpg";
import Link from "next/link";
import hangingHook from "../../assets/product/sswirerope/accessoris/hangingHook.webp";
import cableWire from "../../assets/product/sswirerope/accessoris/WireRope.webp";
import thimble from "../../assets/product/sswirerope/accessoris/thimble.webp";
import { FadeDown } from "../../components/utility/animation.jsx";
import { motion } from "framer-motion";
export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [outdoorImg, StairImg, BalconyImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  ">
      {/* Hero Section */}
      <section className="relative h-[25rem] w-full">
        <Image
          className="h-full w-full object-cover"
          src={bg}
          alt="Wire Rope Profile"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-55" />
        <motion.div
          variants={FadeDown(0.01)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 pl-2 md:pl-8 mt-36 "
        >
          <h1 className=" text-4xl md:text-5xl text-white opacity-90 poppins-semibold mb-6 tracking-tight">
            Stainless Steel Wire Rope
          </h1>
          <p className=" text-yellow-400 opacity-85 text-sm w-auto  md:text-base md:w-[52rem] raleway mb-12 ">
            "Discover our premium stainless steel wire rope, designed for
            exceptional strength and corrosion resistance in rigging and
            lifting. Ideal for industrial and marine applications, it guarantees
            safety and reliability in demanding environments."
          </p>
        </motion.div>
      </section>

      <main className=" mx-auto container">
        {/* Product Overview with Image Slider */}
        <section className=" bg-white container mx-auto md:p-28">
          <div className=" px-6">
            {/* <h2 className="text-4xl pt-10 poppins-semibold text-[#335c98] mb-12 md:mb-16 md:pt-0 text-center">
              Wire Rope
            </h2> */}
            <div className="flex flex-col lg:flex-row items-center gap-28">
              <div className="w-full lg:w-[39%] relative">
                <div className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Product Image ${currentImageIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-500"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl poppins-semibold text-[#335c98] mb-4">
                  Premium Stainless Steel Wire Rope
                </h3>
                <p className="text-secondary mb-8 text-sm leading-relaxed raleway text-justify">
                  Experience unparalleled strength and durability with our
                  premium stainless steel wire rope. Expertly crafted for
                  outdoor use in compounds and various rigging applications, our
                  wire rope sets the industry standard for quality and
                  reliability.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-[1.15rem] raleway text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 strok" />
                    Superior corrosion resistance
                  </li>
                  <li className="flex items-center text-[1.15rem] raleway text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500" />
                    Effortless installation and maintenance
                  </li>
                  <li className="flex items-center text-[1.15rem] raleway text-[#335c98]">
                    <FaCheck className="w-6 h-5 mr-3 text-green-500 " />
                    Versatile sizing and configurations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Applications & Use Cases Section */}
        <section className=" bg-gray-100 p-20 container mx-auto">
          <div className="container mx-auto">
            <h2 className=" text-3xl md:text-5xl poppins-semibold text-[#335c98] mb-10 md:mb-16 text-center">
              Applications & Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Outdoor Structures",
                  image: outdoorImg,
                  description:
                    "Enhance the strength and aesthetics of outdoor installations.",
                },
                {
                  title: "Staircases",
                  image: StairImg,
                  description:
                    "Create secure and stylish railings for staircases.",
                },
                {
                  title: "Balcony Railings",
                  image: BalconyImg,
                  description:
                    "Ensure safety with elegant balcony railing solutions.",
                },
                // {
                //   title: "Balcony Railings",
                //   image: BalconyImg,
                //   description:
                //     "Ensure safety with elegant balcony railing solutions.",
                // },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white -ml-12  md:ml-6 rounded-3xl h-[18rem] w-[20rem] md:h-[23rem] md:w-[23rem] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <div className="relative h-44 md:h-60 ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl poppins-regular text-[#335c98] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 raleway text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accessories Section */}
        <section className="py-24 bg-white mx-auto container">
          <div className="container mx-auto md:px-[12rem]">
            <h2 className="text-5xl poppins-semibold text-[#335c98] mb-16 text-center">
              Accessories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
                  className="bg-gray-50 rounded-xl h-[33rem] w-auto md:h-[35rem] md:w-[22rem] shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-[10rem] md:h-[10rem] w-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl poppins-regular text-[#335c98] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 raleway text-xs md:text-base mb-4">
                      {item.description}
                    </p>
                    <h4 className=" poppins-medium text-[#335c98] mb-2">
                      Specifications:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-secondary">
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

        <div className=" flex justify-center">
          <Link href="/ContactUs">
            <button className="mt-4 px-6 py-4 bg-[#335c98] raleway text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
              GET A QUOTE
            </button>
          </Link>
        </div>

        {/* Maintenance Tips Section */}
        <section className="py-24 bg-gray-100 mt-14 container mx-auto">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl poppins-semibold text-primary mb-16 text-center">
              Maintenance Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                  <h3 className="text-2xl poppins-medium text-primary mb-4">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-secondary raleway leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24  text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className=" text-base md:text-5xl poppins-semibold text-primary mb-8">
              Ready to Elevate Your Project?
            </h2>
            <p className="text-xl text-secondary raleway mb-12 max-w-3xl mx-auto">
              Discover the unmatched strength and versatility of Rajguru
              Stainless Steel Wire Rope. Let us help you bring your vision to
              life.
            </p>
            <div className=" flex justify-center">
              <Link href="/ContactUs">
                <button className="mt-4 px-6 py-4 bg-[#335c98] raleway text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
                  GET A QUOTE
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
