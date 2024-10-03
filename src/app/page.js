"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Img1 from "./assets/home-swiper/image1.webp";
import Img2 from "./assets/home-swiper/image2.webp";
import Img3 from "./assets/home-swiper/image3.webp";
import Img4 from "./assets/home-swiper/image4.webp";
import Img5 from "./assets/home-swiper/image5.webp";
import Img6 from "./assets/home-swiper/image6.webp";
import Img7 from "./assets/home-swiper/image7.webp";
import Img8 from "./assets/home-swiper/image8.webp";
import Img9 from "./assets/home-swiper/image9.webp";
import section2 from "./assets/home-swiper/section2.webp";
import MobSection2 from "./assets/home-swiper/MobSection2.webp";
import preview from "./assets/home-swiper/previewss.webp";
import Mobpreview from "./assets/home-swiper/Mobpreview.webp";
import Image from "next/image";
import {
  FaShieldAlt,
  FaHammer,
  FaGem,
  FaFire,
  FaTools,
  FaExchangeAlt,
  FaChevronDown,
} from "react-icons/fa";
import sectionImg4 from "./assets/home-swiper/section4.webp";
import { LuLightbulb, LuCog } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { FiCheckCircle } from "react-icons/fi";
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
  }, [isMobileView]);

  return (
    <section className=" flex top-0 h-screen w-screen relative -z-10 snap-start">
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
                  duration: 0.7,
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
                  height="auto"
                  width="auto"
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
      setMobileView(window.innerWidth >= 1025);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative bg-gray-50 w-auto h-auto flex flex-col my-20 xl:flex-row xl:h-[100vh] xl:w-[100vw] xl:py-24 xl:my-0 snap-start">
      <div className="flex flex-col items-center relative w-auto h-auto xl:w-full xl:h:full xl:flex-row xl:justify-between">
        <Image
          priority
          src={isMobileView ? section2 : MobSection2}
          alt="Section2Img"
          className="h-[50vh] w-full xl:w-[60%] xl:h-[100%] xl:absolute"
        />
        {isMobileView === false ? (
          <div className="bg-gray-100 w-full h-auto relative py-2">
            <div className="relative flex flex-col items-start justify-center p-5 gap-4 text-lg text-start h-auto w-auto">
              <h1 className="poppins-bold text-xl text-[#335c98]">
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
                className="flex justify-center gap-1 items-center text-sm text-gray-800 bg-gray-200 backdrop-blur-md lg:font-semibold isolation-auto border-gray-200 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#335c98] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-[0.55rem] overflow-hidden border-2 rounded-full group"
              >
                View Products
                <svg
                  className="w-4 h-4 justify-end group-hover:rotate-90 group-hover:bg-gray-200 text-gray-200 ease-linear duration-300 rounded-full border border-gray-200 group-hover:border-none p-0.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-[#335c98] group-hover:fill-[#335c98]"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            className="bg-gray-800 opacity-95 w-[50%] h-[80%]"
            initial={{ x: "200%" }}
            animate={{ x: "100%" }}
            exit={{ x: "200%" }}
            transition={{
              duration: 1.1,
              delay: 0.6,
            }}
          >
            <div className="h-full flex flex-col items-start justify-center px-14 gap-[1.5rem] text-gray-300">
              <h2 className="poppins-bold text-3xl text-start">
                Shaping the Future of Stainless Steel
              </h2>
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
                className="flex justify-center gap-1 items-center shadow-lg text-sm text-gray-800 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gray-800 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative xl:z-10 px-2 py-1 overflow-hidden border-2 rounded-full group"
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
        )}
      </div>
    </section>
  );
}

function Section3() {
  const [isMobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1025);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col h-[135vh] w-full align-middle gap-2 p-2 z-0 xl:px-[18rem] xl:h-screen xl:flex-row snap-start"
    >
      <div className="relative h-full w-auto flex flex-col justify-around items-center gap-4 xl:h-full xl:w-full xl:px-8 xl:gap-28 xl:flex-row lg:mt-6">
        <div className="h-auto w-auto flex justify-center xl:justify-start xl:items-start xl:h-[90%] xl:w-[35%]">
          <Image
            priority
            src={isMobileView ? Mobpreview : preview}
            alt="Modern room with large windows"
            className="rounded-lg relative h-[100%] w-full xl:absolute xl:w-[45%] xl:h-[75%]"
          />
        </div>

        <div className="flex flex-col justify-between items-end h-[85%] w-full xl:w-[50%]">
          <div className="space-y-2 flex flex-col px-4 xl:ml-16">
            <div className=" bg-gray-300 text-[#335c98] px-4 py-2 rounded w-36 text-center poppins-bold whitespace-nowrap">
              Product Quality
            </div>
            <h2 className="text-4xl  text-[#335c98] poppins-bold">
              Explore Premium Stainless Steel Products
            </h2>
            <p className="text-gray-800 text-justify">
              Uncover the sophistication of our premium stainless steel
              products, combining strength and beauty for lasting appeal.
              Perfect for any setting, they offer both resilience and a sleek,
              contemporary look.
            </p>
          </div>
          <div className=" grid grid-cols-2 bg-white rounded-lg z-20 h-full w-full md:shadow-xl xl:h-[45%] xl:grid-cols-3 xl:w-[110%] p-2">
            {[
              {
                name: "Inoxydable",
                icon: <FaShieldAlt className=" w-8 h-8" />,
              },
              {
                name: "Robustness",
                icon: <FaHammer className=" w-8 h-8" />,
              },
              {
                name: "Elegance",
                icon: <FaGem className=" w-8 h-8" />,
              },
              {
                name: "Thermal",
                icon: <FaFire className=" w-8 h-8" />,
              },
              {
                name: "Convenience",
                icon: <FaTools className=" w-8 h-8" />,
              },
              {
                name: "Adaptability",
                icon: <FaExchangeAlt className=" w-8 h-8" />,
              },
            ].map((type, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center p-2 ${
                  index === 0 ? "lg:border-r-[1px] lg:border-b-[1px]" : ""
                } ${index === 1 ? "lg:border-b-[1px]" : ""} ${
                  index === 2 ? "lg:border-l-[1px] lg:border-b-[1px]" : ""
                } ${index === 3 ? " lg:border-r-[1px]" : ""} ${
                  index === 5 ? " lg:border-l-[1px]" : ""
                }`}
              >
                <div className="group flex flex-col items-center text-lg cursor-pointer transition duration-700 hover:scale-110 gap-4">
                  <p className="group-hover:transform group-hover:scale-x-[-1] transition duration-700 text-gray-600">
                    {type.icon}
                  </p>
                  <p className="text-[#335c98] poppins-medium">{type.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section4() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <LuLightbulb size={25} />,
      title: "Innovative Designs",
      description:
        "We push the boundaries of stainless steel applications in modern architecture. Our team of expert designers and engineers work tirelessly to create cutting-edge solutions that blend form and function seamlessly. From sleek building facades to intricate interior elements, our innovative designs set new standards in the industry.",
    },
    {
      icon: <GoZap size={25} />,
      title: "Advanced Processing",
      description:
        "Utilizing state-of-the-art technology for precision manufacturing, we ensure every product meets the highest quality standards. Our advanced processing techniques include laser cutting, robotic welding, and computer-controlled finishing, allowing us to achieve unparalleled accuracy and consistency in our stainless steel products.",
    },
    {
      icon: <LuCog size={25} />,
      title: "Custom Solutions",
      description:
        "We pride ourselves on tailoring our products to meet specific client needs and industry standards. Our team works closely with architects, contractors, and end-users to develop bespoke stainless steel solutions. Whether it's a unique architectural feature or a specialized industrial component, we have the expertise to bring your vision to life.",
    },
  ];

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? index : index);
  };

  return (
    <section
      ref={ref}
      className="relative w-screen h-[150vh] md:h-screen flex flex-col justify-center bg-gray-50 overflow-hidden snap-start"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col justify-evenly items-center h-auto md:h-full my-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl text-[#335c98] mb-4 poppins-bold">
            Innovation & Technology
          </h2>
          <p className="text-xs md:text-lg text-gray-700 max-w-3xl mx-auto nunito">
            We leverage cutting-edge technology and innovative processes to
            produce high-quality stainless steel products that meet the evolving
            needs of our customers.
          </p>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-stretch gap-10 h-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full lg:w-1/2 flex-grow"
          >
            <div className="h-80 md:h-full relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={sectionImg4}
                alt="Innovation in stainless steel applications"
                className="transform hover:scale-105 transition-transform duration-300 h-full"
              />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl mb-2 poppins-bold">
                  Cutting-Edge Solutions
                </h3>
                <p className="text-sm md:text-base nunito md:w-2/3 text-justify">
                  Explore how our innovative stainless steel products are
                  shaping the future of architecture and design.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full lg:w-1/2 flex-grow"
          >
            <div className="rounded-xl md:shadow-lg p-6 h-auto">
              <h3 className="text-2xl text-[#335c98] mb-4 poppins-bold">
                Our Technological Edge
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="mb-2">
                  <button
                    className={`flex items-center justify-between w-full p-4 rounded-lg text-left transition-colors duration-300 ${
                      activeFeature === index
                        ? "bg-blue-100"
                        : "bg-blue-50 hover:bg-blue-100"
                    }`}
                    onClick={() => toggleFeature(index)}
                    aria-expanded={activeFeature === index}
                    aria-controls={`feature-content-${index}`}
                  >
                    <div className="flex items-center">
                      <span className="w-6 h-6 text-gray-600 mr-3">
                        {feature.icon}
                      </span>
                      <h4 className="poppins-semibold text-gray-600">
                        {feature.title}
                      </h4>
                    </div>
                    <FaChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        activeFeature === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFeature === index && (
                      <motion.div
                        id={`feature-content-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="p-4 text-gray-600 nunito text-justify">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Section5() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative md:h-screen md:w-screen snap-start flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto py-16 w-full h-full flex flex-col justify-center items-center"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl text-center mb-6 text-[#335c98] poppins-bold"
        >
          A strong partner at your side
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base nunito"
        >
          As railing experts, we are at your side with first-class support for
          the successful realisation of every project.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="container mx-auto flex flex-col md:flex-row w-[85%] gap-8"
        >
          {[
            {
              number: "01",
              title: "For every project",
              description:
                "Solutions from private homes to stadiums, from individual components to complete solutions.",
              link: "More details",
            },
            {
              number: "02",
              title: "Personalised advice",
              description:
                "Specialised consultants for every project clarify your questions from A-Z.",
              link: "Contact",
            },
            {
              number: "03",
              title: "Wide availability",
              description:
                "Thousands of items available for immediate delivery - even to the construction site.",
              link: "Webshop",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex-1 flex flex-col justify-between items-center gap-8 ${
                index !== 2 ? "border-r border-gray-200" : ""
              } p-6 h-full`}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={
                  inView
                    ? { scale: 1, opacity: 0.1 }
                    : { scale: 0.5, opacity: 0 }
                }
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="text-8xl font-bold text-gray-400"
              >
                {item.number}
              </motion.div>
              <h3 className="text-2xl text-[#335c98] poppins-semibold">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center nunito">
                {item.description}
              </p>
              <p className=" hover:text-blue-800 transition-colors duration-300 nunito cursor-pointer">
                {item.link}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
import { PiCircleDashedLight } from "react-icons/pi";
import { TfiHome } from "react-icons/tfi";
import { TbBulb } from "react-icons/tb";
const solutions = [
  {
    icon: <TbBulb className="w-12 h-12" />,
    title: "Customised solutions",
    description:
      "We take care of the preliminary work for you: from powder coating in the colour of your choice to prefabricated railing modules.",
  },
  {
    icon: <TfiHome className="w-12 h-12" />,
    title: "Maximum flexibility",
    description:
      "Thanks to the modular design of our systems, you can combine the components with each other in almost any way you like.",
  },
  {
    icon: <PiCircleDashedLight className="w-12 h-12" />,
    title: "Maximum efficiency",
    description:
      "Revolutionary products offer up to 80% time savings on the construction site, with high availability at the same time.",
  },
  {
    icon: <FiCheckCircle className="w-12 h-12" />,
    title: "100% safety",
    description:
      "Our systems and products are tested to the highest standards and certified in accordance with EN 1090-1.",
  },
];

function Section6() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white py-16 snap-start">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex flex-col items-center w-full max-w-7xl px-4 gap-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl text-center mb-4 poppins-bold text-[#335c98]"
        >
          Stainless Steel Solutions for Every Project
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-center text-gray-600 max-w-2xl nunito"
        >
          With expertise, we specialize in providing innovative, customized, and
          safe stainless steel solutions tailored to meet the unique needs of
          every project.
        </motion.p>
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center w-full -mx-4"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full sm:w-1/2 lg:w-1/4 p-4 "
            >
              <motion.div
                className="flex flex-col items-center justify-start bg-gray-100 rounded-lg h-full w-full p-6 transition-all duration-300 hover:shadow-2xl hover:bg-gray-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  variants={iconVariants}
                  className="text-primary-600"
                >
                  {solution.icon}
                </motion.div>
                <motion.h3
                  className="text-xl poppins-semibold text-[#335c98] mt-4 mb-2 text-center"
                  variants={itemVariants}
                >
                  {solution.title}
                </motion.h3>
                <motion.p
                  className="text-xs text-gray-600 text-center nunito"
                  variants={itemVariants}
                >
                  {solution.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      container.scrollBy({
        top: delta * window.innerHeight,
        behavior: "smooth",
      });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen no-scrollbar snap-y snap-mandatory overflow-x-hidden"
    >
      <Section1 className="h-screen snap-start" />
      <Section6 className="h-screen snap-start" />
      <Section2 className="h-screen snap-start" />
      <Section3 className="h-screen snap-start" />
      <Section4 className="h-screen snap-start" />
      <Section5 className="h-screen snap-start" />
    </div>
  );
}
export default Home;
