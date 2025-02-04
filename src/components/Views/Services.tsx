"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row gap-10 px-5 md:px-8 lg:px-12 py-16"
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        {/* Title */}
        <div className="text-[32px] md:text-[44px] lg:text-[64px] font-bold">
          Smart <span className="text-susejColor-tertiary">Energy </span>{" "}
          Solutions
        </div>

        {/* Description */}
        <div className="text-gray-600 mt-3">
          At Susej, we provide advanced energy solutions that offer efficiency,
          transparency, and control. Discover how our smart technologies can
          revolutionize your power management.
        </div>

        {/* Service Highlights */}
        <div className="mt-6 grid gap-4">
          {[
            "Smart Prepaid Metering for Accurate Billing",
            "Remote Energy Monitoring & Usage Insights",
            "24/7 Dedicated Customer Support",
            "Flexible & Secure Payment Options",
            "Energy-Saving Tips for Cost Optimization",
          ].map((service, i) => (
            <div key={i} className="flex gap-3 items-center">
              <Image
                src="/svg/target.svg"
                alt="Service Icon"
                width={24}
                height={24}
                className="object-contain"
              />
              <div className="text-gray-700">{service}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1">
        <Image
          src="/png/meter.png"
          width={580}
          height={556}
          alt="Smart Meter"
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Services;
