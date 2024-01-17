import React from "react";
import Heart from "/public/assests/images/heart.png";
import Logo from "/public/assests/images/logo.png";
import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Icon from "/public/assests/images/h-icon.png";
import TextToSpeech from "../about/TextToSpeech";

const Hero = () => {
  return (
    <div className="w-full md:px-8 px-4 h-screen bg-white text-black" id="home">
      <section className="text-black px-4 body-font w-full flex items-center justify-center h-screen">
        <div className="container mx-auto flex lg:px-5 md:flex-row flex-col-reverse   items-center">
          <div className="lg:w-1/2 lg:pr-8 md:pr-6 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
            <h1 className=" flex justify-center text-3xl md:text-5xl  font-bold text-black tracking-widest leading-loose font-serif font-times py-4 mt-3">
              H•2•O
            </h1>
            {/* removed text to speech */}
            {/*<TextToSpeech />*/}
            <div className="flex justify-center">
              <a
                href="#_"
                className="inline-flex items-center hover:scale-110 transition-all duration-500 bg-white border-solid border-2 border-black justify-center h-12 px-6 py-0 text-sm font-semibold text-center text-black no-underline align-middle ease-in-out rounded-full cursor-pointer select-none hover:border-black focus:shadow-xs focus:no-underline mt-2"
              >
                Start Connecting Today
              </a>
            </div>
            <p className=" lg:mt-4 mb-4 text-black">
              Download The App On Your <br /> SmartPhone
            </p>
            <div className="md:flex md:mx-auto lg:mx-0 justify-center items-center ">
              <div className="flex  w-48 h-14 border lg:mr-4 hover:bg-slate-900 cursor-pointer text-black rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    />
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    />
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    />
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </div>
              <div className="flex mt-3 w-48 h-14 border z-10 hover:bg-slate-900 cursor-pointer text-white rounded-lg items-center justify-center">
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="black"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-black">GET IT ON</div>
                  <div className="text-xl text-black font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full flex items-center justify-center md:w-1/2 w-5/6 bg-white overflow-hidden rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-205">
            <Image
              src={Logo}
              alt="hero"
              width={"100%"}
              // className="float-right block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
