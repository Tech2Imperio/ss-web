"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import bgImg from "../../assets/product/invisiblegrill/bg.webp";
import img1 from "../../assets/product/invisiblegrill/tallImg/img1.jpg";
import img2 from "../../assets/product/invisiblegrill/tallImg/img2.jpg";
import img3 from "../../assets/product/invisiblegrill/tallImg/img3.jpg";
import BulletHook from "../../assets/product/invisiblegrill/Accessories/BulletHook.webp";
import Hooks from "../../assets/product/invisiblegrill/Accessories/Hooks.webp";
import Hooks2 from "../../assets/product/invisiblegrill/Accessories/Hooks2.webp";
import invisiblematerial from "../../assets/product/invisiblegrill/Accessories/invisiblematerial.webp";
import Invisiblerope from "../../assets/product/invisiblegrill/Accessories/InvisibleWire.webp";
import turnbuckle from "../../assets/product/invisiblegrill/Accessories/turnbuckle.webp";
import UProfile from "../../assets/RelatedProducts/UProfile.webp";
import LProfile from "../../assets/RelatedProducts/LProfile.webp";
import fluted from "../../assets/RelatedProducts/fluted.webp";
import TProfile from "../../assets/product/profile/T_profile/wall.webp";
import customized from "../../assets/RelatedProducts/customized.webp";
import CProfile from "../../assets/RelatedProducts/CProfile.webp";
import DecorativeSheet from "../../assets/RelatedProducts/decorativesheet.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Home() {
  const items = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slides every 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const relatedProducts = [
    {
      title: "U Profile",
      image: UProfile,
      link: "/products/profile/uProfile",
    },
    {
      title: "T Profile",
      image: TProfile,
      link: "/products/profile/tProfile",
    },
    {
      title: "L Profile",
      image: LProfile,
      link: "/products/profile/lProfile",
    },
    {
      title: "Fluted Panel",
      image: fluted,
      link: "/products/profile/flutedPanel",
    },
    {
      title: "C Profile",
      image: CProfile,
      link: "/products/profile/cProfile",
    },
    {
      title: "Decorative Sheet",
      image: DecorativeSheet,
      link: "/products/ssDecorativeSheet",
    },
    {
      title: "Custom Profile",
      image: customized,
      link: "/products/profile/customProfile",
    },
  ];

  return (
    <main className=" h-full w-full">
      <div className="relative -mt-32">
        <Image
          className="h-[22rem] md:h-[40rem] w-full object-cover"
          src={bgImg}
          alt="invisible grill"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center mt-28 md:pt-0 text-[#335c98] text-3xl md:text-[5rem] poppins-regular">
          Invisible Grill
        </h1>
      </div>
      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[18rem]">
        <p className=" text-slate-500 lg:text-xl text-justify  p-8">
          Rajguru Steel Industry offers premium Invisible Grill solutions
          designed to enhance safety without obstructing views. Ideal for
          high-rise buildings and balconies, our invisible grills provide a
          sleek, modern aesthetic with robust durability. Made from high-quality
          materials, they ensure protection while maintaining an unobstructed
          outlook. Additionally, we supply a range of accessories like bullet
          hooks and invisible wire, further ensuring safety and convenience for
          every installation.
        </p>
        <section className="flex flex-col lg:flex-row items-center justify-center gap-36 h-full w-full bg-gray-50 ">
          <div className="relative flex flex-col items-center justify-center md:pt-[15rem] lg:pt-0">
            <h1 className="text-3xl poppins-regular text-[#335c98] p-4 ">
              Invisible Grill
            </h1>
            <div className="overflow-hidden rounded-3xl h-[25rem] w-[20rem] md:h-[42rem] md:w-[28rem] lg:h-[45rem] lg:w-[28rem] xl:h-[38rem] xl:w-[26rem] border border-gray-300 relative ">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`absolute transition-transform duration-500 ease-in-out w-full h-full flex items-center justify-center transform ${
                    index === currentIndex
                      ? "translate-x-0"
                      : "translate-x-full"
                  }`}
                >
                  <Image
                    src={item}
                    alt={`Slide ${index + 1}`}
                    layout="fill" // Ensures the image fills the parent container
                    className="object-cover rounded-3xl"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col -mt-28 md:-mt-14 lg:-mt-0 ">
            <h2 className="text-3xl poppins-regular text-[#335c98] flex justify-center">
              Accessories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center align-middle list-none -mx-4">
              {/* Accessory 1 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem] xl:h-[9rem] xl:w-[9rem] hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={BulletHook} alt="BulletHook" />
                </li>
                <p className=" text-center text-gray-700 poppins-regular">
                  Bullet Hook
                </p>
              </div>

              {/* Accessory 2 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem] xl:h-[9rem] xl:w-[9rem]  hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={Hooks} alt="Hooks" />
                </li>
                <p className=" text-center text-gray-700 poppins-regular">
                  Snap Hooks
                </p>
              </div>

              {/* Accessory 3 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]  xl:h-[9rem] xl:w-[9rem]  hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={Hooks2} alt="Hooks2" />
                </li>
                <p className=" text-center text-gray-700 poppins-regular">
                  D-Shackle
                </p>
              </div>

              {/* Accessory 4 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]  xl:h-[9rem] xl:w-[9rem]  hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={invisiblematerial} alt="invisiblematerial" />
                </li>
                <p className=" text-center text-gray-700 poppins-regular">
                  Invisible Material
                </p>
              </div>

              {/* Accessory 5 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]  xl:h-[9rem] xl:w-[9rem]  hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={Invisiblerope} alt="Invisiblerope" />
                </li>
                <p className=" text-center text-gray-700 poppins-regular">
                  Invisible Rope
                </p>
              </div>

              {/* Accessory 6 */}
              <div className="flex flex-col items-center">
                <li className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem]  xl:h-[9rem] xl:w-[9rem]  hover:scale-110 transition-transform duration-700 cursor-pointer">
                  <Image src={turnbuckle} alt="turnbuckle" />
                </li>
                <p className="mt-2 text-center text-gray-700 poppins-regular">
                  Turnbuckle hook
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className="flex flex-col overflow-hidden w-full h-full xl:px-[18rem] p-4 md:p-6 lg:p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl poppins-regular text-[#335c98] py-4 text-center">
            Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Invisible Wire */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Invisible Wire
              </h3>
              <p className="text-gray-600 nunito">
                High-tensile marine-grade stainless steel wire (316 grade) with
                a thickness ranging from 2mm to 4mm, ensuring durability and
                resistance to corrosion.
              </p>
            </div>

            {/* Card 2 - Turnbuckle */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Turnbuckle
              </h3>
              <p className="text-gray-600 nunito">
                Adjustable stainless steel turnbuckle used for tensioning the
                invisible wire, available in various sizes (M5, M6, M8) for a
                secure fit.
              </p>
            </div>

            {/* Card 3 - Bullet Hooks */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Bullet Hooks
              </h3>
              <p className="text-gray-600 nunito">
                Precision-engineered stainless steel bullet hooks designed for
                firm anchoring, corrosion resistance, and compatibility with
                invisible wire systems.
              </p>
            </div>

            {/* Card 4 - Mounting Brackets */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Mounting Brackets
              </h3>
              <p className="text-gray-600 nunito">
                Stainless steel mounting brackets, rust-resistant with a sleek
                finish, designed to hold the wire tension and ensure stability.
              </p>
            </div>

            {/* Card 5 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                D-Shackle
              </h3>
              <p className="text-gray-600 nunito">
                D-Shackles are durable stainless steel connectors with high
                tensile strength and corrosion resistance, ideal for securing
                loads. Available in various sizes for wire and rope systems.
              </p>
            </div>
            {/* Card 6 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                End Cap & Anchors
              </h3>
              <p className="text-gray-600 nunito">
                High-strength stainless steel end caps and anchors, ensuring
                long-lasting installations with an aesthetic finish.
              </p>
            </div>
          </div>

          {/* Add button to interact */}
          <div className="flex justify-center mt-8">
            <button className="mt-8 px-6 py-3 poppins-regular bg-[#335c98] text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50">
              GET A QUOTE
            </button>
          </div>
        </div>
      </main>
      <div className="w-full py-20 fade-in mt-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-[29px] font-bold text-[#335c98] mb-16 poppins-regular">
              Other Products
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
              spaceBetween={15}
              slidesPerView={1}
              navigation
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: { slidesPerView: -1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {relatedProducts.map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center cursor-pointer">
                    <Link href={product.link} passHref>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={220}
                        height={250}
                        className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
                      />
                      <h3 className="mt-4 text-xl font-semibold text-[#335c98] arimo">
                        {product.title}
                      </h3>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
    </main>
  );
}
