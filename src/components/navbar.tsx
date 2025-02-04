"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/career", label: "Career" },
];

const NavLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
  <Link href={href} className="text-sm font-medium uppercase text-gray-600 hover:text-black">
    {label}
  </Link>
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="app-width flex items-center justify-between py-4 px-5 md:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 bg-black rounded-full mr-2"></span>
          <span className="text-lg font-semibold">Brand Logo</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 text-sm font-medium text-gray-600 rounded uppercase hover:bg-gray-100">
            Staff Login
          </button>
          <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded uppercase hover:bg-gray-800">
            Contact Sales
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-6 border-t border-gray-200 absolute top-full left-0">
          <nav className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <button className="text-lg font-medium uppercase text-gray-600 hover:text-black">
              Staff Login
            </button>
            <button className="text-lg font-medium uppercase text-black bg-gray-100 hover:bg-gray-200 py-2 rounded">
              Contact Sales
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
