"use client";
import React, { useEffect } from "react";
import CardOne from "../_core/CardOne";
import CardTwo from "../_core/CardTwo";

import AOS from "aos";
import "aos/dist/aos.css";

const ValueOne = () => {
  const gradient1 = "border-[#9B8AFB] cardTwo-gradient";
  const gradient2 = "border-[#FD853A] cardThree-gradient";

  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div data-aos="fade-up" className="px-5 w-full md:px-8 lg:px-12 py-16">
      <div className="max-w-[644px]">
        <div className="text-[32px] md:text-[44px] lg:text-[64px] font-bold">
          Tailored{" "}
          <span className="text-susejColor-primary">Energy Solutions</span>
        </div>
        <div className="text-sm sm:text-base mt-4 text-gray-600">
          Experience a new level of convenience with Susej Smart Meters. Our
          innovative technology allows you to track usage, recharge instantly,
          and optimize energy consumption—all from your mobile device.
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <div data-aso="fade-right" className="lg:w-1/2">
          <CardOne />
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col sm:flex-row flex-1 gap-4"
        >
          <CardTwo gradient={gradient1} />
          <CardTwo gradient={gradient2} />
        </div>
      </div>
    </div>
  );
};

export default ValueOne;
