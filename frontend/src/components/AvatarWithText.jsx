import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AvatarWithText = ({ description, text }) => {
  return (
    <div className="border-blue rounded-md border-2 p-4 flex flex-col items-center w-full md:w-80 lg:w-1/3 h-auto md:h-[100px] lg:h-[200px] mx-auto">
      <div className="text-darkGray text-center font-semibold text-base md:text-lg mb-2">
        {text}
      </div>
      <div className="text-lightGray text-center mb-4 overflow-hidden flex-grow">
        {description}
      </div>
      <button className="transition transform hover:scale-105 hover:bg-skyBlue bg-blue text-white focus:ring-4 focus:ring-blue font-medium rounded-full p-3 text-center inline-flex items-center">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default AvatarWithText;
