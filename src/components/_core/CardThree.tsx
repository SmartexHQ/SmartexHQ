import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CardFour = ({ gradient }: { gradient: string }) => {
  return (
    <div
      className={cn(
        gradient,
        "relative overflow-hidden border p-3 sm:p-6 rounded-[24px] max-w-[678px] min-h-[450px] sm:min-h-[500px] w-full"
      )}
    >
      {/* Text Content */}
      <div className="mt-10">
        <h2 className="text-[24px] sm:text-[32px] sm:max-w-[300px] font-bold text-gray-900">
          Effortless Energy Management at Your Fingertips
        </h2>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 absolute sm:relative bottom-[-80px] sm:bottom-[unset] right-[-100px] sm:right-[unset]">
        <Image
          src="/png/meter.png"
          height={300}
          width={300}
          alt="Susej Smart Meter"
          className="object-contain mt-20"
        />
      </div>
    </div>
  );
};

export default CardFour;
