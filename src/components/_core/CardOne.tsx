import Image from "next/image";
import React from "react";

const CardOne = () => {
  return (
    <div className="cardOne">
      {/* Text Content */}
      <div className="mt-10">
        <h2 className="text-[40px] max-w-[248px] font-bold text-gray-900">
          Smart Prepaid Metering for Total Control
        </h2>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 absolute sm:relative bottom-[-80px] sm:bottom-[unset] right-[-50px] sm:right-[unset]">
        <Image
          width={308}
          height={318}
          src="/png/meter.png"
          alt="Device"
          className="object-contain w-[200px] md:w-[250px] xl:w-[300px]"
        />
      </div>
    </div>
  );
};

export default CardOne;
