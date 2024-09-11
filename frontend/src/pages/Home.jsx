import React from "react";
import i1 from "../assets/images (5).jpeg";
import i2 from "../assets/images (6).jpeg";
import i3 from "../assets/images (7).jpeg";
import im1 from "../assets/group_discussion_meetingx3.svg";
import im2 from "../assets/sonogram.svg";
import im3 from "../assets/tooth.svg";
import AvatarWithText from "../components/AvatarWithText";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-full">
          <div className=" flex flex-col space-y-8 md:space-y-12 max-w-lg items-center md:items-start md:pl-12">
            <h1 className="text-darkGray text-center md:text-left text-4xl font-semibold font-serif">
              Welcome to MediMeet
            </h1>
            <p className="text-lightGray text-center md:text-left">
              MediMeet is a platform that connects healthcare professiona with
              patients. We aim to help patients find the right healthcare
              provider based on their needs, preferences, and location.
            </p>
            <button className="w-full transition transform hover:scale-105 text-white bg-purple focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              ABOUT US
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Carousel />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-16 mb-16 font-serif text-lg font-semibold text-center">
          Our Patients Have Access To Our Extensive Network Of Resources
        </div>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <AvatarWithText image={im1} text="GP & Family Medicine" />
          <AvatarWithText image={im2} text="Baby & Child Specialist" />
          <AvatarWithText image={im3} text="Dental Care" />
        </div>
      </div>
    </>
  );
};

export default Home;
