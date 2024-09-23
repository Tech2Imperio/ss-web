"use client";

import { useState } from "react";
import Link from "next/link";
// import { Menu, X } from 'lucide-react'
import Logo from "../assets/logo/whiteLogo.webp";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");
  const [hoveredSubItem, setHoveredSubItem] = useState("");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => {
    setHoveredItem(null);
    setHoveredSubItem(null);
  };

  const handleSubItemMouseEnter = (item) => setHoveredSubItem(item);
  const handleSubItemMouseLeave = () => setHoveredSubItem(null);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    {
      name: "Products",
      href: "/",
      subItems: [
        { name: "Stainless Steel Glass Railing System", href: "/" },
        { name: "Stainless Steel Decorative Sheet", href: "/" },
        {
          name: "Stainless Steel Profile",
          href: "/",
          subItems: [
            { name: "Stainless Steel T-Profile", href: "/products/profile/tProfile" },
            { name: "Stainless Steel U-Profile", href: "/products/profile/uProfile" },
            { name: "Stainless Steel Q-Profile", href: "/" },
            { name: "Stainless Steel L-Profile", href: "/" },
            { name: "Stainless Steel Fluted Panels", href: "/" },
            { name: "Stainless Steel Customize Profile", href: "/" },
          ],
        },
        { name: "Stainless Steel Wire Rope", href: "/" },
        { name: "Invisible Grill", href: "/" },
        { name: "Queue Manager", href: "/" },
      ],
    },
    { name: "Blog", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  return (
    <nav className="bg-gray-950 bg-opacity-60 text-white max-w-full relative z-10">
      <div className="sm:px-6 lg:px-28 py-2 w-full flex">
        <Link href="/" className="flex-shrink-0">
          <Image
            priority
            src={Logo}
            alt="Logo"
            className="h-[5rem] w-[8rem] cursor-pointer"
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
                    className="px-3 py-2 rounded-md text-xl font-medium hover:text-white poppins-regular"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && hoveredItem === item.name && (
                    <div className="absolute left-0 mt-1 w-72 rounded-md shadow-lg bg-white text-gray-700 hover:text-gray-900 ring-1 focus:outline-none z-10">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
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
                              className="block px-4 py-2 text-md whitespace-nowrap hover:bg-gray-100 text-gray-700 hover:text-gray-900 nunito"
                              role="menuitem"
                            >
                              {subItem.name}
                            </Link>
                            {subItem.subItems &&
                              (hoveredSubItem === subItem.name ||
                                hoveredItem === "Stainless Steel Profile") && (
                                <div className="absolute left-full top-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                  <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                  >
                                    {subItem.subItems.map((nestedSubItem) => (
                                      <Link
                                        key={nestedSubItem.name}
                                        href={nestedSubItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 nunito"
                                        role="menuitem"
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
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />} */}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                        {subItem.subItems && (
                          <div className="pl-4">
                            {subItem.subItems.map((nestedSubItem) => (
                              <Link
                                key={nestedSubItem.name}
                                href={nestedSubItem.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                              >
                                {nestedSubItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
