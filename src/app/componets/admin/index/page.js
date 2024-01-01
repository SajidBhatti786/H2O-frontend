"use client";
import { useState } from "react";

import Navbar from "../components/navbar/page";
const SidebarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen bg-gray-200">
        {/* Sidebar for large screens */}
        <aside
          className={`bg-gray-800 text-gray-100 w-64 min-h-full overflow-y-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h1 className="text-xl font-bold">Sidebar</h1>
            <button
              className="block md:hidden focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className="p-4">
            <ul>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  My Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Add Event
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Update Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Calendar
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Mobile sidebar */}
        <aside
          className={`bg-gray-800 text-gray-100 w-full min-h-full overflow-y-auto ${
            isOpen ? "block" : "hidden"
          } md:hidden fixed top-0 left-0 z-50`}
        >
          {/* ... (your mobile sidebar content) */}
          <h1 className="text-3xl font-bold mb-4">Sidebar</h1>
          <div className="md:hidden fixed bottom-4 right-4">
            <button
              onClick={toggleSidebar}
              style={{ zIndex: 999999 }}
              className="bg-red text-yellow p-3 rounded-full focus:outline-none"
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path
                  d={isOpen ? "M9 6L15 12 9 18" : "M5 4h14M5 12h14M5 20h14"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <nav className="p-4">
            <ul>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  My Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Add Event
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Update Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 hover:bg-gray-700 rounded">
                  Calendar
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content area */}
        <main className="flex-1 p-4">
          {/* Dummy content */}
          <h1 className="text-3xl font-bold mb-4">Main Content</h1>
          <p className="text-gray-700">
            This is some dummy content. Replace this with your actual content.
          </p>
        </main>

        {/* Mobile sidebar toggler */}
        <div className="md:hidden fixed bottom-4 right-4">
          <button
            onClick={toggleSidebar}
            style={{ zIndex: 999999 }}
            className="bg-red text-yellow p-3 rounded-full focus:outline-none"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path
                d={isOpen ? "M9 6L15 12 9 18" : "M5 4h14M5 12h14M5 20h14"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarComponent;
