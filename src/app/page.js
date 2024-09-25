"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
  return (
    <section className="relative h-[100vh] w-[100vw] flex py-24">
      <div className="flex justify-between items-center relative w-full h-full">
        <Image
          priority
          src={section2}
          alt="Logo"
          className="h-full w-[60%] absolute left-0"
        />
        <motion.div
          className="bg-gray-800 w-[50%] h-[80%] "
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
          <div className="flex flex-col items-start justify-start p-24 gap-8 text-gray-300 text-lg text-justify">
            <h1 className="poppins-bold text-4xl">
              Shaping the Future of Stainless Steel
            </h1>
            <p className="nunito text-base">
              We have evolved into a multi-division, multi-product conglomerate
              in the stainless steel industry.
            </p>
            <p className="nunito text-base">
              Our commitment to customer satisfaction and quality sets us apart
              in this traditional field. We drive positive change with stronger,
              eco-friendly stainless steel and high-performance machinery,
              revolutionizing industries.
            </p>
            <p className="nunito text-base">
              Our passionate team and partners share our vision, empowering
              success through innovation. Explore Our Products Discover our
              stainless steel solutions designed to meet your needs. Visit our
              product page to learn more.
            </p>
            <button
              type="submit"
              class="flex justify-center gap-2 items-center shadow-xl text-lg text-gray-800 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              View Products
              <svg
                class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  class="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="">
      <Section1 />
      <Section2 />
    </div>
  );
}

export default Home;
