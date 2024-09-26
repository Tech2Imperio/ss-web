"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Img1 from "./assets/home-swiper/image1.webp";
import Img2 from "./assets/home-swiper/image2.webp";
import Img3 from "./assets/home-swiper/image3.webp";
import Img4 from "./assets/home-swiper/image4.webp";
import Img5 from "./assets/home-swiper/image5.webp";
import Img6 from "./assets/home-swiper/image6.webp";
import Img7 from "./assets/home-swiper/image7.webp";
import Img8 from "./assets/home-swiper/image8.webp";
import Img9 from "./assets/home-swiper/image9.webp";
import section2 from "./assets/home-swiper/2-history.webp";
import MobSection2 from "./assets/home-swiper/MobSection2.webp";
import Image from "next/image";

const images = [Img1, Img2, Img3, Img4, Img5];
const images2 = [Img6, Img7, Img8, Img9, Img6];

function Section1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 770);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="-mt-24 flex top-0 h-screen w-screen relative -z-10">
      <div className="relative w-full h-full overflow-hidden">
        {(isMobileView ? images2 : images).map(
          (image, index) =>
            index === currentIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
                className="absolute w-full h-full"
              >
                <Image
                  priority
                  src={image}
                  className="object-cover h-full w-full"
                  alt={`Slide ${index}`}
                />
              </motion.div>
            )
        )}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 6,
          }}
          className="relative bottom-0 right-0 bg-gray-950 opacity-60 flex items-start justify-center text-white p-16 flex-col gap-4 h-full w-full lg:items-center "
        >
          <motion.h1
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 6,
            }}
            className="text-[2rem] sm:text-[3rem] md:text-[3.3rem] lg:text-[3.5rem] xl:text-[3.8rem] whitespace-nowrap poppins-bold"
          >
            Crafted for Trust, <br />
            Built for Strength
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 6,
            }}
            className="text-xs md:text-2xl whitespace-nowrap nunito"
          >
            "Delivering premium craftsmanship and durability, <br />
            ensuring quality you can trust and strength that lasts."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Section2() {
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-[100vh] w-[100vw] flex py-24">
      <div className="flex flex-col md:flex-row justify-between items-center relative w-full h-full">
        <Image
          priority
          src={isMobileView ? MobSection2 : section2}
          alt="Logo"
          className="h-[100%] w-full md:w-[60%] left-0 xl:absolute"
        />
        {isMobileView === false ? (
          <motion.div
            className="bg-gray-800 opacity-95 w-[50%] h-[80%]"
            initial={{ x: "200%" }}
            animate={{ x: "100%" }}
            exit={{ x: "200%" }}
            transition={{
              duration: 1.1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
          >
            <div className="h-full flex flex-col items-start justify-center px-14 gap-[1.5rem] text-gray-300">
              <h1 className="poppins-bold text-3xl text-start">
                Shaping the Future of Stainless Steel
              </h1>
              <p className="nunito text-[14px] text-justify">
                We have evolved into a multi-division, multi-product
                conglomerate in the stainless steel industry.
              </p>
              <p className="nunito text-[14px] text-justify">
                Our commitment to customer satisfaction and quality sets us
                apart in this traditional field. We drive positive change with
                stronger, eco-friendly stainless steel and high-performance
                machinery, revolutionizing industries.
              </p>
              <p className="nunito text-[14px] text-justify">
                Our passionate team and partners share our vision, empowering
                success through innovation. Explore Our Products Discover our
                stainless steel solutions designed to meet your needs. Visit our
                product page to learn more.
              </p>
              <button
                type="submit"
                className="flex justify-center gap-1 items-center shadow-lg text-sm text-gray-800 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
              >
                View Products
                <svg
                  className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <div className="bg-gray-800 w-full h-full">
            <div className="flex flex-col items-start justify-center p-8 md:p-auto gap-4 text-gray-300 text-lg text-start h-full">
              <h1 className="poppins-bold text-xl">
                Shaping the Future of Stainless Steel
              </h1>
              <p className="nunito text-xs text-justify">
                We have evolved into a multi-division, multi-product
                conglomerate in the stainless steel industry.
              </p>
              <p className="nunito text-xs text-justify">
                Our commitment to customer satisfaction and quality sets us
                apart in this traditional field. We drive positive change with
                stronger, eco-friendly stainless steel and high-performance
                machinery, revolutionizing industries.
              </p>
              <p className="nunito text-xs text-justify">
                Our passionate team and partners share our vision, empowering
                success through innovation. Explore Our Products Discover our
                stainless steel solutions designed to meet your needs. Visit our
                product page to learn more.
              </p>
              <button
                type="submit"
                className="flex justify-center gap-1 items-center shadow-xl text-sm text-gray-800 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-1 py-0.5 overflow-hidden border-2 rounded-full group"
              >
                View Products
                <svg
                  className="w-4 h-4 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-0.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
import preview from "./assets/home-swiper/previewss.webp";
function Section3() {
  return (
    <section className="flex h-screen w-full relative px-[12rem] py-8 align-middle">
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[80vh]">
          <div className="relative md:h-[100%]">
            <Image
              src={preview}
              alt="Modern room with large windows"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4 z-10">
            <div className="inline-block bg-gray-900 text-amber-500 px-4 py-2 rounded">
              WINDOW SERVICES
            </div>
            <h2 className="text-4xl font-bold text-gray-800">
              Explore Premium Stainless Steel Products
            </h2>
            <p className="text-gray-600">
              Uncover the sophistication of our premium stainless steel
              products, combining strength and beauty for lasting appeal.
              Perfect for any setting, they offer both resilience and a sleek,
              contemporary look.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-white p-4 rounded-lg shadow-lg z-20 relative">
              {[
                "CASEMENT",
                "SASH",
                "LOUVERED",
                "PIVOTED",
                "FIXED",
                "DOUBLE-HUNG",
              ].map((type) => (
                <div
                  key={type}
                  className="flex flex-col items-center p-4 border rounded"
                >
                  <svg
                    className="w-12 h-12 text-gray-700 mb-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12" y2="6"></line>
                    <line x1="6" y1="12" x2="18" y2="12"></line>
                  </svg>
                  <span className="text-sm font-semibold text-gray-700">
                    {type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default Home;
