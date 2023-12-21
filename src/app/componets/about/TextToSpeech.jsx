import { useEffect, useState } from "react";
import SpeakerIcon from "./SpeakerIcon";

const TextToSpeech = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    setText(`water (the chemical symbol, as used in non-scientific contexts): 
ORIGIN

from H² (sense 2 of the symbol), chemical symbol for hydrogen, +2 + O² (symbol), chemical symbol for oxygen.`);
  }, []);

  const speak = async () => {
    if ("speechSynthesis" in window) {
      console.log("if");
      try {
        const synth = await window.speechSynthesis;
        const utterance = await new SpeechSynthesisUtterance(text);

        // Fetch the voices available on the user's system
        const voices = await synth.getVoices();
        console.log(voices);
        // Set the desired voice - you can change the index to select a different voice

        console.log("myVoice: ", voices[5]);
        utterance.voice = voices[5]; // Change the index to select a different voice

        await speechSynthesis.speak(utterance);
        console.log("utterance", utterance);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("else");
      console.error("Speech synthesis is not supported in this browser.");
      // Handle unsupported browser scenario
    }
  };

  return (
    <div className=" flex justify-left items-left bg-gray-100 mb-2">
      <div className="max-w-md px-4 md:px-8 bg-white ">
        <div className="font-serif text-lg md:text-xl text-left">
          <div className="flex items-center justify-center mt-0">
            <div className="ml-3 md:ml-4 cursor-pointer">
              <SpeakerIcon onClick={speak} style={{ cursor: "pointer" }} />
            </div>
          </div>
          <p className="mt-2 md:mt-4">
            Water (the chemical symbol, as used in non-scientific contexts):
          </p>
          <p className="mt-2 md:mt-4">
            <b>ORIGIN</b>
            <br />
            from H² (sense 2 of the symbol), chemical symbol for hydrogen, +2 +
            O² (symbol), chemical symbol for oxygen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
