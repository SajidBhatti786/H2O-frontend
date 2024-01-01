"use client";
import React, { useState } from "react";
import Image from "next/image";
import img from "../../../public/assests/images/login.jpg";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../API";

console.log(BASE_URL);
const Page = () => {
  const {
    isLoggedIn,
    setIsLoggedIn,
    getToken,
    setGetToken,
    userData,
    setUserData,
  } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Successful login
        // setError(null); // Clear any previous errors
        // console.log("Login successful", response.data);
        setIsLoggedIn(true);
        const responseData = await response.json();
        console.log(responseData);
        const token = responseData.data;
        setGetToken(token);
        setUserData(responseData.user);
        setError(null);
        toast.success("Login Successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("user", responseData.user);
        localStorage.setItem("token", responseData.token);
        if (responseData.user.role == "admin") {
          router.push("../componets/admin/index");
        } else if (responseData.user.role == "user") {
          router.push("../componets/events");
        } else {
          router.push("/");
        }
        // router.push("/welcome");
      } else {
        // Handle different HTTP status codes and display meaningful error messages
        switch (response.status) {
          case 400:
            setError("Both username and password are required");
            toast.error("Both username and password are required", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            break;
          case 401:
            setError("Invalid username or password");
            toast.error("Invalid username or password", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            break;
          case 404:
            setError("User not found");
            toast.error("User not found", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            break;
          default:
            setError("An error occurred. Please try again later.");
            toast.error("An error occurred. Please try again later.", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-w-screen min-h-screen  bg-[white] flex items-center justify-center px-5 py-5">
      <div
        className="bg-gray-700 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden text-white"
        style={{ maxWidth: 1000 }}
      >
        <div className="md:flex w-full">
          <div className="hidden md:flex iteams-center justify-center  w-1/2 bg-gray-700 py-10 px-10">
            <Image src={img} alt={"Pic"} />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-gray-700">
            <div className="text-center mb-10">
              <h1 className="font-bold text-3xl text-white">LOGIN</h1>
              <p className="text-white">Enter your information to Login</p>
            </div>
            <div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-email-outline text-gray-400 text-lg" />
                    </div>
                    <input
                      type="email"
                      className="w-full -ml-10 pl-10 pr-3 py-2 text-black rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="johnsmith@example.com"
                      name="username"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-12">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Password
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-lock-outline text-gray-400 text-lg" />
                    </div>
                    <input
                      type="password"
                      className="w-full text-black  -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Password "
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    onClick={handleLogin}
                    className="block w-full max-w-xs mx-auto bg-[black] hover:scale-110 transition-all duration-500  text-white rounded-full px-3 py-3 font-semibold"
                  >
                    Login
                  </button>
                </div>
              </div>
              <p className={"text-[white] "}>
                Don't have an account{" "}
                <a href={"/register"} className={"font-semibold underline"}>
                  Sign Up
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Page;
