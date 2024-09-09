import React from "react";

const AvatarWithText = ({ image, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center h-52 w-40">
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

export default AvatarWithText;
