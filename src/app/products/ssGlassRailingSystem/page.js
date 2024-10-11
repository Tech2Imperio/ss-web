"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShieldAlt,
  FaBolt,
  FaPaintBrush,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";
// import clampsImg from "../../assets/product/ssGlassRailingSystem/clamps.webp";
import handrail from "../../assets/product/ssGlassRailingSystem/handrail.webp";
import baseplate from "../../assets/product/ssGlassRailingSystem/baseplate.webp";
import glasscap from "../../assets/product/ssGlassRailingSystem/glasscap.webp";
import spigot from "../../assets/product/ssGlassRailingSystem/spigot.webp";
import mountingbracket from "../../assets/product/ssGlassRailingSystem/mountingbracket.webp";
import cornerconnector from "../../assets/product/ssGlassRailingSystem/cornerconnector.webp";
import customImg1 from "../../assets/product/ssGlassRailingSystem/extra/customImg1.webp";
import customImg2 from "../../assets/product/ssGlassRailingSystem/extra/customImg2.webp";
import customImg3 from "../../assets/product/ssGlassRailingSystem/extra/customImg3.webp";
import customImg4 from "../../assets/product/ssGlassRailingSystem/extra/customImg4.webp";
import ssGlassRailing from "../../assets/product/ssGlassRailingSystem/extra/ssGlassRailing.webp";
import Link from "next/link";
export default function Page() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Section 1
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView1) {
      controls1.start("visible");
    }
  }, [controls1, inView1]);

  // Section 2
  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView2) {
      controls2.start("visible");
    }
  }, [controls2, inView2]);

  // Section 3
  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView3) {
      controls3.start("visible");
    }
  }, [controls3, inView3]);

  // Section 4
  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView4) {
      controls4.start("visible");
    }
  }, [controls4, inView4]);

  // Section 5
  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true });
  useEffect(() => {
    if (inView5) {
      controls5.start("visible");
    }
  }, [controls5, inView5]);

  // Accessories Data
  const accessories = [
    {
      name: "Spigots",
      image: spigot,
      description: "Modern spigots for a sleek and minimalistic look.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Installation", value: "Floor mounted or side mounted" },
        { name: "Glass Thickness", value: "10mm to 12mm" },
      ],
    },

    {
      name: "Corner Connectors",
      image: cornerconnector,
      description: "Connectors for creating smooth corner transitions.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Finish", value: "Brushed" },
        { name: "Usage", value: "For 90-degree corners" },
      ],
    },
    {
      name: "Post Caps",
      image: glasscap,
      description:
        "Stylish caps for the top of posts to enhance appearance and safety.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Finish", value: "Brushed or Polished" },
        { name: "Compatibility", value: "Fits standard post sizes" },
      ],
    },
    {
      name: "Handrail Brackets",
      image: mountingbracket,
      description: "Sturdy brackets for supporting handrails.",
      specs: [
        { name: "Material", value: "304 Stainless Steel" },
        { name: "Finish", value: "Polished" },
        { name: "Compatibility", value: "For 42.4mm handrails" },
      ],
    },
    {
      name: "Base Plates",
      image: baseplate,
      description: "Robust base plates for secure mounting of glass panels.",
      specs: [
        { name: "Material", value: "316 Stainless Steel" },
        { name: "Dimensions", value: "100mm x 100mm x 10mm" },
        { name: "Finish", value: "Brushed" },
        { name: "Mounting", value: "4 anchor bolts (included)" },
      ],
    },
    {
      name: "Handrails",
      image: handrail,
      description: "Elegant and sturdy handrails for added safety and style.",
      specs: [
        { name: "Material", value: "304 or 316 Stainless Steel" },
        { name: "Diameter", value: "42.4mm or 48.3mm" },
        { name: "Finish", value: "Brushed or Mirror Polished" },
        { name: "Length", value: "Custom cut to size" },
      ],
    },
  ];

  const [hoveredAccessory, setHoveredAccessory] = useState(null);

  return (
    <div className="min-h-screen">
      <main className="max-w-[85rem] mx-auto">
        {/* Section 1 */}
        <motion.section
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="px-4">
            <h2 className="text-4xl din-extrabold mb-12 text-center text-primary">
              Elevate Your Space with Stainless Steel Glass Railing Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <Image
                  src={ssGlassRailing}
                  alt="Stainless Steel Glass Railing System"
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h3 className="text-2xl din-semibold mb-4 text-primary">
                  Unparalleled Elegance and Safety
                </h3>
                <p className="text-secondary mb-6 nunito">
                  Our stainless steel glass railing systems combine modern
                  aesthetics with robust engineering to provide a seamless blend
                  of style and security. Perfect for both indoor and outdoor
                  applications, these systems offer:
                </p>
                <ul className="list-disc list-inside text-secondary mb-6 nunito">
                  <li>Unobstructed views and enhanced spatial perception</li>
                  <li>
                    Durability and corrosion resistance for long-lasting beauty
                  </li>
                  <li>Customizable designs to suit any architectural style</li>
                  <li>Easy maintenance and cleaning for lasting brilliance</li>
                  <li>Compliance with international safety standards</li>
                </ul>
                <Link href="/ContactUs">
                  <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                    <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>
                    <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                      <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                      <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    </span>
                    <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                      GET A QUOTE
                    </span>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="px-4">
            <h2 className="text-4xl din-extrabold mb-12 text-center text-primary">
              Key Features
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  icon: FaShieldAlt,
                  title: "Enhanced Safety",
                  description:
                    "Tempered glass and high-grade stainless steel ensure maximum protection without compromising visibility.",
                },
                {
                  icon: FaBolt,
                  title: "Quick Installation",
                  description:
                    "Our innovative design allows for faster and easier installation, reducing project timelines.",
                },
                {
                  icon: FaPaintBrush,
                  title: "Customizable Finishes",
                  description:
                    "Choose from a variety of finishes to match your specific aesthetic needs and architectural style.",
                },
                {
                  icon: FaTools,
                  title: "Low Maintenance",
                  description:
                    "Resistant to corrosion and easy to clean, our systems maintain their beauty with minimal upkeep.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-200 p-6 rounded-lg hover:shadow-2xl text-center"
                  variants={fadeInUp}
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl din-semibold mb-2 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-secondary nunito">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={fadeInUp}
          className="py-10"
        >
          <div className="px-4">
            <h2 className="text-4xl din-bold mb-12 text-center text-primary">
              Premium Accessories
            </h2>
            <p className="text-xl text-secondary text-center mb-12 din-medium">
              Explore our range of high-quality accessories designed to
              complement your glass railing system.
            </p>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
              {accessories.map((accessory, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden bg-white rounded-lg shadow-lg mb-8"
                  onMouseEnter={() => setHoveredAccessory(index)}
                  onMouseLeave={() => setHoveredAccessory(null)}
                >
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    width={250}
                    height={150}
                    className="rounded-lg w-full h-auto"
                  />
                  <motion.div
                    className={`absolute inset-0 opacity-60 bg-gradient-to-r from-gray-800 to-transparent p-4 transition-transform duration-1000 ease-in-out ${
                      hoveredAccessory === index
                        ? "translate-x-0"
                        : "translate-x-full"
                    }`}
                  >
                    <h3 className="text-white text-lg font-semibold">
                      {accessory.name}
                    </h3>
                    <p className="text-gray-300">{accessory.description}</p>
                    <h4 className="text-xl font-semibold text-white mt-2">
                      Specifications:
                    </h4>
                    <ul className="text-gray-200">
                      {accessory.specs.map((spec, specIndex) => (
                        <li key={specIndex}>{`${spec.name}: ${spec.value}`}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          ref={ref4}
          initial="hidden"
          animate={controls4}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="px-4">
            <h2 className="text-4xl din-extrabold mb-12 text-center text-primary">
              Installation Process
            </h2>
            <motion.div
              className="grid md:grid-cols-3 grid-cols-2 gap-3 "
              variants={staggerChildren}
            >
              {[
                {
                  title: "Site Measurement",
                  description:
                    "Precise measurements are taken to ensure a perfect fit.",
                },
                {
                  title: "Custom Fabrication",
                  description:
                    "Components are custom-made to your specifications.",
                },
                {
                  title: "Base Plate Installation",
                  description:
                    "Secure mounting of base plates to the floor or structure.",
                },
                {
                  title: "Post and Clamp Attachment",
                  description:
                    "Installation of posts and glass clamps or spigots.",
                },
                {
                  title: "Glass Panel Mounting",
                  description:
                    "Careful placement and securing of glass panels.",
                },
                {
                  title: "Handrail Installation",
                  description:
                    "Attachment of handrails for added support and aesthetics.",
                },
                {
                  title: "Final Adjustments",
                  description:
                    "Ensuring all components are properly aligned and secure.",
                },
                {
                  title: "Quality Inspection",
                  description:
                    "Thorough check to ensure safety and quality standards are met.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-start mb-8 hover:shadow-lg rounded-lg p-4 transition duration-300"
                  variants={fadeInUp}
                >
                  <FaCheckCircle className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl din-semibold mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-secondary nunito">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center mt-2">
              <Link href="/ContactUs">
                <button className="relative inline-flex items-center justify-center overflow-hidden px-6 py-3 mb-6 text-white border border-[#335c98] rounded-md din-regular text-sm font-normal uppercase transition-all duration-700 cursor-pointer group z-10">
                  {/* Colored background */}
                  <span className="absolute inset-0 bg-[#335c98] transition-all duration-700 ease-in-out group-hover:bg-transparent"></span>

                  {/* Top-left to bottom-right diagonal animation */}
                  <span className="absolute inset-0 bg-transparent transition-all duration-700 ease-in-out">
                    <span className="absolute top-0 left-0 w-full h-full bg-[#335c98] origin-top-left transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                    <span className="absolute bottom-0 right-0 w-full h-full bg-[#335c98] origin-bottom-right transition-all duration-700 ease-in-out group-hover:scale-x-0"></span>
                  </span>

                  {/* Button text */}
                  <span className="relative z-10 group-hover:text-primary transition-colors duration-700 ease-in-out din-semibold">
                    Schedule Your Installation
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          ref={ref5}
          initial="hidden"
          animate={controls5}
          variants={fadeInUp}
          className="py-20"
        >
          <div className="px-4">
            <h2 className="text-4xl din-bold mb-12 text-center text-primary">
              Customization Options
            </h2>
            <p className="text-xl text-secondary text-center mb-12 din-semibold">
              Tailor your glass railing system to perfectly match your vision
              and architectural requirements.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerChildren}
            >
              {[
                {
                  name: "Glass Types",
                  image: customImg1,
                  description:
                    "Choose from clear, frosted, or tinted glass options.",
                },
                {
                  name: "Railing Styles",
                  image: customImg2,
                  description:
                    "Select from various post designs and top rail profiles.",
                },
                {
                  name: "Finishes",
                  image: customImg3,
                  description:
                    "Available in brushed, polished, or powder-coated finishes.",
                },
                {
                  name: "Mounting Options",
                  image: customImg4,
                  description:
                    "Side mount, top mount, or embedded installation methods.",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-xl text-center flex flex-col justify-between"
                  variants={fadeInUp}
                >
                  <Image
                    src={option.image}
                    alt={option.name}
                    width={300}
                    height={300}
                    className="mx-auto mb-4 rounded-2xl"
                  />
                  <h3 className="text-xl din-semibold text-primary mb-2">
                    {option.name}
                  </h3>
                  <p className="text-secondary nunito">{option.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
