"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 mx-4 sm:mx-[64px] rounded-[24px]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Logo and Links */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
            <span className="text-lg font-semibold">Brand Logo</span>
          </div>
        </div>
        <nav className="flex space-x-6 mt-4 text-[10px] sm:text-sm uppercase">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link href="/career" className="hover:underline">
            Career
          </Link>
        </nav>

        {/* Social Media Section */}
        <div className="flex flex-col items-center bg-white text-black p-4 rounded-lg">
          <span className="text-sm mb-2">Follow us for more updates</span>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-black hover:text-gray-300 w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-black hover:text-gray-300 w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-black hover:text-gray-300 w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="text-black hover:text-gray-300 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-400">
        ©2025 Smartex. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
