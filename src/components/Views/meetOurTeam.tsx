"use client";

import React from "react";

const MeetOurTeam: React.FC = () => {
  const teamMembers = Array(8).fill({
    name: "First Name Last Name",
    position: "POSITION",
    imageUrl:
      "https://cdn.sanity.io/images/7gucqrpj/production/3b88242dd5f3156ca90ab12e40222c188e545c4c-242x242.png",
  });

  return (
    <section className="w-full bg-[#FEB273] py-16 px-5 md:px-8 lg:px-12">
      <div className="container mx-auto text-center">
        {/* Heading Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1D2939]">
          Meet <span className="text-[#E4E7EC]">Our</span> Team
        </h2>
        <p className="text-[#1D2939] mt-4 max-w-full md:max-w-[80%] mx-auto text-base font-semibold">
          Our team of software engineers, analysts, and project managers brings
          innovation, speed, and creativity to every project.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-0 rounded-lg text-center">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full rounded-lg mb-4 object-cover h-48"
                loading="lazy"
              />
              <h3 className="font-bold text-gray-800">{member.name}</h3>
              <p className="text-black text-base font-normal">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
