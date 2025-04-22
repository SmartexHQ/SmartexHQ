import React from "react";

const Services = () => {
  const services = [
    "Custom software development",
    "Cloud migration and hosting",
    "Cybersecurity solutions",
    "Mobile and web app design",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 md:px-8 lg:px-12 py-16 items-center">
      {/* Left Content */}
      <div className="md:w-1/2">
        {/* Title */}
        <h2 className="text-[32px] md:text-[44px] lg:text-[64px] font-bold">
          Metering Made Smarter{" "}
        </h2>

        {/* Service Highlights */}
        <div className="mt-4 grid gap-4">
          {services.map((service, i) => (
            <div key={i} className="flex gap-3 items-center">
              <img
                src="/svg/target.svg"
                alt="Service Icon"
                className="w-6 h-6"
              />
              <div
                className="text-gray-700"
                dangerouslySetInnerHTML={{ __html: service }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content (Image) */}
      <div className="flex-1">
        <img
          src="/png/Product.png"
          alt="service"
          className="animate-in object-cover rounded-xl shadow-lg w-full h-full"
        />
      </div>
    </div>
  );
};

export default Services;
