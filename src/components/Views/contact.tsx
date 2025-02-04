"use client";

import React from "react";

const ContactComponent: React.FC = () => {
  return (
    <section className="bg-blue-50 my-16 py-16 px-6 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section: Text */}
        <div>
          <h2 className="text-[32px] md:text-[64px] font-bold leading-[38px] md:leading-[77px] text-[#1D2939] w-3/5 md:w-4/5">
            Get in touch with our <span className="text-[#1570EF]">sales</span>{" "}
            team
          </h2>
          <p className="text-[#667085] mt-4 text-base font-normal leading-[28px] w-4/5">
            Have questions or need more information? Our dedicated sales team is
            ready to assist you. Fill out the form below, and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>

        {/* Right Section: Form */}
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          {/* Name/Company Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-normal text-gray-700"
            >
              Name / Company Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-normal text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-normal text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-normal text-gray-700"
            >
              How can we assist you?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Let us know your questions or needs"
              className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-[150px] bg-[#0C111D] text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex justify-center items-center mx-auto text-sm font-semibold"
          >
            Submit <span className="ml-2">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
