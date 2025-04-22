"use client";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Partners = () => {
  const imgArr = [
    "/svg/partners/amazon.svg",
    "/svg/partners/basecamp.svg",
    "/svg/partners/huawei.svg",
    "/svg/partners/lattic.svg",
    "/svg/partners/youtube.svg",
    "/svg/partners/netflix.svg",
  ];
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="px-5 w-full md:px-8 lg:px-12 py-16 hidden md:block"
    >
      <div className="bg-[#EFF8FF] p-6 flex flex-wrap  gap-4 justify-around">
        {imgArr.map((img, index) => (
          <img
            key={index}
            src={img}
            className="object-contain"
            alt="partners"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
