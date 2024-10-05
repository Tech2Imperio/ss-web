"use client";

import { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { LuBuilding2 } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaAward, FaRegStar, FaStar } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import OurStory from "./ourstory.webp";
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
// };

// const fadeInLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
// };

// const fadeInRight = {
//   hidden: { opacity: 0, x: 100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
// };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      className={`py-10 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default function Page() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Story",
      content:
        "Rajguru Steel Industries, established in 2004, is a private limited company dedicated to providing unmatched quality in stainless steel architectural products, including slot tubes and pipes. We have earned the trust of our customers by offering quality-approved products at competitive prices. Our skilled team, including R&D professionals and quality controllers, collaborates to meet client needs and stays updated through regular training. With a robust distribution network, we ensure timely delivery. Guided by our mentor, Mr. Kishore Jain, we are committed to further growth and excellence in the industry.",
    },
    {
      title: "Our Vision",
      content:
        "To be the leading provider of stainless steel architectural products, recognized for our commitment to quality, innovation, and sustainability. We aim to exceed customer expectations by delivering exceptional products that enhance their projects while fostering a culture of continuous improvement and growth. Our vision is to create a sustainable future by integrating eco-friendly practices into our operations and contributing positively to the communities we serve.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to manufacture and supply a diverse range of stainless steel architectural products that meet the highest standards of quality and innovation. We are dedicated to ensuring customer satisfaction by understanding their needs and delivering tailored solutions. We strive for sustainable growth by investing in our people, embracing new technologies, and maintaining a strong commitment to environmental responsibility. Through collaboration and excellence, we aim to build lasting relationships with our customers and stakeholders.",
    },
  ];

  const reviews = [
    {
      name: "Praveen Thota",
      location: "Nirmal, Telangana",
      product: "Jindal Stainless Steel Pipes",
      rating: 5,
    },
    {
      name: "Lokesh Narpathma Lodha",
      location: "Nagpur, Maharashtra",
      product: "ERW Steel Pipes",
      rating: 5,
    },
    {
      name: "Prashant Sutar",
      location: "Kolhapur, Maharashtra",
      product: "Railing Fittings",
      rating: 5,
    },
    {
      name: "Sumit Sherawat",
      location: "Jaipur, Rajasthan",
      product: "Air Pistol",
      rating: 5,
      date: "22-May-23",
    },
    {
      name: "A Akbar Basha",
      location: "Tirupattur, Tamil Nadu",
      rating: 5,
      date: "13-December-21",
    },
    {
      name: "Ashok Choudhary",
      location: "Hyderabad, Telangana",
      product: "Metal Chain",
      rating: 5,
      date: "04-December-20",
    },
    {
      name: "Uday",
      location: "Faizabad, Uttar Pradesh",
      product: "Stainless Steel Spider Fitting",
      rating: 5,
      date: "28-November-20",
    },
    {
      name: "K KARTIK PAUL",
      location: "Gobardanga, West Bengal",
      product: "Stainless Steel Railings",
      rating: 5,
      date: "02-October-20",
    },
    {
      name: "Amol Diwanale",
      location: "Telhara, Maharashtra",
      product: "Tempered Glass Railing",
      rating: 5,
      date: "17-August-20",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(3);
  const [allVisible, setAllVisible] = useState(false);

  const loadMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, reviews.length));
    if (visibleCount + 3 >= reviews.length) {
      setAllVisible(true);
    }
  };

  const closeReviews = () => {
    setVisibleCount(3);
    setAllVisible(false);
  };

  return (
    <section className="w-screen">
      <div className="relative w-full h-0 pt-[56.25%] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full border-none"
          autoPlay
          loop
          muted
        >
          <source src="/video/aboutus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative bg-gray-100 overflow-hidden flex flex-col items-center w-screen">
        <div className="container mx-auto px-4 flex flex-col my-10">
          <Section>
            <div className="container mx-auto px-4">
              <motion.h1
                className="text-5xl my-4 text-center poppins-bold text-[#335c98]"
                variants={fadeInUp}
              >
                About Us
              </motion.h1>
              <div className="flex flex-col md:flex-row justify-around gap-4 md:gap-0">
                <motion.div className="md:w-1/2 " variants={fadeInUp}>
                  <div className="flex mb-4 ">
                    {tabs.map((tab, index) => (
                      <motion.button
                        key={index}
                        className={`px-4 py-2 nunito ${
                          index === 0 ? "rounded-l-md" : ""
                        } ${
                          index === 2 ? "rounded-r-md" : ""
                        } border whitespace-nowrap ${
                          activeTab === index
                            ? "bg-[#335c98] text-white"
                            : "bg-gray-100 text-[#335c98] "
                        } `}
                        onClick={() => setActiveTab(index)}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tab.title}
                      </motion.button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      className="bg-gray-100 p-4 md:p-10 rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="nunito text-justify text-slate-500 text-xs md:text-base">
                        {tabs[activeTab].content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Image
                    src={OurStory}
                    alt="Rajguru Steel Industries Factory"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </Section>
          {/* <motion.div
            className="flex flex-col md:flex-row gap-12 items-center justify-between md:px-8"
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={fadeInLeft} className="space-y-6 lg:w-3/4">
              <h2 className="text-3xl poppins-semibold text-[#335c98]">
                About Us
              </h2>
              <p className="text-slate-500 leading-relaxed nunito text-sm text-justify">
                Founded in 2004, Rajguru Steel Industries is a privately owned
                company specializing in Stainless Steel Architectural Products.
                Our commitment to quality has earned us the trust of a diverse
                customer base, making us a preferred choice for reliable and
                budget-friendly stainless steel solutions.
              </p>
              <p className="text-slate-500 leading-relaxed nunito text-sm text-justify">
                At Rajguru Steel Industries, we take pride in our talented team
                dedicated to delivering quality products. Comprising
                professionals from research and development, sales, production,
                marketing, quality control, and logistics, we work
                collaboratively to achieve our goals. We provide regular
                training to keep our team updated on market trends, and our
                extensive distribution network ensures timely product delivery
                to our clients.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative h-96 w-full lg:w-3/4 rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src={OurStory}
                alt="Rajguru Steel Industries Factory"
                layout="fill"
                objectFit="cover"
              />
              <motion.div
                className="absolute inset-0 bg-blue-600 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div> */}

          {/* <motion.div
            className="text-center"
            variants={scaleIn}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl font-semibold py-3 poppins-bold text-[#335c98]">
              Our Mission
            </h2>
            <p className="text-slate-500 max-w-5xl mx-auto leading-relaxed nunito">
              At Rajguru Steel Industries, our mission is to provide superior
              stainless steel solutions that enhance the quality, durability,
              and sustainability of our clients' products and projects. We are
              dedicated to fostering innovation and promoting environmental
              responsibility within our industry, ensuring that our offerings
              not only meet the highest standards but also contribute positively
              to the environment.
            </p>
          </motion.div> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-4">
            {[
              {
                icon: <LuBuilding2 className="w-10 h-10 text-[#335c98]" />,
                title: "State-of-the-art Facilities",
                description:
                  "Modern manufacturing plants equipped with the latest technology",
              },
              {
                icon: <HiOutlineUsers className="w-10 h-10 text-[#335c98]" />,
                title: "Expert Team",
                description:
                  "Skilled professionals with years of industry experience",
              },
              {
                icon: <TbTargetArrow className="w-10 h-10 text-[#335c98]" />,
                title: "Quality Focus",
                description:
                  "Rigorous quality control measures at every stage of production",
              },
              {
                icon: <FaAward className="w-10 h-10 text-[#335c98]" />,
                title: "Industry Recognition",
                description:
                  "Multiple awards for innovation and sustainability",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl"
                whileHover={{ y: -15, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col items-center text-center gap-2">
                  {item.icon}
                  <h3 className="text-xl poppins-regular mb-2 text-[#335c98]">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm nunito">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}

          {/* <div className="flex flex-col md:flex-row w-full h-full justify-around items-center gap-8 md:gap-0"> */}
          <Section>
            <div className="container mx-auto px-4">
              <motion.div
                className=" rounded-xl py-4 md:px-8 md:py-6 flex flex-col items-center justify-center h-auto shadow-xl gap-6"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
              >
                <h2 className="text-3xl font-semibold text-center text-[#335c98] poppins-bold">
                  Why Choose Rajguru Steel?
                </h2>
                <p className="nunito text-slate-500 text-justify md:text-center px-5 text-xs ">
                  At Rajguru Steel Industries, we have established ourselves as
                  one of the recognized organizations in the manufacturing and
                  supplying of a wide array of Stainless Steel Architectural
                  Products. Our commitment to excellence has earned us a
                  reputation for unmatched quality and reliable performance,
                  making us the preferred choice for numerous industries. Our
                  products are in high demand across various sectors due to
                  their superior durability, aesthetic appeal, and
                  functionality. We offer a diverse range of specifications to
                  cater to the unique needs of our valued customers, ensuring
                  that they find the perfect solution for their architectural
                  requirements.
                </p>
                <motion.ul
                  className="list-none grid md:grid-cols-2 gap-3 md:gap-8 xl:ml-20"
                  variants={scaleIn}
                >
                  {[
                    "Wide assortment of products",
                    "Quality assurance",
                    "On time delivery",
                    "Sound infrastructure",
                    "Highly experienced workforce",
                    "Customizable Products",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-2"
                      variants={fadeInUp}
                    >
                      <FcCheckmark />
                      <p className="text-slate-500 whitespace-nowrap nunito">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </Section>

          <Section>
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-3xl poppins-bold py-8 text-center text-[#335c98]"
                variants={fadeInUp}
              >
                Customer Testimonials
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-10">
                {reviews.slice(0, visibleCount).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className=" p-6 rounded-lg border-2"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    }}
                  >
                    <h3 className="text-lg poppins-semibold mb-2 text-[#335c98]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-2">
                      {testimonial.location}
                    </p>
                    <p className="mb-2 text-slate-500">{testimonial.product}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          <FaStar className="w-5 h-5 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              {visibleCount < reviews.length && !allVisible && (
                <button
                  onClick={loadMore}
                  className="mt-6 py-2 px-4 bg-[#335c98] text-slate-200 rounded hover:bg-blue-700 transition duration-500"
                >
                  View More
                </button>
              )}
              {allVisible && (
                <button
                  onClick={closeReviews}
                  className="mt-6 py-2 px-4 bg-red-600 text-slate-200 rounded hover:bg-red-700 transition duration-500"
                >
                  Close
                </button>
              )}
            </div>
          </Section>

          {/* <motion.div
              className="bg-gray-50 text-center flex flex-col justify-center items-center gap-6 shadow-lg rounded-lg p-10"
              variants={fadeInUp}
              initial="hidden"
              animate={controls}
            >
              <h2 className="text-3xl poppins-semibold text-[#335c98]">
                Ready to Work with Us?
              </h2>
              <p className="text-slate-500 text-sm nunito">
                Let's discuss how Rajguru Steel Industries can meet your
                stainless steel needs.
              </p>
              <motion.button
                className="bg-[#335c98] text-white py-3 px-8 rounded-full nunito whitespace-nowrap"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div> */}
          {/* </div> */}
        </div>

        <motion.div
          className="fixed bottom-0 left-0 right-0 h-2 bg-[#335c98] z-50"
          style={{
            scaleX: scrollYProgress,
            transition: { type: "spring", damping: 10 },
          }}
        />
      </div>
    </section>
  );
}
