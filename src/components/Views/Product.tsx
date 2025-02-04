"use client";
import React, { useEffect } from "react";
import CardFour from "../_core/CardFour";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div data-aos="fade-up" className="px-5 md:px-8 lg:px-12 py-16">
      {/* Section Title */}
      <div className="text-[32px] md:text-[44px] text-center lg:text-[64px] font-bold">
        Our <span className="text-susejColor-primary">Solutions</span>
      </div>

      {/* Description */}
      <div className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        At Susej, we provide cutting-edge energy solutions that enhance
        efficiency, transparency, and convenience. Explore our innovative
        offerings tailored for smart energy management and home automation.
      </div>

      {/* Products Grid */}
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Smart Prepaid Meters",
            description:
              "Monitor and manage your electricity usage with real-time tracking.",
          },
          {
            title: "Home Automation",
            description:
              "Control lighting, security, and appliances remotely with ease.",
          },
          {
            title: "Energy Management",
            description:
              "Optimize energy consumption and reduce costs with smart analytics.",
          },
          {
            title: "24/7 Customer Support",
            description:
              "Reliable assistance to keep your energy solutions running smoothly.",
          },
        ].map((product, index) => (
          <CardFour
            key={index}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
