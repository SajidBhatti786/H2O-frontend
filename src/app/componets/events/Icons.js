const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
  >
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="4" y1="2" x2="4" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="12" y1="2" x2="12" y2="6" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 1a5 5 0 00-5 5c0 3.64 5 10 5 10s5-6.36 5-10a5 5 0 00-5-5zm0 7a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
export { CalendarIcon, LocationIcon };
