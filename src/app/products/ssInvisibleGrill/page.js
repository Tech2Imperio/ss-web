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

  const accessoriesData = [
    { 
      id: 1, 
      name: 'Bullet Fitting', 
      image: BulletHook, 
      specifications: {
        GradeField: '304/316',
        Technique: 'Customized',
        Material: 'Stainless Steel',
        ProductType: 'Bullet Hook',
        UsageApplication: 'For balcony and staircase',
        GrillDesign: 'Modern',
        WireDiameter: '3 mm',
        SurfaceFinish: 'Polished',
        Colors: 'Silver',
        Feature: 'Rust Proof, Weather Proof, Durable',
        MovableBulletFit: 'Yes',
      },
    },
    { 
      id: 2, 
      name: 'Snap Hooks', 
      image: Hooks, 
      specifications: {
        GradeField: '	304/316',
        Technique: 'customized',
        Material: 'Stainless Steel',
        ProductType: 'Snap Hook',
        UsageApplication: '	Construction Industry',
        GrillDesign: 'Modern',
        WireDiameter: '3 mm',
        SurfaceFinish: 'Polished',
        WireSpacing: '	2,3,4',
        Colors: 'Silver',
        Feature: 'Rust Proof, Weather Proof, Durable',
      },
    },
    { 
      id: 3, 
      name: 'D-Shackle', 
      image: Hooks2, 
      specifications: {
        GradeField: '304/316',
        Technique: 'Standard',
        Material: 'Stainless Steel',
        ProductType: 'D-Shackle',
        UsageApplication: 'For balcony and staircase',
        GrillDesign: 'Modern',
        WireDiameter: '3 mm',
        WireSpacing: '	2,3,4',
        SurfaceFinish: 'Polished',
        Colors: 'Silver',
        Feature: 'Rust Proof, Weather Proof, Durable',
      },
    },
    { 
      id: 4, 
      name: 'Invisible material', 
      image: invisiblematerial, 
      specifications: {
        GradeField: '	304/316',
        Technique: 'customized',
        Material: 'Stainless Steel',
        ProductType: 'Balcony Grill',
        UsageApplication: 'Home',
        GrillDesign: 'Modern',
        WireDiameter: '2.5 mm',
        SurfaceFinish: 'Powder Coated',
        Colors: 'Silver',
        Feature: 'Rust Proof, Weather Proof, Durable',
      },
    },
    { 
      id: 5, 
      name: 'Turnbuckle hook', 
      image: turnbuckle, 
      specifications: {
        GradeField: '316 Stainless Steel',
        Technique: 'Standard',
        Material: 'Stainless Steel',
        ProductType: '	Invisible Grill Wire Roll Hook',
        UsageApplication: 'For balcony and staircase',
        GrillDesign: 'Modern',
        WireDiameter: '3 mm',
        WireSpacing: '2,3,4',
        SurfaceFinish: 'Polished',
        Colors: 'Silver',
        Feature: 'Rust Proof, Weather Proof, Durable',
      },
    },
    { 
      id: 5, 
      name: 'Wire Roll', 
      image: Invisiblerope, 
      specifications: {
        GradeField: '	304/316',
        Technique: 'Standard',
        Material: 'Stainless Steel',
        ProductType: '	Invisible Grill Wire Roll',
        UsageApplication: 'Used To Safeguard Homes',
        GrillDesign: 'Modern',
        WireDiameter: '2.5 mm',
        WireSpacing: '2,3,4', 
        SurfaceFinish: 'Powder Coated',
        Colors: 'Black, White, Brown',
        Feature: 'Rust Proof, Weather Proof, Durable',
      },
    },
  
  ];
  

  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const toggleAccessory = (accessory) => {
    setSelectedAccessory(selectedAccessory === accessory ? null : accessory);
  };


  return (
    <main className=" h-full w-full">
      <div className="relative -mt-32">
        <Image
          className="h-[22rem] md:h-[40rem] w-full object-cover"
          src={bgImg}
          alt="invisible grill"
        />
        <div className="absolute inset-0 bg-black opacity-25" />
        <h1 className="absolute inset-0 flex items-center justify-center mt-28 md:pt-0 text-[#19355e] text-3xl md:text-[5rem] poppins-regular">
          Invisible Grill
        </h1>
      </div>
      <div className=" flex flex-col overflow-hidden w-full h-full xl:px-[18rem]">
        <p className=" text-slate-500 lg:text-base text-justify  p-8">
          Rajguru Steel Industry offers premium Invisible Grill solutions
          designed to enhance safety without obstructing views. Ideal for
          high-rise buildings and balconies, our invisible grills provide a
          sleek, modern aesthetic with robust durability. Made from high-quality
          materials, they ensure protection while maintaining an unobstructed
          outlook. Additionally, we supply a range of accessories like bullet
          hooks and invisible wire, further ensuring safety and convenience for
          every installation.
        </p>
        <section className="flex flex-col lg:flex-row items-center justify-center gap-36 h-full w-full bg-gray-50">
      <div className="relative flex flex-col items-center justify-center md:pt-[15rem] lg:pt-0">
        <h1 className="text-3xl font-semibold text-[#335c98] p-4">Invisible Grill</h1>
        <div className="overflow-hidden rounded-3xl h-[25rem] w-[20rem] md:h-[42rem] md:w-[28rem] lg:h-[45rem] lg:w-[28rem] xl:h-[35rem] xl:w-[24rem] border border-gray-300 relative">
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

      <div className="flex flex-col -mt-28 md:-mt-14 lg:-mt-0">
        <h2 className="text-3xl font-semibold text-[#335c98] flex justify-center">Accessories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center list-none -mx-4 transition-transform duration-300">
          {accessoriesData.map((accessory) => (
            <div key={accessory.id} className="flex flex-col items-center">
              <li
                className="h-[7rem] w-[7rem] md:h-[10rem] md:w-[10rem] lg:h-[12rem] lg:w-[12rem] xl:h-[10rem] xl:w-[10rem] hover:scale-110 transition-transform duration-300 cursor-pointer"
                onClick={() => toggleAccessory(accessory)}
              >
                <Image src={accessory.image} alt={accessory.name} />
              </li>
              <p className="text-center text-gray-700 font-medium">{accessory.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedAccessory && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 transition-transform duration-500">
            <h3 className="text-xl poppins-bold text-[#335c98] mb-4">{selectedAccessory.name} Specifications</h3>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-2 text-left poppins-semibold text-[#335c98]">Specification</th>
                  <th className="border border-gray-300 p-2 text-left poppins-semibold text-[#335c98]">Details</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(selectedAccessory.specifications).map(([key, value], index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-gray-300 p-2 nunito text-[#335c98]">{key.replace(/([A-Z])/g, ' $1')}</td>
                    <td className="border border-gray-300 p-2 nunito text-[#335c98]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="mt-8 px-6 py-3 poppins-regular bg-[#335c98] text-white rounded-lg shadow-md transition-transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#6a8bb1] focus:ring-opacity-50"
              onClick={() => setSelectedAccessory(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
      </div>
      <main className="flex flex-col overflow-hidden w-full h-full xl:px-[18rem] p-4 md:p-6 lg:p-8">
        <div className="max-w-screen-xl mx-auto">
          <h2 className=" text-2xl md:text-3xl poppins-bold text-[#335c98] py-8 text-center">
            Benefits of Invisible Grills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Invisible Wire */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className=" text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Enhanced Safety and Security
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                Invisible grills provide a robust barrier without obstructing
                views, ensuring your home remains safe from intruders while
                maintaining aesthetic appeal. Their strong stainless steel
                construction deters potential break-ins effectively.
              </p>
            </div>

            {/* Card 2 - Turnbuckle */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Uninterrupted Views
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                Unlike traditional grills, invisible grills offer a clear view
                of the outside, allowing natural light to flow in and
                maintaining the beauty of your surroundings. This makes them
                ideal for balconies and large windows.
              </p>
            </div>

            {/* Card 3 - Bullet Hooks */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Durability and Longevity
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                Made from high-quality stainless steel, invisible grills are
                rust-proof and designed to withstand various weather conditions.
                This durability ensures that they require minimal maintenance
                over the years, providing long-term value.
              </p>
            </div>

            {/* Card 4 - Mounting Brackets */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Customizable Design
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                Invisible grills can be tailored to fit any architectural style
                and can be powder-coated in various colors. This customization
                allows homeowners to choose a design that complements their
                home’s exterior while ensuring safety.
              </p>
            </div>

            {/* Card 5 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Easy Installation
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                The installation process for invisible grills is straightforward
                and non-invasive, minimizing disruption to your home.
                Professional installers can quickly set them up, making it a
                hassle-free addition to your property.
              </p>
            </div>
            {/* Card 6 - End Cap & Anchors */}
            <div className="bg-white shadow-lg rounded-xl p-6 transition-transform duration-500 hover:scale-105 cursor-pointer group">
              <h3 className="text-2xl poppins-medium text-[#335c98] mb-4 relative after:absolute after:bg-[#335c98] after:h-[2px] after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-500 group-hover:after:w-full">
                Versatile Applications
              </h3>
              <p className="text-gray-600 nunito text-[14px]">
                Invisible grills are suitable for various areas, including
                balconies, staircases, and large windows. Their versatility
                makes them a popular choice for both residential and commercial
                properties looking to enhance safety without sacrificing
                aesthetics.
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
