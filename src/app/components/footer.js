// "use client";
// import Image from "next/image";
import Logo from "../assets/logo/blueLogo.webp";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import { FiYoutube } from "react-icons/fi";
// import { BsTelephone } from "react-icons/bs";
// import { FiMail } from "react-icons/fi";
// import { TfiLocationPin } from "react-icons/tfi";
// // import { motion } from "framer-motion";
// // import { useEffect, useState } from "react";

// export default function Footer() {
//   // const [isHomePage, setIsHomePage] = useState(false);

//   // useEffect(() => {
//   //   const checkHomePage = () => {
//   //     if (typeof window !== "undefined") {
//   //       setIsHomePage(window.location.pathname === "/");
//   //     }
//   //   };

//   //   checkHomePage();

//   //   if (typeof window !== "undefined") {
//   //     window.addEventListener("popstate", checkHomePage);
//   //   }

//   //   return () => {
//   //     if (typeof window !== "undefined") {
//   //       window.removeEventListener("popstate", checkHomePage);
//   //     }
//   //   };
//   // }, [typeof window !== "undefined" && window.location.pathname]);

//   // if (isHomePage) return null;

//   // const textArray = [
//   //   "L",
//   //   "e",
//   //   "t",
//   //   "'",
//   //   "s",
//   //   " ",
//   //   "G ",
//   //   "e",
//   //   "t",
//   //   " ",
//   //   "I ",
//   //   "n",
//   //   " ",
//   //   "T",
//   //   "o",
//   //   "u",
//   //   "c",
//   //   "h",
//   // ];

//   // const [isVisible, setIsVisible] = useState(true);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setIsVisible(false);
//   //     setTimeout(() => {
//   //       setIsVisible(true);
//   //     }, 1000);
//   //   }, 10000);

//   //   return () => clearInterval(interval);
//   // }, []);

//   return (
//     // <footer className="relative bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-gray-300 opacity-90 w-[100vw] z-40 ">
//     //   <section className="flex flex-col justify-center px-2 xl:px-8 xl:w-[80vw] w-[95vw] h-auto my-2">
//     //     <div className="flex justify-start items-start">
// <Image
//   priority
//   src={Logo}
//   alt="Logo"
//   className="h-[3.5rem] w-[3.8rem] cursor-pointer"
// />
//     //     </div>
//     //     <div className="flex flex-col md:flex-row w-full lg:h-56 justify-between lg:gap-16 py-3">
//     //       <div className="flex flex-col gap-4 h-auto lg:h-full w-full">
<div className="text-[#335c98] text-lg flex flex-col justify-start gap-8 xl:gap-12 xl:flex-row">
  <div className="flex align-middle gap-3">
    <BsTelephone className="text-xl" />
    <div className="flex flex-col gap-2">
      <h6 className="poppins-regular text-sm">Telephone</h6>
      <p className="nunito text-xs whitespace-nowrap">+91 80489 64852</p>
    </div>
  </div>
  <div className="flex align-middle gap-3">
    <FiMail className="text-xl" />
    <div className="flex flex-col gap-2">
      <h6 className="poppins-regular text-sm">Email</h6>
      <p className="nunito text-xs whitespace-nowrap">
        hello@imperiorailing.com
      </p>
    </div>
  </div>
  <div className="flex align-middle gap-3">
    <TfiLocationPin className="text-xl" />
    <div className="flex flex-col gap-2">
      <h6 className="poppins-regular text-sm">Headquarters</h6>
      <p className="flex flex-wrap nunito text-xs w-[14rem]">
        Rajguru Steel Industries 92/94, Kika Street, Gulalwadi, Girgaon, Mumbai
        - 400004, Maharashtra, India
      </p>
    </div>
  </div>
  //{" "}
</div>;
//     //         <div className="flex flex-col xl:flex-row w-[100%] xl:w-[85%] justify-start gap-8 xl:gap-12">
<div id="icons" className="flex gap-4 text-[#335c98] text-3xl h-9">
  {[
    {
      icon: <FaInstagram className="h-6 w-6" />,
      label: "Instagram",
      hoverColor: "hover:text-pink-600",
    },
    {
      icon: <FaFacebook className="h-6 w-6" />,
      label: "Facebook",
      hoverColor: "hover:text-blue-700",
    },
    {
      icon: <FaTwitter className="h-6 w-6" />,
      label: "Twitter",
      hoverColor: "hover:text-black",
    },
    {
      icon: <FiYoutube className="h-6 w-6" />,
      label: "YouTube",
      hoverColor: "hover:text-red-600",
    },
  ].map(({ icon, label, hoverColor }, index) => (
    <div className="relative group" key={index}>
      <div className={`${hoverColor} transition duration-300 cursor-pointer`}>
        {icon}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {label}
      </div>
    </div>
  ))}
</div>;
//     //         </div>
//     //         <p className="text-[#335c98] nunito hidden xl:flex text-sm">
//     //           © Rajguru Steel Industries. All Rights Reserved (Terms of Use)
//     //         </p>
//     //       </div>
//     //       <div className="flex flex-col gap-4 w-[100%]">
//     //         <div className="flex w-full flex-wrap text-3xl poppins-semibold text-[#335c98]">
//     //           {/* {isVisible &&
//     //             textArray.map((word, wordIndex) => (
//     //               <motion.div
//     //                 key={wordIndex}
//     //                 initial={{ opacity: 0, width: 0 }}
//     //                 animate={{ opacity: 1, width: "auto" }}
//     //                 transition={{ duration: 0.1, delay: wordIndex * 0.4 }}
//     //                 className="poppins-bold text-2xl xl:text-3xl text-[#335c98]"
//     //               >
//     //                 {word}
//     //                 {word === " " && (
//     //                   <span className="mx-[0.3rem] md:mx-3"></span>
//     //                 )}
//     //               </motion.div>
//     //             ))} */}{" "}
//     //           Let’s Get In Touch
//     //         </div>
// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.395944531599!2d72.8223483752024!3d18.95811328222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU3JzI5LjIiTiA3MsKwNDknMjkuNyJF!5e0!3m2!1sen!2sin!4v1727513266722!5m2!1sen!2sin"
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
//   className="w-auto h-[20vh] xl:w-[60%] xl:h-40"
// ></iframe>
//     //       </div>
//     //     </div>
//     //   </section>
//     // </footer>

//     <footer className="relative bottom-0 left-0 right-0 max-w-4xl mx-auto p-4 bg-white">
//     <div className="flex justify-between items-start mb-8">
//       <div className="flex items-center">
//         <div className="w-8 h-8 bg-purple-600 rounded-md mr-2"></div>
//         <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
//         <h1 className="text-2xl font-bold ml-2">Logo</h1>
//       </div>
//       <h2 className="text-3xl font-bold">Let's Get In Touch</h2>
//     </div>

//     <div className="flex flex-col md:flex-row gap-8">
//       <div className="flex-1">
//         <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//         <div className="flex space-x-4">
//           <FaTwitter className="text-blue-400 text-2xl" />
//           <FaFacebook className="text-blue-600 text-2xl" />
//           <FaLinkedin className="text-blue-700 text-2xl" />
//           <FaYoutube className="text-red-600 text-2xl" />
//         </div>
//       </div>

//       <div className="flex-1">
//         <div className="bg-gray-200 w-full h-48 flex items-center justify-center">
//           <FaMapMarkerAlt className="text-gray-400 text-4xl" />
//         </div>
//       </div>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//       <div className="flex items-center">
//         <FaPhone className="text-gray-600 mr-2 h-6 w-6" />
//         <div>
//           <h4 className="font-semibold">Telephone</h4>
//           <p className="text-sm">91 80489 64852</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <FaEnvelope className="text-gray-600 mr-2 h-6 w-6" />
//         <div>
//           <h4 className="font-semibold">Email</h4>
//           <p className="text-sm">+91 80489 64852</p>
//         </div>
//       </div>
//       <div className="flex items-center">
//         <FaMapMarkerAlt className="text-gray-600 mr-2 h-6 w-6" />
//         <div>
//           <h4 className="font-semibold">Address</h4>
//           <p className="text-sm">Rajguru Steel Industries 92/94, Kika Street, Gulalwadi, Girgaon, Mumbai - 400004, Maharashtra, India</p>
//         </div>
//       </div>
//     </div>

//     <div className="mt-8 text-center text-sm text-gray-600">
//       © Rajguru Steel Industries. All Rights Reserved (Terms of Use).
//     </div>
//   </footer>
//   );
// }

import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiYoutube } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 w-screen bg-gray-300">
      <main className="max-w-[55rem] mx-auto px-4 pt-4 pb-1 flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-24">
          <section className="flex flex-col md:flex-row justify-between w-full mb-2 gap-8 md:gap-16">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <div className="flex items-center">
                <Image
                  priority
                  src={Logo}
                  alt="Logo"
                  className="h-[3.5rem] w-[3.8rem] cursor-pointer"
                />
              </div>

              <div className="hidden md:flex md:flex-col md:gap-2">
                <h3 className="text-xl poppins-semibold text-primary">
                  Follow Us
                </h3>
                <div
                  id="icons"
                  className="flex gap-4 text-primary text-3xl h-9"
                >
                  {[
                    {
                      icon: <FaInstagram className="h-6 w-6" />,
                      label: "Instagram",
                      hoverColor: "hover:text-pink-600",
                    },
                    {
                      icon: <FaFacebook className="h-6 w-6" />,
                      label: "Facebook",
                      hoverColor: "hover:text-blue-700",
                    },
                    {
                      icon: <FaTwitter className="h-6 w-6" />,
                      label: "Twitter",
                      hoverColor: "hover:text-black",
                    },
                    {
                      icon: <FiYoutube className="h-6 w-6" />,
                      label: "YouTube",
                      hoverColor: "hover:text-red-600",
                    },
                  ].map(({ icon, label, hoverColor }, index) => (
                    <div className="relative group" key={index}>
                      <div
                        className={`${hoverColor} transition duration-300 cursor-pointer`}
                      >
                        {icon}
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full items-start gap-4 ">
              <h2 className="text-3xl poppins-bold text-primary">
                Let's Get In Touch
              </h2>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.395944531599!2d72.8223483752024!3d18.95811328222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU3JzI5LjIiTiA3MsKwNDknMjkuNyJF!5e0!3m2!1sen!2sin!4v1727513266722!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:w-auto md:h-auto"
              ></iframe>
            </div>

            <div className="md:hidden flex flex-col gap-2">
              <h3 className="text-xl poppins-semibold text-primary">
                Follow Us
              </h3>
              <div
                id="icons"
                className="flex gap-4 text-[#335c98] text-3xl h-9"
              >
                {[
                  {
                    icon: <FaInstagram className="h-6 w-6" />,
                    label: "Instagram",
                    hoverColor: "hover:text-pink-600",
                  },
                  {
                    icon: <FaFacebook className="h-6 w-6" />,
                    label: "Facebook",
                    hoverColor: "hover:text-blue-700",
                  },
                  {
                    icon: <FaTwitter className="h-6 w-6" />,
                    label: "Twitter",
                    hoverColor: "hover:text-black",
                  },
                  {
                    icon: <FiYoutube className="h-6 w-6" />,
                    label: "YouTube",
                    hoverColor: "hover:text-red-600",
                  },
                ].map(({ icon, label, hoverColor }, index) => (
                  <div className="relative group" key={index}>
                    <div
                      className={`${hoverColor} transition duration-300 cursor-pointer`}
                    >
                      {icon}
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="text-[#335c98] text-lg flex flex-col justify-between gap-4 w-full">
            <div className="flex align-middle gap-3">
              <BsTelephone className="text-xl mt-1" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-semibold text-base">Telephone</h6>
                <p className="nunito text-xs whitespace-nowrap">
                  +91 80489 64852
                </p>
              </div>
            </div>
            <div className="flex align-middle gap-3">
              <FiMail className="text-xl mt-1" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-semibold text-base">Email</h6>
                <p className="nunito text-xs whitespace-nowrap">
                  info@rajgurusteel.co.in
                </p>
              </div>
            </div>
            <div className="flex align-middle gap-3">
              <TfiLocationPin className="text-xl mt-1" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-semibold text-base">Headquarters</h6>
                <p className="flex flex-wrap nunito text-xs w-[14rem]">
                  Rajguru Steel Industries 92/94, Kika Street, Gulalwadi,
                  Girgaon, Mumbai - 400004, Maharashtra, India
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-2 text-center text-sm text-primary nunito border-t-2 pt-2 w-full whitespace-nowrap">
          © Rajguru Steel Industries. All Rights Reserved.
        </div>
      </main>
    </footer>
  );
};

export default Footer;
