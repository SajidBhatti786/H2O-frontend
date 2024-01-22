"use client";
import React, { useState } from "react";
import img from "/public/assests/images/signup.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "@mdi/react";
import {
  mdiAccount,
  mdiWater,
  mdiZodiacLibra,
  mdiGenderFemale,
  mdiCross,
  mdiCalendarRange,
  mdiEmailOutline,
  mdiLock,
} from "@mdi/js";
const Page = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    full_name: "",
    gender: "",
    blood_type: "",
    rh_factor: "",
    religion: "",
    zodiac_sign: "",
    birth_date: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the change is coming from the "birth_date" field
    if (name === "birth_date") {
      // Remove non-digit characters from the value
      const numericValue = value.replace(/\D/g, "");

      // Check if the value is not empty
      if (numericValue.length > 0) {
        // Format the date with slashes based on expected format (dd/mm/yyyy)
        const formattedDate = [
          numericValue.slice(0, 2),
          numericValue.slice(2, 4),
          numericValue.slice(4, 8),
        ]
          .filter(Boolean)
          .join("/");

        setFormData({
          ...formData,
          [name]: formattedDate,
        });
      } else {
        // If the value is empty, update the state with an empty string
        setFormData({
          ...formData,
          [name]: "",
        });
      }
    } else {
      // If the change is not from the "birth_date" field, update the state normally
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    var response;
    let blood = formData.blood_type + formData.rh_factor;
    try {
      response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          gender: formData.gender,
          blood_type: blood,
          religion: formData.religion,
          zodiac_sign: formData.zodiac_sign,
          birth_date: formData.birth_date,
          email: formData.email,
          password: formData.password,
        }),
      });
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.status === 400) {
          // Handle specific error cases
          if (errorData.message === "User already exists") {
            toast.error("User with this email already exists");
          } else if (errorData.message === "Username already exists") {
            toast.error("Username already exists");
          } else {
            // Handle other specific error cases if needed
            toast.error("Failed to register user");
          }
        } else if (errorData.status === "error") {
          toast.error("Format issue");
        } else {
          toast.error("Failed to register user");
        }
      } else {
        const data = await response.json();
        console.log(data);
        toast.success("User registered successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.log("User registered successfully");
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Failed to register user");
    }
  };

  return (
    <div className="min-w-screen min-h-screen  bg-[white] flex items-center justify-center px-5 py-5">
      <div
        className="bg-black  text-white rounded-3xl shadow-xl w-full overflow-hidden"
        style={{ maxWidth: 1000 }}
      >
        <div className="md:flex w-full">
          <div
            className="hidden  lg:block lg:flex lg:justify-center  w-1/2 bg-black py-10 px-10"
            // style={{
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "center",
            // }}
          >
            <Image src={img} width={500} height={500} alt={"Pic"} />
          </div>
          <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className="text-center mb-10 text-white">
              <h1 className="font-bold text-3xl text-white">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <div>
              {/* <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Full name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiAccount}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="John Smith"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Blood Type
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiWater}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="A+"
                      name="blood_type"
                      value={formData.blood_type}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div> */}
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Full Name
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiAccount}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="John Smith"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* writting blood type and rh type seperately */}
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Blood Type
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiWater}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="A"
                      name="blood_type"
                      value={formData.blood_type}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Rh Factor
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiWater}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="+"
                      name="rh_factor"
                      value={formData.rh_factor}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* {Adding new fields gender and zodiac sign} */}
              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    zodiac Sign
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiZodiacLibra}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="Taurus"
                      name="zodiac_sign"
                      value={formData.zodiac_sign}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Gender
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiGenderFemale}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="eg. Male"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* {Added new fields gender and zodiac sign} */}

              <div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Religion
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiCross}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="Christianity"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Birth Day
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiCalendarRange}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="dd/mm/yy"
                      name="birth_date"
                      value={formData.birth_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <ToastContainer />
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="" className="text-xs font-semibold px-1">
                    Email
                  </label>
                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <Icon
                        path={mdiEmailOutline}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="email"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="johnsmith@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      <Icon
                        path={mdiLock}
                        title="User Profile"
                        size={1}
                        color="black"
                      />
                    </div>
                    <input
                      type="password"
                      className="w-full text-black -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-white-500"
                      placeholder="************"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <button
                    onClick={handleSubmit}
                    className="block w-full max-w-xs mx-auto bg-[white] hover:scale-110 transition-all duration-500  text-black rounded-full px-3 py-3 font-semibold"
                  >
                    Login
                  </button>
                </div>
              </div>
              <p className={"text-[white]  "}>
                Already have an account{" "}
                <a href={"/login"} className={"font-semibold underline"}>
                  Sign In
                </a>
                {error && <p className="error-message">{error}</p>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
