"use client";
import Image from "next/image";
import Logo from "../assets/logo/blueLogo.webp";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { motion } from "framer-motion";

export default function Footer() {
  const textArray = [
    "L",
    "e",
    "t",
    "'s",
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

  return (
    <footer className="relative bottom-0 left-0 right-0 flex flex-col justify-center items-start bg-gray-300 opacity-90 w-[100vw] h-auto z-40 py-8">
      <div className="flex justify-start ml:4 xl:ml-28">
        <Image
          priority
          src={Logo}
          alt="Logo"
          className="h-[5rem] w-[7rem] cursor-pointer"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full justify-between gap-8 py-8 px-4 xl:gap-0 xl:px-12">
        <div className="flex flex-col justify-between gap-8 xl:gap-12 h-full w-full">
          <div className="text-[#335c98] text-lg flex flex-col justify-center gap-12 xl:flex-row">
            <div className="flex align-middle gap-3">
              <BsTelephone className="mt-1 text-xl" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-regular">Telephone</h6>
                <p className="nunito text-sm">+91 85919 53385</p>
              </div>
            </div>
            <div className="flex align-middle gap-3">
              <FiMail className="mt-1 text-xl" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-regular">Email</h6>
                <p className="nunito text-sm">hello@imperiorailing.com</p>
              </div>
            </div>
            <div className="flex align-middle gap-3">
              <TfiLocationPin className="mt-1 text-xl" />
              <div className="flex flex-col gap-2">
                <h6 className="poppins-regular">Headquarters</h6>
                <p className="nunito text-sm">
                  Rajguru Steel Industries 92/94, <br />
                  Kika Street, Gulalwadi, Girgaon, <br />
                  Mumbai - 400004, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row w-[100%] xl:w-[85%] justify-center gap-8 xl:gap-12">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold text-[#335c98] poppins-semibold">
                Subscribe to our Newsletter
              </h1>
              <div className="flex flex-col gap-3 w-full xl:w-80">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded"
                />
                <button className="bg-[#335c98] nunito text-white p-2 rounded hover:bg-white hover:text-[#335c98] transition duration-700">
                  Subscribe
                </button>
              </div>
            </div>
            <div id="icons" className="flex gap-4 text-[#335c98] text-3xl h-9">
              {[
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  hoverColor: "hover:text-pink-600",
                },
                {
                  icon: <ImFacebook2 />,
                  label: "Facebook",
                  hoverColor: "hover:text-blue-700",
                },
                {
                  icon: <FaXTwitter />,
                  label: "Twitter",
                  hoverColor: "hover:text-black",
                },
                {
                  icon: <FiYoutube />,
                  label: "YouTube",
                  hoverColor: "hover:text-red-700",
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
        </div>
        <div className="flex flex-col gap-4 w-[100%]">
          <div className="flex w-[100%] flex-wrap">
            {textArray.map((word, wordIndex) => (
              <motion.div
                key={wordIndex}
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                transition={{ duration: 0.1, delay: wordIndex * 0.4 }}
                className="poppins-bold text-5xl xl:text-6xl text-[#335c98]"
              >
                {word}
                {word === " " && <span className="mx-3"></span>}{" "}
              </motion.div>
            ))}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3773.395944531599!2d72.8223483752024!3d18.95811328222244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDU3JzI5LjIiTiA3MsKwNDknMjkuNyJF!5e0!3m2!1sen!2sin!4v1727513266722!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full xl:h-96"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
