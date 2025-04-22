"use client";

import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-[#5925DC] py-10 px-5 md:py-16 md:px-20">
      <div className="container mx-auto flex flex-col items-center gap-6 md:gap-10">
        {/* Content Section */}
        <div className="text-white w-full md:w-2/3">
          <h2 className="text-[32px] md:text-[44px] lg:text-[64px] font-bold text-center leading-tight">
            Your Digital Growth Partner
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium leading-relaxed text-center">
            Smart-Tex is a Nigerian tech company delivering enterprise software
            and intelligent automation solutions that scale with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
