import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  description: string;
}
const CardFour = ({ title, description }: IProps) => {
  return (
    <div className={cn("cardFour-gradient cardFour")}>
      <div>
        <div className="text-center font-semibold">{title}</div>
        <div className="text-sm mt-2">{description}</div>
        <div className="flex-shrink-0">
          <Image
            width={150}
            height={200}
            src="/png/meter.png"
            alt="Device"
            className="object-contain w-[150px] sm:w-[unset] sm:translate-y-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CardFour;
