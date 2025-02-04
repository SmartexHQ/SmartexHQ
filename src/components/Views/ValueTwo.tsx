"use client";
import React, { useEffect } from "react";
import CardThree from "../_core/CardThree";

import AOS from "aos";
import "aos/dist/aos.css";

const ValueTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {
      AOS.refresh();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 px-5 md:px-8 lg:px-12 py-16">
      <div className="flex w-full gap-2 sm:gap-5 order-2 lg:order-1">
        <div data-aos="fade-up" className="w-full">
          <CardThree gradient="border-[#FD853A] cardThree-gradient" />
        </div>
        <div data-aos="fade-down" className="w-full">
          <CardThree gradient="border-[#9B8AFB] cardTwo-gradient" />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="max-w-[644px] sm:mt-10 order-1 lg:order-2"
      >
        <div className="text-[32px] md:text-[44px] lg:text-[64px] font-bold">
          Smarter{" "}
          <span className="text-susejColor-purple">Energy Solutions</span>
        </div>
        <div className="text-sm sm:text-base mt-4 text-gray-600">
          Take control of your energy usage with Susej&#39;s smart prepaid
          meters. Our technology ensures real-time monitoring, seamless
          recharges, and optimized consumption—giving you transparency,
          convenience, and efficiency in energy management.
        </div>
      </div>
    </div>
  );
};

export default ValueTwo;
