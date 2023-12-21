"use client";
import { useState, useEffect } from "react";
import Event from "./Event";
import eventsData from "../../../../eventsData";
import { SearchIcon } from "./Icons";
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
      <div className="relative mb-8 w-full md:w-2/3 lg:w-1/2 mx-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="p-5" />
        </div>
        <input
          type="text"
          placeholder="Search events"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-3 pl-10 rounded-md w-full border-black focus:outline-none"
        />
      </div>
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
