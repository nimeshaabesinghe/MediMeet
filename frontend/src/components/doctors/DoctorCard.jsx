import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const DoctorCard = ({ doctor }) => {
  const { name, specialty, avgRating, totalRating, photo, totalPatients } =
    doctor;
  return (
    <div className="max-w-44 mx-auto">
      <div className="shadow-md h-full overflow-hidden rounded-lg">
        <div className="flex justify-center mt-3">
          <img className="object-contain" src={photo} alt="doctor image" />
        </div>
        <div className="p-6">
          <h5 className="font-bold text-xl tracking-tight mb-3">{name}</h5>
          <div className="flex justify-between">
            <p className="font-normal text-lightGray mb-4">{specialty}</p>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-[#FFD700]" />
              <span className="ml-2">{avgRating}</span>
            </div>
          </div>
          <button className="transition transform hover:scale-105 hover:text-white hover:bg-skyBlue bg-blue text-white focus:ring-4 focus:ring-blue font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center">
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
