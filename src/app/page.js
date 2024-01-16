"use client";
import Hero from "@/app/componets/hero/Hero";
import About from "@/app/componets/about/About";
import Connection from "@/app/componets/connection/Connection";
import Pricing from "@/app/componets/pricing/Pricing";
import Footer from "@/app/componets/footer/Footer";
import Header from "@/app/componets/header/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./context/AuthContext";
import Data from "@/app/componets/data/Data";

export default function Home() {
  // Logic For Login Or Registration
  // const router = useRouter();
  // const { setIsLoggedIn, isLoggedIn, login, logout } = useAuth();
  //
  //
  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       console.log("come from app page", isLoggedIn);
  //       router.push("/register");
  //     } else {
  //       router.push("/");
  //     }
  //   }, [isLoggedIn]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      {/* <Connection /> */}
      {/* <Pricing /> */}
      <Footer />
    </>
  );
}
