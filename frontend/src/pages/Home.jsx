import React from "react";
import AvatarWithText from "../components/AvatarWithText";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <div className="py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-full">
          <div className="flex flex-col space-y-6 md:space-y-12 max-w-lg md:max-w-md lg:max-w-lg items-center md:items-start md:pl-12">
            <h1 className="text-darkGray text-center md:text-left text-2xl md:text-4xl font-semibold">
              Welcome to MediMeet
            </h1>
            <p className="text-lightGray text-center md:text-left text-base md:text-lg">
              MediMeet is a platform that connects healthcare professionals with
              patients. We aim to help patients find the right healthcare
              provider based on their needs, preferences, and location.
            </p>
            <button className="w-full transition transform hover:scale-105 text-white bg-purple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 md:px-6 md:py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ABOUT US
            </button>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 md:mt-0">
            <Carousel />
          </div>
        </div>
      </div>

      <div className="py-8 px-4 md:px-8 lg:px-24">
        <div className="text-center mb-12">
          <h2 className=" text-2xl font-bold mb-4">
            Find and Book Your Doctor
          </h2>
          <p className="text-lightGray leading-relaxed text-lg md:text-md italic">
            Discover and schedule appointments with top healthcare professionals
            who meet your needs.
          </p>
        </div>

        <div className="gap-y-4 flex flex-col md:flex-row justify-center items-center">
          <AvatarWithText
            text="Book an Appointment"
            description="Easily schedule your visit with our user-friendly booking system. Select a time that works for you, and we'll handle the rest."
          />
          <AvatarWithText
            text="Find a Doctor"
            description="Search for qualified healthcare professionals by specialty and location to find the right doctor for your needs."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
