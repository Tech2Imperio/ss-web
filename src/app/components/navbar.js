"use client";
import Link from "next/link";
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
import Logo from "../assets/logo/whiteLogo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [rotateProductsIcon, setRotateProductsIcon] = useState(false);
  const [rotateProfileIcon, setRotateProfileIcon] = useState(false);
  const [isMobileView, setMobileView] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState("");

  const arrow = <MdArrowForwardIos />;
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutus" },
    {
      name: "Products",
      href: "#",
      subItems: [
        {
          name: "Stainless Steel Glass Railing System",
          href: "/products/ssGlassRailing",
        },
        {
          name: "Stainless Steel Decorative Sheet",
          href: "/products/ssDecorativeSheet",
        },
        {
          name: "Stainless Steel Profile",
          href: "#",
          subItems: [
            {
              name: "Stainless Steel T-Profile ",
              href: "/products/profile/tProfile",
            },
            {
              name: "Stainless Steel U-Profile",
              href: "/products/profile/uProfile",
            },
            {
              name: "Stainless Steel Q-Profile",
              href: "/products/profile/qProfile",
            },
            {
              name: "Stainless Steel L-Profile",
              href: "/products/profile/lProfile",
            },
            {
              name: "Stainless Steel Fluted Panels",
              href: "/products/profile/flutedPanelProfile",
            },
            {
              name: "Stainless Steel Customize Profile",
              href: "/products/profile/customProfile",
            },
          ],
        },
        { name: "Stainless Steel Wire Rope", href: "/products/ssWireRope" },
        { name: "Invisible Grill", href: "/products/ssInvisibleGrill" },
        { name: "Queue Manager", href: "/products/ssQueueManager" },
      ],
    },
    { name: "Blog", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
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

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHoveredSubItem(null);
  };

  const handleSubItemMouseEnter = (item) => setHoveredSubItem(item);
  const handleSubItemMouseLeave = () => setHoveredSubItem(null);

  return (
    <nav
      className={`${
        isMobileView ? "bg-black" : " bg-gray-950 bg-opacity-60"
      } text-white max-w-full sticky z-10`}
    >
      {isMobileView ? (
        <>
          <div className="flex justify-between items-center md:px-28 w-full bg-transparent">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className="h-[5rem] w-[8rem] cursor-pointer"
            />
            <button
              onClick={toggleSidebar}
              className="p-4 rounded-full text-white text-2xl"
            >
              {isOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          {isOpen ? (
            <motion.div
              {...sidebarAnimationOpen()}
              className="relative top-5 left-0 h-auto w-full bg-black text-white lg:h-full -mt-[1.5rem]"
            >
              <div className="p-4 flex flex-col">
                <div className="flex flex-col my-1">
                  <ul className="flex justify-center flex-col gap-5 md:gap-12 cursor-pointer">
                    <Link
                      href="/"
                      className="p-3 text-xl flex items-center justify-center"
                    >
                      Home
                    </Link>
                    <Link
                      href="/aboutus"
                      className="p-3 text-xl flex items-center justify-center"
                    >
                      About Us
                    </Link>
                    <Link
                      href="#"
                      onClick={toggleProductsDropdown}
                      className="flex gap-2 cursor-pointer p-3 text-xl items-center justify-center"
                    >
                      Products
                      <MdArrowForwardIos
                        className={`mt-1 transition-transform duration-300 ${
                          rotateProductsIcon ? "rotate-90" : "rotate-0"
                        }`}
                      />
                    </Link>
                  </ul>

                  {isProductsDropdownOpen && (
                    <motion.div
                      {...dropdownAnimationOpen()}
                      className="relative bg-black flex flex-col items-center h-auto gap-4 px-5 w-full cursor-pointer py-8"
                    >
                      <ul className="flex flex-col justify-around h-auto w-full">
                        <Link
                          href="/products/ssGlassRailing"
                          className="p-2 text-[1.25rem] whitespace-nowrap flex items-center justify-center"
                        >
                          Stainless Steel Glass Railing System
                        </Link>
                        <Link
                          href="#"
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
                        </Link>

                        {isProfileDropdownOpen && (
                          <motion.ul
                            {...dropdownAnimationOpen()}
                            className="flex flex-col gap-2 items-center justify-start w-full px-3 cursor-pointer pb-3 h-auto"
                            onMouseEnter={() =>
                              handleProfileDropdownHover(true)
                            }
                            onMouseLeave={() =>
                              handleProfileDropdownHover(false)
                            }
                          >
                            <Link
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                              href="/products/profile/tProfile"
                            >
                              Stainless Steel T-Profile
                            </Link>
                            <Link
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                              href="/products/profile/uProfile"
                            >
                              Stainless Steel U-Profile
                            </Link>
                            <Link
                              href="/products/profile/qProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel Q-Profile
                            </Link>
                            <Link
                              href="/products/profile/lProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel L-Profile
                            </Link>
                            <Link
                              href="/products/profile/flutedPanelProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel Fluted Panels
                            </Link>
                            <Link
                              href="/products/profile/customProfile"
                              className="flex items-center text-base hover:bg-gray-400 rounded-xl px-2 py-1"
                            >
                              Stainless Steel Customize Profile
                            </Link>
                          </motion.ul>
                        )}

                        <Link
                          href="/products/ssDecorativeSheet"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Stainless Steel Decorative Sheet
                        </Link>
                        <Link
                          href="/products/ssWireRope"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Stainless Steel Wire Rope
                        </Link>
                        <Link
                          href="/products/ssInvisibleGrill"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Invisible Grill
                        </Link>
                        <Link
                          href="/products/ssQueueManager"
                          className="p-2 text-[1.25rem] flex items-center justify-center"
                        >
                          Queue Manager
                        </Link>
                      </ul>
                    </motion.div>
                  )}

                  <Link
                    href="/blog"
                    className="p-3 text-xl flex items-center justify-center mt-2"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contactus"
                    className="p-3 text-xl flex items-center justify-center mt-2"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              {...sidebarAnimationClose()}
              className="fixed top-0 left-0 w-full h-full bg-black text-white"
            ></motion.div>
          )}
        </>
      ) : (
        <div className="sm:px-6 lg:px-28 w-full flex">
          <Link href="/" className="flex-shrink-0">
            <Image
              priority
              src={Logo}
              alt="Logo"
              className="h-[6rem] w-[9rem] cursor-pointer"
            />
          </Link>
          <div className="flex justify-evenly items-center w-full">
            <div className="hidden md:block">
              <div className="flex justify-around w-[50vw] items-baseline space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className="px-3 py-2 rounded-md text-xl font-medium hover:text-white flex items-center"
                    >
                      {item.name}
                      {item.name === "Products" && <MdArrowForwardIos />}
                    </Link>
                    {item.subItems && hoveredItem === item.name && (
                      <div className="absolute left-0 w-72 rounded-md shadow-lg bg-white text-gray-700 ring-1 focus:outline-none z-10">
                        <div className="py-1" role="menu">
                          {item.subItems.map((subItem) => (
                            <div
                              key={subItem.name}
                              className="relative group"
                              onMouseEnter={() =>
                                handleSubItemMouseEnter(subItem.name)
                              }
                              onMouseLeave={handleSubItemMouseLeave}
                            >
                              <Link
                                href={subItem.href}
                                className=" px-4 py-2 text-md whitespace-nowrap hover:bg-gray-100 text-gray-700 flex items-center"
                              >
                                {subItem.name}
                                {subItem.name === "Stainless Steel Profile" && (
                                  <MdArrowForwardIos />
                                )}
                              </Link>
                              {subItem.subItems &&
                                (hoveredSubItem === subItem.name ||
                                  hoveredItem ===
                                    "Stainless Steel Profile") && (
                                  <div className="absolute left-full top-0 mt-0 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1" role="menu">
                                      {subItem.subItems.map((nestedSubItem) => (
                                        <Link
                                          key={nestedSubItem.name}
                                          href={nestedSubItem.href}
                                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        >
                                          {nestedSubItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
