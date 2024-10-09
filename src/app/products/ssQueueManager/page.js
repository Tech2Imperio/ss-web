// "use client";
// import React from "react";
// import bg from "../../assets/product/queueManager/bg.webp";
// import Image from "next/image";

// export default function page() {
//   return (
//     <section className=" relative">
// <div className="relative">
//   <Image
//     className="h-[22rem] md:h-[30rem] w-full object-cover"
//     src={bg}
//     alt="U Profile"
//     width={1920}
//     height={600}
//   />
//   <div className="absolute inset-0 bg-black opacity-25" />
//   <h1 className="absolute inset-0 flex flex-col items-start justify-end pl-3 md:justify-center pb-4 md:pt-0 text-[#4776bd] text-5xl md:text-[4rem] md:p-4 poppins-bold">
//     RAJGURU
//     <br />
//     <p className=" text-xs md:text-base w-[18rem] md:w-[70rem] nunito pt-2 md:pt-4 text-gray-300">
//       Elevate your space with a premium stainless steel queue manager,
//       which is not only durable but also adds an elegant touch to any
//       environment. These queue managers are ideal for crowd control and
//       enhancing customer flow in various settings such as retail stores,
//       events, and restaurants.
//     </p>
//   </h1>
// </div>
//       <main className="flex flex-col overflow-hidden w-full h-full xl:px-[18rem]">
//         <p className=" text-slate-500 text-xs lg:text-sm text-justify  p-8">
//         Enhance crowd control with Rajgure Steel Industry's stylish queue
//         manager, available in elegant gild silver and classic black. Perfect for
//         bustling cities like Mumbai, this queue management solution is ideal for
//         retail stores, events, and restaurants. Ensure a seamless customer
//         experience while adding a touch of sophistication to your space!
//         </p>
//       </main>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTruck, FaCheck, FaInfoCircle } from "react-icons/fa";
import React from "react";
import bg from "../../assets/product/queueManager/bg.webp";
import main from "../../assets/product/queueManager/productImg/main.webp";
import Link from "next/link";
import { FadeDown } from "../../components/utility/animation.jsx";
// import { motion } from "framer-motion";
import ropeImg from "../../assets/product/queueManager/productImg/rope.webp";
import wallMount from "../../assets/product/queueManager/productImg/wallmount.webp";
import signFrame from "../../assets/product/queueManager/productImg/signframe.webp";
export default function StainlessSteelQueueManager() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Animation variants
  const pageAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gray-100"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageAnimation}
    >
      <div className="relative">
        <Image
          className="h-[22rem] md:h-[30rem] w-full object-cover"
          src={bg}
          alt="U Profile"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        {/* <h1 className="absolute inset-0 flex flex-col items-start justify-end pl-3 md:justify-center pb-4 md:pt-0 text-[#4776bd] text-5xl md:text-[4rem] md:p-4 poppins-bold">
          RAJGURU
          <br />
          <p className=" text-xs md:text-base w-[18rem] md:w-[45rem] nunito pt-2 md:pt-4 text-gray-300">
            Elevate your space with a premium stainless steel queue manager,
            which is not only durable but also adds an elegant touch to any
            environment. These queue managers are ideal for crowd control and
            enhancing customer flow in various settings such as retail stores,
            events, and restaurants.
          </p>
        </h1> */}
        <motion.div
          variants={FadeDown(0.001)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex justify-end md:justify-center flex-col p-2 md:p-0 md:pl-4 "
        >
          <h1 className=" text-3xl md:text-[3.125rem] text-white opacity-90 poppins-semibold mb-6 tracking-tight">
            Stainless Steel Queue Manager
          </h1>
          <p className=" text-yellow-400 text-opacity-90 text-[0.850rem] w-auto md:text-lg md:w-[48rem] text-justify raleway mb-12 ">
            "Rajguru Steel Industries offers durable stainless steel crowd
            control solutions ideal for hospitals, airports, and public spaces.
            Our barriers ensure safety and organization while enhancing
            aesthetic appeal."
          </p>
        </motion.div>
      </div>

      <main className="flex flex-col overflow-hidden mx-auto container">
        <div className=" flex flex-col justify-center text-justify text-sm md:text-sm text-slate-500 gap-4 nunito p-8">
          {/* <p>
            Rajguru Steel Industries offers a remarkable range of stainless
            steel U profiles that combine aesthetic appeal with exceptional
            durability. Stainless steel U profiles are suitable for a variety of
            uses, including structural reinforcements, decorative accents, and
            architectural elements. Their versatility makes them ideal for both
            residential and commercial projects.
          </p> */}
        </div>

        {/* Hero Section */}
        <section className="mb-12 p-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <Image
                src={main}
                alt="Stainless Steel Queue Manager"
                width={500}
                height={500}
                className="rounded-3xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 mt-4 md:mt-0 md:ml-8"
            >
              <h2 className="text-3xl md:text-4xl poppins-bold mb-4 text-[#335c98]">
                Premium Crowd Control Solution
              </h2>
              <p className="text-gray-500 mb-4 nunito flex text-justify">
                Our Stainless Steel Queue Manager is the perfect solution for
                efficient crowd control in various settings. Ideal for airports,
                banks, retail stores, and events, this durable and stylish queue
                manager ensures smooth traffic flow and enhances customer
                experience.
              </p>
              {/* CTA Button with Neomorphism Style */}
              <Link href="/ContactUs">
                <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 text-black border border-[#1d1d1d] bg-transparent rounded-md font-nunito text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                  {/* Background circles */}
                  <span className="absolute w-12 h-12 transition-all duration-1000 ease-in-out bg-[#335c98] rounded-full -top-8 -left-8 scale-0 group-hover:scale-[10]"></span>
                  <span className="absolute w-12 h-12 transition-all duration-1000 ease-in-out bg-[#335c98] rounded-full -bottom-8 -right-8 scale-0 group-hover:scale-[10]"></span>
                  {/* Button text */}
                  <span className="relative z-10 group-hover:text-white raleway">
                    GET A QUOTE
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl poppins-bold text-[#335c98] mb-6">
            Specifications
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <table className="w-full">
              <tbody>
                <tr>
                  <td className=" text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Material:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    Stainless Steel
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Post Height:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    36 inches (91.5 cm)
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Base Diameter:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    13 inches (33 cm)
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Belt Length:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    6.5 feet (2 meters)
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Belt Color:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    Black / Red / Blue
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Weight:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    24 lbs (10.9 kg)
                  </td>
                </tr>
                <tr>
                  <td className="text-lg poppins-regular text-[#335c98] pr-4 py-2">
                    Finishes Colors:
                  </td>
                  <td className=" poppins-regular text-gray-500">
                    Silver / Champagne
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </section>

        {/* Applications Section */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl poppins-bold text-[#335c98] mb-6">
            Ideal Applications
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <ul className="list-disc pl-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 poppins-regular text-gray-500">
              <li className="mb-2">Airports and transportation hubs</li>
              <li className="mb-2">Banks and financial institutions</li>
              <li className="mb-2">Retail stores and supermarkets</li>
              <li className="mb-2">Museums and art galleries</li>
              <li className="mb-2">Theaters and concert venues</li>
              <li className="mb-2">Trade shows and exhibitions</li>
              <li>Government offices and public services</li>
            </ul>
          </motion.div>
        </section>

        {/* Accessories Section */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl poppins-bold text-[#335c98] mb-6">
            Accessories
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              {["Rope", "wallMount", "Sign Stand"].map((tab, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`mr-4 whitespace-nowrap h-8 w-[10rem] px-2 md:h-12 md:w-28 md:py-2 text-xs md:text-base md:whitespace-normal md:px-4 rounded-lg poppins-regular text-gray-500 ${
                    activeTab === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.charAt(0).toUpperCase() +
                    tab
                      .slice(1)
                      .replace(/([A-Z])/g, " $1")
                      .trim()}
                </motion.button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                {activeTab === 0 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 md:mt-14">
                      <Image
                        src={ropeImg}
                        alt="rope image"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl poppins-semibold text-[#335c98] mb-2">
                        Queue Manager Rope
                      </h3>
                      <p className="mb-4 text-gray-500 nunito text-sm flex text-justify lg:text-base">
                        Rajgure Steel Industry provides high-quality queue
                        managers that are designed to enhance crowd control
                        while maintaining a professional appearance. Their queue
                        managers feature durable red and black valet ropes made
                        from premium nylon fabric, making them an excellent
                        choice for events and retail spaces.
                      </p>
                      <table className="w-full text-sm md:text-base">
                        <tbody>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              {" "}
                              Nylon / Velvet{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Hook Material
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              {" "}
                              Stainless Steel{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Rope Length:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              1.5 Meters
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Compatibility:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Fits all standard queue posts
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Rope color:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Red / Black{" "}
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Hook color:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Gold / Silver{" "}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4 md:mt-14">
                      <Image
                        src={wallMount}
                        alt="Wall Mount"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl poppins-semibold text-[#335c98] mb-2">
                        Wall Mount
                      </h3>
                      <p className="mb-4 text-gray-500 nunito">
                        Optimize your space with Rajgure Steel Industry's
                        wall-mounted queue managers, featuring vibrant red,
                        black, and blue belts that seamlessly blend
                        functionality with style. Perfect for restaurants,
                        airports, and retail environments, these queue managers
                        not only provide effective crowd control but also
                        enhance the aesthetic appeal of your venue.
                      </p>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Stainless Steel
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Belt length:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              2.0 Meters
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Base Diameter:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              320 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Height:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              990 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Rope Color:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Blue / Black / Red
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Retractable Belts:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Yes
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                {activeTab === 2 && (
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                      <Image
                        src={signFrame}
                        alt="Belt Cartridge"
                        width={300}
                        height={300}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl poppins-semibold text-[#335c98] mb-2">
                        Queue Manager Sign Stand
                      </h3>
                      <p className="mb-4 text-gray-500 nunito">
                        Rajgure Steel Industry's directional sign stand is
                        expertly crafted to guide customers with clear messaging
                        and arrows, ensuring easy navigation. Ideal for events,
                        retail spaces, and exhibitions, this stylish sign stand
                        enhances the overall decor of your venue while providing
                        essential directional assistance.
                      </p>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Material:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Stainless Steel
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Sigh Board Paper Size:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              A4
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Frame size:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              L 242 x W 24 x H 330 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Height:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              315 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Diameter:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              32 mm
                            </td>
                          </tr>
                          <tr>
                            <td className="poppins-regular text-[#335c98] text-base pr-4 py-2">
                              Type:
                            </td>
                            <td className=" poppins-regular text-gray-500">
                              Double Sided Sign Frame with Plexiglass Cover
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </section>
        {/* Features Section */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl poppins-bold text-[#335c98] mb-6">
            Key Features
          </h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: FaCheck,
                title: "Durable Stainless Steel",
                description: "Corrosion-resistant and long-lasting",
              },
              {
                icon: FaTruck,
                title: "Easy Assembly",
                description: "Quick setup with no tools required",
              },
              {
                icon: FaInfoCircle,
                title: "Versatile Use",
                description: "Suitable for indoor and outdoor settings",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <feature.icon className="text-3xl text-[#335c98] mb-4" />
                <h3 className="text-xl poppins-medium text-[#335c98] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 nunito">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Maintenance Guide Section */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl poppins-bold text-[#335c98] mb-6">
            Maintenance Guide
          </h2>
          <motion.div
            variants={fadeInUp}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl poppins-medium text-[#335c98] mb-4">
              Keeping Your Queue Manager in Top Condition
            </h3>
            <ul className="list-disc pl-6 text-gray-500">
              <li className="mb-2 nunito">
                <span className="poppins-regular text-lg text-[#335c98]">
                  Regular Cleaning:
                </span>{" "}
                Wipe down the stainless steel parts with a soft, damp cloth. For
                tougher stains, use a mild soap solution.
              </li>
              <li className="mb-2 nunito">
                <span className="poppins-regular text-lg text-[#335c98]">
                  Belt Maintenance:
                </span>{" "}
                Periodically check the belt for wear and tear. Clean with a damp
                cloth and mild detergent if necessary.
              </li>
              <li className="mb-2 nunito">
                <span className="poppins-regular text-lg text-[#335c98]">
                  Lubrication:
                </span>{" "}
                Apply a small amount of silicone-based lubricant to the belt
                mechanism every 6 months for smooth operation.
              </li>
              <li className="mb-2 nunito">
                <span className="poppins-regular text-lg text-[#335c98]">
                  Tightening:
                </span>{" "}
                Check and tighten any loose screws or fittings as part of your
                regular maintenance routine.
              </li>
              <li className="nunito">
                <span className="poppins-regular text-lg text-[#335c98]">
                  Storage:
                </span>{" "}
                When not in use for extended periods, store in a dry area to
                prevent moisture accumulation.
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Customer Testimonials Section */}
        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Customer Testimonials</h2>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { name: "John D.", role: "Event Manager", comment: "These queue managers have been a game-changer for our events. Easy to set up and very durable!" },
              { name: "Sarah L.", role: "Bank Branch Manager", comment: "The sleek design fits perfectly with our modern branch aesthetic. Customers love the organized queuing system." },
              { name: "Mike R.", role: "Airport Operations", comment: "We've been using these for years. They withstand heavy use and still look great. Highly recommended!" },
              { name: "Emily T.", role: "Retail Store Owner", comment: "The versatility of these queue managers is impressive. We use them differently during sales and regular days." }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <FaComments className="text-3xl text-blue-600 mb-4" />
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </section> */}
      </main>
    </motion.div>
  );
}
