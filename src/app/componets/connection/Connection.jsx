import React from "react";
import styles from "@/app/styles/HeroSection.module.css";
import one from "/public/assests/images/1.png";
import two from "/public/assests/images/2.png";
import three from "/public/assests/images/3.png";
import four from "/public/assests/images/4.png";
import Image from "next/image";
const Connection = () => {
  return (
    <div className={"md:my-12 lg:my-3 py-8 mt-16"} id="service">
      <h4 className={`md:text-xl font-bold text-sm text-black text-center`}>
        How its works
      </h4>
      <h1
        className={`${styles.title} title-font text-3xl text-center lg:text-5xl mb-4 font-medium text-[#2a112a] tracking-widest md:leading-realxed`}
      >
        Unvelling the path to Meaningfull <br /> Connection
      </h1>

      <section className="text-gray-600 body-font">
        <div className="container lg:px-8 px-2 py-4 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2  md:w-full ">
              <div className="flex border-2 rounded-lg hover:bg-slate-100 cursor-pointer transition-all duration-500 border-gray-200 border-opacity-50 p-4 justify-center items-center flex-col">
                <div className="w-16 h-16  sm:mb-0  inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                  <Image src={one} />
                </div>
                <div className="flex-grow">
                  <h1
                    className={`${styles.title} title-font text-2xl text-center lg:text-2xl  my-4 font-medium text-[#2a112a] `}
                  >
                    Sign Up Now
                  </h1>
                  <p className="leading-relaxed text-sm text-center text-base">
                    Blue bottle crucifix vinyl post-ironic four poutineGastropub
                    indxgox poutineGastropub indxgo juice poutine Gastropub
                    indxgo juice poutine.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2  md:w-full">
              <div className="flex border-2 hover:bg-slate-100 cursor-pointer transition-all duration-500 rounded-lg border-gray-200 border-opacity-50 p-4 justify-center items-center flex-col">
                <div className="w-16 h-16  sm:mb-0  inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                  <Image src={two} />
                </div>
                <div className="flex-grow">
                  <h1
                    className={`${styles.title} title-font text-2xl text-center lg:text-2xl  my-4 font-medium text-[#2a112a] `}
                  >
                    Create Your Profile
                  </h1>
                  <p className="leading-relaxed text-sm text-center text-base">
                    Blue bottle crucifix vinyl post-ironic four poutineGastropub
                    indxgox poutineGastropub indxgo juice poutine Gastropub
                    indxgo juice poutine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-4 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2  md:w-full">
              <div className="flex border-2 hover:bg-slate-100 cursor-pointer transition-all duration-500 rounded-lg border-gray-200 border-opacity-50 p-4 justify-center items-center flex-col">
                <div className="w-16 h-16  sm:mb-0  inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                  <Image src={three} />
                </div>
                <div className="flex-grow">
                  <h1
                    className={`${styles.title} title-font text-2xl text-center lg:text-2xl  my-4 font-medium text-[#2a112a] `}
                  >
                    Browse and Match
                  </h1>
                  <p className="leading-relaxed text-sm text-center text-base">
                    Blue bottle crucifix vinyl post-ironic four poutineGastropub
                    indxgox poutineGastropub indxgo juice poutine Gastropub
                    indxgo juice poutine.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/2  md:w-full">
              <div className="flex border-2 hover:bg-slate-100 cursor-pointer transition-all duration-500 rounded-lg border-gray-200 border-opacity-50 p-4 justify-center items-center flex-col">
                <div className="w-16 h-16  sm:mb-0  inline-flex items-center justify-center rounded-full  text-indigo-500 flex-shrink-0">
                  <Image src={four} />
                </div>
                <div className="flex-grow">
                  <h1
                    className={`${styles.title} title-font text-2xl text-center lg:text-2xl  my-4 font-medium text-[#2a112a] `}
                  >
                    Initiate Conversection
                  </h1>
                  <p className="leading-relaxed text-sm text-center text-base">
                    Blue bottle crucifix vinyl post-ironic four poutineGastropub
                    indxgox poutineGastropub indxgo juice poutine Gastropub
                    indxgo juice poutine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Connection;
