"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import Img1 from "./assets/home-swiper/360_F_517468265_KIyGUVmkEuWBNCSzlbx0RhJDZJinJx3U.jpg";

const images = [
  Img1,
  "https://www.tailwindtap.com/assets/components/vertical-carousel/jungle.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/mountainvalley.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/rainforest.jpg",
  "https://www.tailwindtap.com/assets/components/vertical-carousel/sand_background.jpg",
];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleClickImage = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleImages = () => {
    const indices = [
      (currentIndex - 1 + images.length) % images.length,
      currentIndex,
      (currentIndex + 1) % images.length,
    ];
    return indices.map((index) => images[index]);
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="flex h-screen w-screen relative">
      <div className="fixed left-0 flex flex-col justify-evenly h-full px-10 py-24">
        <div className="mt-4 flex items-center justify-center text-4xl cursor-pointer">
          <IoIosArrowUp onClick={handlePrev} />
        </div>
        <div className="flex flex-col justify-evenly space-y-4 h-full overflow-hidden">
          {visibleImages.map((src, index) => {
            const imageIndex =
              (currentIndex - 1 + index + images.length) % images.length;
            return (
              <div
                key={imageIndex}
                className={`transition-opacity duration-300 aspect-3/2 ${
                  imageIndex === currentIndex
                    ? "opacity-100"
                    : "opacity-30 grayscale"
                }`}
                onClick={() => handleClickImage(imageIndex)}
              >
                <Image
                  src={src}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-300 transform hover:scale-110"
                  alt={`Slide ${imageIndex}`}
                  width={140}
                  height={70}
                  priority
                />
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex items-center justify-center text-4xl cursor-pointer">
          <IoIosArrowDown onClick={handleNext} />
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
        <Image
          src={images[currentIndex]}
          className="w-full h-full object-cover"
          alt={`Slide ${currentIndex}`}
          width={1090}
          height={1000}
        />
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6 }}
        className="fixed bg-gray-950 opacity-60 right-0 w-auto h-full overflow-hidden flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }} // Start position for the container
          animate={{ opacity: 1, y: 0 }} // End position
          exit={{ opacity: 0, y: 50 }} // Exit animation
          transition={{ duration: 0.5 }} // Transition duration
          className="text-white text-center p-16 flex flex-col gap-12"
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }} // Coming from the left
            animate={{ opacity: 1, x: 0 }} // Center position
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold whitespace-nowrap gap-8"
          >
            Rajguru Stainless Steel: <br />
            Strength Meets Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }} // Coming from the right
            animate={{ opacity: 1, x: 0 }} // Center position
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-2xl italic"
          >
            "Quality You Can Trust, Strength You Can Count On"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -50 }} // Coming from the left
            animate={{ opacity: 1, x: 0 }} // Center position
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-2 text-xl"
          >
            Experience the perfect blend of form and function with our stainless
            steel solutions.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
function Section2() {
  return <></>;
}
function Section3() {
  return <></>;
}
function Section4() {
  return <></>;
}
function Section5() {
  return <></>;
}
function Section6() {
  return <></>;
}
function Section7() {
  return <></>;
}

function Home() {
  const cards = [
    "https://www.tailwindtap.com/assets/components/vertical-carousel/canada_lake.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/jungle.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/mountainvalley.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/rainforest.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/sand_background.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/sunrise.jpg",
    "https://www.tailwindtap.com/assets/components/vertical-carousel/waterfront.jpg",
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
    //   <div
    //     className="h-screen w-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory no-scrollbar scroll-smooth transition duration-700"
    //     style={{
    //       // Add easing function for smoother transitions
    //       scrollBehavior: "smooth cubic-bezier(0.25, 0.1, 0.25, 1.0)",
    //       // Initial translation to move content down by 731px on the y-axis
    //       transform: `translate3d(0px, 0px, 0px)`,
    //     }}
    //   >
    //     {cards.map((data, index) => (
    //       <section
    //         key={index}
    //         className="h-screen w-screen snap-center scroll-transform"
    //         style={{ transform: `translate3d(0px, ${scrollY}px, 0px)` }}
    //       >
    //         <Image
    //           priority // Optimize image loading
    //           src={data}
    //           className="bg-cover bg-no-repeat w-full h-full object-cover"
    //           alt="Carousel images for vertical scroll"
    //           width={1290}
    //           height={1200}
    //         />
    //       </section>
    //     ))}
    //   </div>
    // </div>

    <Section1 />
  );
}

export default Home;
