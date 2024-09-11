import React from "react";
import logo from "../assets/kidney.png";

const ServiceCard = ({ serviceImage, service, description }) => {
  return (
    <div className="max-w-xs mx-auto">
      <div className="shadow-md h-full rounded-lg max-w-sm overflow-hidden">
        <div className="flex justify-center mt-4">
          <div className="flex items-center justify-center">
            <img
              className="w-24 h-24 object-contain"
              src={serviceImage}
              alt="Service Logo"
            />
          </div>
        </div>
        <div className="p-6">
          <h5 className="font-bold text-2xl tracking-tight mb-3">{service}</h5>
          <p className="font-normal text-lightGray mb-4">{description}</p>
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

export default ServiceCard;
