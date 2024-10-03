"use client";
import Image from "next/image";
import Logo from "../assets/logo/blueLogo.webp";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const checkHomePage = () => {
      if (typeof window !== "undefined") {
        setIsHomePage(window.location.pathname === "/");
      }
    };

    checkHomePage();

    if (typeof window !== "undefined") {
      window.addEventListener("popstate", checkHomePage);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", checkHomePage);
      }
    };
  }, [typeof window !== "undefined" && window.location.pathname]);

  // if (isHomePage) return null;

  const textArray = [
    "L",
    "e",
    "t",
    "'",
    "s",
    " ",
    "G ",
    "e",
    "t",
    " ",
    "I ",
    "n",
    " ",
    "T",
    "o",
    "u",
    "c",
    "h",
  ];

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bottom-0 left-0 right-0 flex flex-col justify-center items-center bg-gray-300 opacity-90 w-[100vw] xl:h-[45vh] z-40 pt-3">
      <div className="flex flex-col justify-center px-2 xl:px-8 h-full xl:w-[80vw] w-[95vw]">
        <div className="flex justify-start items-start">
          <Image
            priority
            src={Logo}
            alt="Logo"
            className="h-[4rem] w-[4rem] cursor-pointer"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full h-full justify-between gap-4 py-3 xl:gap-0">
          <div className="flex flex-col justify-between gap-4 md:gap-3 h-full w-full">
            <div className="text-[#335c98] text-lg flex flex-col justify-start gap-8 xl:gap-12 xl:flex-row">
              <div className="flex align-middle gap-3">
                <BsTelephone className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Telephone</h6>
                  <p className="nunito text-sm whitespace-nowrap">
                    +91 80489 64852
                  </p>
                </div>
              </div>
              <div className="flex align-middle gap-3">
                <FiMail className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Email</h6>
                  <p className="nunito text-sm whitespace-nowrap">
                    hello@imperiorailing.com
                  </p>
                </div>
              </div>
              <div className="flex align-middle gap-3">
                <TfiLocationPin className="mt-1 text-xl" />
                <div className="flex flex-col gap-2">
                  <h6 className="poppins-regular">Headquarters</h6>
                  <p className="flex flex-wrap nunito text-sm w-[14rem]">
                    Rajguru Steel Industries 92/94, Kika Street, Gulalwadi,
                    Girgaon, Mumbai - 400004, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row w-[100%] xl:w-[85%] justify-start gap-8 xl:gap-12">
              <div
                id="icons"
                className="flex gap-4 text-[#335c98] text-3xl h-9"
              >
                {[
                  {
                    icon: <FaInstagram />,
                    label: "Instagram",
                    hoverColor: "hover:text-pink-600",
                  },
                  {
                    icon: <FaFacebook />,
                    label: "Facebook",
                    hoverColor: "hover:text-blue-700",
                  },
                  {
                    icon: <FaTwitter />,
                    label: "Twitter",
                    hoverColor: "hover:text-black",
                  },
                  {
                    icon: <FiYoutube />,
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
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[#335c98] nunito hidden xl:flex">
              © Rajguru Steel Industries. All Rights Reserved (Terms of Use)
            </p>
          </div>
          <div className="flex flex-col md:justify-center md:items-center align-middle gap-2 w-[100%]">
            <div className="flex w-full items-center justify-center flex-wrap xl:h-10 h-8">
              {isVisible &&
                textArray.map((word, wordIndex) => (
                  <motion.div
                    key={wordIndex}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    transition={{ duration: 0.1, delay: wordIndex * 0.4 }}
                    className="poppins-bold text-2xl xl:text-4xl text-[#335c98]"
                  >
                    {word}
                    {word === " " && (
                      <span className="mx-[0.3rem] md:mx-3"></span>
                    )}
                  </motion.div>
                ))}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.395944531599!2d72.8223483752024!3d18.95811328222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU3JzI5LjIiTiA3MsKwNDknMjkuNyJF!5e0!3m2!1sen!2sin!4v1727513266722!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-auto h-[20vh] xl:w-3/4 xl:h-44"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}