import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-white px-5 md:px-8 lg:px-12 pt-16">
      {/* Left Content */}
      <div className="text-left md:w-2/3">
        <div className="relative">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[60px] pt-10 pb-4">
            <span>Software That </span>
            <br className="hidden lg:block" />
            <span className="mt-1">Powers Progress</span>
          </div>
          {/* Decorative Background Icons */}
          <div className="absolute top-[-20px] left-[0px]">
            <img
              src="/svg/Bulb.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
            />
          </div>
          <div className="absolute top-[-20px] right-1/2">
            <img
              src="/svg/Bulb1.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
            />
          </div>
          <div className="absolute bottom-0 right-1/3 hidden md:block">
            <img
              src="/svg/Bulb2.svg"
              height={50}
              width={50}
              alt="bulb"
              className="animate-pulse"
            />
          </div>
          <p className="text-gray-600 text-base font-normal pb-4">
            Tailored digital solutions for smart, scalable business growth.
          </p>
          <div className="flex flex-col md:flex-row gap-2">
            <Button className="order-2 md:order-1 text-white">
              <span>Get Started</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="relative mt-10 md:mt-0 md:ml-10 flex items-center">
        <img
          src="/png/Product.png"
          alt="Reliable Electricity Meter"
          className="w-72 md:w-96 lg:w-[500px] object-cover animate-in"
        />
        <img
          src="/svg/timeline.svg"
          alt="Power Distribution Timeline"
          className="hidden md:inline right-2.5 animate-in absolute"
        />
      </div>
    </div>
  );
};

export default HeroSection;
