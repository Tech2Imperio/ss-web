"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FadeRight, FadeLeft } from "../../components/utility/animation.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt  } from "react-icons/fa";
import Link from 'next/link'
import LivingImg from "../../assets/product/aluminiumWindows/slider/img1.webp";
import HallImg from "../../assets/product/aluminiumWindows/slider/img2.webp";
import bedroom from "../../assets/product/aluminiumWindows/slider/img3.webp";

// sliding Image
import slider3Img from "../../assets/product/aluminiumWindows/slidingWindows/Img1.webp";
import slider4Img from "../../assets/product/aluminiumWindows/slidingWindows/Img2.webp";
import slider2Img from "../../assets/product/aluminiumWindows/slidingWindows/Img3.webp";
import slider5Img from "../../assets/product/aluminiumWindows/slidingWindows/Img4.webp";
import slider6Img from "../../assets/product/aluminiumWindows/slidingWindows/Img5.webp";

// Awing Image
import awing1 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img1.webp"
import awing2 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img2.webp"
import awing3 from "../../assets/product/aluminiumWindows/aluminiumAwingWindow/Img3.webp"

const heroSlides = [
  {
    image: LivingImg,
    title: "Elevate Your Space with Fluted Design",
    description:
      "Transform your interiors with stainless steel decorative sheets featuring elegant fluted designs. Perfect for modern wall decor, they add sophistication and style to any setting.",
  },
  {
    image: HallImg,
    title: " Durable Decorative Solutions for Any Room",
    description:
      "Discover the beauty and durability of fluted stainless steel panels. Ideal for both residential and commercial spaces, these decorative sheets enhance visual interest and create lasting impressions.",
  },
  {
    image: bedroom,
    title: "Stylish Stainless Steel Decorative Sheets with Fluted Texture",
    description:
      "Achieve a contemporary aesthetic with stylish stainless steel decorative sheets that showcase a unique fluted texture. Perfect for adding depth and elegance to your modern wall decor.",
  },
];

// products DATA
const windowTypes = [
  {
    id: "83",
    name: "Aluminium Sliding Windows",
    products: [
      {
        id: "1",
        name: "Sliding window (3 panels on 3 tracks)",
        image: slider3Img,
        series: ["We Plus"],
        design: "Aluminium Sliding Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "5, 6, 8, 13.52 mm",
          frameDepth: "104 mm - for 3 Track Slider",
          Max_Height: "1600 mm",
          Max_Width: "3000 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "2",
        name: "4 Panels On 2 Tracks Sliding Window",
        image: slider4Img,
        series: ["We 70"],
        design: "Aluminium Sliding Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "Up to 13.52 mm",
          frameDepth: "72 mm",
          Max_Height: "1600 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "3",
        name: "2 Panels On 2 Tracks We-70 Sliding Window",
        image: slider2Img,
        series: ["We 70"],
        design: "Aluminium Sliding Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "5, 6, 8 mm",
          frameDepth: "72 mm",
          Max_Height_of_Window: "1600 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "4",
        name: "2 Panels On 2 Tracks Grants Sliding Window",
        image: slider5Img,
        series: ["We 70"],
        design: "Aluminium Sliding Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "31.5  mm",
          frameDepth:
            "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
          Max_Height_of_Door: "2,500 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "5",
        name: "4 Panels On 2 Tracks Grants Sliding Window",
        image: slider6Img,
        series: ["We 70"],
        design: "Aluminium Sliding Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: " Up to 31.5  mm",
          frameDepth:
            "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
          Max_Height_of_Door: "2,500 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
    ],
  },
  {
    id: "90",
    name: "Aluminium Awning Windows",
    products: [
      {
        id: "6",
        name: "Awning Window WE-70",
        image: awing1,
        series: ["We 70"],
        design: "Aluminium Awning Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "5, 6, 8 mm",
          frameDepth: "72 mm",
          maxOpeningAngle: "45°",
          Max_Height_of_Window: "1800 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "7",
        name: "Awning window (Single lock)",
        image: awing2,
        series: ["We Plus"],
        design: "Aluminium Awning Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "Up to 13.5 mm",
          frameDepth: "72 mm",
          maxOpeningAngle: "60°",
          Max_Height_of_Window: "1800 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
      {
        id: "8",
        name: "Awning window",
        image: awing3,
        series: ["We Plus"],
        design: "Aluminium Awning Windows",
        specifications: {
          material: "Aluminum",
          glassThickness: "Up to 31.5 mm",
          frameDepth: "101.6 mm., 120 mm (2 tracks sliding), 178 mm (3 tracks sliding)",
          maxOpeningAngle: "60°",
          Max_Height_of_Door: "3000 mm",
          Visit_Web:"https://selectivesystems.in/products/aluminium-windows",
        },
      },
    ],
  },
];

export default function page() {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
      setNextSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // product handeler
  const [activeTab, setActiveTab] = useState(windowTypes[0].id)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = (product) => {
    setSelectedProduct(product)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedProduct(null)
    document.body.style.overflow = 'unset'
  }

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <div>
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
              src={heroSlides[currentSlide].image}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="opacity-50"
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
              className="container mx-auto px-4 h-full grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0"
            >
              {/* Left Side Text */}
              <motion.div
                variants={FadeRight(0.3)}
                initial="hidden"
                animate="visible"
                className="flex flex-col justify-center items-start p-4  md:pr-14"
              >
                <h1 className=" text-3xl md:text-5xl din-semibold text-white mb-2 md:mb-4  ">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className=" text-[1rem] text-justify md:text-xl din-regular text-gray-200">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>

              {/* Right Side Image */}
              <motion.div
                variants={FadeLeft(0.3)}
                initial="hidden"
                animate="visible"
                className="relative h-[15rem] w-full  md:w-[85%]  md:h-[28rem] flex  md:mt-28 ml-0 md:ml-24"
              >
                <Image
                  src={heroSlides[nextSlide].image}
                  alt={heroSlides[nextSlide].title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Part 2 */}
      <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl din-semibold text-primary text-center mb-8">Available Designs For Aluminium Windows</h2>
        
        <div className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4">
            {windowTypes.map((type) => (
              <li key={type.id}>
                <button
                  onClick={() => setActiveTab(type.id)}
                  className={`px-4 py-2 rounded-full din-regular transition-colors ${
                    activeTab === type.id
                      ? 'bg-[#335c98] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {windowTypes.find(type => type.id === activeTab).products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openModal(product)}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={800}
                    className="w-full h-[18rem] p-4 object-cover"
                  />
                  <div className="p-4">
                    <h3 className=" din-semibold text-primary text-lg mb-2">{product.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.series.map((series) => (
                        <span key={series} className="text-xs din-regular bg-gray-200 px-2 py-1 rounded">{series}</span>
                      ))}
                    </div>
                    <p className="text-sm din-regular text-gray-600">{product.design}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl text-primary din-semibold">{selectedProduct.name}</h3>
                  <button 
                    onClick={closeModal} 
                    className="text-gray-500 hover:text-gray-700"
                    aria-label="Close modal"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={800}
                  height={800}
                  className="w-full h-auto p-4 object-cover rounded mb-4"
                />
                <h4 className=" din-semibold text-primary mb-2">Specifications:</h4>
                <ul className="space-y-2">
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    key !== 'Visit_Web' ? (
                      <li key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="din-medium">{value}</span>
                      </li>
                    ) : null
                  ))}
                </ul>
                {selectedProduct.specifications.Visit_Web && (
                  <Link
                    href={selectedProduct.specifications.Visit_Web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center px-4 py-2 border  text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-[#335c98] hover:text-white duration-700 din-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Website <FaExternalLinkAlt className="ml-2" />
                  </Link>
                // <Link href={selectedProduct.specifications.Visit_Web}>
                //     <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                //       {/* Colored background */}
                //       <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                //       {/* Top-left to bottom-right diagonal animation */}
                //       <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                //         <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                //         <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                //       </span>

                //       {/* Button text */}
                //       <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                //         GET A QUOTE
                //       </span>
                //     </button>
                //   </Link>
                  
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>

    
    </div>
  );
}
