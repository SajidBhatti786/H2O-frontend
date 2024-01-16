// src/components/UnderConstruction.js
import React from "react";
import Logo from "/public/assests/images/logo.png";
import Image from "next/image";
import styles from "@/app/styles/HeroSection.module.css";
import Link from "next/link";
const UnderConstruction = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Company Logo and Name */}
      <div className="mb-8">
        <div className="flex justify-center items-center">
          <Image
            src={Logo} // Replace with the path to your company logo
            alt="Company Logo"
            className="w-16 h-16 object-contain "
          />
          <h1 className="${styles.title} font-bold text-4xl tracking-wider text-black">
            H•2•O
          </h1>
        </div>
        <h1 className="text-2xl font-semibold mt-2">{title}</h1>
      </div>

      {/* Description */}

      {/* Positive Message */}
      <div className="text-center mb-4">
        <p className="text-green-500 font-semibold">
          Stay tuned for exciting updates!
        </p>
      </div>

      {/* Under Construction Message */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Under Construction</h2>
        <p className="text-gray-600">
          We're working on something awesome. Please check back later!
        </p>
      </div>
      <div className="mt-8">
        <Link href="/">
          <div className="text-black underline ">Back to Home</div>
        </Link>
      </div>
    </div>
  );
};

export default UnderConstruction;
