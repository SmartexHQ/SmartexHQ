"use client";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-white px-5 md:px-8 lg:px-12 py-16">
      {/* Left Content */}
      <div className="text-left md:w-2/3">
        <div className="relative">
          <h1
            data-aos="fade-right"
            className="text-[36px] capitalize md:text-[48px] font-bold leading-[60px] pt-10 pb-4"
          >
            <span>Powering Your </span>
            <span className="text-susejColor-primary">Homes</span> and{" "}
            {/* <br className="hidden lg:block" /> */}
            <span className="text-susejColor-seconday leading-10">
              Businesses
            </span>
            <span> with Excellence</span>
          </h1>
          {/* Decorative Background Icons */}
          <div data-aos="fade-down" className="absolute top-[-20px] left-[0px]">
            <Image
              src="/svg/Bulb.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
            />
          </div>
          <div className="absolute top-[-20px] right-1/2">
            <Image
              src="/svg/Bulb1.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
              data-aos="fade-left"
            />
          </div>
          <div className="absolute bottom-0 right-1/3 hidden md:block">
            <Image
              src="/svg/Bulb2.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
              data-aos="fade-up"
            />
          </div>
          <div data-aos="zoom-in" className="flex flex-col md:flex-row gap-2">
            <Button className="order-2 md:order-1">
              <span>Get Connected</span>
              <ArrowRight />
            </Button>
            <div className="flex justify-between order-1 md:order-2">
              <div className="text-sm flex-1 text-center">
                <div className="flex md:justify-start justify-center text-yellow-400">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>
                <p className="text-gray-600 text-sm">
                  Trusted by over 500,000 customers
                </p>
              </div>
              <div className="md:hidden block">
                <Image
                  src="/svg/bulb2.svg"
                  height={30}
                  width={30}
                  alt="bulb"
                  className="animate-pulse"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content (Image) */}
      <div
        data-aos="zoom-in"
        className="relative mt-10 md:mt-0 md:ml-10 flex items-center"
      >
        <img
          src="/png/hero-meter.png"
          alt="Electric Meter"
          className="w-72 md:w-96 lg:w-[500px] object-cover animate-in"
        />
        <img
          src="/svg/timeline.svg"
          alt="Timeline"
          className="hidden md:inline"
        />
      </div>
    </div>
  );
};

export default HeroSection;
