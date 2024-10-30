// src/components/Banner.js
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"; // Assuming you're using Next.js
import { FadeLeft, FadeRight } from "./utility/animation";

const Banner = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-800 h-[40rem] overflow-hidden">
      <AnimatePresence initial={true}>
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Background"
            className="opacity-50 h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 h-full">
        <AnimatePresence initial={true}>
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[92rem] mx-auto px-4 h-full flex flex-col md:flex-row justify-center items-center mt-4 gap-10"
          >
            {/* Left Side Text */}
            <motion.div
              variants={FadeRight(0.3)}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center items-start max-w-sm lg:max-w-full xl:max-w-2xl"
            >
              <h1 className="text-3xl md:text-5xl din-semibold text-white mb-2 md:mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-[1rem] text-justify md:text-xl din-regular text-gray-200">
                {slides[currentSlide].description}
              </p>
            </motion.div>
            {/* Right Side Image */}
            <motion.div
              variants={FadeLeft(0.3)}
              initial="hidden"
              animate="visible"
              className="relative h-[17rem] w-full lg:w-[60%] md:h-[28rem] flex"
            >
              <Image
                src={slides[nextSlide].image}
                alt={slides[nextSlide].title}
                className="rounded-lg shadow-xl h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Banner;
