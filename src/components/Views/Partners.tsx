"use client";
import React, { useEffect } from "react";
import Image from "next/image";

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
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="px-5 w-full md:px-8 lg:px-12 py-16 hidden md:block"
    >
      <div className="bg-[#EFF8FF] p-6 flex flex-wrap  gap-4 justify-around">
        {imgArr.map((img, index) => (
          <Image key={index} src={img} width={110} height={48} alt="partners" />
        ))}
      </div>
    </div>
  );
};

export default Partners;
