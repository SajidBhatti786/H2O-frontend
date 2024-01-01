"use client";
import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const eventsFromLocalStorage =
      JSON.parse(localStorage.getItem("events")) || [];
    setCurrentEvents(eventsFromLocalStorage);
  }, []);

  const saveEventsToLocalStorage = (events) => {
    localStorage.setItem("events", JSON.stringify(events));
  };

  const handleDateClick = (selected) => {
    const title = prompt("Kindly Enter Event Title:");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };

      setCurrentEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        saveEventsToLocalStorage(updatedEvents);
        return updatedEvents;
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete this event '${selected.event.title}'?`
      )
    ) {
      setCurrentEvents((prevEvents) => {
        const updatedEvents = prevEvents.filter(
          (event) => event.id !== selected.event.id
        );
        saveEventsToLocalStorage(updatedEvents);
        return updatedEvents;
      });
    }
  };

  const handleEventDrop = (info) => {
    const updatedEvents = currentEvents.map((event) => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.startStr,
          end: info.event.endStr,
        };
      }
      return event;
    });

    setCurrentEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  return (
    <div className="m-2 md:flex">
      {/* Events sidebar */}
      <div className="flex-1 md:w-1/5 bg-blue-400 rounded-md p-4 m-2 md:m-0">
        <h2 className="text-xl font-semibold">Events</h2>
        <ul className="mt-2">
          {currentEvents.length === 0 ? (
            <p className="text-gray-800">No Events</p>
          ) : (
            currentEvents.map((event) => (
              <li
                key={event.id}
                className="bg-green-300  w-45 rounded-md p-2 my-2"
              >
                <p className="font-semibold">{event.title}</p>
                <p className="text-sm">
                  {new Date(event.start).toLocaleDateString()}
                </p>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Calendar */}
      <div className="flex-1 md:w-4/5 bg-white rounded-md p-4 m-2 md:m-0">
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          events={currentEvents}
          eventDrop={handleEventDrop}
        />
      </div>
    </div>
  );
}
