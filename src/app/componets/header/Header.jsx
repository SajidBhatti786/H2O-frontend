"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logoo from "../../../../public/assests/images/logo.png";
import styles from "@/app/styles/HeroSection.module.css";
import Link from "next/link";
import Logo from "/public/assests/images/logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="relative   md:py-4 flex justify-between items-center bg-[black] lg:px-16 ">
        <a href="/" className="block w-full mt-2 mb-2  ">
          <span>
            <Image src={Logo} width={60} height={60} alt="logo" />
          </span>
          <span
            className={`absolute top-5 md:top-7 lg:top-9 md:left-42 lg:left-44 left-28 ${styles.title} font-bold text-4xl tracking-wider text-white`}
          >
            H2O
          </span>
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-white p-3"
            onClick={toggleMenu}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center  lg:w-auto lg:space-x-6">
          <li>
            <Link className="text-sm text-white hover:font-bold" href="/#home">
              Home
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white hover:font-bold" href="/#about">
              About Us
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link
              className="text-sm text-white hover:font-bold"
              href="/#service"
            >
              Services
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <Link className="text-sm text-white hover:font-bold" href="/#price">
              Pricing
            </Link>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <a className="text-sm text-white hover:font-bold" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/login"
          className="px-7 py-3 text-base font-medium lg:inline hidden hover:text-primary text-white"
        >
          Login
        </a>
        <a
          href="/register"
          className="inline-flex items-center justify-center md:inline hidden h-12 px-8 py-2 text-sm font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
        >
          Join Us Now
        </a>
      </nav>

      {/* Navbar Menu */}
      {isMenuOpen && (
        <div className="navbar-menu bg-[#2a112a] relative z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bg-[#2a112a] bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6  border-r overflow-y-auto">
            {/* ... Menu Content ... */}
            <div className="flex items-center mb-8">
              <a href="/" className="block w-full py-5">
                <span>
                  <Image src={Logo} width={60} height={60} alt="logo" />
                </span>
                <span
                  className={`absolute top-14 md:top-7 left-28 ${styles.title} font-bold text-4xl tracking-wider text-white`}
                >
                  H2O
                </span>
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-white  hover:text-red-300 rounded"
                    href="/#home"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-white  hover:text-red-300 rounded"
                    href="/#about"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-white  hover:text-red-300 rounded"
                    href="#/service"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-white  hover:text-red-300 rounded"
                    href="#/price"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-white  hover:text-red-300 rounded"
                    href="#/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  href="/login"
                  className="px-7 py-3 text-base font-medium  hover:text-primary text-white"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="inline-flex items-center justify-center h-12 px-8 py-2  font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline"
                  style={{
                    fontSize: "20px" /* Add other styles here if needed */,
                  }}
                >
                  Join Us Now
                </a>
              </div>
              {/*<p className="my-4 text-xs text-center text-gray-400">*/}
              {/*    <span>Copyright © 2021</span>*/}
              {/*</p>*/}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
