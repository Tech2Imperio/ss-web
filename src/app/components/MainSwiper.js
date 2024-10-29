// src/components/MainSwiper.js
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

import UProfile from "../assets/RelatedProducts/UProfile.webp";
import LProfile from "../assets/RelatedProducts/LProfile.webp";
import fluted from "../assets/RelatedProducts/fluted.webp";
import TProfile from "../assets/product/profile/T_profile/wall.webp";
import customized from "../assets/RelatedProducts/customized.webp";
// import SSbalustrade from "../../assets/RelatedProducts/SSbalustrade.webp";
import invisibleGril from "../assets/RelatedProducts/invisibleGril.webp";
import queuemanager from "../assets/RelatedProducts/queuemanager.webp";
import DecorativeSheet from "../assets/RelatedProducts/decorativesheet.webp";
import AluminumImg from "../assets/RelatedProducts/AluminumImg.webp";

const relatedProducts = [
  {
    title: "Aluminum Window",
    image: AluminumImg,
    link: "/products/AluminiumWindows",
  },
  {
    title: "U Profile",
    image: UProfile,
    link: "/products/profile/UProfile",
  },
  {
    title: "T Profile",
    image: TProfile,
    link: "/products/profile/TProfile",
  },
  {
    title: "L Profile",
    image: LProfile,
    link: "/products/profile/LProfile",
  },
  {
    title: "Fluted Panel",
    image: fluted,
    link: "/products/profile/SSFlutedPanelProfile",
  },
  {
    title: "Invisible Grill",
    image: invisibleGril,
    link: "/products/ssInvisibleGrill",
  },
  {
    title: "Decorative Sheet",
    image: DecorativeSheet,
    link: "/products/ssDecorativeSheet",
  },
  {
    title: "Queue Manager",
    image: queuemanager,
    link: "/products/ssQueueManager",
  },
  {
    title: "Custom Profile",
    image: customized,
    link: "/products/profile/ssCustomProfile",
  },
];

const MainSwiper = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.pathname);
    }
  }, []);

  const filteredProducts = relatedProducts.filter(
    (product) => product.link !== currentUrl
  );

  return (
    <section className="w-full py-20 fade-in">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[35px] text-primary mb-16 din-semibold">
          Other Products
        </h2>
        <Swiper
          modules={[Autoplay, Pagination, Scrollbar, A11y]} // Include the required Swiper modules
          spaceBetween={15}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center cursor-pointer">
                <Link href={product.link} passHref>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="rounded-lg object-cover hover:scale-110 hover:shadow-lg"
                  />
                  <h3 className="mt-4 text-xl text-primary din-regular">
                    {product.title}
                  </h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSwiper;
