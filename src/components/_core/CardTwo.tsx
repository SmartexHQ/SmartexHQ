import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CardTwo = ({ gradient }: { gradient: string }) => {
  return (
    <div
      className={cn(
        gradient,
        "flex relative overflow-hidden justify-between  border  p-6 rounded-[24px] max-w-[678px] min-h-[250px] sm:min-h-[366px] w-full"
      )}
    >
      {/* Text Content */}
      <div className="mt-10">
        <h2 className="text-[34px] max-w-[248px font-bold text-gray-900">
          Seamless Energy Monitoring & Instant Recharge
        </h2>
      </div>

      {/* Image */}
      <div className="absolute bottom-[-80px] right-[-50px]">
        <Image
          src="/png/meter.png"
          height={200}
          width={200}
          alt="Device"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default CardTwo;
