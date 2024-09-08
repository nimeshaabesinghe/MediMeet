import React from "react";
import i1 from "../assets/images (5).jpeg";
import i2 from "../assets/images (6).jpeg";
import i3 from "../assets/images (7).jpeg";
import im1 from "../assets/group_discussion_meetingx3.svg";
import im2 from "../assets/sonogram.svg";
import im3 from "../assets/tooth.svg";
import ResourcesBox from "../components/ResourcesBox";
const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-purple via-cyan to-white p-6 bg-gray-50 mt-4">
        <h1 className="text-center text-4xl mb-6 font-semibold font-serif">
          " Welcome to MediMeet "
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center mb-16 mt-16">
          <div className="text-lightGray flex flex-col space-y-12 m-12 max-w-lg">
            <p>
              MediMeet is a platform that connects healthcare professionals with
              patients. We aim to help patients find the right healthcare
              provider based on their needs, preferences, and location.
            </p>
            <button className="p-4 transition-transform hover:scale-105 font-semibold shadow-md ease-in duration-300 bg-purple rounded text-white">
              ABOUT US
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mt-6 md:mt-0">
            <div>
              <img
                src={i1}
                alt="i1"
                className="w-40 h-40 object-cover mb-4 rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-4">
              <img
                src={i2}
                alt="i1"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src={i3}
                alt="i3"
                className="w-40 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 mb-8 font-serif text-lg font-semibold text-center">
          Our Patients Have Access To Our Extensive Network Of Resources
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <ResourcesBox image={im1} text="GP & Family Medicine" />
          <ResourcesBox image={im2} text="Baby, Child Specialist" />
          <ResourcesBox image={im3} text="Dental Care" />
        </div>
      </div>
    </>
  );
};

export default Home;
