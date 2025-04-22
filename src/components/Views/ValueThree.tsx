import React from "react";

const ValueThree = ({
  title,
  description,
  imageUrl,
  reverse = false,
}: {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row items-center gap-10 px-5 md:px-8 lg:px-12 py-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Image Section */}
      <div className="flex w-full gap-2 sm:gap-5">
        <img src={imageUrl} alt="Descriptive Alt Text" className="w-full" />
      </div>

      {/* Text Section */}
      <div className="w-full sm:mt-10">
        <h2 className="text-[64px] md:text-[44px] lg:text-[64px] font-bold">
          {title}
        </h2>
        <div className="text-sm sm:text-base font-normal mt-4 text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ValueThree;
