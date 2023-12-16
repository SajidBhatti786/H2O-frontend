"use client";
import { useState, useEffect } from "react";
import Event from "./Event";
import eventsData from "../../../../eventsData";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [events, setEvents] = useState([]); // State to store events

  useEffect(() => {
    const fetchData = () => {
      setEvents(eventsData);
    };

    fetchData();
  }, []);
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Events</h1>
      <input
        type="text"
        placeholder="Search events"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-3 rounded-md mb-8 w-full md:w-2/3 lg:w-1/2 mx-auto border-black"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchTerm !== "" ? (
          filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <Event key={index} event={event} />
            ))
          ) : (
            <p>No results found</p>
          )
        ) : (
          events.map((event, index) => <Event key={index} event={event} />)
        )}
      </div>
    </div>
  );
};

export default EventsPage;
