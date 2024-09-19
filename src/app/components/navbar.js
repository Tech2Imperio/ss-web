"use client";
import { useState } from "react";
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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleProductsDropdownHover = (isHovering) => {
    setIsProductsDropdownOpen(isHovering);
    setRotateProductsIcon(isHovering);
    if (!isHovering) {
      setIsProfileDropdownOpen(false);
      setRotateProfileIcon(false);
    }
  };

  const handleProfileDropdownHover = (isHovering) => {
    setIsProfileDropdownOpen(isHovering);
    setRotateProfileIcon(isHovering);
  };
  return (
    <nav className="relative flex justify-around items-center bg-transparent overflow-hidden z-50 xl:gap-[65rem] md:gap-0 sm:gap-0 lg:gap-[35rem]">
      <Image
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
              <IoClose className="text-2xl" />{" "}
              {/* <div className="hidden md:block">Close</div> */}
            </>
          ) : (
            <>
              <GiHamburgerMenu className="text-2xl" />
              {/* <div className="hidden md:block">Menu</div> */}
            </>
          )}
        </button>
      </div>
      {isOpen ? (
        <motion.div
          {...sidebarAnimationOpen()}
          className="fixed top-[4rem] left-0 w-full h-auto bg-gray-800 opacity-65 text-white overflow-hidden lg:h-full"
        >
          <div className="p-4 flex flex-col">
            <div className="flex flex-col my-10">
              <ul className="mt-4 flex justify-center flex-col gap-10 md:gap-12 md:flex-col cursor-pointer lg:gap-28 lg:flex-row">
                {[
                  "Home",
                  "About Us",

                  <div
                    onMouseEnter={() => handleProductsDropdownHover(true)}
                    onMouseLeave={() => handleProductsDropdownHover(false)}
                    className="flex gap-2"
                  >
                    Products{" "}
                    <MdArrowForwardIos
                      className={`mt-1 transition-transform duration-300 ${
                        rotateProductsIcon ? "rotate-90" : "rotate-0"
                      }`}
                    />
                  </div>,
                  "Blog",
                  "Contact Us",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="p-3 text-2xl flex items-center justify-center"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {isProductsDropdownOpen && (
                <motion.div
                  {...dropdownAnimationOpen()}
                  onMouseEnter={() => handleProductsDropdownHover(true)}
                  onMouseLeave={() => handleProductsDropdownHover(false)}
                  className="bg-gray-900 flex flex-col items-center gap-4 px-5 w-full cursor-pointer -mt-1 py-8 "
                >
                  <ul className="flex flex-col justify-around w-full gap-10 lg:flex-row lg:gap-0">
                    {[
                      "Stainless Steel Glass Railing System",

                      <div
                        onMouseEnter={() => handleProfileDropdownHover(true)}
                        onMouseLeave={() => handleProfileDropdownHover(false)}
                        className="flex gap-1"
                      >
                        Profile{" "}
                        <MdArrowForwardIos
                          className={`mt-1 transition-transform duration-300 ${
                            rotateProfileIcon ? "rotate-90" : "rotate-0"
                          }`}
                        />
                      </div>,
                      "Stainless Steel Decorative Sheet",
                      "Stainless Steel Wire Rope",
                      "Invisible Grill",
                      "Queue Manager",
                    ].map((prodlist, index) => (
                      <li
                        key={index}
                        className="p-2 text-2xl flex items-center justify-center"
                      >
                        {prodlist}
                      </li>
                    ))}
                  </ul>
                  {isProfileDropdownOpen && (
                    <motion.ul
                      {...dropdownAnimationOpen()}
                      className="flex flex-col gap-2 items-start justify-start w-[56%] px-3 cursor-pointer pb-3"
                      style={{ marginTop: "-25px" }}
                      onMouseEnter={() => handleProfileDropdownHover(true)}
                      onMouseLeave={() => handleProfileDropdownHover(false)}
                    >
                      {[
                        "Stainless Steel T-Profile",
                        "Stainless Steel U-Profile",
                        "Stainless Steel Q-Profile",
                        "Stainless Steel L-Profile",
                        "Stainless Steel Fluted Panels",
                        "Stainless Steel Customize Profile",
                      ].map((profilelist, index) => (
                        <li
                          className="flex items-center text-2xl hover:bg-gray-400 rounded-xl px-2 py-1"
                          key={index}
                        >
                          {profilelist}
                        </li>
                      ))}
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
