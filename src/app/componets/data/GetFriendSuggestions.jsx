// pages/index.
"use client";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

const GetFriendSuggestions = () => {
  const { getToken } = useAuth();
  const [matchingUsers, setMatchingUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = getToken;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://h2-o-backend-2zkv.vercel.app/api/user/getFriendSuggestions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setMatchingUsers(data.matching_users);
        } else {
          const errorData = await response.json();
          setError(errorData.message);
        }
      } catch (error) {
        setError("Error during fetch: " + error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Matching Users</h2>
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {matchingUsers.map((user) => (
          <li
            key={user._id}
            className="my-4 p-4 border border-gray-300 rounded"
          >
            <p className="font-bold">Full Name: {user.full_name}</p>
            <p>Gender: {user.gender}</p>
            <p>Birth Date: {user.birth_date}</p>
            <p>Email: {user.email}</p>
            <p>Blood Type: {user.blood_type}</p>
            <p>Religion: {user.religion}</p>
            <p>Zodiac Sign: {user.zodiac_sign}</p>
            <p>Compatibility: {user.compatibility}%</p>

            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetFriendSuggestions;
