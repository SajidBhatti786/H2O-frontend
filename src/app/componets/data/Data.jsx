"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import Navbar from "@/app/welcome/Navbar";
function UserData() {
  const { getToken } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = getToken;
    console.log(token);
    // Fetch user data with the token
    fetch("https://h2-o-backend-2zkv.vercel.app/api/user/getUserData", {
      method: "GET",
      headers: {
        Authorization: token, // Send the token as an authorization header
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Authorized");
          return response.json();
        } else {
          throw new Error("Unauthorized");
        }
      })
      .then((data) => {
        console.log("got the data");
        console.log(data.user);
        setUserData(data.user);
      })
      .catch((error) => {
        console.error("User data fetch error:", error);
      });
  }, []);

  const formatBirthDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.hailhost.com/wp-content/uploads/2018/07/hailhost-care.png"
                  alt="pic"
                  className="w-64 rounded-md shadow-2xl"
                />
              </div>
              <div className="text-white">
                {userData ? (
                  <div>
                    <p className="text-4xl font-bold">
                      Welcome {userData.full_name}!👋
                    </p>
                    <hr className="hr-text my-4" />
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-xl">
                        <p>
                          <span className="font-bold">Name:</span>{" "}
                          {userData.full_name}
                        </p>
                        <p>
                          <span className="font-bold">Blood Group:</span>{" "}
                          {userData.blood_type}
                        </p>
                        <p>
                          <span className="font-bold">Religion:</span>{" "}
                          {userData.religion}
                        </p>
                        <p>
                          <span className="font-bold">Zodaic Sign:</span>{" "}
                          {userData.zodiac_sign}
                        </p>
                        <p>
                          <span className="font-bold">Gender:</span>{" "}
                          {userData.gender}
                        </p>
                        <p>
                          <span className="font-bold">Birth Day:</span>{" "}
                          {formatBirthDate(userData.birth_date)}
                        </p>
                        <p>
                          <span className="font-bold">Email:</span>{" "}
                          {userData.email}
                        </p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <Link href="/" passHref>
                          <p className="btn-primary">Visit Home Page</p>
                        </Link>
                        <Link href="/login" passHref>
                          <p className="btn-primary">Logout</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-white">
                    Loading...
                    <svg
                      className="animate-spin h-8 w-8 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserData;
