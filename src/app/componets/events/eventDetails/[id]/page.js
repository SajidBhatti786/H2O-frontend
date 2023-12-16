// Import necessary icons for calendar and location if required
"use client";
import React from "react";
import { CalendarIcon, LocationIcon } from "../../Icons";
import eventsData from "../../../../../../eventsData";
const EventDetails = ({ params }) => {
  let { id } = params;
  id = parseInt(id);
  let event = eventsData[id - 1]; // Fetch the event details based on the ID
  console.log(event);
  return (
    <div className="container mx-auto p-4">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          className="w-full h-64 object-cover object-center"
          src={event.image}
          alt={event.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            {event.title}
          </h2>
          <p className="text-gray-600 mt-2">{event.description}</p>
          <div className="flex items-center text-gray-700 mt-4">
            <CalendarIcon className="w-5 h-5 mr-2" />
            <p>{new Date(event.time).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center text-gray-700 mt-2">
            <LocationIcon className="w-5 h-5 mr-2" />
            <p>{event.place}</p>
          </div>
          <div className="flex items-center text-gray-700 mt-2">
            <p>
              <strong>Duration:</strong> {event.duration}
            </p>
          </div>
          <div className="flex items-center text-gray-700 mt-2">
            <p>
              <strong>Ticket Price:</strong> {event.ticketPrice}
            </p>
          </div>
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
