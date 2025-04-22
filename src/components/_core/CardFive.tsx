import React from "react";

const CardFive = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <img
        src={imageUrl}
        alt="image here"
        className="transition-transform duration-300 ease-in-out hover:scale-105 w-[300px] h-[300px] object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default CardFive;
