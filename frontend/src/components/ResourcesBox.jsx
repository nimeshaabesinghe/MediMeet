import React from "react";

const ResourcesBox = ({ image, text }) => {
  return (
    <div className="bg-cyan rounded-lg shadow-lg p-4 flex flex-col items-center h-52 w-36">
      <div className="mb-4">
        <img
          src={image}
          alt={text}
          className="w-24 h-24 object-cover rounded-full border-2 border-darkGray"
        />
      </div>
      <div className="text-darkGray text-center font-semibold text-lg">
        {text}
      </div>
    </div>
  );
};

export default ResourcesBox;
