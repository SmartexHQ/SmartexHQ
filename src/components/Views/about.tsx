"use client";

import Image from "next/image";
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#5925DC] py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-1">
          <Image
            height={556}
            width={580}
            src="/png/meter.png"
            alt="Smart Meter"
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="text-white md:w-1/2">
          <h2 className="text-[48px] md:text-[64px] font-bold">
            Who <span className="text-[#FB6514]">We Are</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            At <strong>Susej Nigeria Limited</strong>, we are pioneers in smart
            energy solutions, committed to revolutionizing the way power is
            managed and utilized. With a focus on
            <span className="text-[#FB6514] font-semibold">
              {" "}
              innovation, reliability,
            </span>{" "}
            and
            <span className="text-[#FB6514] font-semibold">
              {" "}
              customer satisfaction
            </span>
            , we deliver cutting-edge technologies designed to empower homes,
            businesses, and industries.
          </p>
          <p className="mt-6 text-base leading-relaxed">
            Our team of experts integrates deep industry knowledge with advanced
            smart metering and automation solutions to provide seamless energy
            management. We stand by our commitment to offering tailored
            solutions, ensuring efficient power consumption, cost savings, and a
            sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
