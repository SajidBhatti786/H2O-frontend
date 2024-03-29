const SpeakerIcon = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      onClick={onClick}
      width="24" // Adjust the width of the SVG
      height="24" // Adjust the height of the SVG
    >
      <rect width="56" height="50" fill="none" />
      <path
        d="M218.9,77.1a71.9,71.9,0,0,1,0,101.8"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <line
        x1="80"
        y1="88"
        x2="80"
        y2="168"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
      <path
        d="M190.6,105.4a31.9,31.9,0,0,1,0,45.2"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      />
    </svg>
  );
};

export default SpeakerIcon;
