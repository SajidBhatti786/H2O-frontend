import React from "react";
import { CalendarIcon, LocationIcon } from "./Icons"; // Import your calendar and location icon components
import Link from "next/link";

const Event = ({ event }) => {
  const { id = 4, title, description, image, place, time } = event;

  return (
    <div className="relative border m-2 rounded-md overflow-hidden hover:cursor-pointer">
      <div className="h-40 md:h-60 bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105">
        <img
          src={image} // Replace 'event.image' with the actual image URL
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-0 left-0 w-full p-4">
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2 text-center">
            {title}
          </h3>
          <div className="flex items-center text-white mb-2 font-semibold">
            <CalendarIcon className="w-5 h-5 mr-1" />
            <span>{new Date(time).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-white mb-4 font-semibold">
            <LocationIcon className="w-5 h-5 mr-1" />
            <span>{place}</span>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-4 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          {/* <p className="text-white text-sm md:text-base text-center font-semibold">
            {description}
          </p> */}
          <Link href={`/componets/events/eventDetails/${id}`}>
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-full transition-opacity duration-300 ease-in-out mt-6 self-bottom"
              onClick={() => console.log("View Details clicked")} // Add your functionality here
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Event;
