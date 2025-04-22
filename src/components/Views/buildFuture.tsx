"use client";

import { ArrowRightIcon } from "lucide-react";
import React from "react";

const BuildFuture: React.FC = () => {
  return (
    <section className="bg-white mt-16 pt-0 px-6 md:px-0 w-full">
      <div className="mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D2939]">
          Build the future with us
        </h2>
        <p className="text-[#1D2939] text-base mt-4 md:max-w-[80%] mx-auto">
          Join Smart-Tex and help businesses digitize their operations with
          cutting-edge tools and scalable software.
        </p>

        {/* CTA Button */}
        <button className="mt-6 bg-[#0C111D] text-white py-3 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex justify-center items-center mx-auto text-sm font-semibold">
          Get Started <ArrowRightIcon size={20} className="ml-2" />
        </button>

        {/* Image Section */}
        <div className="mt-12">
          <img
            src="https://cdn.sanity.io/images/7gucqrpj/production/1919c5c8a4d2b26557923527d795df5a621f58da-1094x413.png"
            alt="Group of professionals"
            className="w-full max-w-4xl mx-auto shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BuildFuture;
