import React from "react";
import Heart from "/public/assests/images/heart.png";
import Logo from "/public/assests/images/logo.png";
import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Icon from "/public/assests/images/h-icon.png";
const Hero = () => {
  return (
    <div
      className={"w-full md:px-8 px-2 lg:h-[88vh] pb-6  bg-[white] text-black"}
      id="home"
    >
      <section className="text-black body-font pt-10">
        <div className="container mx-auto flex lg:px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`${styles.title} title-font text-4xl md:text-2xl lg:text-5xl mb-4 font-bold text-black tracking-widest leading-loose`}
            >
              connecting people all over the world.
            </h1>
            <p className="mb-3  lg:inline  text-sm  leading-relaxed text-black">
              Connect with people worldwide through our Social App, unlocking
              the door to your heart's desire. Every connection becomes a
              potential story waiting to unfold. Join us in the quest for
              meaningful interactions and let the sparks fly, connecting people
              all over the world.
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="inline-flex items-center hover:scale-110 transition-all duration-500 bg-[white] border-solid border-2 border-black justify-center h-12 px-6 py-0 text-sm  font-semibold text-center text-black no-underline align-middle  ease-in-out   rounded-full cursor-pointer select-none  hover:border-black focus:shadow-xs focus:no-underline"
              >
                Start Connecting Today
              </a>
            </div>

            <p className={"mt-14 mb-4 hidden lg:inline text-black"}>
              Download The App On Your <br /> SmartPhone Right Now
            </p>
            <div className={"md:flex justify-center items-center hidden "}>
              <div className="flex mt-3 w-48 h-14 border mr-4 hover:bg-slate-900 cursor-pointer  text-black rounded-lg items-center justify-center">
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

              <div className="flex mt-3 w-48 h-14 border z-10 hover:bg-slate-900   cursor-pointer text-white rounded-lg items-center justify-center">
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
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-[white] overflow-hidden rounded-lg   transition duration-300 transform hover:-translate-y-1 hover:scale-205">
            <Image
              src={Logo}
              alt="hero"
              width={"100%"}
              className="mx-auto block"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
