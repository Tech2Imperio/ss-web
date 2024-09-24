// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Img1 from "./assets/home-swiper/Img1.webp";
// import Img2 from "./assets/home-swiper/Img2.webp";
// import Img3 from "./assets/home-swiper/Img3.webp";
// import Img4 from "./assets/home-swiper/Img4.webp";
// import Img5 from "./assets/home-swiper/Img5.webp";
// import WhiteColor from "./assets/home-swiper/Color-white.webp";

// const images = [Img1, Img2, Img3, Img4, Img5];

// const Section1 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="flex top-0 h-screen w-screen absolute">
//       <div className="w-full h-full overflow-hidden relative">
//         <div className="flex h-full ">
//           {images.map((image, index) => (
//             <Image
//               priority
//               key={index}
//               src={image}
//               className="w-full h-full object-cover transition-transform duration-500 ease-in-out translate-x-100"
//               alt={`Slide ${index}`}
//               height={1200}
//               width={1290}
//             />
//           ))}
//         </div>
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: "0%" }}
//           exit={{ x: "100%" }}
//           transition={{
//             duration: 0.8,
//             repeat: Infinity,
//             repeatType: "loop",
//             repeatDelay: 5,
//           }}
//           className="fixed bg-gray-950 opacity-60 bottom-0 right-0 w-auto h-[90%] overflow-hidden flex items-center justify-center text-white text-left p-16 flex-col gap-12"
//         >
//           <motion.h1
//             initial={{ x: "130%" }}
//             animate={{ opacity: 1, x: "0%" }}
//             exit={{ x: "130%" }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//               repeat: Infinity,
//               repeatType: "loop",
//               repeatDelay: 5,
//             }}
//             className="text-5xl font-bold whitespace-nowrap gap-8"
//           >
//             Rajguru Stainless Steel: <br />
//             Strength Meets Elegance
//           </motion.h1>
//           <motion.p
//             initial={{ x: "-130%" }}
//             animate={{ opacity: 1, x: "0%" }}
//             exit={{ x: "-130%" }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//               repeat: Infinity,
//               repeatType: "loop",
//               repeatDelay: 5,
//             }}
//             className="mt-2 text-2xl italic"
//           >
//             "Quality You Can Trust, Strength You Can Count On"
//           </motion.p>
//           <motion.p
//             initial={{ x: "130%" }}
//             animate={{ opacity: 1, x: "0%" }}
//             exit={{ x: "130%" }}
//             transition={{
//               duration: 0.8,
//               delay: 0.6,
//               repeat: Infinity,
//               repeatType: "loop",
//               repeatDelay: 5,
//             }}
//             className="mt-2 text-xl"
//           >
//             Experience the perfect blend of form and function with our stainless
//             steel solutions.
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// function Section2() {
//   return (
//     <div
//       className="bg-transparent w-full h-full flex overflow-x-hidden py-20"
//       style={{ backgroundImage: `url(${WhiteColor})` }}
//     >
//       <div className="w-[70%] bg-gray-950 opacity-65"></div>
//       <div className=""></div>
//     </div>
//   );
// }

// function Section3() {
//   return <></>;
// }

// function Section4() {
//   return <></>;
// }

// function Section5() {
//   return <></>;
// }

// function Section6() {
//   return <></>;
// }

// function Section7() {
//   return <></>;
// }

// function Home() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.pageYOffset);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <Section1 />
//       {/* <Section2 /> */}
//       {/* Add more sections as needed */}
//     </>
//   );
// }

// export default Home;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "./assets/home-swiper/image1.webp";
import Img2 from "./assets/home-swiper/image2.webp";
import Img3 from "./assets/home-swiper/image3.webp";
import Img4 from "./assets/home-swiper/image4.webp";
import Img5 from "./assets/home-swiper/image5.webp";

const images = [Img1, Img2, Img3, Img4, Img5];

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex top-0 h-screen w-screen absolute">
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence>
          {images.map(
            (image, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute w-full h-full"
                >
                  <Image
                    priority
                    src={image}
                    className="object-cover w-full h-full"
                    alt={`Slide ${index}`}
                    height={1200}
                    width={1290}
                  />
                </motion.div>
              )
          )}
        </AnimatePresence>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 5,
          }}
          className="fixed bottom-0 right-0 w-auto h-[90%] bg-gray-950 opacity-60 flex items-center justify-center text-white p-16 flex-col gap-12"
        >
          <motion.h1
            initial={{ opacity: 0, x: "150%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "150%" }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
            className="text-5xl font-bold whitespace-nowrap"
          >
            Rajguru Stainless Steel: <br />
            Strength Meets Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: "-150%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-150%" }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
            className="mt-2 text-2xl italic"
          >
            "Quality You Can Trust, Strength You Can Count On"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: "150%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "150%" }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 5,
            }}
            className="mt-2 text-xl"
          >
            Experience the perfect blend of form and function with our stainless
            steel solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

// Other sections...

function Home() {
  return (
    <>
      <Section1 />
      {/* Add more sections as needed */}
    </>
  );
}

export default Home;
