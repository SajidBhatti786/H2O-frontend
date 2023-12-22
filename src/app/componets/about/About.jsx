import React from "react";
import about from "/public/assests/images/about.png";
import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Logo from "/public/assests/images/logo.png";
import CLogo from "/public/assests/images/c-logo.png";
import linee from "/public/assests/images/line2.png";
import Icon from "/public/assests/images/h-icon.png";
import chat from "/public/assests/images/chat.jpg";
import algorithms from "/public/assests/images/algorithums.jpg";
import profile from "/public/assests/images/rich-profile.jpg";
import clock from "/public/assests/images/clock.png";
import Link from "next/link";
import TextToSpeech from "./TextToSpeech";
import ComingSoon from "../comingSoon/page";

const About = () => {
  return (
    <div className={"w-full   pt-20     bg-[black]"} id="about">
      <section className="text-[#2a112a] lg:px-8 lg:py-8 bg-white body-font pt-1">
        <div className="lg:flex-grow md:w-full  flex flex-col mb-10 md:items-center md:text-center   items-center text-center">
          <h4
            className={`text-sm md:text-xl lg:text-xl font-bold text-black-600`}
          >
            About Us
          </h4>
          <h1
            className={`${styles.title} title-font text-3xl lg:text-5xl mb-4 font-bold text-[black] `}
            style={{ lineHeight: "1.4", letterSpacing: "1.2px" }}
          >
            connect with the best
          </h1>

          <div className="flex justify-center">
            <Link href="/componets/events">
              <button className="inline-flex items-center hover:scale-110 transition-all duration-500 bg-[white] justify-center h-12 px-6 py-6 text-sm font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out rounded-full cursor-pointer select-none hover:text-black hover:border-black text-black border-solid border-2 border-black focus:shadow-xs focus:no-underline">
                Open Event Page
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white container mx-auto flex   md:flex-row flex-col items-center justify-center">
          <div className="lg:max-w-lg lg:w-full   w-full lg:flex justify-center items-center relative ">
            {/*  Animation */}
            {/*<div*/}
            {/*  className={*/}
            {/*    " mx-auto cursor-pointer h-[350px] w-[350px] rounded-full border border-stone-400 md:w-[450px] lg:w-[full] md:h-[450px] lg:h-[450px] ustify-center items-center"*/}
            {/*  }*/}
            {/*>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-red-300 h-4 w-4  absolute left-0 top-40 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-red-300 h-4 w-4  absolute left-40 top-40 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-red-300 h-2 w-2  absolute right-0 top-10 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-red-300 h-2 w-2  absolute right-15 top-48 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-red-300 h-4 w-4  absolute right-40 bottom-10 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-stone-200 h-4 w-4  absolute right-40 bottom-10 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-stone-200 h-4 w-4  absolute left-10 top-40 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-stone-200 h-4 w-4  absolute right-40 top-36 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <span*/}
            {/*    className={*/}
            {/*      "bg-stone-200 h-4 w-4  absolute right-40 top-10 rounded-full"*/}
            {/*    }*/}
            {/*  ></span>*/}
            {/*  <div className="inline-flex items-center absolute  top-12 left-10 justify-center w-16 h-16 p-2 text-xl text-white bg-white rounded-full">*/}
            {/*    <Image src={Icon} alt={"Heart Icon"} />*/}
            {/*  </div>*/}
            {/*  <img*/}
            {/*    className="inline-block cursor-pointer rounded-full ring ring-white w-16 h-16 absolute  top-12 right-10"*/}
            {/*    src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg"*/}
            {/*  />*/}
            {/*  <div className="inline-flex cursor-pointer items-center absolute  bottom-12 right-10  justify-center w-16 h-16 p-2 text-xl text-white bg-white rounded-full">*/}
            {/*    {" "}*/}
            {/*    <Image src={Icon} alt={"Heart Icon"} />*/}
            {/*  </div>*/}
            {/*  <img*/}
            {/*    className="inline-block cursor-pointer rounded-full ring ring-white w-16 h-16 absolute  bottom-12 left-10"*/}
            {/*    src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg"*/}
            {/*  />*/}
            {/*</div>*/}
            <div className="">
              <Image src={clock} />
            </div>
            <div className=" bg-dark circle cursor-pointer h-[150px] w-[150px] md:w-[300px] md:h-[300px] lg:h-[100px] lg:w-[180px]">
              <Image
                className={"w-full cursor-pointer line"}
                src={linee}
                alt={"line"}
              />
            </div>
            <div className="sun h-[50px] w-[50px] ">
              <div className="earth"></div>
              <div className={"earth2 text-blue-400 relative "}></div>
            </div>
            <div
              className={
                "pic h-[80px] w-[70px] md:w-[100px] md:h-[100px] lg:h-[80px] lg:w-[80px]  "
              }
            >
              <Image src={Logo} alt={"logo"} />
            </div>
          </div>
        </div>
      </section>

      <section className="text-white md:mt-8 body-font bg-[black] py-4">
        <div className="container mx-auto flex lg:px-5 px-2 pt-2   md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="algorithem Pic"
              src={algorithms}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center ">
            <h1
              className={`${styles.title} title-font text-3xl lg:text-5xl mb-4 font-bold text-[white] tracking-widest md:leading-realxed`}
            >
              connecting wholesalers with retailers, to offer the best
              customer experience!
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-justify">
              Experience the future of matchmaking with our Advanced Matching
              Algorithms – where every connection is a carefully curated
              masterpiece. Our cutting-edge technology ensures compatibility
              beyond surface impressions, crafting meaningful relationships with
              precision. Step into a realm where love meets innovation, and let
              our algorithms pave the way for your perfect match.
            </p>
            <div className="flex justify-center">
              <Link href="https://sajidbhatti786.github.io/Ecommerce-website">
                <button
                  // href="http://www.myshink.shop.com"
                  // target="_blank"
                  className="inline-flex items-center hover:scale-110 transition-all duration-500 bg-[black] justify-center h-12 px-6 py-0 text-sm font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out    rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline border-solid border-2 border-white text-white"
                >
                  Connect Wholesalers & Retailers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-black body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className={`${styles.title} title-font text-3xl lg:text-5xl mb-4 font-bold text-[black] tracking-widest md:leading-realxed`}
            >
              Rich Profile Customiztion
            </h1>
            <p className="mb-8 leading-relaxed">
              "Elevate your online presence with rich profile customization that
              goes beyond the basics. Tailor your profile to reflect the true
              essence of who you are, with features allowing you to showcase
              your personality, passions, and preferences in vivid detail. Our
              platform empowers you to stand out effortlessly, ensuring your
              profile is a true reflection of the unique individual you are.
              Experience the freedom to express yourself authentically,
              attracting connections that appreciate the depth of your
              character.
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="inline-flex items-center bg-[white] text-black justify-center  hover:scale-110 transition-all duration-500 h-12 px-6 py-0 text-sm font-semibold text-center no-underline align-middle transition-all duration-300 ease-in-out    rounded-full cursor-pointer select-none hover:text-black hover:border-black focus:shadow-xs focus:no-underline border-solid border-2 border-black"
              >
                Create Your Profile
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="rich profile"
              src={profile}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font lg:py-8">
        <div className="container mx-auto flex lg:px-5 px-2 py-2  md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="chat-img"
              src={chat}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className={`${styles.title} title-font text-3xl lg:text-5xl mb-4 font-bold text-[white] tracking-widest md:leading-realxed`}
            >
              Real Time Chat and <br /> Messaging
            </h1>
            <p className="mb-8 text-sm leading-relaxed text-justify text-white">
              Engage in seamless and real-time connections with our dynamic chat
              and messaging features. Break down communication barriers
              effortlessly as you connect with potential matches instantly.
              Elevate your conversations, fostering a genuine connection that
              evolves in real-time, bringing your relationships to life on our
              vibrant platform
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="inline-flex items-center hover:scale-110 transition-all duration-500 bg-[black] justify-center h-12 px-6 py-0 text-sm font-semibold text-center text-white no-underline align-middle transition-all duration-300 ease-in-out    rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline border-solid border-2 border-white"
              >
                Meet Your Soulmate
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
