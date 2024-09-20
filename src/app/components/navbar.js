"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowForwardIos } from "react-icons/md";
import {
  dropdownAnimationOpen,
  sidebarAnimationClose,
  sidebarAnimationOpen,
} from "./utility/animation.jsx";
import Image from "next/image";
import Logo from "../assets/logo/whiteLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [rotateProductsIcon, setRotateProductsIcon] = useState(false);
  const [rotateProfileIcon, setRotateProfileIcon] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen((prev) => !prev);
    setRotateProductsIcon((prev) => !prev);
    if (isProfileDropdownOpen) {
      setIsProfileDropdownOpen(false);
      setRotateProfileIcon(false);
    }
  };

  const handleProfileDropdownHover = (isHovering) => {
    setIsProfileDropdownOpen(isHovering);
    setRotateProfileIcon(isHovering);
  };

  const handleProductsDropdownHover = (isHovering) => {
    setIsProductsDropdownOpen(isHovering);
    setRotateProductsIcon(isHovering);
    if (!isHovering) {
      setIsProfileDropdownOpen(false);
      setRotateProfileIcon(false);
    }
  };

  return (
    <nav className="relative flex flex-col  h-24 bg-gray-800 opacity-65 gap-5">
      <div className="flex justify-between items-center md:px-28 w-full ">
        <Image
          priority
          src={Logo}
          alt="Logo"
          className="h-[5rem] w-[10rem] cursor-pointer"
        />
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="flex justify-center items-center p-4 bg-gray-800 rounded-full text-white gap-4 cursor-pointer text-2xl"
          >
            {isOpen ? (
              <>
                <IoClose className="text-2xl" /> Close
              </>
            ) : (
              <>
                <GiHamburgerMenu className="text-2xl" />
                Menu
              </>
            )}
          </button>
        </div>
      </div>
      {isMobileView ? (
        isOpen ? (
          <motion.div
            {...sidebarAnimationOpen()}
            className="relative left-0 h-auto w-full bg-gray-800 opacity-65 text-white lg:h-full -mt-[1.5rem]"
          >
            <div className="p-4 flex flex-col">
              <div className="flex flex-col my-1">
                <ul className="flex justify-center flex-col gap-5 md:gap-12 cursor-pointer">
                  <li className="p-3 text-xl flex items-center justify-center">
                    Home
                  </li>
                  <li className="p-3 text-xl flex items-center justify-center">
                    About Us
                  </li>
                  <li
                    onClick={toggleProductsDropdown}
                    className="flex gap-2 cursor-pointer p-3 text-xl items-center justify-center"
                  >
                    Products
                    <MdArrowForwardIos
                      className={`mt-1 transition-transform duration-300 ${
                        rotateProductsIcon ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </li>
                </ul>

                {isProductsDropdownOpen && (
                  <motion.div
                    {...dropdownAnimationOpen()}
                    className="relative bg-gray-900 flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer py-8"
                  >
                    <ul className="flex flex-col justify-around h-auto w-full">
                      <li className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center">
                        Stainless Steel Glass Railing System
                      </li>
                      <li
                        onMouseEnter={() => handleProfileDropdownHover(true)}
                        onMouseLeave={() => handleProfileDropdownHover(false)}
                        className="flex gap-1 cursor-pointer p-2 text-[1.25rem] items-center justify-center"
                      >
                        Stainless Steel Profile
                        <MdArrowForwardIos
                          className={`mt-1 transition-transform duration-300 ${
                            rotateProfileIcon ? "rotate-90" : "rotate-0"
                          }`}
                        />
                      </li>

                      {isProfileDropdownOpen && (
                        <motion.ul
                          {...dropdownAnimationOpen()}
                          className="flex flex-col gap-2 items-center justify-start w-full px-3 cursor-pointer pb-3 h-auto"
                          onMouseEnter={() => handleProfileDropdownHover(true)}
                          onMouseLeave={() => handleProfileDropdownHover(false)}
                        >
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel T-Profile
                          </li>
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel U-Profile
                          </li>
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel Q-Profile
                          </li>
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel L-Profile
                          </li>
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel Fluted Panels
                          </li>
                          <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                            Stainless Steel Customize Profile
                          </li>
                        </motion.ul>
                      )}

                      <li className="p-2 text-[1.25rem] flex items-center justify-center">
                        Stainless Steel Decorative Sheet
                      </li>
                      <li className="p-2 text-[1.25rem] flex items-center justify-center">
                        Stainless Steel Wire Rope
                      </li>
                      <li className="p-2 text-[1.25rem] flex items-center justify-center">
                        Invisible Grill
                      </li>
                      <li className="p-2 text-[1.25rem] flex items-center justify-center">
                        Queue Manager
                      </li>
                    </ul>
                  </motion.div>
                )}

                <li className="p-3 text-xl flex items-center justify-center mt-2">
                  Blog
                </li>
                <li className="p-3 text-xl flex items-center justify-center mt-2">
                  Contact Us
                </li>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            {...sidebarAnimationClose()}
            className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-65 text-white"
          ></motion.div>
        )
      ) : isOpen ? (
        <motion.div
          {...sidebarAnimationOpen()}
          className="fixed left-0 w-full h-auto bg-gray-800 opacity-65 text-white md:top-[4rem] lg:h-full "
        >
          <div className="p-4 flex flex-col">
            <div className="flex flex-col my-10">
              <ul className="cursor-pointer h-auto mt-4 flex flex-col justify-center gap-10 md:gap-12 md:flex-col lg:gap-24 lg:h-full lg:flex-row xl:gap-28">
                <li className="p-3 text-2xl flex items-center justify-center">
                  Home
                </li>
                <li className="p-3 text-2xl flex items-center justify-center whitespace-nowrap">
                  About Us
                </li>
                <li
                  onMouseEnter={() => handleProductsDropdownHover(true)}
                  onMouseLeave={() => handleProductsDropdownHover(false)}
                  className="p-3 flex text-2xl items-center justify-center gap-2"
                >
                  Products
                  <MdArrowForwardIos
                    className={`mt-2 transition-transform duration-300 ${
                      rotateProductsIcon ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </li>
                <li className="p-3 text-2xl flex items-center justify-center">
                  Blog
                </li>
                <li className="p-3 text-2xl flex items-center justify-center whitespace-nowrap">
                  Contact Us
                </li>
              </ul>
              {isProductsDropdownOpen && (
                <motion.div
                  {...dropdownAnimationOpen()}
                  onMouseEnter={() => handleProductsDropdownHover(true)}
                  onMouseLeave={() => handleProductsDropdownHover(false)}
                  className="bg-gray-900 flex flex-col items-center h-auto w-full gap-1 px-5 py-[1.65rem] cursor-pointer xl:-mt-3"
                >
                  <ul className="flex flex-col justify-around h-auto w-full gap-10 lg:flex-row lg:gap-2">
                    <li className="p-2 text-xl flex items-center justify-center">
                      Stainless Steel Glass Railing System
                    </li>
                    <li
                      onMouseEnter={() => handleProfileDropdownHover(true)}
                      onMouseLeave={() => handleProfileDropdownHover(false)}
                      className="flex items-center justify-center gap-1 p-2 text-xl"
                    >
                      Profile
                      <MdArrowForwardIos
                        className={`mt-2 transition-transform duration-300 ${
                          rotateProfileIcon ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </li>
                    <li className="p-2 text-xl flex items-center justify-center">
                      Stainless Steel Decorative Sheet
                    </li>
                    <li className="p-2 text-xl flex items-center justify-center">
                      Stainless Steel Wire Rope
                    </li>
                    <li className="p-2 text-xl flex items-center justify-center">
                      Invisible Grill
                    </li>
                    <li className="p-2 text-xl flex items-center justify-center">
                      Queue Manager
                    </li>
                  </ul>
                  {isProfileDropdownOpen && (
                    <motion.ul
                      {...dropdownAnimationOpen()}
                      className="cursor-pointer flex flex-col items-start justify-start w-[56%] px-3 pb-3 md:h-auto xl:-mt-4 gap-2"
                      onMouseEnter={() => handleProfileDropdownHover(true)}
                      onMouseLeave={() => handleProfileDropdownHover(false)}
                    >
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel T-Profile
                      </li>
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel U-Profile
                      </li>
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel Q-Profile
                      </li>
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel L-Profile
                      </li>
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel Fluted Panels
                      </li>
                      <li className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1">
                        Stainless Steel Customize Profile
                      </li>
                    </motion.ul>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          {...sidebarAnimationClose()}
          className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-65 text-white"
        ></motion.div>
      )}
    </nav>
  );
}
